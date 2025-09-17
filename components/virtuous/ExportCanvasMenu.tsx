import React, { useState } from "react";

export default function ExportCanvasMenu({
  canvasName,
  clientName,
  onExportPNG,
  onExportPDF,
  isComparison,
}: {
  canvasName: string;
  clientName: string;
  onExportPNG: () => void;
  onExportPDF: () => void;
  isComparison?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          padding: "12px 28px",
          background: "#2563eb",
          color: "#fff",
          fontWeight: 600,
          fontSize: 18,
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        }}
      >
        Export
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 0,
            background: "#fff",
            border: "1px solid #d1d5db",
            borderRadius: 10,
            boxShadow: "0 2px 16px rgba(0,0,0,0.09)",
            padding: "18px 24px",
            zIndex: 100,
            minWidth: 220,
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 12 }}>Export Options</div>
          <button
            onClick={() => { setOpen(false); onExportPNG(); }}
            style={{ width: "100%", padding: "10px 0", background: "#f3f4f6", color: "#222", border: "none", borderRadius: 6, fontWeight: 500, fontSize: 16, marginBottom: 10, cursor: "pointer" }}
          >
            PNG (High-Res, Transparent)
          </button>
          <button
            onClick={() => { setOpen(false); onExportPDF(); }}
            style={{ width: "100%", padding: "10px 0", background: "#222", color: "#fff", border: "none", borderRadius: 6, fontWeight: 500, fontSize: 16, cursor: "pointer" }}
          >
            PDF (Vector, Metadata{isComparison ? ", Landscape" : ""})
          </button>
          <div style={{ fontSize: 13, color: "#666", marginTop: 14 }}>
            <div>Canvas Name: <b>{canvasName}</b></div>
            <div>Client Name: <b>{clientName}</b></div>
            {isComparison && <div>Format: <b>Landscape, Side-by-Side</b></div>}
          </div>
        </div>
      )}
    </div>
  );
}
