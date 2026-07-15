import React from 'react';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';
import { AnimatedHeading } from './ui/AnimatedHeading';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import heroBg from '../assets/hero_bg.webp'; // Note: images generated as webp

export const Hero: React.FC = () => {
  // We'll apply parallax to the background image
  const bgRef = useParallax<HTMLImageElement>(0.1);

  return (
    <section id="hero" className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-end pb-16 lg:pb-24 px-6 md:px-12 lg:px-16">
      
      <div className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          ref={bgRef}
          src={heroBg} 
          alt="Mountain biker descending trail" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-apex-black to-transparent z-[1]" />
      
      <div className="relative z-10 max-w-[1600px] mx-auto w-full">
        
        <motion.div 
          initial={{ filter: 'blur(12px)', opacity: 0, y: 30 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="liquid-glass rounded-full inline-flex items-center p-1 mb-8"
        >
          <span className="gradient-ember text-white text-xs font-semibold px-3 py-1 rounded-full">
            2026 COLLECTION
          </span>
          <span className="text-sm text-apex-white/80 pl-3 pr-4 font-body">
            Handcrafted Carbon & Titanium MTB Frames
          </span>
        </motion.div>

        <AnimatedHeading text={"Born for\nthe Wild."} />

        <motion.p 
          initial={{ filter: 'blur(12px)', opacity: 0, y: 30 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          className="text-base md:text-lg text-apex-sand/80 max-w-xl font-body font-light leading-relaxed mt-6"
        >
          Every APEX TRAIL frame is hand-welded, custom-fitted to your measurements, and engineered for punishing descents.
        </motion.p>

        <motion.div 
          initial={{ filter: 'blur(12px)', opacity: 0, y: 30 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a href="#build-yours" className="liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-body font-semibold text-apex-white flex items-center gap-2 hover:shadow-[0_0_15px_rgba(232,85,42,0.3)] hover:border-apex-ember transition-all duration-300 border border-transparent">
            Start Your Build <ArrowRight className="h-4 w-4" />
          </a>
          <button className="border border-apex-white/20 rounded-full px-8 py-3.5 text-sm font-body font-medium text-apex-white/80 flex items-center gap-2 hover:bg-white/5 transition-colors duration-300">
            Watch the Film <Play className="h-4 w-4" />
          </button>
        </motion.div>

        <motion.div 
          initial={{ filter: 'blur(12px)', opacity: 0, y: 30 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
          className="flex flex-wrap gap-6 mt-12"
        >
          <div className="flex flex-col">
            <span className="text-3xl font-heading italic text-apex-ember leading-none">1,247g</span>
            <span className="text-xs text-apex-sand/60 font-body mt-1">Lightest Frame Weight</span>
          </div>
          <div className="flex flex-col border-l border-apex-white/10 pl-6">
            <span className="text-3xl font-heading italic text-apex-ember leading-none">170mm</span>
            <span className="text-xs text-apex-sand/60 font-body mt-1">Max Travel Range</span>
          </div>
          <div className="flex flex-col border-l border-apex-white/10 pl-6">
            <span className="text-3xl font-heading italic text-apex-ember leading-none">100%</span>
            <span className="text-xs text-apex-sand/60 font-body mt-1">Hand-Built Precision</span>
          </div>
        </motion.div>

      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="h-6 w-6 text-apex-white/40" />
      </motion.div>
    </section>
  );
};
