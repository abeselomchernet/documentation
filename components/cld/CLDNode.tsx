import React, { useState } from "react";

const COLORS = ["#e5e7eb", "#dbeafe", "#f3f4f6", "#fef3c7", "#d1fae5", "#fca311", "#2563eb"];
const BORDER_STYLES = ["solid", "dashed"];

export type CLDNodeData = {
  id: string;
  text: string;
  color: string;
  border: "solid" | "dashed";
  bold: boolean;
  italic: boolean;
};

export default function CLDNode({
  node,
  onChange,
  selected,
  onSelect,
}: {
  node: CLDNodeData;
  onChange: (data: CLDNodeData) => void;
  selected: boolean;
  onSelect: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(node.text);

  // Handle double-click to edit
  const handleDoubleClick = () => {
    setEditing(true);
    setEditText(node.text);
  };

  // Save text and exit edit mode
  const handleSave = () => {
    onChange({ ...node, text: editText });
    setEditing(false);
  };

  // Styling controls (shown if selected)
  const controls = selected && !editing ? (
    <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
      <select
        value={node.color}
        onChange={e => onChange({ ...node, color: e.target.value })}
        style={{ padding: "2px 8px", borderRadius: 4, border: "1px solid #d1d5db", fontSize: 14 }}
      >
        {COLORS.map(c => (
          <option key={c} value={c}>
            {c === "#2563eb" ? "Accent" : ""}
            {c === "#fca311" ? "Highlight" : ""}
            {c === "#e5e7eb" ? "Grey" : ""}
            {c === "#dbeafe" ? "Blue" : ""}
            {c === "#f3f4f6" ? "Light" : ""}
            {c === "#fef3c7" ? "Yellow" : ""}
            {c === "#d1fae5" ? "Green" : ""}
          </option>
        ))}
      </select>
      <select
        value={node.border}
        onChange={e => onChange({ ...node, border: e.target.value as "solid" | "dashed" })}
        style={{ padding: "2px 8px", borderRadius: 4, border: "1px solid #d1d5db", fontSize: 14 }}
      >
        {BORDER_STYLES.map(b => (
          <option key={b} value={b}>{b.charAt(0).toUpperCase() + b.slice(1)}</option>
        ))}
      </select>
      <button
        style={{ fontWeight: node.bold ? 700 : 400, fontStyle: "normal", border: "none", background: "#f3f4f6", borderRadius: 4, padding: "2px 8px", cursor: "pointer" }}
        onClick={() => onChange({ ...node, bold: !node.bold })}
      >
        B
      </button>
      <button
        style={{ fontWeight: 400, fontStyle: node.italic ? "italic" : "normal", border: "none", background: "#f3f4f6", borderRadius: 4, padding: "2px 8px", cursor: "pointer" }}
        onClick={() => onChange({ ...node, italic: !node.italic })}
      >
        I
      </button>
    </div>
  ) : null;

  return (
    <div
      style={{
        minWidth: 120,
        maxWidth: 220,
        minHeight: 44,
        padding: 12,
        background: node.color,
        border: `2px ${node.border} #222`,
        borderRadius: 10,
        boxShadow: selected ? "0 2px 8px rgba(37,99,235,0.09)" : "0 1px 4px rgba(0,0,0,0.04)",
        cursor: "pointer",
        margin: 8,
        position: "relative",
        outline: selected ? "2px solid #2563eb" : "none",
        transition: "outline 0.2s",
        userSelect: "none",
      }}
      onDoubleClick={handleDoubleClick}
      onClick={onSelect}
    >
      {controls}
      {editing ? (
        <textarea
          value={editText}
          onChange={e => setEditText(e.target.value)}
          onBlur={handleSave}
          rows={1}
          style={{
            width: "100%",
            minHeight: 32,
            fontWeight: node.bold ? 700 : 400,
            fontStyle: node.italic ? "italic" : "normal",
            fontSize: 16,
            border: "1px solid #d1d5db",
            borderRadius: 6,
            padding: 6,
            resize: "none",
            background: "#fff",
            boxSizing: "border-box",
            overflowWrap: "break-word",
          }}
          autoFocus
        />
      ) : (
        <div
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            fontWeight: node.bold ? 700 : 400,
            fontStyle: node.italic ? "italic" : "normal",
            fontSize: 16,
            minHeight: 32,
            lineHeight: 1.3,
            color: "#222",
          }}
        >
          {node.text}
        </div>
      )}
    </div>
  );
}
