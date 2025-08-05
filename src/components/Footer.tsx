import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../public/logo.png";
import Image from "next/image";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-dark-text text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={logo}
                alt="Your Infinite Life"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Leading with love and compassion to help you discover your
              infinite potential and transform your life through personal growth
              and coaching.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-cyan-light">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-light transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-cyan-light">Contact</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>info@yourinfinitelife.com</p>
              <p>+1 (555) 123-4567</p>
              <p>
                123 Transformation Ave
                <br />
                Growth City, GC 12345
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Your Infinite Life. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-light transition-colors duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-light transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-light transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
