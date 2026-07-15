import React from 'react';
import { BlurText } from './ui/BlurText';
import { FadeIn, FadeInStaggerGroup, FadeInStaggerItem } from './ui/FadeIn';
import philosophyWeld from '../assets/philosophy_weld.webp';

export const Philosophy: React.FC = () => {
  return (
    <section id="about" className="min-h-[100dvh] bg-apex-charcoal relative">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 items-center gap-10 md:gap-16 px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        
        <div className="flex flex-col">
          <FadeIn>
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-apex-ember mb-6 block">
              OUR PHILOSOPHY
            </span>
          </FadeIn>
          
          <BlurText 
            text={"Crafted by\nhand, proven\nby gravity."} 
            className="font-heading italic text-apex-white text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.9] tracking-[-2px]" 
          />

          <FadeInStaggerGroup className="mt-8 flex flex-col gap-4 max-w-lg">
            <FadeInStaggerItem>
              <p className="text-base text-apex-sand/70 font-body font-light leading-relaxed">
                We don't mass-produce. Every APEX TRAIL mountain bike begins as a conversation: your riding style, your local terrain, your goals. From there, our master welders shape aerospace-grade titanium and carbon fiber into a frame built specifically for you.
              </p>
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <p className="text-base text-apex-sand/70 font-body font-light leading-relaxed">
                Each weld is X-rayed for absolute structural integrity. The geometry is tuned to your exact measurements. The finish is hand-sprayed in 11 coats.
              </p>
            </FadeInStaggerItem>
          </FadeInStaggerGroup>

          <FadeInStaggerGroup className="mt-8 flex flex-wrap gap-3">
            {['Titanium & Carbon', 'Custom Geometry', 'X-Ray Verified Welds', '11-Layer Paint', 'Lifetime Warranty'].map((pill) => (
              <FadeInStaggerItem key={pill}>
                <div className="liquid-glass rounded-full px-4 py-2 text-xs text-apex-white/80 font-body">
                  {pill}
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStaggerGroup>
        </div>

        <FadeIn delay={0.3} className="h-full">
          <div className="relative rounded-[2rem] overflow-hidden group h-[600px] lg:h-full min-h-[500px]">
            <img 
              src={philosophyWeld} 
              alt="Titanium frame weld" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-apex-charcoal to-transparent pointer-events-none" />
          </div>
        </FadeIn>
        
      </div>
    </section>
  );
};
