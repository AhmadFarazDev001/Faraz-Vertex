import { useEffect, useRef } from 'react';

/**
 * Custom hook for smooth lerped parallax effects using requestAnimationFrame.
 * @param multiplier The speed multiplier for the parallax effect.
 * @param horizontal If true, parallax is applied horizontally (X axis) instead of vertically (Y axis).
 * @returns A React ref to attach to the target element.
 */
export function useParallax<T extends HTMLElement>(multiplier: number = 0.1, horizontal: boolean = false) {
  const ref = useRef<T>(null);
  
  useEffect(() => {
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    let animationFrameId: number;
    
    const handleScroll = () => {
      targetScroll = window.scrollY;
    };
    
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };
    
    const update = () => {
      if (Math.abs(targetScroll - currentScroll) > 0.1) {
        currentScroll = lerp(currentScroll, targetScroll, 0.08);
        
        if (ref.current) {
          const offset = currentScroll * multiplier;
          if (horizontal) {
            ref.current.style.transform = `translate3d(${offset}px, 0, 0)`;
          } else {
            ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(update);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    update(); // Start the loop
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [multiplier, horizontal]);
  
  return ref;
}
