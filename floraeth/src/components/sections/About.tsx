import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'framer-motion';
import { STAGGER_CONTAINER, FADE_UP } from '../../utils/animations';

const AnimatedNumber: React.FC<{ value: number; label: string; suffix?: string }> = ({ value, label, suffix = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  const [displayValue, setDisplayValue] = React.useState('0');

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest).toString());
    });
  }, [springValue]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-4xl md:text-5xl font-display text-[var(--color-primary)]">
        {displayValue}{suffix}
      </div>
      <div className="text-sm text-[var(--color-muted-foreground)] mt-2 font-body tracking-wide">
        {label}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section 
      ref={sectionRef} 
      id="about"
      className="min-h-screen bg-gradient-to-b from-[var(--color-background)] via-[hsl(150,14%,7%)] to-[var(--color-background)] grid grid-cols-1 lg:grid-cols-2 gap-0 items-center overflow-hidden"
    >
      {/* Left Column (Content) */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-8 md:px-16 lg:px-20 py-20 lg:py-0 flex flex-col justify-center h-full z-10"
      >
        <motion.p
          variants={FADE_UP}
          className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)] font-body mb-6 font-semibold"
        >
          Our Philosophy
        </motion.p>
        
        <motion.div variants={FADE_UP} className="flex flex-col">
          <h2 className="font-display text-[var(--color-foreground)] text-3xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.05] tracking-tight">
            Gardens don't just grow.<br className="hidden md:block" /> They remember.
          </h2>
        </motion.div>

        <motion.p
          variants={FADE_UP}
          className="font-editorial text-[var(--color-muted-foreground)] text-base md:text-lg leading-relaxed mt-8 max-w-lg"
        >
          For over twelve years, we have been shaping gardens across the country. Not the catalog kind. The kind that feel inevitable once you walk through them, like they were always meant to be there.
        </motion.p>
        
        <motion.p
          variants={FADE_UP}
          className="font-editorial text-[var(--color-muted-foreground)] text-base md:text-lg leading-relaxed mt-6 max-w-lg"
        >
          We listen to the land before we draw a single line. Every project begins with soil, sunlight, and the way the wind moves through your space.
        </motion.p>

        {/* Stats Row */}
        <motion.div variants={FADE_UP} className="flex flex-row gap-12 mt-12">
          <AnimatedNumber value={350} label="Gardens Designed" suffix="+" />
          <AnimatedNumber value={12} label="Years of Craft" />
          <AnimatedNumber value={98} label="Clients Return" suffix="%" />
        </motion.div>
      </motion.div>

      {/* Right Column (Parallax Image) */}
      <div className="w-full h-full min-h-[500px] lg:min-h-screen overflow-hidden relative">
        <motion.img
          src="/images/about_garden.webp"
          alt="Lush garden path with morning light"
          style={{ y: parallaxY, scale: 1.15 }}
          className="w-full h-full object-cover origin-center"
        />
        {/* Subtle green radial glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(142,186,95,0.15)_0%,_transparent_60%)] pointer-events-none mix-blend-screen" />
      </div>
    </section>
  );
};

export default About;
