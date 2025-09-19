"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const enawugaSummary = `This comprehensive blueprint provides a canonical model for solving the **Grassroots Failure** within the Ethiopian context. The document's detailed, persona-driven approach and its innovative service designs like the "Trust Bundle" and "SmartCycle 2.0" serve as a foundational reference for last-mile viability strategies.`;

const enawugaV2Summary = `This upgraded blueprint incorporates significant new features, including **"Agri-Tok"** (a Tik Tok-style social hub for peer-to-peer knowledge sharing via short-form video, designed to transcend literacy barriers), an **AI-powered crop disease diagnostic tool** (leveraging models similar to Plantix), an **Open Platform Strategy** to expose platform capabilities via B2B APIs and SDKs, and the integration of **GS1 global traceability standards** for a verifiable farm-to-fork supply chain.`;

const enawugaV2CliCommand = `/*
================================================================================
AI PROTOTYPE GENERATION COMMAND: ENAWUGA PLATFORM V2.0 (UPGRADED)
================================================================================

---
### **PHASE 1: PROJECT SETUP AND CORE ARCHITECTURE**
---

**1.1. PERSONA AND HIGH-LEVEL GOAL:**
You are a lead solutions architect tasked with generating the V2.0 prototype for the "Enawuga" platform. This version must incorporate advanced features based on the "Agri-Connect Ethiopia" blueprint, including a social video hub ("Agri-Tok"), an AI-powered crop disease diagnostic tool, and the backend infrastructure for an open API strategy.

**1.2. TECHNICAL MANDATES:**
- **Platform:** Unity Real-Time Development Platform (2023.2 or later).
- **Backend:** Unity Gaming Services (UGS) for all backend functionality (Authentication, Cloud Save, Cloud Code). This choice ensures a seamless, Unity-native ecosystem.
- **UI System:** UI Toolkit exclusively. All UI must be defined in UXML/USS files for a clean separation of logic and presentation.
- **Data Structures:** All data models must be defined in C# with clear XML documentation.

**1.3. PROJECT STRUCTURE AND DEPENDENCIES:**
Generate a standard Unity project structure with folders for \`Scripts\`, \`UI\`, and \`Scenes\`. In \`Packages/manifest.json\`, ensure the following Unity packages are included:
- \`com.unity.ui\` (UI Toolkit)
- \`com.unity.render-pipelines.universal\` (URP)
- \`com.unity.services.core\`
- \`com.unity.services.authentication\`
- \`com.unity.services.cloudsave\`
- \`com.unity.services.cloudcode\`

---
### **PHASE 2: BACKEND IMPLEMENTATION (UNITY GAMING SERVICES)**
---

**2.1. UPDATED DATA MODELS:**
In \`DataModels.cs\`, add the following:
- **\`MarketplaceListing\`:** Add a new field: \`string gs1TraceabilityUrl\`.
- **\`AgriTokPost\`:** Create a new class with fields: \`postId\`, \`userId\`, \`videoUrl_mock\`, \`description\`, \`likes\`.
- **\`CropDiagnosisResult\`:** Create a new class with fields: \`diseaseName\`, \`confidenceScore\`, \`recommendedAction\`, \`sourceDocument\` (e.g., "Source: MoA Pest Guide").

**2.2. UGS CLOUD CODE (NEW & UPDATED MODULES):**
- **\`diagnoseCropDisease\` (New Cloud Code Module):**
  - // ANNOTATION: Simulates the AI diagnostic tool.
  - Accepts a mock \`imageData\` parameter.
  - Returns a mock \`CropDiagnosisResult\` JSON object. Example: If image data contains "mock_leaf_spot", return a diagnosis for "Maize Gray Leaf Spot".
- **\`getAgriTokFeed\` (New Cloud Code Module):**
  - // ANNOTATION: Powers the "Agri-Tok" social hub.
  - Returns a mock list of \`AgriTokPost\` objects.
- **\`getMarketplaceListings\` (Updated Cloud Code Module):**
  - // ANNOTATION: Updates the marketplace to include GS1 traceability data.
  - The returned list of \`MarketplaceListing\` objects should now include a mock \`gs1TraceabilityUrl\` for each item.

**2.3. UGS CLOUD CODE (OPEN API GATEWAY):**
- // ANNOTATION: This section prototypes the "Open Platform Strategy" by creating placeholder API endpoints for third-party developers.
- **\`api_v1_getUserTrustScore\` (New Cloud Code Module):**
  - Accepts \`userId\` and an \`apiKey\`.
  - Simulates API key validation.
  - Calls the internal \`calculateTrustScore\` logic and returns the score. This exposes the Trust Score to external partners like MFIs.
- **\`api_v1_getMarketPrices\` (New Cloud Code Module):**
  - Accepts \`commodity\` and an \`apiKey\`.
  - Returns a mock time-series dataset of prices for the requested commodity.

---
### **PHASE 3: FRONT-END IMPLEMENTATION (UI TOOLKIT) - ENHANCEMENTS**
---

**3.1. NEW UI DOCUMENTS (UXML/USS):**
- **\`AgriTokScreen.uxml\`:**
  - // ANNOTATION: The UI for the "Agri-Tok" feature.
  - A \`ScrollView\` to act as the main feed. Inside, create a template for a single post containing a \`VisualElement\` for the (mock) video, a \`Label\` for the description, and a \`Button\` for "Like".
- **\`CropDoctorScreen.uxml\`:**
  - // ANNOTATION: The UI for the AI disease diagnosis tool.
  - A \`Button\` labeled "Upload Leaf Image".
  - A \`VisualElement\` to display the \`CropDiagnosisResult\`, with labels for "Diagnosis", "Confidence", and "Recommended Action".

**3.2. UPDATED UI DOCUMENTS:**
- In **\`FarmerDashboard.uxml\`**:
  - Add a new tab button for "Agri-Tok" and "Crop Doctor".
- In the **Marketplace UI**:
  - For each listing, add a small "Verifiable Traceability" icon and button.

---
### **PHASE 4: CONNECTING LOGIC (C# SCRIPTS) - ENHANCEMENTS**
---

**4.1. NEW CONTROLLER SCRIPTS:**
- **\`AgriTokController.cs\`:**
  - Attached to the \`AgriTokScreen.uxml\`.
  - On enable, it calls the \`getAgriTokFeed\` Cloud Code module.
  - It dynamically creates and populates the post elements in the \`ScrollView\` based on the returned data.
- **\`CropDoctorController.cs\`:**
  - Attached to the \`CropDoctorScreen.uxml\`.
  - The "Upload Leaf Image" button will call the \`diagnoseCropDisease\` Cloud Code module with mock data.
  - It will then populate the result panel with the returned diagnosis.

**4.2. UPDATED CONTROLLER SCRIPTS:**
- **\`UIManager.cs\`:** Add new methods to show/hide the \`AgriTokScreen\` and \`CropDoctorScreen\`.
- **\`FarmerDashboardController.cs\`:** Add logic for the new tab buttons to activate the corresponding UI screens.
- **Marketplace UI Controller:** The "Verifiable Traceability" button should, for the prototype, log the \`gs1TraceabilityUrl\` to the console.
*/`;

const enawugaCliCommand = `/*
================================================================================
AI PROTOTYPE GENERATION COMMAND: ENAWUGA PLATFORM MVP
================================================================================

---
### **PHASE 1: PROJECT SETUP AND CORE ARCHITECTURE**
---

**1.1. PERSONA AND HIGH-LEVEL GOAL:**
You are a senior full-stack developer specializing in building secure, resilient, and user-centric fintech applications for emerging markets using the Unity platform. Your task is to generate the complete, production-quality Unity project for the "Enawuga" MVP. The prototype must accurately reflect the core user journeys and innovative features detailed in the "Enawuga Prototype Portfolio" report.

**1.2. TECHNICAL MANDATES:**
- **Platform:** Unity Real-Time Development Platform (2023.2 or later).
- **Backend:** Unity Gaming Services (UGS) for all backend functionality (Authentication, Cloud Save, Cloud Code). This choice ensures a seamless, Unity-native ecosystem.
- **UI System:** UI Toolkit exclusively. All UI must be defined in UXML/USS files for a clean separation of logic and presentation.
- **Data Structures:** All data models must be defined in C# with clear XML documentation.

**1.3. PROJECT STRUCTURE AND DEPENDENCIES:**
Generate a standard Unity project structure with folders for \`Scripts\`, \`UI\`, and \`Scenes\`. In \`Packages/manifest.json\`, ensure the following Unity packages are included:
- \`com.unity.ui\` (UI Toolkit)
- \`com.unity.render-pipelines.universal\` (URP)
- \`com.unity.services.core\`
- \`com.unity.services.authentication\`
- \`com.unity.services.cloudsave\`
- \`com.unity.services.cloudcode\`

---
### **PHASE 2: BACKEND IMPLEMENTATION (UNITY GAMING SERVICES)**
---

**2.1. DATA MODELS:**
Create a \`DataModels.cs\` file containing the following C# classes:
- \`FarmerProfile\`: \`userId\`, \`faydaId\`, \`name\`, \`walletBalance\`, \`communityCoinBalance\`.
- \`AgentProfile\`: \`userId\`, \`faydaId\`, \`name\`, \`hubName\`, \`floatBalance\`.
- \`SmartCycleGroup\`: \`groupId\`, \`groupName\`, \`contributionAmount\`, \`List&lt;string&gt; memberIds\`, \`currentRound\`.
- \`MarketplaceListing\`: \`listingId\`, \`farmerId\`, \`agentHubId\`, \`cropType\`, \`grade\`, \`quantity\`, \`pricePerQuintal\`.

**2.2. UGS AUTHENTICATION & USER DATA:**
- Create an \`AuthenticationService.cs\`.
  - // ANNOTATION: This service simulates the "Trust-Centric Onboarding" using Fayda ID.
  - Implement a method \`SignInWithFaydaAsync(string faydaId, string fingerprint)\` that simulates a call to a Fayda API. For the prototype, it will use UGS Anonymous Login and then save the \`faydaId\` to the user's Cloud Save data.
- Create a \`UserDataService.cs\`.
  - Implement methods using the UGS Cloud Save API to \`CreateFarmerProfile\`, \`CreateAgentProfile\`, and \`GetUserProfile\` for the currently logged-in user.

**2.3. UGS CLOUD CODE (CORE BUSINESS LOGIC):**
- **\`performCashIn\` (Cloud Code Module):**
  - // ANNOTATION: This script handles the backend logic for the CICO simulation.
  - Accepts \`targetUserId\` and \`amount\`.
  - Validates that the caller is a registered Agent.
  - Atomically updates the \`walletBalance\` for the target user and the \`floatBalance\` for the agent in Cloud Save. Returns the new balances.
- **\`calculateTrustScore\` (Cloud Code Module):**
  - // ANNOTATION: This simulates the AI-powered Trust Score for the Agri-Resilience Bond framework.
  - Accepts \`userId\`.
  - For the prototype, it will fetch the user's \`communityCoinBalance\` and their (mock) \`smartCyclePaymentHistory\` from Cloud Save and return a score from 1-100 based on a simple formula.
- **\`askAIAdvisor\` (Cloud Code Module):**
  - // ANNOTATION: This implements the backend for the RAG-powered AI Advisor.
  - Accepts a \`query\` string.
  - For the prototype, it will contain a hardcoded knowledge base (a C# Dictionary) mapping keywords like "worm" or "fertilizer" to predefined, safe answers, mimicking the RAG retrieval step. It will return a string response.

---
### **PHASE 3: FRONT-END IMPLEMENTATION (UNITY UI TOOLKIT)**
---

**3.1. SCENES:**
Create a single scene named \`EnawugaMainScene\`.

**3.2. UI DOCUMENTS (UXML/USS):**
- **\`OnboardingScreen.uxml\`:**
  - A simple UI with a \`TextField\` for "Fayda ID" and a \`Button\` for "Scan Fingerprint" to trigger the login flow.
- **\`FarmerDashboard.uxml\`:**
  - // ANNOTATION: This is the main interface for the "Abebe" persona.
  - Displays \`walletBalance\` and \`communityCoinBalance\`.
  - Contains tabs for "Marketplace", "SmartCycle", and "AI Advisor".
- **\`AgentDashboard.uxml\`:**
  - // ANNOTATION: This is the main interface for the "Chaltu" persona.
  - A CICO panel with \`TextFields\` for "Farmer Phone Number" and "Amount", and buttons for "Cash-In" and "Cash-Out".
  - A panel for "Agri-Connect" to create a new \`MarketplaceListing\` on behalf of a farmer.
- **\`AIAdvisor.uxml\`:**
  - A simple chat interface with a \`ScrollView\` for dialogue history and a \`TextField\` for input.

**3.3. STYLING:**
Create a single \`Stylesheet.uss\` file. Style all UIs with a clean, accessible, and professional theme. Use clear typography and high-contrast colors suitable for use on simple devices.

---
### **PHASE 4: CONNECTING LOGIC (C# SCRIPTS)**
---

**4.1. UIManager.cs:**
- A singleton script to manage all UI visibility.
- Has methods like \`ShowOnboardingScreen()\`, \`ShowFarmerDashboard()\`, etc.
- Handles the logic of switching between UI Documents after a successful login.

**4.2. OnboardingController.cs:**
- Attached to the \`OnboardingScreen.uxml\`.
- The "Scan Fingerprint" button will call the \`AuthenticationService.SignInWithFaydaAsync\` method.
- On successful login, it determines if the user is a Farmer or Agent (based on mock data for the prototype) and calls the appropriate \`UIManager\` method.

**4.3. FarmerDashboardController.cs:**
- Attached to the \`FarmerDashboard.uxml\`.
- On \`Start()\`, it calls \`UserDataService\` to fetch and display the farmer's profile data.
- The AI Advisor tab will have its logic handled by \`AIAdvisorController.cs\`.

**4.4. AgentDashboardController.cs:**
- Attached to the \`AgentDashboard.uxml\`.
- The "Cash-In" button will take the data from the TextFields and call the \`performCashIn\` Cloud Code module, displaying the result in a status label.

**4.5. AIAdvisorController.cs:**
- Manages the AI Advisor UI panel.
- When the user sends a message, it calls the \`askAIAdvisor\` Cloud Code module and displays the query and the returned response in the chat history ScrollView.
*/`;

const ProjectDetailPage = () => {
  const params = useParams();
  const projectName = params.projectName?.toString().replace(/-/g, ' ') || "Project Details";
  const isEnawugaProject = projectName.toLowerCase().includes('enawuga');

  const [copiedV1, setCopiedV1] = useState(false);
  const [copiedV2, setCopiedV2] = useState(false);

  const handleCopy = (textToCopy: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="font-sans p-8 text-gray-800 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold m-0 capitalize">
          {projectName}
        </h1>
        <Link href="/" className="no-underline text-white bg-gray-900 py-2 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors">
          &larr; Back to Dashboard
        </Link>
      </div>
      
      {isEnawugaProject ? (
        <div>
          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Project Summary (V1.0)
          </h2>
          <p 
            className="bg-gray-50 p-4 rounded-lg leading-relaxed border border-gray-200 m-0 text-base"
            dangerouslySetInnerHTML={{ __html: enawugaSummary.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />

          <h2 className="text-2xl font-semibold mt-12 mb-3">
            Gemini CLI Generation Command (V1.0)
          </h2>
          <div className="relative bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <button
              onClick={() => handleCopy(enawugaCliCommand, setCopiedV1)}
              className="absolute top-2 right-2 bg-gray-700 text-white border border-gray-500 rounded-md py-1 px-2.5 cursor-pointer text-xs z-10 hover:bg-gray-600 transition-colors"
            >
              {copiedV1 ? 'Copied!' : 'Copy'}
            </button>
            <pre className="whitespace-pre-wrap break-words m-0 text-sm">
              <code>
                {enawugaCliCommand}
              </code>
            </pre>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-3 border-t border-gray-200 pt-12">
            V2.0 Upgraded Prototype Summary
          </h2>
          <p 
            className="bg-gray-50 p-4 rounded-lg leading-relaxed border border-gray-200 m-0 text-base"
            dangerouslySetInnerHTML={{ __html: enawugaV2Summary.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />

          <h2 className="text-2xl font-semibold mt-12 mb-3">
            Gemini CLI Generation Command (V2.0)
          </h2>
          <div className="relative bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <button
              onClick={() => handleCopy(enawugaV2CliCommand, setCopiedV2)}
              className="absolute top-2 right-2 bg-gray-700 text-white border border-gray-500 rounded-md py-1 px-2.5 cursor-pointer text-xs z-10 hover:bg-gray-600 transition-colors"
            >
              {copiedV2 ? 'Copied!' : 'Copy'}
            </button>
            <pre className="whitespace-pre-wrap break-words m-0 text-sm">
              <code>
                {enawugaV2CliCommand}
              </code>
            </pre>
          </div>

        </div>
      ) : (
        <p className="mt-4 text-gray-500">Details for this project are not available yet.</p>
      )}
    </div>
  );
};

export default ProjectDetailPage;