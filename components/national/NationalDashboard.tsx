"use client";
import React, { useState } from "react";

export default function NationalDashboard() {
  const [view, setView] = useState<string | null>(null);

  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>National Portal</h1>
      <ul style={{ fontSize: 18, marginBottom: 32, listStyle: 'none', padding: 0, display: 'flex', gap: 32 }}>
        <li style={{ cursor: 'pointer', color: view === 'overview' ? '#2563eb' : '#222' }} onClick={() => setView('overview')}>Country Overview</li>
        <li style={{ cursor: 'pointer', color: view === 'analytics' ? '#2563eb' : '#222' }} onClick={() => setView('analytics')}>Analytics & Reports</li>
      </ul>
      {view === 'overview' && (
        <div style={{ color: '#222', fontSize: 16 }}>
          {/* Country overview content goes here */}
          <p>Display national-level statistics, project summaries, and key metrics.</p>
        </div>
      )}
      {view === 'analytics' && (
        <div style={{ color: '#222', fontSize: 16 }}>
          {/* Analytics and reports content goes here */}
          <p>Show charts, data visualizations, and downloadable reports.</p>
        </div>
      )}
      {!view && (
        <div style={{ color: '#888', fontSize: 16 }}>
          Select a view above to begin.
        </div>
      )}
    </div>
  );
}
