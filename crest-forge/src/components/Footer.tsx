import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { FadeIn, FadeInStaggerGroup, FadeInStaggerItem } from './ui/FadeIn';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-crest-black border-t border-crest-white/5 py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Top CTA Banner */}
        <FadeIn className="mb-16">
          <div className="liquid-glass-dark rounded-[2rem] p-12 md:p-16 text-center border border-crest-white/5 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-crest-ember/10 blur-[100px] rounded-full pointer-events-none" />
            
            <h2 className="font-heading italic text-crest-white text-4xl md:text-5xl lg:text-6xl leading-[0.85] tracking-[-2px] relative z-10">
              Ready to build<br />your legacy?
            </h2>
            <p className="text-base text-crest-sand/70 mt-4 max-w-lg mx-auto font-body font-light relative z-10">
              Your custom CREST FORGE build starts with a 15-minute consultation.
            </p>
            
            <a href="#build-yours" className="gradient-ember rounded-full px-10 py-4 text-base font-body font-semibold text-white mt-8 inline-flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(232,85,42,0.4)] transition-all duration-300 relative z-10">
              Start Your Build <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>

        {/* Footer Grid */}
        <FadeInStaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <FadeInStaggerItem className="col-span-2 md:col-span-1">
            <div className="flex items-baseline mb-4">
              <span className="font-heading italic text-3xl tracking-[-2px] text-crest-white">CREST</span>
              <span className="font-body font-light text-xs tracking-[0.5em] uppercase text-crest-ember ml-2">FORGE</span>
            </div>
            <p className="text-sm text-crest-sand/50 mt-4 font-body font-light max-w-[20ch]">
              Hand-built machines for the wild. Engineered in Boulder, Colorado.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-crest-white/40 hover:text-crest-ember transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="text-crest-white/40 hover:text-crest-ember transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="text-crest-white/40 hover:text-crest-ember transition-colors">
                <Activity className="w-5 h-5" />
              </a>
            </div>
          </FadeInStaggerItem>

          {/* Links Cols */}
          <FadeInStaggerItem>
            <h4 className="text-crest-white font-body font-semibold text-sm mb-4">Bikes</h4>
            <div className="flex flex-col gap-3">
              {['Trail', 'Enduro', 'Downhill', 'XC', 'E-MTB'].map(link => (
                <a key={link} href="#" className="text-sm text-crest-sand/50 font-body hover:text-crest-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </FadeInStaggerItem>
          
          <FadeInStaggerItem>
            <h4 className="text-crest-white font-body font-semibold text-sm mb-4">Company</h4>
            <div className="flex flex-col gap-3">
              {['Our Story', 'Workshop Tour', 'Riders', 'Careers', 'Press'].map(link => (
                <a key={link} href="#" className="text-sm text-crest-sand/50 font-body hover:text-crest-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </FadeInStaggerItem>

          <FadeInStaggerItem>
            <h4 className="text-crest-white font-body font-semibold text-sm mb-4">Support</h4>
            <div className="flex flex-col gap-3">
              {['Sizing Guide', 'Warranty', 'Shipping', 'Contact', 'FAQ'].map(link => (
                <a key={link} href="#" className="text-sm text-crest-sand/50 font-body hover:text-crest-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </FadeInStaggerItem>

        </FadeInStaggerGroup>

        {/* Bottom Bar */}
        <FadeIn delay={0.4} className="mt-16 pt-8 border-t border-crest-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-crest-sand/40 font-body text-center md:text-left">
            &copy; {currentYear} Farazon. All rights reserved. Hand-built in Boulder, Colorado. <br className="md:hidden" />
            <span className="md:ml-2">Made By Ahmad Faraz</span>
          </div>
          <div className="flex gap-6 text-xs text-crest-sand/40 font-body">
            <a href="#" className="hover:text-crest-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-crest-white transition-colors">Terms</a>
            <a href="#" className="hover:text-crest-white transition-colors">Cookies</a>
          </div>
        </FadeIn>

      </div>
    </footer>
  );
};
