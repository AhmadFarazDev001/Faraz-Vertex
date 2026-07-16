import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "I told them I wanted to feel like I was walking into a painting every morning. Six months later, that is exactly what they gave me. My garden is the first thing guests comment on, every single time.",
    name: "Sarah Mitchell",
    role: "Homeowner, Westchester",
    image: "https://i.pravatar.cc/150?u=sarahm"
  },
  {
    quote: "The team understood our restaurant's soul before we even finished explaining it. The garden they built for our patio doubled our evening bookings. People come just to sit in it.",
    name: "James Ortega",
    role: "Chef & Owner, Bloom & Basin",
    image: "https://i.pravatar.cc/150?u=jameso"
  },
  {
    quote: "We have worked with landscapers before, but nothing like this. Floraeth treats your garden like it matters, because to them, it genuinely does.",
    name: "Priya Nair",
    role: "Architect, Portland",
    image: "https://i.pravatar.cc/150?u=priyan"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 w-full overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/testimonial_bg.webp"
          alt="Soft-focus garden at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center">
        
        {/* Quote Carousel */}
        <div className="relative w-full h-[280px] md:h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full px-4"
            >
              {/* Large opening quote mark */}
              <div className="absolute -top-12 md:-top-16 left-0 md:-left-8 text-[100px] md:text-[140px] font-display text-[var(--color-primary)]/20 leading-none select-none">
                "
              </div>
              
              <blockquote className="font-editorial italic text-[var(--color-foreground)] text-xl md:text-2xl lg:text-3xl leading-relaxed relative z-10">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="mt-8 flex flex-col items-center justify-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-12 h-12 rounded-full border border-white/20 mb-3 object-cover shadow-lg"
                />
                <span className="text-sm tracking-wide uppercase text-[var(--color-muted-foreground)]">
                  <span className="text-[var(--color-foreground)] font-medium mr-2">{testimonials[activeIndex].name}</span> 
                  <span className="hidden md:inline">·</span> {testimonials[activeIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex flex-row gap-3 justify-center mt-12">
          {testimonials.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="relative w-2 h-2 rounded-full cursor-pointer"
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                <div className="absolute inset-0 rounded-full bg-white/30" />
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full bg-[var(--color-primary)] leaf-glow z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute inset-0 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
