import React, { useState } from "react";

export type CLDLinkData = {
  id: string;
  source: { x: number; y: number };
  target: { x: number; y: number };
  polarity: "+" | "-" | null;
};

export default function CLDLink({
  link,
  onChange,
  selected,
  onSelect,
}: {
  link: CLDLinkData;
  onChange: (data: CLDLinkData) => void;
  selected: boolean;
  onSelect: () => void;
}) {
  const [showMenu, setShowMenu] = useState(false);

  // Calculate midpoint for menu
  const midX = (link.source.x + link.target.x) / 2;
  const midY = (link.source.y + link.target.y) / 2;

  // Calculate arrowhead position and angle
  const dx = link.target.x - link.source.x;
  const dy = link.target.y - link.source.y;
  const angle = Math.atan2(dy, dx);
  const arrowLength = 18;
  const arrowWidth = 7;
  const arrowX = link.target.x - Math.cos(angle) * 12;
  const arrowY = link.target.y - Math.sin(angle) * 12;

  // Show menu when selected
  React.useEffect(() => {
    setShowMenu(selected);
  }, [selected]);

  return (
    <>
      {/* SVG for link and arrowhead */}
      <svg
        style={{ position: "absolute", left: 0, top: 0, pointerEvents: "none" }}
        width="100%"
        height="100%"
      >
        <line
          x1={link.source.x}
          y1={link.source.y}
          x2={link.target.x}
          y2={link.target.y}
          stroke="#222"
          strokeWidth={3}
        />
        {/* Arrowhead */}
        <polygon
          points={`
            ${arrowX},${arrowY}
            ${arrowX - arrowLength * Math.cos(angle - 0.25)},${arrowY - arrowLength * Math.sin(angle - 0.25)}
            ${arrowX - arrowLength * Math.cos(angle + 0.25)},${arrowY - arrowLength * Math.sin(angle + 0.25)}
          `}
          fill="#222"
        />
        {/* Polarity label near arrowhead */}
        {link.polarity && (
          <text
            x={arrowX + 10 * Math.cos(angle)}
            y={arrowY + 10 * Math.sin(angle)}
            fontSize={18}
            fontWeight={700}
            fill={link.polarity === "+" ? "#2563eb" : "#b91c1c"}
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {link.polarity}
          </text>
        )}
      </svg>
      {/* Contextual polarity menu */}
      {showMenu && (
        <div
          style={{
            position: "absolute",
            left: midX - 32,
            top: midY - 22,
            background: "#fff",
            border: "1px solid #d1d5db",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.09)",
            padding: "8px 12px",
            zIndex: 100,
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 15, color: "#444", marginRight: 6 }}>Polarity:</span>
          <button
            style={{
              background: link.polarity === "+" ? "#2563eb" : "#f3f4f6",
              color: link.polarity === "+" ? "#fff" : "#222",
              border: "none",
              borderRadius: 5,
              fontWeight: 600,
              fontSize: 16,
              padding: "4px 12px",
              cursor: "pointer",
            }}
            onClick={() => onChange({ ...link, polarity: "+" })}
          >
            + (Same)
          </button>
          <button
            style={{
              background: link.polarity === "-" ? "#b91c1c" : "#f3f4f6",
              color: link.polarity === "-" ? "#fff" : "#222",
              border: "none",
              borderRadius: 5,
              fontWeight: 600,
              fontSize: 16,
              padding: "4px 12px",
              cursor: "pointer",
            }}
            onClick={() => onChange({ ...link, polarity: "-" })}
          >
            - (Opposite)
          </button>
        </div>
      )}
    </>
  );
}
