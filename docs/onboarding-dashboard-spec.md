# Onboarding & Dashboard Interaction: CAW-MVP-1.0 Prototype Specs

## 1. User Onboarding (Registration & Login)

### Screen 1: Registration Page
- **Objective:** Allow a new consultant to create a secure account.
- **Components:**
  - Input fields: Email Address, Password, Confirm Password
  - Validation error states:
    - Invalid email format
    - Password mismatch

### Screen 2: Login Page
- **Objective:** Allow a registered consultant to securely access their account.
- **Components:**
  - Input fields: Email Address, Password
  - Error state: Non-specific error message for invalid credentials ("Invalid email or password.")

---

## 2. Project Dashboard & Canvas Creation

### Screen 3: Project Dashboard (Populated State)
- **Objective:** Overview of all consultant's projects
- **Components:**
  - Table/card layout listing canvases
  - Each entry: Canvas Name, Client Name, Current Phase, Last Modified date, Status
  - Sorted by Last Modified by default
  - Interactivity: Simulate re-sorting by column header click

### Screen 4: Project Dashboard (Empty State)
- **Objective:** Guide new user on first login
- **Components:**
  - Message: "You haven't created any Canvases yet. Click 'Create New Canvas' to get started."
  - Prominent "Create New Canvas" button

### User Flow 5: Create New Canvas
- **Objective:** Initiate core diagnostic workflow
- **Interactivity:**
  - Clicking "Create New Canvas" triggers modal/form for Canvas Name and Client Name
  - On submit: transition to blank Vicious Cycle Diagnosis canvas, new project appears at top of dashboard list

---

*These specs are the foundation for the interactive prototype. Next: Build each screen and flow step by step as per the design mandate.*
