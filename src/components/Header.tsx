"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../public/lgo.png";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
    { name: "Contacto", href: "#contact" },
    { name: "Beneficios", href: "#benefits" },
    { name: "Testimonios", href: "#testimonies" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center px-4 py-2 w-full justify-between">
          {/* Logo */}
          <div className="flex items-center ">
            <Image
              src={logo}
              alt="Your Infinite Life"
              className="md:h-16 h-14 w-auto"
            />
            <p className="hidden md:block text-md  lobster">Comunidad Olimpo</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex  items-center space-x-8 ">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg   transition-colors duration-300 font-bold
                   ${
                     !scrolled ? "hover:text-white/50" : "hover:text-black/50"
                   }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2  text-dark-text hover:text-cyan-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="absolute inset-x-0  top-0 mt-[71.7px] 
        rounded-b-2xl bg-white/80 backdrop-blur-md
        border border-white/20 shadow-lg
        transition-all duration-300 origin-top scale-y-100
        animate-[fadeIn_0.2s_ease-out]"
          >
            <div className="p-3">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="
                px-4 py-3 rounded-xl
                text-dark-text  hover:text-blue-700
                hover:bg-white/50 active:bg-white/60
                transition-colors duration-200 font-medium
              "
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
