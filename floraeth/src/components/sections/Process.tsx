import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Eye, PenTool, Sprout, Sun } from 'lucide-react';
import { STAGGER_CONTAINER, FADE_UP, SLIDE_LEFT, SLIDE_RIGHT } from '../../utils/animations';

const steps = [
  {
    title: "Discovery Visit",
    description: "We visit your space. We walk the grounds, study the light, test the soil, and listen to how you want to feel when you step outside.",
    icon: Eye
  },
  {
    title: "Concept & Design",
    description: "Our designers translate your vision into detailed plans. You will see 3D renders, plant palettes, and material samples before we break any ground.",
    icon: PenTool
  },
  {
    title: "Crafting Your Garden",
    description: "Our team of horticulturists and masons bring the design to life. We source every plant with care, often from growers we have known for decades.",
    icon: Sprout
  },
  {
    title: "Living & Growing",
    description: "A garden is never finished. We offer seasonal care plans so your space evolves beautifully year after year.",
    icon: Sun
  }
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Traveling Glowing Dot Animation
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothDotY = useSpring(dotY, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={containerRef}
      id="process" 
      className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[var(--color-background)] to-[hsl(150,14%,7%)] w-full"
    >
      {/* Section Header */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-16 md:mb-24"
      >
        <motion.p variants={FADE_UP} className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)] mb-4 font-semibold">
          How It Works
        </motion.p>
        <motion.h2 variants={FADE_UP} className="font-display text-[var(--color-foreground)] text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
          Your garden, from conversation to completion.
        </motion.h2>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative" ref={timelineRef}>
        
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-primary)]/40 to-transparent -translate-x-1/2 z-0" />
        
        {/* Traveling Dot */}
        <motion.div 
          className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-[var(--color-primary)] leaf-glow -translate-x-1/2 z-10"
          style={{ top: smoothDotY }}
        />

        {/* Steps */}
        <div className="flex flex-col gap-12 md:gap-24 relative z-10">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const slideVariant = isEven ? SLIDE_RIGHT : SLIDE_LEFT;
            
            return (
              <div 
                key={idx} 
                className={`flex flex-col md:flex-row w-full items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Desktop Empty Half */}
                <div className="hidden md:block md:w-1/2" />
                
                {/* Content Half */}
                <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'} pl-16 md:pl-0`}>
                  <motion.div
                    variants={slideVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.15 }}
                    className="bg-[var(--color-card)]/80 backdrop-blur-sm rounded-xl p-8 max-w-md relative border border-white/5"
                  >
                    {/* Large Background Number */}
                    <div className="absolute -top-6 -left-4 text-7xl font-display text-[var(--color-primary)]/10 select-none">
                      0{idx + 1}
                    </div>
                    
                    <step.icon className="w-8 h-8 text-[var(--color-primary)] mb-6 relative z-10" strokeWidth={1.5} />
                    
                    <h3 className="font-display text-xl md:text-2xl text-[var(--color-foreground)] mb-3 relative z-10">
                      {step.title}
                    </h3>
                    
                    <p className="font-editorial text-[var(--color-muted-foreground)] text-base leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
