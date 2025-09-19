"use client";
import React from "react";
import VirtuousCycleCanvas from "../../components/virtuous/VirtuousCycleCanvas";
import type { CLDNodeData } from "../../components/cld/CLDNode";
import type { CLDLinkData } from "../../components/cld/CLDLink";
import type { CLDFeedbackLoopData } from "../../components/cld/CLDFeedbackLoop";

// This is mock data to demonstrate the canvas.
// In a real application, you would fetch this data for a specific project.
const mockInitialData: {
  nodes: CLDNodeData[];
  links: CLDLinkData[];
  loops: CLDFeedbackLoopData[];
} = {
  nodes: [
    { id: 'n1', text: 'Increased Investment in SMEs', color: '#d1fae5', border: 'solid', bold: true, italic: false, x: 50, y: 150 },
    { id: 'n2', text: 'Job Creation', color: '#dbeafe', border: 'solid', bold: false, italic: false, x: 350, y: 150 },
    { id: 'n3', text: 'Higher Household Income', color: '#dbeafe', border: 'solid', bold: false, italic: false, x: 350, y: 300 },
    { id: 'n4', text: 'Increased Consumer Spending', color: '#dbeafe', border: 'solid', bold: false, italic: false, x: 50, y: 300 },
  ],
  links: [
    { id: 'l1', source: { x: 270, y: 172 }, target: { x: 350, y: 172 }, polarity: '+' },
    { id: 'l2', source: { x: 460, y: 194 }, target: { x: 460, y: 300 }, polarity: '+' },
    { id: 'l3', source: { x: 350, y: 322 }, target: { x: 270, y: 322 }, polarity: '+' },
    { id: 'l4', source: { x: 160, y: 300 }, target: { x: 160, y: 194 }, polarity: '+' },
  ],
  loops: [
    { id: 'lp1', linkIds: ['l1', 'l2', 'l3', 'l4'], type: 'R', suggestedType: 'R', center: { x: 310, y: 247 } }
  ]
};

export default function WorkbenchPage() {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: "var(--primary-foreground)" }}>
        Virtuous Cycle Design Canvas
      </h1>
      <p style={{ fontSize: 16, color: "var(--muted-foreground)", marginBottom: 24 }}>
        This is where you can architect the solution state. Use the tools to add and connect variables.
      </p>
      <VirtuousCycleCanvas initialData={mockInitialData} />
    </div>
  );
}