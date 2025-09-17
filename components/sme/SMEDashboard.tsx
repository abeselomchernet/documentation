"use client";
import React, { useState } from "react";
import SMEApplyCredit from "../sme/SMEApplyCredit";


export default function SMEDashboard() {
  const [workflow, setWorkflow] = useState<string | null>(null);

  return (
    <div className="fade-in" style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12, color: 'var(--primary)' }}>
          SME Growth Dashboard
        </h1>
        <p style={{ color: 'var(--foreground)', fontSize: 18, marginBottom: 24 }}>
          Welcome! Track your growth, apply for credit, and unlock new opportunities.
        </p>
        <nav aria-label="SME Workflows">
          <ul style={{ display: 'flex', gap: 24, listStyle: 'none', padding: 0 }}>
            <li>
              <button
                className="btn"
                aria-pressed={workflow === 'credit'}
                onClick={() => setWorkflow('credit')}
                style={{ background: workflow === 'credit' ? 'var(--accent)' : 'var(--primary)' }}
              >
                Apply for Credit
              </button>
            </li>
            {/* Future: Add more SME workflows here */}
          </ul>
        </nav>
      </div>
      {workflow === 'credit' && (
        <div className="card fade-in">
          <SMEApplyCredit />
        </div>
      )}
      {!workflow && (
        <div className="card fade-in" style={{ color: 'var(--foreground)', fontSize: 16, textAlign: 'center' }}>
          <span role="status" aria-live="polite">Select a workflow above to begin.</span>
        </div>
      )}
    </div>
  );
}
