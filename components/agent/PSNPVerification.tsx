import React, { useState } from "react";

export default function PSNPVerification() {
  const [contractId, setContractId] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { transactionId: string }> (null);
  const [error, setError] = useState("");

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Simulate AI verification
    setTimeout(() => {
      if (!contractId || !photo) {
        setError("All fields are required, including work photo.");
        setLoading(false);
        return;
      }
      // Simulate successful verification and payment
      setResult({ transactionId: "psnp_pay_" + Math.floor(Math.random() * 1000000) });
      setLoading(false);
    }, 1200);
  };

  return (
    <div style={{ maxWidth: 420, margin: "0 auto", padding: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
      <h2 style={{ fontWeight: 600, fontSize: 24, marginBottom: 18 }}>PSNP Work Verification & Payment</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>DLT Contract ID</label>
          <input type="text" value={contractId} onChange={e => setContractId(e.target.value)} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #d1d5db", fontSize: 16 }} />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Work Completion Photo</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>
        {error && <div style={{ color: "#b91c1c", marginBottom: 12 }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ width: "100%", padding: "12px 0", background: "#2563eb", color: "#fff", fontWeight: 600, fontSize: 17, border: "none", borderRadius: 6, cursor: "pointer" }}>
          {loading ? "Verifying..." : "Verify & Trigger Payment"}
        </button>
      </form>
      {result && (
        <div style={{ marginTop: 32, background: "#f3f4f6", padding: 18, borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Payment Released</div>
          <div style={{ fontSize: 16, color: "#2563eb" }}>Transaction ID: {result.transactionId}</div>
          <div style={{ fontSize: 15, color: "#444", marginTop: 10 }}>This transaction is now part of the participant&apos;s financial history.</div>
        </div>
      )}
    </div>
  );
}
