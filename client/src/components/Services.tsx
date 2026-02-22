import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "../types";

interface ServicesProps {
  services: Service[];
}

const serviceImageMap: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
  "2": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop",
  "3": "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
};

const getServiceImage = (id: string) =>
  serviceImageMap[id] ?? "https://picsum.photos/600/400";

const Services: React.FC<ServicesProps> = ({ services }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 border-b border-stone-200 pb-8">
          <h2 className="font-serif text-4xl md:text-6xl text-primary leading-tight">
            Keahlian <span className="italic text-stone-400">Kami</span>
          </h2>
          <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-secondary mt-4 md:mt-0">
            Layanan Pilihan
          </p>
        </div>

        {/* Service List */}
        <div className="flex flex-col">
          {services.map((service) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(service._id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative border-b border-stone-200 py-8 md:py-10 cursor-pointer transition-colors hover:bg-stone-50"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-4 md:gap-0">
                {/* Title */}
                <div className="md:w-1/3">
                  <h3 className="text-2xl md:text-3xl font-serif text-primary group-hover:pl-4 transition-all duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:w-1/3">
                  <p className="text-stone-500 text-sm max-w-xs leading-relaxed group-hover:text-primary transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Price + Arrow */}
                <div className="w-full md:w-1/3 flex justify-between md:justify-end items-center gap-4 mt-2 md:mt-0">
                  <span className="font-mono text-sm text-stone-400">
                    Mulai Rp {service.priceStart.toLocaleString("id-ID")}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hover Image Reveal (Desktop Only) */}
              <AnimatePresence>
                {hoveredId === service._id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="hidden lg:block absolute top-1/2 left-[20%] -translate-y-1/2 w-[300px] h-[200px] z-20 pointer-events-none overflow-hidden rounded-lg shadow-2xl"
                  >
                    <img
                      src={getServiceImage(service._id)}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
