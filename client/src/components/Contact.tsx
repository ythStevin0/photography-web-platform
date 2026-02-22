import React from "react";
import { Instagram, Linkedin, MessageCircle, ArrowRight } from "lucide-react";
import type { Profile } from "../types";

interface ContactProps {
  profile: Profile;
}

const Contact: React.FC<ContactProps> = ({ profile }) => {
  return (
    <section id="contact" className="py-20 lg:py-32 px-6 md:px-12 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">

        {/* ── Left: Tagline & Socials ── */}
        <div className="lg:w-[40%] flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.85] tracking-tight">
              Punya <br />
              <span className="text-stone-500 italic font-light">Ide?</span>
            </h2>
            <p className="text-stone-400 text-sm md:text-base max-w-sm leading-relaxed mb-10 font-light">
              Kami sedang menerima proyek baru untuk musim mendatang. Ceritakan
              kisah Anda kepada kami, dan mari ciptakan sesuatu yang abadi.
            </p>
          </div>

          <div className="flex gap-4">
            <SocialLink href={`https://instagram.com/${profile.socials.instagram}`}>
              <Instagram className="w-4 h-4" />
            </SocialLink>
            <SocialLink href={`https://linkedin.com/in/${profile.socials.linkedin}`}>
              <Linkedin className="w-4 h-4" />
            </SocialLink>
            <SocialLink href={`https://wa.me/${profile.socials.whatsapp}`}>
              <MessageCircle className="w-4 h-4" />
            </SocialLink>
          </div>
        </div>

        {/* ── Right: Contact Links ── */}
        <div className="lg:w-[60%] flex flex-col justify-end space-y-12 lg:pl-10">
          <ContactLink
            label="Kirim Email"
            href={`mailto:hello@${profile.socials.instagram}.com`}
            display={`hello@${profile.socials.instagram}.com`}
          />
          <ContactLink
            label="Mulai Percakapan"
            href={`https://wa.me/${profile.socials.whatsapp}`}
            display="+62 856-0486-7218"
          />
        </div>
      </div>
    </section>
  );
};

/* ── Sub-components ── */

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-stone-400 hover:bg-white hover:text-primary hover:border-white transition-all duration-300"
  >
    {children}
  </a>
);

const ContactLink: React.FC<{ label: string; href: string; display: string }> = ({
  label,
  href,
  display,
}) => (
  <a href={href} className="group block cursor-pointer">
    <div className="flex flex-col border-b border-white/10 pb-6 group-hover:border-white/40 transition-colors duration-500">
      <div className="flex justify-between items-start mb-2">
        <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-stone-500 uppercase group-hover:text-stone-300 transition-colors">
          {label}
        </span>
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-stone-600 -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-500 ease-out" />
      </div>
      <span className="font-sans text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-tight leading-tight break-words group-hover:text-stone-200 transition-colors">
        {display}
      </span>
    </div>
  </a>
);

export default Contact;
