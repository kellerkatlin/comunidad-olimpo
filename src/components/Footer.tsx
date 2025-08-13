import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../public/logo.png";
import Image from "next/image";

const Footer = () => {
  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Acerca de", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Eventos", href: "#events" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <footer className="bg-dark-text text-white py-12">
      <div className="container mx-auto px-4">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y eslogan */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={logo}
                alt="Tu Vida Infinita"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Liderando con amor y compasión para ayudarte a descubrir tu
              potencial infinito y transformar tu vida a través del crecimiento
              personal y el coaching.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4 text-cyan-light">
              Enlaces rápidos
            </h4>
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

          {/* Información de contacto */}
          <div>
            <h4 className="font-semibold mb-4 text-cyan-light">Contacto</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>info@yourinfinitelife.com</p>
              <p>+1 (555) 123-4567</p>
              <p>
                Av. Transformación 123
                <br />
                Ciudad del Crecimiento, GC 12345
              </p>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Tu Vida Infinita. Todos los derechos reservados.
          </p>

          {/* Redes sociales */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-light transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-light transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-light transition-colors duration-300"
              aria-label="Twitter"
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
