import React, { useState } from "react";

export default function SMEApplyCredit() {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { score: number; risk: string; report: string }>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Simulate AI credit profile generation
    setTimeout(() => {
      if (!product) {
        setError("Please select a credit product.");
        setLoading(false);
        return;
      }
      setResult({
        score: Math.floor(Math.random() * 400 + 600),
        risk: "Low",
        report: "Unity Verified credit profile generated. All data verified and risk analysis complete. Ready for PFI review."
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div style={{ maxWidth: 420, margin: "0 auto", padding: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
      <h2 style={{ fontWeight: 600, fontSize: 24, marginBottom: 18 }}>Apply for Credit</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Credit Product</label>
          <select value={product} onChange={e => setProduct(e.target.value)} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #d1d5db", fontSize: 16 }}>
            <option value="">Select a product...</option>
            <option value="work_order">Work Order Fulfillment Credit</option>
            <option value="growth">Growth Capital Loan</option>
            <option value="equipment">Equipment Financing</option>
          </select>
        </div>
        <div style={{ marginBottom: 24 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Attach Documents (optional)</label>
          <input type="file" multiple />
        </div>
        {error && <div style={{ color: "#b91c1c", marginBottom: 12 }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ width: "100%", padding: "12px 0", background: "#2563eb", color: "#fff", fontWeight: 600, fontSize: 17, border: "none", borderRadius: 6, cursor: "pointer" }}>
          {loading ? "Processing..." : "Apply"}
        </button>
      </form>
      {result && (
        <div style={{ marginTop: 32, background: "#f3f4f6", padding: 18, borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Unity Verified Credit Score: {result.score}</div>
          <div style={{ fontSize: 16, color: "#2563eb" }}>Risk Level: {result.risk}</div>
          <div style={{ fontSize: 15, color: "#444", marginTop: 10 }}>{result.report}</div>
        </div>
      )}
    </div>
  );
}
