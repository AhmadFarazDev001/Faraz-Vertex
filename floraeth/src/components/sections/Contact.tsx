import React from 'react';
import { motion } from 'framer-motion';
import { STAGGER_CONTAINER, FADE_UP } from '../../utils/animations';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden w-full bg-gradient-to-r from-[hsl(150,18%,8%)] via-[hsl(150,20%,12%)] to-[hsl(150,18%,8%)]">
      
      {/* Decorative Botanical Silhouettes */}
      {/* Left Silhouette */}
      <motion.img
        src="/images/botanicle_silhouette.webp"
        alt=""
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -left-20 top-0 w-[500px] pointer-events-none opacity-20 invert mix-blend-screen"
        aria-hidden="true"
      />
      
      {/* Right Silhouette */}
      <motion.img
        src="/images/botanicle_silhouette.webp"
        alt=""
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
        className="absolute -right-16 bottom-0 w-[400px] scale-x-[-1] pointer-events-none opacity-20 invert mix-blend-screen"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center"
      >
        <motion.h2 variants={FADE_UP} className="font-display text-[var(--color-foreground)] text-3xl md:text-5xl leading-tight">
          Ready to see what your garden could become?
        </motion.h2>
        
        <motion.p variants={FADE_UP} className="font-editorial text-[var(--color-muted-foreground)] text-base md:text-lg mt-6 leading-relaxed max-w-xl mx-auto">
          Tell us about your space, your vision, and the feeling you want to come home to. We will handle the rest.
        </motion.p>
        
        <motion.button
          variants={FADE_UP}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-full px-12 py-5 text-base font-medium tracking-wide mt-10 leaf-glow cursor-pointer"
        >
          Book a Free Consultation
        </motion.button>
        
        <motion.p variants={FADE_UP} className="text-[var(--color-muted-foreground)] opacity-60 text-xs mt-4 tracking-wide">
          Usually responds within 24 hours.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
