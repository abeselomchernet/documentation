import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirmPassword?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate registration success
      alert("Registration successful (prototype only)");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", padding: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", fontFamily: "Inter, Arial, sans-serif" }}>
      <h2 style={{ fontWeight: 600, fontSize: 28, marginBottom: 24, color: "#222" }}>Create Your Account</h2>
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
          {errors.email && <div style={{ color: "#b91c1c", fontSize: 14, marginTop: 4 }}>{errors.email}</div>}
        </div>
        <div style={{ marginBottom: 20 }}>
          <label htmlFor="password" style={{ display: "block", fontWeight: 500, marginBottom: 6 }}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 16 }}
            autoComplete="new-password"
          />
          {errors.password && <div style={{ color: "#b91c1c", fontSize: 14, marginTop: 4 }}>{errors.password}</div>}
        </div>
        <div style={{ marginBottom: 28 }}>
          <label htmlFor="confirmPassword" style={{ display: "block", fontWeight: 500, marginBottom: 6 }}>Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 16 }}
            autoComplete="new-password"
          />
          {errors.confirmPassword && <div style={{ color: "#b91c1c", fontSize: 14, marginTop: 4 }}>{errors.confirmPassword}</div>}
        </div>
        <button
          type="submit"
          style={{ width: "100%", padding: "12px 0", background: "#222", color: "#fff", fontWeight: 600, fontSize: 17, border: "none", borderRadius: 6, cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
