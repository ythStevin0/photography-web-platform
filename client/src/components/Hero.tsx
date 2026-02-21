import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import type { Profile } from "../types";

interface HeroProps {
  profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  const whatsappUrl = `https://wa.me/${profile.socials.whatsapp}?text=Halo, saya tertarik dengan jasa fotografi Luminari`;

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* ── Left Content ── */}
      <div className="w-full lg:w-[55%] min-h-[60vh] lg:min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-28 lg:pt-20 bg-background z-10 pb-10 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-secondary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 md:mb-6">
            Est. 2024
          </span>

          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-primary mb-6 md:mb-8">
            Visual <br />
            <span className="italic font-light text-stone-400">Yang</span>{" "}
            Bicara.
          </h1>

          <p className="text-secondary text-base md:text-xl max-w-md leading-relaxed mb-8 md:mb-12 font-light">
            {profile.description}
          </p>

          <div className="flex items-center gap-8">
            <a
              href="#portfolio"
              className="group flex items-center gap-3 text-primary font-semibold text-xs md:text-sm tracking-widest uppercase"
            >
              <span className="border-b border-primary pb-1 group-hover:border-transparent transition-all">
                Lihat Karya
              </span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Right Image ── */}
      <div className="relative w-full lg:w-[45%] h-[40vh] lg:h-screen lg:absolute lg:top-0 lg:right-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
            alt="Hero Photography – High End Portrait"
            className="w-full h-full object-cover grayscale contrast-125 brightness-90 lg:brightness-100"
          />
          <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply pointer-events-none" />
        </motion.div>
      </div>

      {/* ── Sticky WhatsApp Button ── */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex items-center gap-3 bg-primary text-white pl-1 pr-1 py-1 rounded-full shadow-2xl hover:bg-stone-800 transition-all duration-200"
        whileHover={{ scale: 1.1 }}
      >
        <div className="bg-green-500 rounded-full p-4 text-white">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;
