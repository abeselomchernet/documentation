"use client";
import React, { useState } from "react";

const MODES = [
  { key: "analytics", label: "Analytics & Strategy" },
  { key: "data", label: "Data & Verification" },
  { key: "protocol", label: "System Protocol" },
];

export default function CoPilotInterface() {
  const [mode, setMode] = useState<string>(MODES[0].key);
  const [input, setInput] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");
    // Simulate AI Co-Pilot response
    setTimeout(() => {
      setOutput(`Mode: ${mode}\nInput: ${input}\nFiles: ${files.length} attached\n\n[Simulated AI Co-Pilot response: analysis, report, or action completed.]`);
      setLoading(false);
    }, 1200);
  };

  return (
  <div style={{ maxWidth: 540, margin: "0 auto", padding: 32, background: "var(--card-bg)", color: "var(--foreground)", borderRadius: 14, boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
  <h2 style={{ fontWeight: 600, fontSize: 26, marginBottom: 18, color: "var(--primary)" }}>Unity OS AI Co-Pilot</h2>
      <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
        {MODES.map(m => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            style={{
              padding: "8px 18px",
              background: mode === m.key ? "#2563eb" : "#f3f4f6",
              color: mode === m.key ? "#fff" : "#222",
              border: "none",
              borderRadius: 6,
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            {m.label}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={4}
          placeholder="Enter instructions, context, or data..."
          style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #d1d5db", fontSize: 16, marginBottom: 14, background: "var(--background)", color: "var(--foreground)" }}
        />
        <input type="file" multiple onChange={handleFilesChange} style={{ marginBottom: 14 }} />
        <button type="submit" disabled={loading} style={{ width: "100%", padding: "12px 0", background: "#2563eb", color: "#fff", fontWeight: 600, fontSize: 17, border: "none", borderRadius: 6, cursor: "pointer" }}>
          {loading ? "Executing..." : "Send"}
        </button>
      </form>
      {output && (
        <div style={{ marginTop: 32, background: "var(--background)", color: "var(--foreground)", padding: 18, borderRadius: 8, whiteSpace: 'pre-line' }}>
          {output}
        </div>
      )}
    </div>
  );
}
