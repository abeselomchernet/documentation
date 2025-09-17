"use client";
import React, { useState } from "react";
import OnboardFarmer from "./OnboardFarmer";
import PSNPVerification from "./PSNPVerification";
import SmartCycleManager from "./SmartCycleManager";

export default function AgentDashboard() {
  const [workflow, setWorkflow] = useState<string | null>(null);

  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>Enawuga Agent Portal</h1>
      <ul style={{ fontSize: 18, marginBottom: 32, listStyle: 'none', padding: 0, display: 'flex', gap: 32 }}>
        <li style={{ cursor: 'pointer', color: workflow === 'onboard' ? '#2563eb' : '#222' }} onClick={() => setWorkflow('onboard')}>Onboard New Farmer</li>
        <li style={{ cursor: 'pointer', color: workflow === 'psnp' ? '#2563eb' : '#222' }} onClick={() => setWorkflow('psnp')}>PSNP Work Verification & Payment</li>
        <li style={{ cursor: 'pointer', color: workflow === 'smartcycle' ? '#2563eb' : '#222' }} onClick={() => setWorkflow('smartcycle')}>SmartCycle Group Management</li>
      </ul>
      {workflow === 'onboard' && <OnboardFarmer />}
      {workflow === 'psnp' && <PSNPVerification />}
      {workflow === 'smartcycle' && <SmartCycleManager />}
      {!workflow && (
        <div style={{ color: '#888', fontSize: 16 }}>
          Select a workflow above to begin.
        </div>
      )}
    </div>
  );
}
