import React, { useState } from "react";

export default function CreateCanvasModal({ onCreate, onClose }: { onCreate: (canvasName: string, clientName: string) => void; onClose: () => void }) {
  const [canvasName, setCanvasName] = useState("");
  const [clientName, setClientName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canvasName.trim() || !clientName.trim()) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    onCreate(canvasName.trim(), clientName.trim());
    onClose();
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.18)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
      <div style={{ background: "#fff", borderRadius: 12, padding: 36, minWidth: 340, boxShadow: "0 2px 16px rgba(0,0,0,0.13)", fontFamily: "Inter, Arial, sans-serif" }}>
        <h3 style={{ fontWeight: 600, fontSize: 22, marginBottom: 18, color: "#222" }}>Create New Canvas</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="canvasName" style={{ display: "block", fontWeight: 500, marginBottom: 6 }}>Canvas Name</label>
            <input
              id="canvasName"
              type="text"
              value={canvasName}
              onChange={e => setCanvasName(e.target.value)}
              style={{ width: "100%", padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 16 }}
              autoFocus
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="clientName" style={{ display: "block", fontWeight: 500, marginBottom: 6 }}>Client Name</label>
            <input
              id="clientName"
              type="text"
              value={clientName}
              onChange={e => setClientName(e.target.value)}
              style={{ width: "100%", padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 16 }}
            />
          </div>
          {error && <div style={{ color: "#b91c1c", fontSize: 14, marginBottom: 12 }}>{error}</div>}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
            <button
              type="button"
              onClick={onClose}
              style={{ padding: "10px 18px", background: "#f3f4f6", color: "#222", border: "none", borderRadius: 6, fontWeight: 500, cursor: "pointer" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{ padding: "10px 18px", background: "#222", color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}
            >
              Create Canvas
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
