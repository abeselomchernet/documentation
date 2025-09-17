import React, { useState } from "react";
import CLDNode, { CLDNodeData } from "../cld/CLDNode";
import CLDLink, { CLDLinkData } from "../cld/CLDLink";
import CLDFeedbackLoop, { CLDFeedbackLoopData } from "../cld/CLDFeedbackLoop";

export default function ComparisonView({
  viciousData,
  virtuousData,
  onExit,
}: {
  viciousData: {
    nodes: CLDNodeData[];
    links: CLDLinkData[];
    loops: CLDFeedbackLoopData[];
  };
  virtuousData: {
    nodes: CLDNodeData[];
    links: CLDLinkData[];
    loops: CLDFeedbackLoopData[];
  };
  onExit: () => void;
}) {
  // Pan/zoom state for each canvas
  const [viciousZoom, setViciousZoom] = useState(1);
  const [viciousPan, setViciousPan] = useState({ x: 0, y: 0 });
  const [virtuousZoom, setVirtuousZoom] = useState(1);
  const [virtuousPan, setVirtuousPan] = useState({ x: 0, y: 0 });

  // Simple pan/zoom controls for demo
  const zoomStep = 0.15;
  const panStep = 40;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#fff", zIndex: 1000, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1, height: "100%" }}>
        {/* Vicious Cycle Pane */}
        <div style={{ flex: 1, borderRight: "2px solid #e5e7eb", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ fontWeight: 600, fontSize: 22, marginBottom: 12, color: "#b91c1c" }}>Problem State: Vicious Cycle</div>
          <div style={{ position: "relative", width: "90%", height: "80%", overflow: "hidden", background: "#f9fafb", borderRadius: 14, boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
            <div
              style={{
                transform: `scale(${viciousZoom}) translate(${viciousPan.x}px, ${viciousPan.y}px)`,
                transition: "transform 0.2s",
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              {/* Render nodes, links, loops as read-only */}
              {viciousData.links.map(link => (
                <CLDLink key={link.id} link={link} onChange={() => {}} selected={false} onSelect={() => {}} />
              ))}
              {viciousData.nodes.map(node => (
                <CLDNode key={node.id} node={node} onChange={() => {}} selected={false} onSelect={() => {}} />
              ))}
              {viciousData.loops.map(loop => (
                <CLDFeedbackLoop key={loop.id} loop={loop} onLabel={() => {}} selected={false} />
              ))}
            </div>
            {/* Pan/zoom controls */}
            <div style={{ position: "absolute", bottom: 18, left: 18, display: "flex", gap: 8 }}>
              <button onClick={() => setViciousZoom(v => Math.max(0.5, v - zoomStep))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>-</button>
              <button onClick={() => setViciousZoom(v => Math.min(2, v + zoomStep))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>+</button>
              <button onClick={() => setViciousPan(p => ({ x: p.x - panStep, y: p.y }))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>←</button>
              <button onClick={() => setViciousPan(p => ({ x: p.x + panStep, y: p.y }))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>→</button>
              <button onClick={() => setViciousPan(p => ({ x: p.x, y: p.y - panStep }))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>↑</button>
              <button onClick={() => setViciousPan(p => ({ x: p.x, y: p.y + panStep }))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>↓</button>
            </div>
          </div>
        </div>
        {/* Virtuous Cycle Pane */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ fontWeight: 600, fontSize: 22, marginBottom: 12, color: "#2563eb" }}>Solution State: Virtuous Cycle</div>
          <div style={{ position: "relative", width: "90%", height: "80%", overflow: "hidden", background: "#f9fafb", borderRadius: 14, boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
            <div
              style={{
                transform: `scale(${virtuousZoom}) translate(${virtuousPan.x}px, ${virtuousPan.y}px)`,
                transition: "transform 0.2s",
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              {/* Render nodes, links, loops as read-only */}
              {virtuousData.links.map(link => (
                <CLDLink key={link.id} link={link} onChange={() => {}} selected={false} onSelect={() => {}} />
              ))}
              {virtuousData.nodes.map(node => (
                <CLDNode key={node.id} node={node} onChange={() => {}} selected={false} onSelect={() => {}} />
              ))}
              {virtuousData.loops.map(loop => (
                <CLDFeedbackLoop key={loop.id} loop={loop} onLabel={() => {}} selected={false} />
              ))}
            </div>
            {/* Pan/zoom controls */}
            <div style={{ position: "absolute", bottom: 18, left: 18, display: "flex", gap: 8 }}>
              <button onClick={() => setVirtuousZoom(v => Math.max(0.5, v - zoomStep))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>-</button>
              <button onClick={() => setVirtuousZoom(v => Math.min(2, v + zoomStep))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>+</button>
              <button onClick={() => setVirtuousPan(p => ({ x: p.x - panStep, y: p.y }))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>←</button>
              <button onClick={() => setVirtuousPan(p => ({ x: p.x + panStep, y: p.y }))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>→</button>
              <button onClick={() => setVirtuousPan(p => ({ x: p.x, y: p.y - panStep }))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>↑</button>
              <button onClick={() => setVirtuousPan(p => ({ x: p.x, y: p.y + panStep }))} style={{ padding: "6px 12px", borderRadius: 5, border: "none", background: "#e5e7eb", fontWeight: 600 }}>↓</button>
            </div>
          </div>
        </div>
      </div>
      {/* Exit button */}
      <div style={{ position: "absolute", top: 24, right: 32 }}>
        <button
          onClick={onExit}
          style={{ padding: "12px 28px", background: "#222", color: "#fff", fontWeight: 600, fontSize: 18, border: "none", borderRadius: 8, cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
        >
          Exit View
        </button>
      </div>
    </div>
  );
}
