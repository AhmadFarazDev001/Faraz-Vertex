import React from 'react';
import { BlurText } from './ui/BlurText';
import { FadeIn, FadeInStaggerGroup, FadeInStaggerItem } from './ui/FadeIn';

import whistlerImg from '../assets/trail_whistler.webp';
import moabImg from '../assets/trail_moab.webp';
import alpsImg from '../assets/trail_alps.webp';
import queenstownImg from '../assets/trail_queenstown.webp';
import finaleImg from '../assets/trail_finale.webp';
import rotoruaImg from '../assets/trail_rotorua.webp';

const trails = [
  { id: 1, name: 'Whistler Bike Park', location: 'BC, Canada', img: whistlerImg, span: 'col-span-2 row-span-2' },
  { id: 2, name: 'Slickrock', location: 'Moab, Utah', img: moabImg, span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
  { id: 3, name: 'Les Gets', location: 'French Alps', img: alpsImg, span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
  { id: 4, name: 'Queenstown', location: 'New Zealand', img: queenstownImg, span: 'col-span-2 row-span-1' },
  { id: 5, name: 'Finale Ligure', location: 'Italy', img: finaleImg, span: 'col-span-1 row-span-1' },
  { id: 6, name: 'Whakarewarewa', location: 'Rotorua, NZ', img: rotoruaImg, span: 'col-span-1 row-span-1' },
];

export const TrailGallery: React.FC = () => {
  return (
    <section id="trails" className="bg-apex-charcoal py-16 md:py-24 px-6 md:px-12 lg:px-20">
      
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn>
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-apex-ember mb-6 block">
            PROVEN ON THE MOUNTAIN
          </span>
        </FadeIn>
        
        <BlurText 
          text={"Tested where\nit counts."} 
          className="font-heading italic text-apex-white text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.9] tracking-[-2px] justify-center" 
        />
      </div>

      <FadeInStaggerGroup className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] lg:auto-rows-[250px] gap-4 max-w-[1600px] mx-auto">
        {trails.map((trail) => (
          <FadeInStaggerItem key={trail.id} className={`${trail.span} relative rounded-[1.5rem] overflow-hidden group cursor-pointer`}>
            <img 
              src={trail.img} 
              alt={trail.name} 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end h-full">
              <h3 className="font-heading italic text-apex-white text-xl md:text-2xl drop-shadow-md">
                {trail.name}
              </h3>
              
              <div className="flex items-center mt-2 overflow-hidden h-8">
                <div className="liquid-glass rounded-full px-3 py-1 text-xs text-apex-white/80 shrink-0 transform transition-transform duration-400 ease-out group-hover:-translate-y-[150%]">
                  {trail.location}
                </div>
                <div className="absolute flex items-center text-apex-ember text-sm font-body font-medium transform translate-y-[150%] opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  Explore Trail <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          </FadeInStaggerItem>
        ))}
      </FadeInStaggerGroup>
      
    </section>
  );
};
