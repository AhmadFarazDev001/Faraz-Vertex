import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const mousePos = useRef({ x: -100, y: -100 });
  const isHovering = useRef(false);

  useEffect(() => {
    // Check if device supports hover
    const matchMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!matchMedia.matches) return;

    const updatePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        isHovering.current = true;
      } else {
        isHovering.current = false;
      }
    };

    const animate = () => {
      if (cursorRef.current) {
        const { x, y } = mousePos.current;
        cursorRef.current.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0) scale(${isHovering.current ? 1.5 : 1})`;
        cursorRef.current.style.backgroundColor = isHovering.current ? 'rgba(232,85,42,0.1)' : 'transparent';
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] transition-[background-color,transform] duration-200 ease-out hidden md:block"
      style={{
        border: '1.5px solid var(--color-crest-ember)',
        transform: 'translate3d(-100px, -100px, 0)'
      }}
    />
  );
};
