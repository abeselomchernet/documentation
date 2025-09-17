import React, { useState } from "react";
import CLDNode, { CLDNodeData } from "../cld/CLDNode";
import CLDLink, { CLDLinkData } from "../cld/CLDLink";
import CLDFeedbackLoop, { CLDFeedbackLoopData } from "../cld/CLDFeedbackLoop";

export default function VirtuousCycleCanvas({ initialData }: { initialData: {
  nodes: CLDNodeData[];
  links: CLDLinkData[];
  loops: CLDFeedbackLoopData[];
} }) {
  const [nodes, setNodes] = useState<CLDNodeData[]>(initialData.nodes);
  const [links, setLinks] = useState<CLDLinkData[]>(initialData.links);
  const [loops, setLoops] = useState<CLDFeedbackLoopData[]>(initialData.loops);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [selectedLoop, setSelectedLoop] = useState<string | null>(null);

  // Node management
  const handleNodeChange = (id: string, data: CLDNodeData) => {
    setNodes(nodes.map(n => (n.id === id ? data : n)));
  };
  const handleAddNode = (x: number, y: number) => {
    const newNode: CLDNodeData = {
      id: `node-${Date.now()}`,
      text: "New Variable",
      color: "#e5e7eb",
      border: "solid",
      bold: false,
      italic: false,
    };
    setNodes([...nodes, newNode]);
  };

  // Link management
  const handleLinkChange = (id: string, data: CLDLinkData) => {
    setLinks(links.map(l => (l.id === id ? data : l)));
  };
  const handleAddLink = (source: { x: number; y: number }, target: { x: number; y: number }) => {
    const newLink: CLDLinkData = {
      id: `link-${Date.now()}`,
      source,
      target,
      polarity: null,
    };
    setLinks([...links, newLink]);
  };

  // Loop management
  const handleLoopLabel = (id: string, type: "R" | "B") => {
    setLoops(loops.map(l => (l.id === id ? { ...l, type } : l)));
  };

  // Render nodes, links, and loops
  return (
    <div style={{ position: "relative", width: "100%", height: 600, background: "#f9fafb", borderRadius: 16, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", overflow: "hidden" }}>
      {/* Render links */}
      {links.map(link => (
        <CLDLink
          key={link.id}
          link={link}
          onChange={data => handleLinkChange(link.id, data)}
          selected={selectedLink === link.id}
          onSelect={() => setSelectedLink(link.id)}
        />
      ))}
      {/* Render nodes */}
      {nodes.map(node => (
        <CLDNode
          key={node.id}
          node={node}
          onChange={data => handleNodeChange(node.id, data)}
          selected={selectedNode === node.id}
          onSelect={() => setSelectedNode(node.id)}
        />
      ))}
      {/* Render feedback loops */}
      {loops.map(loop => (
        <CLDFeedbackLoop
          key={loop.id}
          loop={loop}
          onLabel={type => handleLoopLabel(loop.id, type)}
          selected={selectedLoop === loop.id}
        />
      ))}
      {/* Toolbar for adding nodes/links (minimal for parity) */}
      <div style={{ position: "absolute", top: 18, left: 18, display: "flex", gap: 12 }}>
        <button
          style={{ padding: "8px 18px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, fontSize: 16, cursor: "pointer" }}
          onClick={() => handleAddNode(120, 120)}
        >
          Add Node
        </button>
        <button
          style={{ padding: "8px 18px", background: "#222", color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, fontSize: 16, cursor: "pointer" }}
          // For demo: add link between first two nodes
          onClick={() => nodes.length >= 2 && handleAddLink({ x: 120, y: 120 }, { x: 220, y: 120 })}
        >
          Add Link
        </button>
      </div>
    </div>
  );
}
