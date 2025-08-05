"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../public/logo.png";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Your Infinite Life" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-dark-text hover:text-cyan-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="outline"
              className="border-cyan-primary text-cyan-primary hover:bg-cyan-primary hover:text-white"
            >
              Book Session
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-dark-text hover:text-cyan-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark-text hover:text-cyan-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="outline"
                className="border-cyan-primary text-cyan-primary hover:bg-cyan-primary hover:text-white w-full"
              >
                Book Session
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
