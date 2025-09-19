"use client";
import React, { useState } from "react";
import CreateCanvasModal from "./CreateCanvasModal";
import Link from "next/link";
import DashboardEmptyState from "./DashboardEmptyState";
import ComparisonView from "../virtuous/ComparisonView";
import { useRouter } from "next/navigation";
import type { CLDNodeData } from "../cld/CLDNode";
import type { CLDLinkData } from "../cld/CLDLink";
import type { CLDFeedbackLoopData } from "../cld/CLDFeedbackLoop";

type Project = {
  canvasName: string;
  clientName: string;
  currentPhase: string;
  lastModified: string;
  status: string;
};

const initialProjects: Project[] = [
  {
    canvasName: "The Enawuga Prototype Portfolio",
    clientName: "Enawuga Stakeholders",
    currentPhase: "Analysis",
    lastModified: "2025-09-18",
    status: "New",
  },
  {
    canvasName: "Carbon Connect Ethiopia",
    clientName: "Global Investors",
    currentPhase: "Blueprint",
    lastModified: "2025-09-17",
    status: "In Progress",
  },
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

// Mock data for ComparisonView
const mockViciousData = {
  nodes: [
    { id: 'v1', text: 'Low SME Investment', color: '#fee2e2', border: 'solid', bold: true, italic: false, x: 50, y: 150 },
    { id: 'v2', text: 'High Unemployment', color: '#ffedd5', border: 'solid', bold: false, italic: false, x: 350, y: 150 },
    { id: 'v3', text: 'Stagnant Household Income', color: '#ffedd5', border: 'solid', bold: false, italic: false, x: 350, y: 300 },
    { id: 'v4', text: 'Low Consumer Spending', color: '#ffedd5', border: 'solid', bold: false, italic: false, x: 50, y: 300 },
  ] as CLDNodeData[],
  links: [
    { id: 'vl1', source: { x: 270, y: 172 }, target: { x: 350, y: 172 }, polarity: '+' },
    { id: 'vl2', source: { x: 460, y: 194 }, target: { x: 460, y: 300 }, polarity: '+' },
    { id: 'vl3', source: { x: 350, y: 322 }, target: { x: 270, y: 322 }, polarity: '+' },
    { id: 'vl4', source: { x: 160, y: 300 }, target: { x: 160, y: 194 }, polarity: '+' },
  ] as CLDLinkData[],
  loops: [
    { id: 'vlp1', linkIds: ['vl1', 'vl2', 'vl3', 'vl4'], type: 'R', suggestedType: 'R', center: { x: 310, y: 247 } }
  ] as CLDFeedbackLoopData[],
};

const mockVirtuousData = {
  nodes: [
    { id: 'n1', text: 'Increased Investment in SMEs', color: '#d1fae5', border: 'solid', bold: true, italic: false, x: 50, y: 150 },
    { id: 'n2', text: 'Job Creation', color: '#dbeafe', border: 'solid', bold: false, italic: false, x: 350, y: 150 },
    { id: 'n3', text: 'Higher Household Income', color: '#dbeafe', border: 'solid', bold: false, italic: false, x: 350, y: 300 },
    { id: 'n4', text: 'Increased Consumer Spending', color: '#dbeafe', border: 'solid', bold: false, italic: false, x: 50, y: 300 },
  ] as CLDNodeData[],
  links: [
    { id: 'l1', source: { x: 270, y: 172 }, target: { x: 350, y: 172 }, polarity: '+' },
    { id: 'l2', source: { x: 460, y: 194 }, target: { x: 460, y: 300 }, polarity: '+' },
    { id: 'l3', source: { x: 350, y: 322 }, target: { x: 270, y: 322 }, polarity: '+' },
    { id: 'l4', source: { x: 160, y: 300 }, target: { x: 160, y: 194 }, polarity: '+' },
  ] as CLDLinkData[],
  loops: [
    { id: 'lp1', linkIds: ['l1', 'l2', 'l3', 'l4'], type: 'R', suggestedType: 'R', center: { x: 310, y: 247 } }
  ] as CLDFeedbackLoopData[],
};

export default function ProjectDashboard() {
  const [projects, setProjects] = useState(initialProjects);
  const [sortBy, setSortBy] = useState<keyof Project>("lastModified");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewingProject, setViewingProject] = useState<Project | null>(null);
  const router = useRouter();

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

  const handleCreateCanvas = (canvasName: string, clientName: string) => {
    const newProject: Project = {
      canvasName,
      clientName,
      currentPhase: "Vicious Cycle",
      lastModified: new Date().toISOString().split("T")[0],
      status: "Draft",
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const handleDeleteProject = (projectNameToDelete: string) => {
    if (window.confirm(`Are you sure you want to delete "${projectNameToDelete}"? This action cannot be undone.`)) {
      setProjects(projects.filter(p => p.canvasName !== projectNameToDelete));
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "60px auto", padding: 32, background: "#fff", borderRadius: 14, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", fontFamily: "Inter, Arial, sans-serif" }}>
      {viewingProject && (
        <ComparisonView viciousData={mockViciousData} virtuousData={mockVirtuousData} onExit={() => setViewingProject(null)} />
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <h2 style={{ fontWeight: 600, fontSize: 28, color: "#222", margin: 0 }}>Project Dashboard</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{ padding: "10px 20px", background: "#222", color: "#fff", border: "none", borderRadius: 7, fontWeight: 600, fontSize: 16, cursor: "pointer" }}
        >
          Create New Canvas
        </button>
      </div>
      {projects.length > 0 ? (
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
            {projects.map((proj) => (
              <tr key={proj.canvasName} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <td style={{ padding: "12px 8px", fontWeight: 500 }}>
                  <Link href={`/project/${encodeURIComponent(proj.canvasName)}`} style={{ textDecoration: 'none', color: '#2563eb' }}>
                    {proj.canvasName}
                  </Link>
                </td>
                <td style={{ padding: "12px 8px" }}>{proj.clientName}</td>
                <td style={{ padding: "12px 8px" }}>{proj.currentPhase}</td>
                <td style={{ padding: "12px 8px" }}>{proj.lastModified}</td>
                <td style={{ padding: "12px 8px" }}>{proj.status}</td>
                <td style={{ padding: "12px 8px" }}>
                  <button onClick={() => setViewingProject(proj)} style={{ marginRight: 8, padding: "6px 14px", background: "#222", color: "#fff", border: "none", borderRadius: 5, fontWeight: 500, cursor: "pointer" }}>View</button>
                  <button onClick={() => router.push('/workbench')} style={{ marginRight: 8, padding: "6px 14px", background: "#f3f4f6", color: "#222", border: "none", borderRadius: 5, fontWeight: 500, cursor: "pointer" }}>Edit</button>
                  <button onClick={() => handleDeleteProject(proj.canvasName)} style={{ padding: "6px 14px", background: "#fee2e2", color: "#b91c1c", border: "none", borderRadius: 5, fontWeight: 500, cursor: "pointer" }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <DashboardEmptyState onCreate={() => setIsModalOpen(true)} />
      )}
      {isModalOpen && (
        <CreateCanvasModal
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateCanvas}
        />
      )}
    </div>
  );
}
