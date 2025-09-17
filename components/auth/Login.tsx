import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login failure for prototype
    if (email !== "consultant@example.com" || password !== "password123") {
      setError("Invalid email or password.");
    } else {
      setError("");
      alert("Login successful (prototype only)");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", padding: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", fontFamily: "Inter, Arial, sans-serif" }}>
      <h2 style={{ fontWeight: 600, fontSize: 28, marginBottom: 24, color: "#222" }}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 20 }}>
          <label htmlFor="email" style={{ display: "block", fontWeight: 500, marginBottom: 6 }}>Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 16 }}
            autoComplete="email"
          />
        </div>
        <div style={{ marginBottom: 28 }}>
          <label htmlFor="password" style={{ display: "block", fontWeight: 500, marginBottom: 6 }}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 16 }}
            autoComplete="current-password"
          />
        </div>
        {error && <div style={{ color: "#b91c1c", fontSize: 14, marginBottom: 18 }}>{error}</div>}
        <button
          type="submit"
          style={{ width: "100%", padding: "12px 0", background: "#222", color: "#fff", fontWeight: 600, fontSize: 17, border: "none", borderRadius: 6, cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
