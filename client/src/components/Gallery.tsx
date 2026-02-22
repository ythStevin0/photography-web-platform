import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioItem, CategoryFilter } from "../types";

interface GalleryProps {
  items: PortfolioItem[];
}

const CATEGORIES: CategoryFilter[] = ["All", "Wedding", "Portrait", "Commercial"];

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [filter, setFilter] = useState<CategoryFilter>("All");

  const filteredItems =
    filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-stone-100">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary">
            Karya Terpilih
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-6 md:gap-8 mt-6 lg:mt-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest transition-all duration-300 relative pb-1 ${
                  filter === cat
                    ? "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary"
                    : "text-stone-400 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid group relative cursor-pointer"
              >
                <div className="overflow-hidden bg-stone-200">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                  <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-3xl text-white italic">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs mt-4 font-mono">
                    {new Date(item.date).getFullYear()}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        <div className="text-center mt-16 md:mt-20">
          <button className="border border-primary text-primary px-8 md:px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
            Muat Arsip Lainnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
