import React from 'react';
import { motion } from 'framer-motion';
import { STAGGER_CONTAINER, FADE_UP } from '../../utils/animations';

const articles = [
  {
    category: "Design",
    title: "Why your garden path matters more than you think",
    date: "June 2025",
    image: "/images/blog_1.webp"
  },
  {
    category: "Plants",
    title: "Five flowering vines that will transform any boring wall",
    date: "May 2025",
    image: "/images/blog_2.webp"
  },
  {
    category: "Seasonal",
    title: "Preparing your perennials for a stronger spring",
    date: "April 2025",
    image: "/images/blog_3.webp"
  }
];

const Journal: React.FC = () => {
  return (
    <section id="journal" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
      >
        <div className="flex flex-col">
          <motion.p variants={FADE_UP} className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)] mb-4 font-semibold">
            From the Journal
          </motion.p>
          <motion.h2 variants={FADE_UP} className="font-display text-[var(--color-foreground)] text-3xl md:text-5xl leading-tight">
            Notes from the garden.
          </motion.h2>
        </div>
        
        <motion.a 
          variants={FADE_UP}
          href="#"
          className="text-[var(--color-primary)] text-sm tracking-wide hover:underline"
        >
          View all articles &rarr;
        </motion.a>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {articles.map((article, idx) => (
          <motion.article 
            key={idx}
            variants={FADE_UP}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="rounded-xl overflow-hidden aspect-[4/3] mb-5 relative">
              <motion.img
                src={article.image}
                alt={article.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Category */}
            <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-body mb-3 font-semibold">
              {article.category}
            </p>
            
            {/* Title */}
            <h3 className="font-display text-[var(--color-foreground)] text-lg md:text-xl leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-300">
              {article.title}
            </h3>
            
            {/* Date */}
            <p className="text-[var(--color-muted-foreground)] text-sm mt-3 font-body">
              {article.date}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Journal;
