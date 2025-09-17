"use client";
import React from "react";

export default function MoFDashboard() {
  return (
    <div className="card fade-in" style={{ maxWidth: 700, margin: '2rem auto' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--primary)' }}>MoF Workbench</h1>
      <p style={{ color: 'var(--foreground)', fontSize: 18 }}>
        Welcome to the MoF Workbench. Add fiscal, treasury, and budget data here.
      </p>
    </div>
  );
}
