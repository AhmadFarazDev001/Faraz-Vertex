import { NAV_LINKS, FOOTER_LINKS_PRIMARY, SOCIAL_LINKS } from '../lib/constants';

/**
 * Footer Component
 * Serves as the global footer for the application. Contains newsletter subscription,
 * semantic navigation links mapped from centralized constants, and the dynamic copyright block.
 * The layout uses CSS Grid for responsive structuring.
 */
export default function Footer() {
  return (
    <footer className="relative min-h-[60vh] w-full bg-background flex flex-col justify-between overflow-hidden pt-32 pb-8 border-t border-white/5">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 z-10">
        <div className="space-y-6">
           <h3 className="font-display text-2xl text-foreground">Join the Atelier</h3>
           <p className="text-muted-foreground font-body text-sm max-w-xs">Subscribe to receive exclusive invitations and insights into our craft.</p>
           <div className="flex border-b border-white/20 pb-2">
             <input type="email" placeholder="Email Address" className="bg-transparent outline-none flex-grow text-sm font-body text-foreground placeholder:text-white/30" />
             <button className="text-xs tracking-[0.2em] font-body uppercase text-white/50 hover:text-white transition-colors">Submit</button>
           </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 text-muted-foreground font-body text-xs uppercase tracking-[0.2em]">
           <div className="flex flex-col space-y-4">
             {NAV_LINKS.map(link => (
               <a key={link.label} href={link.href} className="hover:text-foreground transition-colors">
                 {link.label}
               </a>
             ))}
           </div>
           <div className="flex flex-col space-y-4">
             {FOOTER_LINKS_PRIMARY.map(link => (
               <a key={link.label} href={link.href} className="hover:text-foreground transition-colors">
                 {link.label}
               </a>
             ))}
           </div>
        </div>

        <div className="flex flex-col space-y-4 text-muted-foreground font-body text-xs uppercase tracking-[0.2em] md:text-right">
           {SOCIAL_LINKS.map(link => (
             <a key={link.label} href={link.href} className="hover:text-foreground transition-colors">
               {link.label}
             </a>
           ))}
        </div>
      </div>
      
      {/* Fluid Typography Block
          We use clamp() for the brand typography to ensure fluid scaling across all viewports 
          without needing complex media queries. The radial gradient overlay provides atmospheric depth. */}
      <div className="w-full flex justify-center mt-auto pt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-0"></div>
        <h1 
          className="font-display font-black tracking-tighter text-transparent bg-clip-text relative z-10 mb-8 md:mb-0"
          style={{ 
            fontSize: 'clamp(4rem, 18vw, 24rem)',
            lineHeight: 0.75,
            backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.1) 100%)',
            textShadow: '0 10px 50px rgba(255,255,255,0.1)'
          }}
        >
          AETHEL
        </h1>
        
        <div className="absolute bottom-[-1rem] left-0 w-full flex flex-col md:flex-row justify-between items-center px-8 text-[10px] text-white/30 uppercase tracking-[0.3em] font-body z-20">
          <span>&copy; {new Date().getFullYear()} Farazon</span>
          <span className="mt-2 md:mt-0">Made by Ahmad Faraz</span>
        </div>
      </div>
    </footer>
  );
}
