import React from "react";

interface NavbarProps {
  isScrolled: boolean;
  brandName: string;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, brandName }) => (
  <nav
    className={`fixed top-0 w-full z-40 px-6 md:px-12 transition-all duration-500 ease-in-out flex justify-between items-center ${
      isScrolled
        ? "py-4 bg-background/80 backdrop-blur-md shadow-sm border-b border-stone-200/50"
        : "py-6 bg-transparent"
    }`}
  >
    <span className="font-serif text-2xl font-bold tracking-tighter cursor-pointer text-primary">
      {brandName}.
    </span>

    <a
      href="#contact"
      className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg border border-transparent ${
        isScrolled
          ? "bg-primary text-white hover:bg-stone-800"
          : "bg-primary text-white lg:bg-white lg:text-primary lg:hover:bg-stone-100"
      }`}
    >
      Hubungi Kami
    </a>
  </nav>
);

export default Navbar;
