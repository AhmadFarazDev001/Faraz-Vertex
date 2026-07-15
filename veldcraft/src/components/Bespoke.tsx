/**
 * Bespoke Experience Section
 * Highlights the custom craftsmanship aspect of the brand.
 * We use CSS mix-blend-mode (luminosity) on the images to match the obsidian background,
 * which transitions to normal on hover for a striking reveal effect.
 */
export default function Bespoke() {
  return (
    <section id="bespoke" className="relative w-full bg-background flex flex-col md:flex-row items-center justify-center p-8 md:p-24 py-12 md:py-24 overflow-hidden border-t border-white/5">
      <div className="w-full md:w-1/2 z-10 flex flex-col justify-center items-start space-y-6 md:space-y-8 pr-0 md:pr-24 mt-12 md:mt-0">
        <div className="text-white/50 font-body text-xs tracking-[0.4em] uppercase">The Bespoke Experience</div>
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-display text-foreground leading-tight">Measured for <br/><span className="italic text-muted-foreground">Perfection.</span></h2>
        <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-xl">
          Every foot is entirely unique. Our master artisans take over 50 precise measurements, carving a bespoke wooden last that perfectly mirrors your individual anatomy. The result is unparalleled comfort and a silhouette that is unmistakably yours.
        </p>
        <button className="liquid-glass px-8 py-4 md:px-12 md:py-6 text-xs md:text-sm tracking-[0.3em] font-body uppercase border border-white/20 hover:bg-white/10 transition-colors duration-500">
          Book an Appointment
        </button>
      </div>
      <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative mt-12 md:mt-0 group">
        <div className="absolute inset-0 liquid-glass rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
           <img src="/images/artisan_hands.webp" alt="Artisan Hands" className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105" />
        </div>
      </div>
    </section>
  )
}
