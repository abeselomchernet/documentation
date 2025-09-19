export const enawugaSummary = `This comprehensive blueprint provides a canonical model for solving the **Grassroots Failure** within the Ethiopian context. The document's detailed, persona-driven approach and its innovative service designs like the "Trust Bundle" and "SmartCycle 2.0" serve as a foundational reference for last-mile viability strategies.`;

export const enawugaCliCommand = `/*
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