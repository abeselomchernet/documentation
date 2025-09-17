import React from "react";

export type CLDFeedbackLoopData = {
  id: string;
  linkIds: string[];
  type: "R" | "B" | null;
  suggestedType: "R" | "B" | null;
  center: { x: number; y: number };
};

export default function CLDFeedbackLoop({
  loop,
  onLabel,
  selected,
}: {
  loop: CLDFeedbackLoopData;
  onLabel: (type: "R" | "B") => void;
  selected: boolean;
}) {
  // Contextual menu for labeling
  const showMenu = selected;

  // Circular arrow SVG
  const arrowRadius = 32;
  const arrowStroke = loop.type === "R" ? "#2563eb" : "#b91c1c";
  const arrowCenterX = loop.center.x;
  const arrowCenterY = loop.center.y;

  return (
    <>
      {/* Render loop label and circular arrow */}
      {loop.type && (
        <g>
          <svg
            style={{ position: "absolute", left: arrowCenterX - arrowRadius, top: arrowCenterY - arrowRadius, pointerEvents: "none" }}
            width={arrowRadius * 2}
            height={arrowRadius * 2}
          >
            <circle
              cx={arrowRadius}
              cy={arrowRadius}
              r={arrowRadius - 8}
              stroke={arrowStroke}
              strokeWidth={4}
              fill="none"
            />
            {/* Arrowhead for circular arrow */}
            <polygon
              points={`
                ${arrowRadius + arrowRadius - 8},${arrowRadius}
                ${arrowRadius + arrowRadius - 16},${arrowRadius - 6}
                ${arrowRadius + arrowRadius - 16},${arrowRadius + 6}
              `}
              fill={arrowStroke}
            />
            {/* Loop type label */}
            <text
              x={arrowRadius}
              y={arrowRadius}
              fontSize={28}
              fontWeight={700}
              fill={arrowStroke}
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {loop.type}
            </text>
          </svg>
        </g>
      )}
      {/* Contextual menu for labeling */}
      {showMenu && (
        <div
          style={{
            position: "absolute",
            left: arrowCenterX - 60,
            top: arrowCenterY - arrowRadius - 54,
            background: "#fff",
            border: "1px solid #d1d5db",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.09)",
            padding: "10px 16px",
            zIndex: 100,
            display: "flex",
            gap: 12,
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 16, color: "#444", marginRight: 8 }}>Label loop:</span>
          <button
            style={{
              background: loop.suggestedType === "R" ? "#2563eb" : "#f3f4f6",
              color: loop.suggestedType === "R" ? "#fff" : "#222",
              border: "none",
              borderRadius: 5,
              fontWeight: 600,
              fontSize: 18,
              padding: "6px 16px",
              cursor: "pointer",
              boxShadow: loop.type === "R" ? "0 0 0 2px #2563eb" : "none",
            }}
            onClick={() => onLabel("R")}
          >
            R (Reinforcing)
          </button>
          <button
            style={{
              background: loop.suggestedType === "B" ? "#b91c1c" : "#f3f4f6",
              color: loop.suggestedType === "B" ? "#fff" : "#222",
              border: "none",
              borderRadius: 5,
              fontWeight: 600,
              fontSize: 18,
              padding: "6px 16px",
              cursor: "pointer",
              boxShadow: loop.type === "B" ? "0 0 0 2px #b91c1c" : "none",
            }}
            onClick={() => onLabel("B")}
          >
            B (Balancing)
          </button>
        </div>
      )}
    </>
  );
}
