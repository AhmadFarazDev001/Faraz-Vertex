import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  staggerChildren?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '', staggerChildren }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut", 
        delay,
        staggerChildren 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStaggerGroup: React.FC<{children: ReactNode, className?: string}> = ({ children, className }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStaggerItem: React.FC<{children: ReactNode, className?: string}> = ({ children, className }) => {
  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };
  
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
};
