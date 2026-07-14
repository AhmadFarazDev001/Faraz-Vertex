/**
 * Ready-to-Wear Collection Section
 * Symmetrical counterpart to the Bespoke section. 
 * Reverses the flex direction on mobile (flex-col-reverse) to maintain optimal content flow.
 */
export default function Collection() {
  return (
    <section id="collection" className="relative min-h-[100dvh] w-full bg-background flex flex-col-reverse md:flex-row items-center justify-center p-8 md:p-24 overflow-hidden">
      <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative mt-12 md:mt-0 group">
        <div className="absolute inset-0 liquid-glass rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
           <img src="/images/marble_oxford.png" alt="Marble Oxford" className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105" />
        </div>
      </div>
      <div className="w-full md:w-1/2 z-10 flex flex-col justify-center items-start space-y-8 pl-0 md:pl-24 mb-12 md:mb-0">
        <div className="text-white/50 font-body text-xs tracking-[0.4em] uppercase">Ready-to-Wear</div>
        <h2 className="text-5xl md:text-8xl font-display text-foreground leading-tight">The <br/><span className="italic text-muted-foreground">Collection.</span></h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-xl">
          Crafted with the exact same uncompromising standards as our bespoke commissions, our ready-to-wear collection offers immediate access to world-class footwear. Standard sizing, extraordinary quality.
        </p>
        <button className="liquid-glass px-12 py-6 text-sm tracking-[0.3em] font-body uppercase border border-white/20 hover:bg-white/10 transition-colors duration-500">
          Shop Now
        </button>
      </div>
    </section>
  )
}
