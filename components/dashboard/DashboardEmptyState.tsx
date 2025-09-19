import React from "react";

export default function DashboardEmptyState({ onCreate }: { onCreate?: () => void }) {
  return (
    <div style={{ maxWidth: 480, margin: "100px auto", padding: 40, background: "#fff", borderRadius: 14, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", textAlign: "center", fontFamily: "Inter, Arial, sans-serif" }}>
      <h2 style={{ fontWeight: 600, fontSize: 26, marginBottom: 18, color: "#222" }}>
        Welcome to the Architect&apos;s Workbench
      </h2>
      <p style={{ fontSize: 18, color: "#444", marginBottom: 36 }}>
        Begin by diagnosing your first system.
      </p>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Minimalist arrow graphic */}
        <svg width="32" height="32" viewBox="0 0 32 32" style={{ marginBottom: 18 }}>
          <path d="M16 4v20M16 24l-8-8M16 24l8-8" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <button
          onClick={onCreate}
          style={{ padding: "14px 0", width: 220, background: "#222", color: "#fff", fontWeight: 600, fontSize: 18, border: "none", borderRadius: 7, cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", marginTop: 4 }}
        >
          Create New Canvas
        </button>
      </div>
    </div>
  );
}
