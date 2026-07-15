

/**
 * Global Noise Overlay Component
 * Injects a raw SVG feTurbulence filter as a data URI background image.
 * This provides the entire application with a cinematic, raw film grain texture.
 * Must include pointer-events-none to prevent blocking underlying interactions.
 */
export default function NoiseOverlay() {
  return <div className="fixed inset-0 z-50 bg-noise pointer-events-none mix-blend-overlay opacity-[0.15]"></div>;
}
