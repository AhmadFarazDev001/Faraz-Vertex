import { MATERIALS_DATA } from '../lib/constants';

/**
 * Renders the Master Materials section showcasing the core physical assets of the brand.
 * We utilize CSS sticky positioning for the layout and pseudo-elements (via Tailwind classes like 'group-hover')
 * to manage the image scaling and opacity shifts without heavy JS animation libraries.
 */
export default function MasterMaterials() {
  return (
    <section className="relative w-full bg-background py-16 md:py-24">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto space-y-16 md:space-y-[10vh] pb-8 md:pb-0">
        {MATERIALS_DATA.map((material) => (
          <div 
            key={material.id}
            className="sticky top-[10vh] h-[80vh] w-full liquid-glass rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 group"
          >
            <img 
              src={material.image} 
              alt={material.name} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-70"></div>
            
            <div className="absolute bottom-16 left-6 md:bottom-24 md:left-8 text-white/50 font-body text-[10px] md:text-xs tracking-[0.3em] uppercase z-10">
              Material — {material.id}
            </div>
            <h3 className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-4xl sm:text-5xl md:text-7xl font-display text-foreground drop-shadow-2xl z-10">
              {material.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
