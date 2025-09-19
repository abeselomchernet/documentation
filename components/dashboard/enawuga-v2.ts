export const enawugaV2Summary = `This upgraded blueprint incorporates significant new features, including **"Agri-Tok"** (a Tik Tok-style social hub for peer-to-peer knowledge sharing via short-form video, designed to transcend literacy barriers), an **AI-powered crop disease diagnostic tool** (leveraging models similar to Plantix), an **Open Platform Strategy** to expose platform capabilities via B2B APIs and SDKs, and the integration of **GS1 global traceability standards** for a verifiable farm-to-fork supply chain.`;

export const enawugaV2CliCommand = `/*
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
- **Backend:** Unity Gaming Services (UGS).
- **UI System:** UI Toolkit (UXML/USS).
- **Code Quality:** Production-quality, fully documented C# code.

**1.3. PROJECT STRUCTURE AND DEPENDENCIES:**
// ANNOTATION: Same as the V1.0 MVP.
Generate a standard Unity project structure. In \`Packages/manifest.json\`, ensure the following Unity packages are included:
- \`com.unity.ui\` (UI Toolkit)
- \`com.unity.render-pipelines.universal\` (URP)
- \`com.unity.services.core\`
- \`com.unity.services.authentication\`
- \`com.unity.services.cloudsave\`
- \`com.unity.services.cloudcode\`

---
### **PHASE 2: BACKEND IMPLEMENTATION (UGS) - ENHANCEMENTS**
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