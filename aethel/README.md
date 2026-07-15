<div align="center">
  <h1 align="center">A E T H E L</h1>
  <p align="center">
    <strong>Ultra-Luxury Bespoke Footwear Atelier</strong>
  </p>
  <p align="center">
    A meticulously crafted single-page web experience showcasing premium, cinematic frontend architecture and fluid motion design.
  </p>
</div>

<hr />

## ✦ Overview

**Aethel** is an editorial-style landing page designed to evoke the essence of high-end craftsmanship and exclusive luxury. Moving beyond standard web layouts, this project focuses heavily on atmospheric design, utilizing raw visual textures and hardware-accelerated animations to create a deeply immersive brand experience.

## 🏛️ Architectural Highlights

### 1. Cinematic Atmosphere & Texturing
Instead of relying on heavy image assets for background textures, the application dynamically generates a custom SVG `<feTurbulence>` filter. This `NoiseOverlay` is applied globally using a `mix-blend-overlay`, injecting a raw, cinematic film grain across the entire viewport without impacting rendering performance.

### 2. Hardware-Accelerated Motion (The DualPath)
The core interactive experience centers around the **Bespoke vs. Collection** split-screen reveal. 
* **The Challenge:** Traditional JavaScript-based animation loops can cause layout thrashing and dropped frames on mobile devices.
* **The Solution:** The interaction is driven entirely by hardware-accelerated CSS transitions (`transition-[width]`, `cubic-bezier` timing functions). This delegates the animation workload directly to the GPU, ensuring a buttery smooth 60fps experience even on lower-tier hardware.

### 3. Centralized Data Layer
Adhering to enterprise frontend standards, all static content—including navigation routes, footer links, and the extensive materials catalog—has been fully extracted from the UI components. 
* Located in `src/lib/constants.ts`, this centralized data layer ensures that the React component tree remains clean, semantic, and highly scalable.

### 4. Fluid Typography Architecture
To maintain perfect visual hierarchy across all screen sizes (from ultra-wide monitors to mobile displays), the project utilizes modern CSS `clamp()` functions. This creates massive, fluid typography that natively scales with the viewport, eliminating the need for brittle, breakpoint-heavy media queries.

## 🛠️ Technical Stack
* **Framework:** React 18
* **Build Engine:** Vite
* **Language:** TypeScript
* **Styling Engine:** Tailwind CSS
* **Design System:** Custom utility classes & modern CSS standards

## 🚀 Running Locally

1. Ensure you are in the `aethel` directory:
   ```bash
   cd aethel
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---
*Designed and engineered by **Ahmad Faraz** as part of the Faraz-Vertex collection.*
