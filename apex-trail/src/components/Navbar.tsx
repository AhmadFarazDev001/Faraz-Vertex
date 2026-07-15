import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Solid background if scrolled past 50px
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide if scrolling down and past 150px
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 px-6 md:px-12 lg:px-16 pt-5 pb-4 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-[#0A0A0A]/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl border-b border-apex-white/5 pt-4' : 'bg-transparent border-b border-transparent pt-5'
      }`}
    >
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        
        {/* Left: Logo */}
        <div className="flex items-baseline cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-heading italic text-3xl tracking-[-2px] text-apex-white">APEX</span>
          <span className="font-body font-light text-xs tracking-[0.5em] uppercase text-apex-ember ml-2 group-hover:text-white transition-colors duration-300">TRAIL</span>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className={`hidden md:flex transition-all duration-500 items-center rounded-full border ${
          isScrolled 
            ? 'gap-8 px-0 py-0 bg-black/0 backdrop-blur-none border-transparent shadow-none' 
            : 'gap-6 px-6 py-2.5 bg-black/20 backdrop-blur-md border-apex-white/10 shadow-lg'
        }`}>
          {['Bikes', 'Build Yours', 'Trails', 'Engineering', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleScrollTo(e, item.toLowerCase().replace(' ', '-'))}
              className={`text-sm font-body font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-apex-white/80 hover:text-apex-ember' : 'text-apex-white drop-shadow-md hover:text-apex-ember'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <div>
          <a
            href="#build-yours"
            onClick={(e) => handleScrollTo(e, 'build-yours')}
            className="gradient-ember rounded-full px-6 py-2.5 text-sm font-body font-semibold text-white inline-flex items-center hover:scale-105 hover:shadow-[0_0_20px_rgba(232,85,42,0.4)] transition-all duration-300"
          >
            Configure Yours
          </a>
        </div>
        
      </div>
    </motion.nav>
  );
};
