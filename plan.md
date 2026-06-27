# Implementation Plan - Apex Mobility Super App

Build a comprehensive mobility super app platform ("Apex Mobility") featuring taxi services, freight, marketplace, financing, and a digital wallet.

## Scope Summary
- **Core Platform:** Landing page and main dashboard (Super App Hub).
- **Service Verticals:** 
    - Apex Marketplace (Deliveries)
    - Apex Driver Financing
    - Apex Freight (Long Distance)
    - Apex Wallet (Fintech)
    - Apex Academy (Training)
    - Transport Auctions & Vehicle Rental
- **Features:** Referral program, Driver Rewards (Tiers), In-App Chat (UI), Business Logistics Portal, Safety Center, Bus Operator Management.
- **AI Integration (UI Mockups):** Smart Dispatch & AI Assistant.
- **Persistence:** Client-side only (localStorage/sessionState) for this session.

## Non-Goals
- Real-time backend tracking (simulated in UI).
- Real payment processing (simulated wallet transactions).
- Real AI backend (simulated responses).
- Real VoIP calling (UI only).

## Assumptions
- The app is a Single Page Application (SPA).
- User roles (Customer, Driver, Business) will be toggleable for demo purposes.
- Responsive design is critical for the "Super App" feel.

## Affected Areas
- **Frontend:**
    - `src/App.tsx`: Main routing and layout.
    - `src/components`: Reusable UI components (shadcn/ui).
    - `src/pages`: Individual modules for each vertical (Financing, Marketplace, Wallet, etc.).
    - `src/hooks`: State management for wallet and mock data.

## Ordered Phases

### Phase 1: Foundation & Navigation
- Set up routing (React Router).
- Create a "Super App" Home Screen with service icons.
- Implement a global Sidebar/Bottom Nav.
- **Owner:** frontend_engineer

### Phase 2: Wallet & Identity
- Implement Apex Wallet UI (Balance, Transactions, Rewards).
- Setup localStorage hooks for wallet balance.
- Create Referral & Rewards (Tier) dashboard.
- **Owner:** frontend_engineer

### Phase 3: Marketplace & Logistics (The Core Verticals)
- **Marketplace:** Delivery request forms, tracking UI.
- **Freight & Auctions:** Booking marketplace for trucks/containers.
- **Logistics Portal:** Fleet tracking and bulk scheduling for business users.
- **Owner:** frontend_engineer

### Phase 4: Driver Services & Academy
- **Financing:** Lease-to-own application flow and credit score UI.
- **Academy:** Course list and video/lesson player mockup.
- **Bus Management:** Seat inventory and QR system UI.
- **Owner:** frontend_engineer

### Phase 5: Support, Safety & AI
- **Chat/Calls:** Messaging interface and call screen.
- **Safety Center:** SOS button and trip sharing.
- **AI Assistant:** Floating chat assistant for fare estimates/support.
- **Owner:** frontend_engineer

### Phase 6: Refinement & Data Simulation
- Polish CSS and animations.
- Ensure cross-border logic (currency/country selection) works for Freight.
- Final UI/UX audit.
- **Owner:** quick_fix_engineer

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the core application shell, routing, and all major service modules.
2. quick_fix_engineer — Finalize styling, text corrections, and UX polish.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4, 5
- **Scope:** 
    - Install `lucide-react` and `framer-motion` for icons and animations.
    - Create a main `Layout` component.
    - Build out all screens mentioned in the user request as functional UI modules.
    - Use `localStorage` to persist "Apex Wallet" balance and "Referral" points.
- **Files:** `src/App.tsx`, `src/pages/*`, `src/components/*`
- **Depends on:** none
- **Acceptance criteria:** All 15+ features from the user request must have a corresponding navigable page or section with functional UI (forms, buttons, lists).

### 2. quick_fix_engineer
- **Phases:** 6
- **Scope:** 
    - Review all text for consistency (Apex branding).
    - Adjust Tailwind spacing/colors to ensure a "Super App" high-end feel.
    - Fix any responsiveness issues on small screens.
- **Files:** `src/index.css`, `src/components/ui/*`
- **Depends on:** frontend_engineer
- **Acceptance criteria:** App looks professional, responsive, and branding is consistent across all modules.

**Do not dispatch:** supabase_engineer (No DB in scope).
