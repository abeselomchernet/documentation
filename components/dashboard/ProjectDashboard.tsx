import React, { useState } from "react";

type Project = {
  canvasName: string;
  clientName: string;
  currentPhase: string;
  lastModified: string;
  status: string;
};

const initialProjects: Project[] = [
  {
    canvasName: "Market Entry Strategy",
    clientName: "Ethiopia Bank",
    currentPhase: "Vicious Cycle",
    lastModified: "2025-09-16",
    status: "In Progress",
  },
  {
    canvasName: "SME Lending Blueprint",
    clientName: "Addis Capital",
    currentPhase: "Virtuous Cycle",
    lastModified: "2025-09-14",
    status: "Draft",
  },
  {
    canvasName: "Agri-Finance Pilot",
    clientName: "GreenFields",
    currentPhase: "Vicious Cycle",
    lastModified: "2025-09-10",
    status: "Completed",
  },
];

const columns: { key: keyof Project | "actions"; label: string; sortable: boolean }[] = [
  { key: "canvasName", label: "Canvas Name", sortable: true },
  { key: "clientName", label: "Client Name", sortable: true },
  { key: "currentPhase", label: "Current Phase", sortable: true },
  { key: "lastModified", label: "Last Modified", sortable: true },
  { key: "status", label: "Status", sortable: true },
  { key: "actions", label: "Actions", sortable: false },
];

export default function ProjectDashboard() {
  const [projects, setProjects] = useState(initialProjects);
  const [sortBy, setSortBy] = useState<keyof Project>("lastModified");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const handleSort = (key: keyof Project | "actions") => {
    if (key === "actions") return;
    if (sortBy === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortDir("asc");
    }
    setProjects(prev => {
      const sorted = [...prev].sort((a, b) => {
        if (a[key] < b[key]) return sortDir === "asc" ? -1 : 1;
        if (a[key] > b[key]) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
      return sorted;
    });
  };

  return (
    <div style={{ maxWidth: 900, margin: "60px auto", padding: 32, background: "#fff", borderRadius: 14, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", fontFamily: "Inter, Arial, sans-serif" }}>
      <h2 style={{ fontWeight: 600, fontSize: 28, marginBottom: 28, color: "#222" }}>Project Dashboard</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 16 }}>
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                style={{ textAlign: "left", padding: "12px 8px", fontWeight: 500, color: "#444", background: "#f9fafb", cursor: col.sortable ? "pointer" : "default", borderBottom: "2px solid #e5e7eb" }}
                onClick={() => col.sortable && handleSort(col.key)}
              >
                {col.label}
                {col.sortable && sortBy === col.key && (
                  <span style={{ marginLeft: 6, fontSize: 14 }}>{sortDir === "asc" ? "▲" : "▼"}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {projects.map((proj, idx) => (
            <tr key={idx} style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td style={{ padding: "12px 8px" }}>{proj.canvasName}</td>
              <td style={{ padding: "12px 8px" }}>{proj.clientName}</td>
              <td style={{ padding: "12px 8px" }}>{proj.currentPhase}</td>
              <td style={{ padding: "12px 8px" }}>{proj.lastModified}</td>
              <td style={{ padding: "12px 8px" }}>{proj.status}</td>
              <td style={{ padding: "12px 8px" }}>
                <button style={{ marginRight: 8, padding: "6px 14px", background: "#222", color: "#fff", border: "none", borderRadius: 5, fontWeight: 500, cursor: "pointer" }}>View</button>
                <button style={{ marginRight: 8, padding: "6px 14px", background: "#f3f4f6", color: "#222", border: "none", borderRadius: 5, fontWeight: 500, cursor: "pointer" }}>Edit</button>
                <button style={{ padding: "6px 14px", background: "#e5e7eb", color: "#222", border: "none", borderRadius: 5, fontWeight: 500, cursor: "pointer" }}>Export</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
