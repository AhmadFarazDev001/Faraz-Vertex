import { useState } from 'react';

/**
 * DualPath Component
 * Presents the user with the primary brand divergence: Bespoke vs Collection.
 * We rely on hardware-accelerated CSS transitions (transition-[width]) for 
 * ultra-smooth split-screen hover effects, eliminating JavaScript layout thrashing.
 */
export default function DualPath() {
  const [hoveredPane, setHoveredPane] = useState<'left' | 'right' | null>(null);

  return (
    <section className="relative w-full h-[100vh] flex flex-col md:flex-row overflow-hidden">
      {/* Left Pane */}
      <div 
        className="relative w-full h-1/2 md:h-full md:w-[var(--desktop-w,50vw)] flex items-center justify-center will-change-[width] group border-b md:border-b-0 md:border-r border-white/10 transition-[width] duration-1500 ease-smooth"
        style={{ '--desktop-w': hoveredPane === 'left' ? '70vw' : hoveredPane === 'right' ? '30vw' : '50vw' } as React.CSSProperties}
        onMouseEnter={() => setHoveredPane('left')}
        onMouseLeave={() => setHoveredPane(null)}
      >
        <img
          alt="Bespoke"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          src="/images/bespoke_pane.png"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:via-black/20 group-hover:to-black/40 transition-all duration-1000"></div>
        
        <div className="absolute top-6 left-6 md:top-12 md:left-12 text-white/50 font-body text-xs tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300">
          01 / BESPOKE
        </div>
        
        <button className="liquid-glass px-6 py-3 md:px-12 md:py-6 text-xs md:text-sm tracking-[0.3em] font-body uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200 border border-white/20 hover:bg-white/10">
          Enter Bespoke
        </button>
      </div>

      {/* Right Pane */}
      <div 
        className="relative w-full h-1/2 md:h-full md:w-[var(--desktop-w,50vw)] flex items-center justify-center will-change-[width] group transition-[width] duration-1500 ease-smooth"
        style={{ '--desktop-w': hoveredPane === 'right' ? '70vw' : hoveredPane === 'left' ? '30vw' : '50vw' } as React.CSSProperties}
        onMouseEnter={() => setHoveredPane('right')}
        onMouseLeave={() => setHoveredPane(null)}
      >
        <img
          alt="Collection"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          src="/images/collection_pane.png"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:via-black/20 group-hover:to-black/40 transition-all duration-1000"></div>
        
        <div className="absolute top-6 right-6 md:top-12 md:right-12 text-white/50 font-body text-xs tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300 text-right">
          02 / COLLECTION
        </div>

        <button className="liquid-glass px-6 py-3 md:px-12 md:py-6 text-xs md:text-sm tracking-[0.3em] font-body uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200 border border-white/20 hover:bg-white/10">
          Shop Collection
        </button>
      </div>
    </section>
  );
}
