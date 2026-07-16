import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Compass, Droplet, CalendarDays } from 'lucide-react';
import { STAGGER_CONTAINER, FADE_UP, SCALE_IN } from '../../utils/animations';

const services = [
  {
    title: "Custom Garden Design",
    description: "We work with you from vision to blueprint. Whether it is a rooftop terrace or a sprawling estate garden, we design spaces that feel like they belong.",
    icon: Compass,
    image: "/images/service_design.webp",
    className: "md:col-span-2 md:row-span-1 min-h-[400px] md:min-h-0",
  },
  {
    title: "Plant Sourcing & Curation",
    description: "We source rare and native plants from growers we trust. Every species is chosen for your climate, soil, and the story you want your garden to tell.",
    icon: Leaf,
    image: "/images/service_plants.webp",
    className: "md:col-span-1 md:row-span-2 min-h-[400px] md:min-h-[600px]",
  },
  {
    title: "Landscape Architecture",
    description: "Stone, water, wood, light. We shape the bones of your outdoor space with materials that age gracefully and structures that invite you to stay.",
    icon: Droplet,
    image: "/images/service_landscape.webp",
    className: "md:col-span-1 md:row-span-1 min-h-[400px] md:min-h-0",
  },
  {
    title: "Seasonal Maintenance",
    description: "Gardens are living things. Our seasonal care plans keep your space healthy, vibrant, and evolving beautifully year after year.",
    icon: CalendarDays,
    image: "/images/service_maintenance.webp",
    className: "md:col-span-1 md:row-span-1 min-h-[400px] md:min-h-0",
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-16 md:mb-20"
      >
        <motion.p variants={FADE_UP} className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)] mb-4 font-semibold">
          What We Do
        </motion.p>
        <motion.h2 variants={FADE_UP} className="font-display text-[var(--color-foreground)] text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
          From first seed to finished sanctuary.
        </motion.h2>
        <motion.p variants={FADE_UP} className="text-[var(--color-muted-foreground)] text-base md:text-lg max-w-2xl mx-auto mt-6 font-editorial">
          We bring intention and artistry to every layer of your outdoor space, combining horticultural mastery with architectural precision.
        </motion.p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={SCALE_IN}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className={`bg-[var(--color-card)] rounded-2xl overflow-hidden relative group cursor-pointer ${service.className}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[1]" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-[2] flex flex-col justify-end">
              <service.icon className="w-10 h-10 text-[var(--color-primary)] mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-[var(--color-foreground)] text-xl md:text-2xl mb-2">
                {service.title}
              </h3>
              
              {/* Expandable Description */}
              <div className="max-h-[200px] opacity-100 md:max-h-0 md:opacity-0 overflow-hidden md:group-hover:max-h-[200px] md:group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-[var(--color-muted-foreground)] text-sm md:text-base leading-relaxed mt-2">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <div className="text-[var(--color-primary)] text-sm tracking-wide flex items-center gap-2 mt-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
