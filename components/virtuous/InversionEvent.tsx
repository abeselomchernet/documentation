import React from "react";

export default function InversionEvent(
  {
    viciousCycleData,
    onCreateVirtuousCycle,
  }: {
    viciousCycleData: unknown;
    onCreateVirtuousCycle: (virtuousCycleData: unknown) => void;
  }
) {
  const [transitioning, setTransitioning] = React.useState(false);

  const handleInversion = () => {
    setTransitioning(true);
    setTimeout(() => {
      // Duplicate the vicious cycle data and retitle
      const virtuousCycleData = {
        ...(viciousCycleData as object),
        title: "Virtuous Cycle",
        id: `virtuous-${(viciousCycleData as any).id}`,
        // Optionally, clear feedback loop labels or reset node/link states for editing
      };
      onCreateVirtuousCycle(virtuousCycleData);
      setTransitioning(false);
    }, 600); // 600ms for smooth transition
  };

  return (
    <div style={{ position: "relative", minHeight: 120 }}>
      <button
        onClick={handleInversion}
        style={{
          padding: "14px 32px",
          background: "#2563eb",
          color: "#fff",
          fontWeight: 600,
          fontSize: 18,
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          marginBottom: 24,
        }}
      >
        Create Virtuous Cycle
      </button>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: transitioning ? "auto" : "none",
          opacity: transitioning ? 1 : 0,
          transition: "opacity 0.6s",
          background: "#fff",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {transitioning && (
          <div style={{ fontSize: 28, fontWeight: 600, color: "#2563eb", textAlign: "center" }}>
            Inverting System...
          </div>
        )}
      </div>
    </div>
  );
}
