import React, { useState } from "react";

type Member = { id: string; name: string; hasWon: boolean };
type Group = {
  id: string;
  name: string;
  members: Member[];
  contribution: number;
  frequency: string;
  currentPot: number;
  history: Array<{ cycle: number; winner: string; transactionId: string }>;
  cycle: number;
};

export default function SmartCycleManager() {
  const [group, setGroup] = useState<Group | null>(null);
  const [form, setForm] = useState({ name: "", members: "", contribution: "", frequency: "" });
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");
  const [drawLoading, setDrawLoading] = useState(false);
  const [drawResult, setDrawResult] = useState<null | { winner: string; transactionId: string }>(null);

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.members || !form.contribution || !form.frequency) {
      setError("All fields are required.");
      return;
    }
    const memberList = form.members.split(",").map((m, i) => ({ id: `M${i+1}`, name: m.trim(), hasWon: false }));
    setGroup({
      id: "SCG-" + Math.floor(Math.random() * 100000),
      name: form.name,
      members: memberList,
      contribution: Number(form.contribution),
      frequency: form.frequency,
      currentPot: 0,
      history: [],
      cycle: 1,
    });
    setCreating(false);
  };

  const handleSimulateContribution = () => {
    if (!group) return;
    setGroup({ ...group, currentPot: group.currentPot + group.members.length * group.contribution });
  };

  const handleDraw = () => {
    if (!group) return;
    setDrawLoading(true);
    setTimeout(() => {
      const eligible = group.members.filter(m => !m.hasWon);
      if (eligible.length === 0) {
        setError("All members have already won.");
        setDrawLoading(false);
        return;
      }
      const winner = eligible[Math.floor(Math.random() * eligible.length)];
      const transactionId = "smartcycle_tx_" + Math.floor(Math.random() * 1000000);
      setGroup({
        ...group,
        members: group.members.map(m => m.id === winner.id ? { ...m, hasWon: true } : m),
        history: [...group.history, { cycle: group.cycle, winner: winner.name, transactionId }],
        currentPot: 0,
        cycle: group.cycle + 1,
      });
      setDrawResult({ winner: winner.name, transactionId });
      setDrawLoading(false);
    }, 1200);
  };

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
      <h2 style={{ fontWeight: 600, fontSize: 24, marginBottom: 18 }}>SmartCycle Group Management</h2>
      {!group && (
        <form onSubmit={handleCreateGroup}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Group Name</label>
            <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #d1d5db", fontSize: 16 }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Member Names (comma separated)</label>
            <input type="text" value={form.members} onChange={e => setForm({ ...form, members: e.target.value })} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #d1d5db", fontSize: 16 }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Contribution Amount</label>
            <input type="number" value={form.contribution} onChange={e => setForm({ ...form, contribution: e.target.value })} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #d1d5db", fontSize: 16 }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Frequency (e.g., Weekly)</label>
            <input type="text" value={form.frequency} onChange={e => setForm({ ...form, frequency: e.target.value })} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #d1d5db", fontSize: 16 }} />
          </div>
          {error && <div style={{ color: "#b91c1c", marginBottom: 12 }}>{error}</div>}
          <button type="submit" style={{ width: "100%", padding: "12px 0", background: "#2563eb", color: "#fff", fontWeight: 600, fontSize: 17, border: "none", borderRadius: 6, cursor: "pointer" }}>
            Create New SmartCycle Group
          </button>
        </form>
      )}
      {group && (
        <div>
          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>Group: {group.name}</div>
          <div style={{ fontSize: 16, marginBottom: 10 }}>Cycle: {group.cycle}</div>
          <div style={{ fontSize: 16, marginBottom: 10 }}>Current Pot: {group.currentPot}</div>
          <div style={{ fontSize: 16, marginBottom: 18 }}>Members: {group.members.map(m => m.name + (m.hasWon ? " (Won)" : "")).join(", ")}</div>
          <button onClick={handleSimulateContribution} style={{ width: "100%", padding: "10px 0", background: "#2563eb", color: "#fff", fontWeight: 600, fontSize: 16, border: "none", borderRadius: 6, cursor: "pointer", marginBottom: 12 }}>
            Simulate Contribution
          </button>
          <button onClick={handleDraw} disabled={drawLoading} style={{ width: "100%", padding: "10px 0", background: "#222", color: "#fff", fontWeight: 600, fontSize: 16, border: "none", borderRadius: 6, cursor: "pointer" }}>
            {drawLoading ? "Drawing..." : "Execute Draw"}
          </button>
          {drawResult && (
            <div style={{ marginTop: 24, background: "#f3f4f6", padding: 18, borderRadius: 8, textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Winner: {drawResult.winner}</div>
              <div style={{ fontSize: 16, color: "#2563eb" }}>Transaction ID: {drawResult.transactionId}</div>
              <div style={{ fontSize: 15, color: "#444", marginTop: 10 }}>Draw logged and pot reset. Next cycle begins.</div>
            </div>
          )}
          <div style={{ marginTop: 24 }}>
            <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 8 }}>History</div>
            <ul style={{ fontSize: 15, color: "#444" }}>
              {group.history.map((h, i) => (
                <li key={i}>Cycle {h.cycle}: Winner - {h.winner}, TxID: {h.transactionId}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
