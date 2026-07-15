# AETHEL 👞✨

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

**Aethel** is an ultra luxury bespoke footwear atelier landing page. Designed to evoke the essence of high end craftsmanship and exclusive luxury, the platform utilizes hardware accelerated animations, raw visual textures (SVG film grain), and a highly editorial, fluid typography system.

## ✨ Key Features

- **Cinematic Atmosphere:** A dark "Obsidian" and "Champagne" aesthetic paired with a custom SVG `<feTurbulence>` noise overlay for a raw film grain texture.
- **Hardware Accelerated Motion:** The core "Bespoke vs. Collection" split screen reveal (`DualPath`) is driven entirely by hardware accelerated CSS transitions (`transition-[width]`) for buttery smooth 60fps performance without JS layout thrashing.
- **Fluid Typography System:** Implementation of modern CSS `clamp()` functions to ensure typography natively scales with the viewport, removing the need for rigid media queries.
- **Centralized Data Architecture:** All static data (materials catalog, navigation links, footer mapping) is fully extracted into a central `constants.ts` file, keeping the React component tree perfectly clean.
- **Optimized Performance:** Avoids heavy JavaScript physics libraries, relying on Tailwind's native transitions and raw CSS keyframes.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Vanilla CSS (for complex masks)
- **Icons:** Lucide React

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have Node.js (v18+) and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your repo url>
   cd aethel
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```
   *The built files will be located in the `dist` directory.*

## 📂 Project Structure

- `/src/components` - Reusable UI components (Hero, Navbar, DualPath, MasterMaterials, etc.)
- `/src/lib` - Centralized application constants and utility functions
- `/public` - Static assets, SVG favicons, and custom generated imagery
- `/src/index.css` - Global CSS styles including custom fonts and smooth scrolling behavior

## 🎨 Design System

The platform strictly adheres to a tailored editorial color palette:
- `obsidian`: `#050505`
- `champagne`: `#F7E7CE`
- `ash`: `#8c8c8c`

## 👨‍💻 Credits

Designed and Developed by **Ahmad Faraz**.
