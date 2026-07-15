import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for fade out
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A]"
        >
          <div className="relative">
            <h1 className="flex items-end">
              <span className="font-heading italic text-4xl tracking-[-2px] text-[#F5F0EB]">APEX</span>
              <span className="font-body font-light text-sm tracking-[0.5em] uppercase text-[#E8552A] ml-2 pb-1">TRAIL</span>
            </h1>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#E8552A] to-[#C27840]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
