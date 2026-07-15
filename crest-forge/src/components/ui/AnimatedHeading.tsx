import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ text, className = '', delay = 0.4 }) => {
  const lines = text.split('\n');
  const charDelay = 0.025;
  const duration = 0.6;

  let globalCharIndex = 0;

  return (
    <div className={className}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex flex-wrap" style={{ marginTop: lineIndex > 0 ? '-8px' : '0' }}>
          {line.split('').map((char, charIndex) => {
            const currentDelay = delay + (globalCharIndex * charDelay);
            globalCharIndex++;
            
            return (
              <motion.span
                key={`${lineIndex}-${charIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration,
                  delay: currentDelay,
                  ease: "easeOut"
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
};
