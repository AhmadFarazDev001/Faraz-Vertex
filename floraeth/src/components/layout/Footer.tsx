import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Globe, Mail, MessageCircle } from 'lucide-react';

/**
 * Footer component with brand info, links, and social icons
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-card)] border-t border-white/5 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-4 gap-10 md:gap-8">
        
        {/* Column 1: Brand */}
        <div className="flex flex-col md:col-span-1">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-[var(--color-primary)]" strokeWidth={1.5} />
            <span className="font-display text-xl text-[var(--color-foreground)]">Floraeth</span>
          </div>
          <p className="font-editorial text-[var(--color-muted-foreground)] text-sm mt-4 max-w-xs leading-relaxed">
            Living landscapes designed with intention. Based in the Northeast, working wherever the soil is willing.
          </p>
          
          <div className="mt-6 flex gap-4">
            {[Globe, MessageCircle, Mail].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.25)" }}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                aria-label={`Social Link ${idx}`}
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:contents gap-8 md:gap-0">
          {/* Column 2: Services */}
          <div className="flex flex-col">
          <h4 className="text-sm uppercase tracking-widest text-[var(--color-foreground)] mb-4 font-body">
            Services
          </h4>
          <div className="flex flex-col space-y-3">
            {['Garden Design', 'Landscape Architecture', 'Plant Sourcing', 'Seasonal Care', 'Consultation'].map((link) => (
              <a key={link} href="#" className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col">
          <h4 className="text-sm uppercase tracking-widest text-[var(--color-foreground)] mb-4 font-body">
            Company
          </h4>
          <div className="flex flex-col space-y-3">
            {['Our Story', 'Portfolio', 'Journal', 'Careers', 'Press'].map((link) => (
              <a key={link} href="#" className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
        </div>
        
        {/* Column 4: Contact */}
        <div className="flex flex-col md:col-span-1 mt-2 md:mt-0">
          <h4 className="text-sm uppercase tracking-widest text-[var(--color-foreground)] mb-4 font-body">
            Contact
          </h4>
          <a href="mailto:hello@floraeth.com" className="text-sm text-[var(--color-primary)] hover:underline mb-2">
            hello@floraeth.com
          </a>
          <span className="text-sm text-[var(--color-muted-foreground)] mb-2">
            1 (800) 555 GROW
          </span>
          <span className="text-sm text-[var(--color-muted-foreground)]">
            42 Fern Lane, Greenwich, CT 06830
          </span>
        </div>

      </div>

      <div className="border-t border-white/5 mt-12 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-[var(--color-muted-foreground)]">
            &copy; 2026 Farazon. All rights reserved.
          </span>
          <span className="text-xs text-[var(--color-muted-foreground)]">
            Made by Ahmad Faraz
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
