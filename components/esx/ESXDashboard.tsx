"use client";
import React from "react";

export default function ESXDashboard() {
  return (
    <div className="card fade-in" style={{ maxWidth: 700, margin: '2rem auto' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--primary)' }}>ESX Dashboard</h1>
      <p style={{ color: 'var(--foreground)', fontSize: 18 }}>
        Welcome to the ESX Dashboard. Add analytics, reports, and key metrics here.
      </p>
    </div>
  );
}
