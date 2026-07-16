import React, { useRef, useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { FADE_UP } from '../../utils/animations';

const headingText = "Where nature meets artistry.";
const headingWords = headingText.split(' ');

const CHAR_ANIMATION: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { ease: [0.25, 0.46, 0.45, 0.94] } 
  }
};

const STAGGER_HEADING: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } }
};

const STAGGER_BUTTONS: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.8 } }
};

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);

  // Smooth fade-to-black loop effect to hide the video jerk
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Fade out to black in the last 0.8 seconds
      if (video.duration - video.currentTime < 0.8) {
        setVideoOpacity(0);
      } else {
        setVideoOpacity(1);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Video with seamless fade loop */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: videoOpacity }}
          src="/videos/hero_video.webm"
        />
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-16 md:mt-0">
        
        {/* Eyebrow */}
        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          className="text-sm font-body uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6 font-semibold drop-shadow-md"
        >
          Landscape Architecture & Floral Design
        </motion.p>

        {/* Heading Character Animation */}
        <motion.h1
          variants={STAGGER_HEADING}
          initial="hidden"
          animate="visible"
          className="font-display text-white text-[clamp(2.5rem,7vw,7rem)] leading-[1.1] md:leading-[1] tracking-tight max-w-5xl text-glow drop-shadow-xl"
        >
          {headingWords.map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
              {word.split('').map((char, charIdx) => (
                <motion.span key={charIdx} variants={CHAR_ANIMATION} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed font-editorial italic drop-shadow-lg"
        >
          We design living spaces that breathe, grow, and tell your story. Every petal, every stone, every winding path placed with purpose and care.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={STAGGER_BUTTONS}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12"
        >
          <motion.button
            variants={FADE_UP}
            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.97 }}
            className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-full px-10 py-4 text-sm font-medium tracking-wide leaf-glow cursor-pointer"
          >
            Start Your Project
          </motion.button>
          <motion.button
            variants={FADE_UP}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="liquid-glass rounded-full px-10 py-4 text-sm text-white tracking-wide cursor-pointer"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/80 to-transparent opacity-60 flex flex-col items-center justify-start">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-white mt-2 drop-shadow-md"
          />
        </div>
        <span className="text-xs text-white/80 tracking-widest uppercase mt-4 drop-shadow-md">
          Scroll to discover
        </span>
      </div>
    </section>
  );
};

export default Hero;
