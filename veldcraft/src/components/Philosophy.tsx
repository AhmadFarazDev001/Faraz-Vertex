import { useEffect, useRef } from 'react';
/**
 * Philosophy Marquee Component
 * Implements a continuous text scroll using pure CSS keyframes (via Tailwind's animate-marquee).
 * A CSS mask-image (linear-gradient) is applied to smoothly fade the text out at the edges
 * of the viewport, creating a seamless loop illusion without relying on JS clones.
 */
export default function Philosophy() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    let currentTranslate = 0;

    const loop = () => {
      // scrollY mapped to negative translation. Adjust multiplier for speed.
      const targetTranslate = window.scrollY * 0.3;
      
      // Lerp
      currentTranslate += (targetTranslate - currentTranslate) * 0.1;
      
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(-${currentTranslate}px, 0, 0)`;
      }
      
      frameId = requestAnimationFrame(loop);
    };
    
    loop();
    return () => cancelAnimationFrame(frameId);
  }, []);

  const text = "UNCOMPROMISING CRAFTSMANSHIP. ".repeat(4);

  return (
    <section className="w-full bg-background flex flex-col justify-center overflow-hidden py-16 md:py-24"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <div ref={textRef} className="will-change-transform whitespace-nowrap">
        <h2 className="text-[6rem] sm:text-[10rem] md:text-[15rem] font-display text-muted-foreground opacity-10">
          {text}
        </h2>
      </div>
    </section>
  );
}
