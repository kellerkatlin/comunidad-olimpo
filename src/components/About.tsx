"use client";

import { Button } from "@/components/ui/button";
import coachSpeaking from "../../public/coach-speaking.jpg";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // Variants para evitar repetir props en cada motion.*
  const fadeLeft = {
    hidden: { x: -60, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };
  const fadeRight = {
    hidden: { x: 60, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      ref={sectionRef}
      className="relative py-20 lg:py-28"
    >
      {/* Fondo sutil coherente con Benefits */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Columna de texto */}
          <div className="relative px-4 sm:px-8 lg:px-12">
            {/* Panel “glass” decorativo detrás del texto en desktop */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="hidden lg:block absolute inset-y-0 right-0 w-2/5  bg-yellow-500/10 backdrop-blur-md  "
            />

            <motion.header
              variants={fadeLeft}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="relative z-10 space-y-2"
            >
              <h3 className="text-[#0B0B0B] text-2xl sm:text-3xl md:text-4xl italic">
                Sobre nosotros
              </h3>
              <h2
                id="about-title"
                className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text"
              >
                <span className="text-yellow-500">Superación personal</span>
                <br />y guía inspiradora
              </h2>
            </motion.header>

            {/* Divider + copy */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              transition={{ delay: 0.15 }}
              className="relative z-10 mt-6"
            >
              <div className="flex items-baseline gap-4">
                <div className="h-1 w-24 bg-[#0B0B0B]" />
                <p className="text-medium-gray">Nuestra esencia</p>
              </div>

              <div className="mt-4 space-y-3 text-lg leading-relaxed">
                <p>
                  Muchos se conforman con una existencia predecible, sin
                  desafíos ni crecimiento. La <strong>Comunidad Olimpo</strong>{" "}
                  es el catalizador para quienes buscan más. Aquí convergen
                  individuos decididos a trascender lo ordinario, tomar las
                  riendas de su destino y liberar su máximo potencial.
                </p>
                <p>
                  Si sientes que hay una versión más audaz y plena de ti
                  esperando ser descubierta, <em>tu viaje comienza aquí</em>.
                </p>
              </div>

              {/* CTA coherente con Benefits */}
              <div className="mt-8">
                <Link
                  href="#contact"
                  aria-label="Ir a contacto para comenzar el cambio"
                >
                  <Button className="bg-dark-text cursor-pointer hover:bg-yellow-500/60 hover:text-white text-yellow-500 px-8 py-3 text-lg rounded-2xl shadow-md">
                    ¡Comienza el cambio!
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Columna de imagen */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            transition={{ delay: 0.2 }}
            className="relative px-2 sm:px-4 lg:px-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <Image
                src={coachSpeaking}
                alt="Conferencista profesional presentando en escenario"
                className="w-full h-auto object-cover"
                priority
              />
              {/* Esquinas decorativas estilo Benefits */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-yellow-400" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-yellow-400" />
            </div>

            {/* Pequeño acento/glow */}
            <div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-yellow-500/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
