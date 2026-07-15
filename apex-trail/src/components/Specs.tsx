import React from 'react';
import { BlurText } from './ui/BlurText';
import { FadeIn, FadeInStaggerGroup, FadeInStaggerItem } from './ui/FadeIn';
import { Activity, Cog, Crosshair, Hexagon, Maximize, Zap } from 'lucide-react';

const specsData = [
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    name: 'Frame Weight',
    value: '1,247g',
    desc: 'Full carbon monocoque, built for maximum strength-to-weight ratio.',
  },
  {
    icon: <Maximize className="w-6 h-6 text-white" />,
    name: 'Travel',
    value: '170mm',
    desc: 'Fox 38 Factory GRIP2 damper, custom-tuned for each rider.',
  },
  {
    icon: <Crosshair className="w-6 h-6 text-white" />,
    name: 'Head Angle',
    value: '63.5°',
    desc: 'Slack enough for steep descents, dialed for efficient climbing.',
  },
  {
    icon: <Hexagon className="w-6 h-6 text-white" />,
    name: 'Wheel Size',
    value: '29"',
    desc: 'Maintains momentum over technical roots, rocks, and drops.',
  },
  {
    icon: <Cog className="w-6 h-6 text-white" />,
    name: 'Groupset',
    value: 'XX SL',
    desc: 'SRAM XX SL Eagle Transmission — wireless, 520% range.',
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    name: 'Stopping Power',
    value: '4-Piston',
    desc: 'Shimano Saint 4-piston, 220mm rotors for reliable, fade-free stopping power.',
  },
];

export const Specs: React.FC = () => {
  return (
    <section id="engineering" className="bg-apex-black py-24 lg:py-32">
      <div className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        
        <div className="max-w-3xl">
          <FadeIn>
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-apex-ember mb-6 block">
              ENGINEERING
            </span>
          </FadeIn>
          
          <BlurText 
            text={"Obsessive\nprecision."} 
            className="font-heading italic text-apex-white text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.9] tracking-[-2px]" 
          />
          
          <FadeIn delay={0.4}>
            <p className="text-base text-apex-sand/70 font-body font-light mt-6 max-w-lg">
              Every specification exists because a world-class rider demanded it. No compromises, no shortcuts.
            </p>
          </FadeIn>
        </div>

      </div>

      <div className="mt-16 w-full overflow-hidden">
        <div className="flex gap-6 px-6 md:px-12 lg:px-20 overflow-x-auto snap-x snap-mandatory scrollbar-hidden pb-8">
          <FadeInStaggerGroup className="flex gap-6 min-w-max">
            {specsData.map((spec, idx) => (
              <FadeInStaggerItem key={idx}>
                <div className="liquid-glass-dark rounded-[1.5rem] p-8 w-[320px] md:w-[380px] snap-center flex flex-col gap-4 border border-apex-white/5 hover:border-apex-white/10 transition-colors">
                  
                  <div className="w-14 h-14 liquid-glass rounded-xl flex items-center justify-center mb-2">
                    {spec.icon}
                  </div>
                  
                  <div>
                    <h4 className="font-heading italic text-apex-white text-2xl tracking-[-1px]">
                      {spec.name}
                    </h4>
                    <div className="text-4xl font-heading italic text-apex-ember leading-none mt-2">
                      {spec.value}
                    </div>
                  </div>
                  
                  <p className="text-sm text-apex-sand/70 font-body font-light mt-2 max-w-[28ch] leading-relaxed">
                    {spec.desc}
                  </p>
                  
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStaggerGroup>
        </div>
      </div>
      
    </section>
  );
};
