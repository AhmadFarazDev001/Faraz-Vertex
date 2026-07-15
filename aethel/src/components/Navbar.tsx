import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../lib/constants';

/**
 * Global Navigation Bar
 * Uses a scroll listener to implement a sticky hide-on-scroll-down behavior.
 * The listener is set to passive to ensure it doesn't block the main thread during scrolling.
 */
export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down and past the first 100px
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Passive true optimizes rendering performance since we don't call preventDefault
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}>
      <div className="liquid-glass rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center gap-6 md:gap-10 text-xs md:text-sm font-body tracking-widest uppercase overflow-x-auto max-w-[90vw] scrollbar-hide whitespace-nowrap">
        {NAV_LINKS.map(link => (
          <a key={link.label} href={link.href} className="hover:text-white transition-colors duration-300">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
