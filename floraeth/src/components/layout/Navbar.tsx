import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { STAGGER_CONTAINER, FADE_UP } from '../../utils/animations';

/**
 * Navbar component with scroll-driven glassmorphism and mobile menu
 */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  
  // Transition background from transparent to dark glass on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.4)']
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 80],
    ['blur(0px)', 'blur(12px)']
  );

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ backgroundColor, backdropFilter }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-6 md:px-12 py-5">
          {/* Brand */}
          <div className="flex items-center gap-2 z-50">
            <Leaf className="w-6 h-6 text-[var(--color-primary)]" strokeWidth={1.5} />
            <span className="font-display text-xl md:text-2xl tracking-tight font-medium text-[var(--color-foreground)]">
              Floraeth
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-sm font-body text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors duration-300 tracking-wide"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="liquid-glass rounded-full px-6 py-2.5 text-sm font-body text-[var(--color-foreground)] cursor-pointer"
            >
              Design Your Garden
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 flex flex-col justify-center items-center w-8 h-8 relative cursor-pointer"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-[1.5px] w-6 bg-[var(--color-foreground)] rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-[1.5px] w-6 bg-[var(--color-foreground)] rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-[1.5px] w-6 bg-[var(--color-foreground)] rounded-full"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[var(--color-background)] flex flex-col items-center justify-center"
          >
            <motion.div
              variants={STAGGER_CONTAINER}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  variants={FADE_UP}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-3xl text-[var(--color-foreground)]"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                variants={FADE_UP}
                onClick={() => setIsOpen(false)}
                className="mt-8 liquid-glass rounded-full px-8 py-4 text-base font-body text-[var(--color-foreground)]"
              >
                Design Your Garden
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
