import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { STAGGER_CONTAINER, FADE_UP, SCALE_IN } from '../../utils/animations';

const galleryItems = [
  { name: "The Hawthorne Estate", type: "Private Residence, Connecticut", image: "/src/assets/gallery_1.webp" },
  { name: "Bloom & Basin", type: "Restaurant Garden, Brooklyn", image: "/src/assets/gallery_2.webp" },
  { name: "Morning Tide Courtyard", type: "Coastal Villa, Malibu", image: "/src/assets/gallery_3.webp" },
  { name: "The Fernwood Project", type: "Corporate Campus, Portland", image: "/src/assets/gallery_4.webp" },
  { name: "Villa Solare", type: "Mediterranean Garden, Napa Valley", image: "/src/assets/gallery_5.webp" },
  { name: "Wildflower Meadow", type: "Country Estate, Vermont", image: "/src/assets/gallery_6.webp" },
];

const extendedItems = [...galleryItems, ...galleryItems, ...galleryItems, ...galleryItems];

const Gallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll by one card width approximately (45vw or 35vw based on breakpoint, we use a fixed pixel value for smooth interaction)
      const scrollAmount = window.innerWidth > 1024 ? window.innerWidth * 0.35 + 24 : window.innerWidth * 0.45 + 24;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth > 1024 ? window.innerWidth * 0.35 + 24 : window.innerWidth * 0.45 + 24;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const firstItem = container.children[0] as HTMLElement;
          
          if (firstItem) {
            // Calculate exact width of one original set of items (including gap-6 which is 24px)
            const setWidth = (firstItem.offsetWidth + 24) * galleryItems.length;
            
            // Silently jump back one set if we've scrolled far enough
            if (container.scrollLeft >= setWidth * 2) {
              container.scrollLeft -= setWidth;
            }
          }
          
          scrollRight();
        }
      }, 3500);
    };

    startAutoScroll();

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('mouseenter', () => clearInterval(interval));
      container.addEventListener('mouseleave', startAutoScroll);
      
      // For mobile devices where hover isn't really a thing, tap pauses it.
      container.addEventListener('touchstart', () => clearInterval(interval), { passive: true });
      container.addEventListener('touchend', startAutoScroll, { passive: true });
    }

    return () => {
      clearInterval(interval);
      if (container) {
        container.removeEventListener('mouseenter', () => clearInterval(interval));
        container.removeEventListener('mouseleave', startAutoScroll);
        container.removeEventListener('touchstart', () => clearInterval(interval));
        container.removeEventListener('touchend', startAutoScroll);
      }
    };
  }, []);

  return (
    <section id="gallery" className="py-24 md:py-32 overflow-hidden w-full">
      {/* Section Header */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6 md:px-12 max-w-7xl mx-auto mb-12 md:mb-16 flex flex-row justify-between items-end"
      >
        <div className="flex flex-col">
          <motion.p variants={FADE_UP} className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)] mb-4 font-semibold">
            Our Portfolio
          </motion.p>
          <motion.h2 variants={FADE_UP} className="font-display text-[var(--color-foreground)] text-3xl md:text-5xl leading-tight">
            Spaces that speak for themselves.
          </motion.h2>
        </div>
        
        {/* Navigation Arrows (Desktop) */}
        <div className="hidden md:flex flex-row gap-4">
          <motion.button
            variants={FADE_UP}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[var(--color-foreground)] cursor-pointer"
            aria-label="Scroll Left"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
          </motion.button>
          <motion.button
            variants={FADE_UP}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[var(--color-foreground)] cursor-pointer"
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
          </motion.button>
        </div>
      </motion.div>

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex flex-row gap-6 px-[7.5vw] md:px-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
        style={{ scrollBehavior: 'smooth' }}
      >
        {extendedItems.map((item, idx) => (
          <motion.div
            key={idx}
            variants={SCALE_IN}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="snap-center md:snap-start shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] aspect-[3/4] rounded-2xl overflow-hidden relative group cursor-pointer"
          >
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
            />
            
            {/* Bottom Info Strip */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end h-1/2">
              <h3 className="font-display text-[var(--color-foreground)] text-xl md:text-2xl">
                {item.name}
              </h3>
              <p className="text-[var(--color-muted-foreground)] text-sm mt-1 font-body">
                {item.type}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
