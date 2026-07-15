import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, className = '' }) => {
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: 0.7,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)',
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {words.map((word, index) => {
        if (word === '\n') {
          return <div key={index} className="basis-full h-0" />;
        }
        
        const parts = word.split('\n');
        return (
          <React.Fragment key={index}>
            {parts.map((part, pIndex) => (
              <React.Fragment key={`${index}-${pIndex}`}>
                {part && (
                  <motion.span variants={child} className="mr-[0.25em] inline-block">
                    {part}
                  </motion.span>
                )}
                {pIndex < parts.length - 1 && <div className="basis-full h-0" />}
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      })}
    </motion.div>
  );
};
