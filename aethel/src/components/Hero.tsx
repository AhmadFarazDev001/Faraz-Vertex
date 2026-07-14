import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
/**
 * Hero Component
 * The primary entry view of the application. Employs a pseudo-element radial gradient
 * mapped over the background image to create atmospheric depth and cinematic vignette.
 */
export default function Hero() {
  const line1 = "Elegance in";
  const line2 = "Every Step.";
  
  const [revealedChars, setRevealedChars] = useState<Set<string>>(new Set());

  useEffect(() => {
    const newRevealed = new Set<string>();
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const animateLine = (line: string, lineIndex: number) => {
      Array.from(line).forEach((_char, charIndex) => {
        // Delay: (lineIndex * lineLength * 40ms) + (charIndex * 40ms)
        const delay = (lineIndex * line1.length * 40) + (charIndex * 40);
        
        const timeout = setTimeout(() => {
          newRevealed.add(`${lineIndex}-${charIndex}`);
          // Clone set to trigger re-render
          setRevealedChars(new Set(newRevealed));
        }, delay);
        timeouts.push(timeout);
      });
    };

    animateLine(line1, 0);
    animateLine(line2, 1);

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const renderAnimatedText = (text: string, lineIndex: number) => {
    return Array.from(text).map((char, index) => {
      const isRevealed = revealedChars.has(`${lineIndex}-${index}`);
      // CRITICAL: Render spaces as \u00A0
      const displayChar = char === ' ' ? '\u00A0' : char;
      
      return (
        <span
          key={index}
          className={cn(
            "transition-opacity duration-500 ease-out",
            isRevealed ? "opacity-100" : "opacity-0"
          )}
        >
          {displayChar}
        </span>
      );
    });
  };

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      {/* Background Image */}
      <img
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/hero_background.png"
      />
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 opacity-90 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="absolute bottom-16 left-12 z-10 flex flex-col">
        <h1 className="flex flex-col">
          <span className="text-[5rem] md:text-[8rem] font-display italic leading-none">
            {/* Wrap "Elegance" in non-italic, but since it's animated char by char, we'll apply it manually */}
            <em className="not-italic text-muted-foreground">
              {renderAnimatedText("Elegance", 0)}
            </em>
            {renderAnimatedText(" in", 0)}
          </span>
          <span className="text-[5rem] md:text-[8rem] font-display leading-none -mt-6">
            {renderAnimatedText(line2, 1)}
          </span>
        </h1>
      </div>
    </section>
  );
}
