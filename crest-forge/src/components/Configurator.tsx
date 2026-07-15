import React, { useState, useEffect } from 'react';
import { BlurText } from './ui/BlurText';
import { FadeIn } from './ui/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

import frameImg from '../assets/bike_frame.webp';
import suspensionImg from '../assets/bike_suspension.webp';
import wheelsImg from '../assets/bike_wheels.webp';
import finishImg from '../assets/bike_finish.webp';

type Tab = 'Frame' | 'Suspension' | 'Wheels' | 'Finish';

const tabs: Tab[] = ['Frame', 'Suspension', 'Wheels', 'Finish'];

const tabImages: Record<Tab, string> = {
  Frame: frameImg,
  Suspension: suspensionImg,
  Wheels: wheelsImg,
  Finish: finishImg,
};

const optionsData = {
  Frame: [
    { id: 'carbon', name: 'Carbon Fiber', detail: '1,247g', price: 0 },
    { id: 'ti', name: 'Titanium', detail: '1,650g', price: 800 },
    { id: 'steel', name: 'Chromoly Steel', detail: '2,100g', price: -400 },
  ],
  Suspension: [
    { id: '150', name: '150mm Travel', detail: 'Trail', price: 0 },
    { id: '160', name: '160mm Travel', detail: 'All-Mountain', price: 150 },
    { id: '170', name: '170mm Travel', detail: 'Enduro', price: 300 },
  ],
  Wheels: [
    { id: '275', name: '27.5"', detail: 'Agile', price: 0 },
    { id: '29', name: '29"', detail: 'Fast Rolling', price: 100 },
    { id: 'mullet', name: 'Mixed Mullet', detail: 'Best of both', price: 150 },
  ],
  Finish: [
    { id: 'matte', name: 'Matte Stealth', detail: 'Standard', price: 0 },
    { id: 'gloss', name: 'Gloss Ember', detail: 'Premium', price: 250 },
    { id: 'raw', name: 'Raw Titanium', detail: 'Only for Ti', price: 0 },
    { id: 'camo', name: 'Forest Camo', detail: 'Custom', price: 400 },
  ],
};

export const Configurator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Frame');
  const [selections, setSelections] = useState({
    Frame: 'carbon',
    Suspension: '150',
    Wheels: '275',
    Finish: 'matte',
  });
  
  const [displayedPrice, setDisplayedPrice] = useState(4890);

  const basePrice = 4890;
  const targetPrice = basePrice + 
    (optionsData.Frame.find(o => o.id === selections.Frame)?.price || 0) +
    (optionsData.Suspension.find(o => o.id === selections.Suspension)?.price || 0) +
    (optionsData.Wheels.find(o => o.id === selections.Wheels)?.price || 0) +
    (optionsData.Finish.find(o => o.id === selections.Finish)?.price || 0);

  useEffect(() => {
    let animationFrameId: number;
    const animatePrice = () => {
      setDisplayedPrice(prev => {
        if (Math.abs(prev - targetPrice) < 2) return targetPrice;
        return prev + (targetPrice - prev) * 0.1;
      });
      animationFrameId = requestAnimationFrame(animatePrice);
    };
    animatePrice();
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPrice]);

  const handleSelect = (tab: Tab, id: string) => {
    setSelections(prev => ({ ...prev, [tab]: id }));
  };

  return (
    <section id="build-yours" className="min-h-[100dvh] bg-crest-black py-16 md:py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center">
      
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn>
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-crest-ember mb-6 block">
            BUILD YOUR MACHINE
          </span>
        </FadeIn>
        
        <BlurText 
          text={"Configure.\nCustomize.\nRide."} 
          className="font-heading italic text-crest-white text-[clamp(2.5rem,5vw,5rem)] leading-[0.85] tracking-[-2px] justify-center" 
        />
        
        <FadeIn delay={0.4}>
          <p className="text-base text-crest-sand/70 font-body font-light mt-6">
            Select your frame material, suspension travel, wheel size, and finish. We build it exactly to your spec.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.6} className="w-full max-w-5xl mt-12 md:mt-16">
        <div className="liquid-glass-dark rounded-[2rem] p-8 md:p-12 border border-crest-white/5">
          
          <div className="flex justify-center mb-8">
            <div className="liquid-glass rounded-full p-1 inline-flex overflow-x-auto max-w-full scrollbar-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-body font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab 
                      ? 'gradient-ember text-white shadow-lg' 
                      : 'text-crest-white/60 hover:text-crest-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[400px] md:h-[500px] flex items-center justify-center relative overflow-hidden rounded-xl mb-8">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                src={tabImages[activeTab]}
                alt={`${activeTab} view`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {optionsData[activeTab].map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(activeTab, option.id)}
                className={`liquid-glass rounded-xl p-4 text-left transition-all duration-300 border ${
                  selections[activeTab] === option.id 
                    ? 'border-crest-ember shadow-[0_0_15px_rgba(232,85,42,0.2)]' 
                    : 'border-transparent hover:border-crest-white/20'
                }`}
              >
                <div className="text-sm font-body font-semibold text-crest-white">{option.name}</div>
                <div className="text-xs font-body text-crest-sand/60 mt-1 flex justify-between items-center">
                  <span>{option.detail}</span>
                  {option.price !== 0 && (
                    <span className="text-crest-ember">
                      {option.price > 0 ? '+' : ''}{option.price}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-end">
            <span className="text-xs text-crest-sand/60 font-body">Starting from</span>
            <span className="text-4xl font-heading italic text-crest-ember">
              ${Math.round(displayedPrice).toLocaleString()}
            </span>
          </div>

        </div>
      </FadeIn>
      
      {/* Hidden images for instant tab switching */}
      <div className="hidden">
        {Object.values(tabImages).map((imgSrc) => (
          <img key={imgSrc} src={imgSrc} alt="preload" />
        ))}
      </div>
      
    </section>
  );
};
