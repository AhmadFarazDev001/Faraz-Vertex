# APEX TRAIL 🚵‍♂️🔥

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

**Apex Trail** is a premium, high-performance landing page and product configurator for a bespoke mountain bike brand. Designed to deliver an immersive, cinematic web experience, the platform utilizes hardware-accelerated animations, custom WebGL-style effects (like film grain and custom cursors), and an incredibly modern "rugged-luxurious" aesthetic.

## ✨ Key Features

- **Cinematic Aesthetics:** A custom dark theme ("Apex Black", "Apex Charcoal") paired with a vibrant "Ember" accent color to create a rugged yet premium feel.
- **Glassmorphism Design:** Advanced translucent UI elements (`liquid-glass` classes) with subtle background blurs and animated borders.
- **Dynamic Scroll Animations:** Utilizes `framer-motion` for complex staggered entry animations, scroll-triggered text reveals, and parallax background effects.
- **Real-Time Configurator:** An interactive bike build configurator that allows users to select frame materials, suspension travel, and wheel sizes, updating the price dynamically with smooth value interpolation.
- **Custom Interactive Cursor:** A hyper-optimized vanilla DOM cursor that snaps to interactive elements, featuring magnetic hover states without React re-render lag.
- **Optimized Performance:** Pre-compiled SVGs, lazy-loaded WEBP assets, and CSS hardware-accelerated animations ensure buttery smooth 60FPS performance.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS Modules (for grain and glass effects)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have Node.js (v18+) and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd apex-trail
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

- `/src/components` - Reusable UI components (Hero, Navbar, Configurator, etc.)
- `/src/components/ui` - Primitive components (FadeIn, BlurText, CustomCursor)
- `/src/hooks` - Custom React hooks (e.g., `useParallax`, `useScrollPosition`)
- `/src/styles` - Global CSS styles including custom grain and glassmorphism utilities
- `/src/assets` - Highly optimized `.webp` imagery for fast loading

## 🎨 Design System

The platform strictly adheres to a tailored color palette:
- `apex-black`: `#0a0a0c`
- `apex-charcoal`: `#121214`
- `apex-ember`: `#E8552A`
- `apex-sand`: `#E5D9C5`
- `apex-white`: `#F4F4F5`

## 👨‍💻 Credits

Designed and Developed by **Ahmad Faraz**.
