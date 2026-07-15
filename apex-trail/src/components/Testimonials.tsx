import React from 'react';
import { BlurText } from './ui/BlurText';
import { FadeIn, FadeInStaggerGroup, FadeInStaggerItem } from './ui/FadeIn';

import jakeImg from '../assets/avatar_jake.webp';
import sarahImg from '../assets/avatar_sarah.webp';
import marcusImg from '../assets/avatar_marcus.webp';

const testimonials = [
  {
    id: 1,
    quote: "I've ridden factory carbon from every major brand. This frame is the first one that actually feels built around my exact measurements. It tracks through rough sections like it's on rails.",
    name: "Jake Morrison",
    title: "Pro Enduro Rider",
    avatar: jakeImg,
  },
  {
    id: 2,
    quote: "I'm not a pro. I work 9-to-5 and ride on weekends. But this bike gave me the speed and control to clear rock gardens I used to walk. Absolutely worth every penny.",
    name: "Sarah Chen",
    title: "Weekend Warrior",
    avatar: sarahImg,
  },
  {
    id: 3,
    quote: "The custom geometry changed everything. My cornering is faster, my line choice is sharper, and I'm hitting drops I used to ride around.",
    name: "Marcus Webb",
    title: "Bike Park Addict",
    avatar: marcusImg,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="about" className="bg-apex-charcoal py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-apex-ember mb-6 block">
              RIDER STORIES
            </span>
          </FadeIn>
          
          <BlurText 
            text={"What they say\nafter the drop."} 
            className="font-heading italic text-apex-white text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.9] tracking-[-2px] justify-center" 
          />
        </div>

        <FadeInStaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16">
          {testimonials.map((t) => (
            <FadeInStaggerItem key={t.id} className="h-full">
              <div className="liquid-glass rounded-[1.5rem] p-8 flex flex-col h-full border border-transparent hover:border-apex-white/10 transition-colors">
                
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-apex-ember fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <div className="mt-4 relative flex-grow">
                  <span className="absolute -left-2 -top-4 font-heading text-5xl text-apex-ember/30 leading-none select-none">
                    "
                  </span>
                  <p className="text-base text-apex-white/90 font-body font-light leading-relaxed italic relative z-10 pl-2">
                    {t.quote}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-apex-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <img src={t.avatar} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-body font-semibold text-apex-white">{t.name}</span>
                    <span className="text-xs text-apex-sand/60 font-body">{t.title}</span>
                  </div>
                </div>
                
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStaggerGroup>
        
      </div>
    </section>
  );
};
