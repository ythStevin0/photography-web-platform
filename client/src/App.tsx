import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { usePublicData } from "./hooks/usePublicData";

export default function App() {
  const { profile, services, portfolio, loading, error } = usePublicData();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Show API warning once
  useEffect(() => {
    if (error) toast(error, { icon: "⚠️", duration: 5000 });
  }, [error]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="font-serif text-3xl text-primary animate-pulse">
          Luminari.
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-primary font-sans">
      <Toaster position="top-center" />

      <Navbar isScrolled={isScrolled} brandName="Luminari" />

      <Hero profile={profile} />

      <main>
        <Services services={services} />
        <Gallery items={portfolio} />
      </main>

      <Contact profile={profile} />

      <footer className="bg-primary text-stone-400 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-xs border-t border-stone-800 gap-4 md:gap-0">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Hak Cipta Dilindungi.
        </p>
        <p>Jakarta, Indonesia</p>
      </footer>
    </div>
  );
}
