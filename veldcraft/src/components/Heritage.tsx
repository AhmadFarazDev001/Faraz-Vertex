/**
 * Heritage Section
 * Serves as the brand's legacy block. The background image uses a radial gradient 
 * to draw the eye to the central typography while retaining a vintage, dusty aesthetic.
 */
export default function Heritage() {
  return (
    <section id="heritage" className="relative w-full bg-background flex flex-col items-center justify-center p-8 md:p-24 py-32 md:py-48 overflow-hidden z-20">
       <div className="absolute inset-0 z-0">
           <img src="/images/vintage_workshop.webp" alt="Vintage Workshop" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
       </div>
       <div className="relative z-10 flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
        <div className="text-white/50 font-body text-xs tracking-[0.4em] uppercase">Our Legacy</div>
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-display text-foreground leading-tight">A Century of <br/><span className="italic text-muted-foreground">Devotion.</span></h2>
        <p className="text-muted-foreground font-body text-base md:text-xl leading-relaxed">
          Founded in 1924, VELDCRAFT has remained entirely family-owned, refusing to compromise on the slow, meticulous art of traditional shoemaking. We do not chase trends. We forge heirlooms.
        </p>
      </div>
    </section>
  )
}
