"use client";
import React, { useState } from "react";

export default function PFIDashboard() {
  const [view, setView] = useState<string | null>(null);

  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>PFI Portal</h1>
      <ul style={{ fontSize: 18, marginBottom: 32, listStyle: 'none', padding: 0, display: 'flex', gap: 32 }}>
        <li style={{ cursor: 'pointer', color: view === 'applications' ? '#2563eb' : '#222' }} onClick={() => setView('applications')}>Credit Applications</li>
        <li style={{ cursor: 'pointer', color: view === 'portfolio' ? '#2563eb' : '#222' }} onClick={() => setView('portfolio')}>Portfolio Overview</li>
      </ul>
      {view === 'applications' && (
        <div style={{ color: '#222', fontSize: 16 }}>
          {/* Credit applications content goes here */}
          <p>Review and manage SME credit applications.</p>
        </div>
      )}
      {view === 'portfolio' && (
        <div style={{ color: '#222', fontSize: 16 }}>
          {/* Portfolio overview content goes here */}
          <p>Display PFI's current portfolio, performance metrics, and risk analysis.</p>
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
