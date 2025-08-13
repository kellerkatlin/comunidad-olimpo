"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const BookSession = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-section text-[#0B0B0B]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl ribeye italic mb-4">
            Contáctanos
          </h3>
          <h2 className="text-yellow-500 text-center text-3xl md:text-4xl font-bold text-dark-text mb-6">
            ¡Conéctate con nosotros y transforma tu experiencia!
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <Card className="flex-1 border-2 border-yellow-400 flex items-center justify-center">
            <CardContent className="flex flex-col items-center justify-center p-0">
              <h2 className="text-yellow-500 text-center text-md md:text-3xl font-bold text-dark-text mb-6">
                Inicia hoy tu acceso exclusivo de 7 días.
                <br />
                La grandeza que llevas dentro te espera.
              </h2>

              <ExpandingRippleButton>
                <FaWhatsapp />
                EMPIEZA MI TRANSFORMACIÓN
              </ExpandingRippleButton>
            </CardContent>

            <CardFooter>
              <small className="text-center">
                Si no experimentas una transformación significativa, te
                reembolsamos el 100% de tu inversión. Sin complicaciones. Sin
                ataduras.
              </small>
            </CardFooter>
          </Card>

          <div className="flex flex-col items-center justify-center flex-1 gap-4">
            <Card className="w-full max-w-xs shadow-lg border-2 border-yellow-400 py-4">
              <CardContent className="flex flex-col items-center ">
                <FaBolt className="text-yellow-500 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-center">
                  Respuesta Inmediata
                </h3>
                <CardFooter className="px-2 mx-auto">
                  Soluciones en minutos
                </CardFooter>
              </CardContent>
            </Card>
            <Card className="w-full max-w-xs shadow-lg border-2 border-yellow-400 py-4">
              <CardContent className="flex flex-col items-center ">
                <FaUserCheck className="text-yellow-500 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-center">
                  Asesoría Personalizada
                </h3>
                <CardFooter className="px-2 mx-auto">
                  Atención especializada para ti
                </CardFooter>
              </CardContent>
            </Card>
            <Card className="w-full max-w-xs shadow-lg border-2 border-yellow-400 py-4">
              <CardContent className="flex flex-col items-center ">
                <FaShieldAlt className="text-yellow-500 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-center">
                  Garantía Total
                </h3>
                <CardFooter className="px-2 mx-auto">
                  100% de satisfacción garantizada
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSession;

// Componente botón con onda expansiva usando framer-motion

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBolt, FaShieldAlt, FaUserCheck, FaWhatsapp } from "react-icons/fa";

function ExpandingRippleButton({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      type="button"
      className="relative overflow-hidden bg-yellow-500 text-white px-16 py-6 text-md md:text-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            key="ripple"
            initial={{ opacity: 0.4, scale: 0 }}
            animate={{ opacity: 0.15, scale: 3 }}
            exit={{ opacity: 0, scale: 3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-white pointer-events-none"
            style={{ transformOrigin: "center" }}
          />
        )}
      </AnimatePresence>
    </Button>
  );
}
