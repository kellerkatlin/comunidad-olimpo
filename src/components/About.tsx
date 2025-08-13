"use client";
import { Button } from "@/components/ui/button";
import coachSpeaking from "../../public/coach-speaking.jpg";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 flex items-center justify-center"
    >
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="px-16 space-y-6 relative">
            <motion.div
              className="hidden lg:block w-2/5 h-full absolute bg-gray-300/50 top-0 right-0"
              initial={{ x: -80, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            ></motion.div>

            <motion.div
              className="relative z-40"
              initial={{ x: -80, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h3 className="text-[#0B0B0B] text-2xl sm:text-3xl md:text-4xl italic">
                Sobre nosotros
              </h3>
              <h2 className="text-yellow-500 text-4xl md:text-5xl font-bold text-dark-text">
                Superación personal
                <br />y guía inspiradora
              </h2>
            </motion.div>

            <motion.div
              className="w-full flex gap-4 items-baseline relative z-40"
              initial={{ x: 80, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <div className="w-1/4">
                <div className="h-1 bg-[#0B0B0B] w-full"></div>
              </div>
              <div className="w-3/4 space-y-2">
                <p className="text-lg leading-relaxed">
                  Muchos se conforman con una existencia predecible, sin
                  desafíos ni crecimiento. La Comunidad Olimpo es el catalizador
                  para quienes buscan más. Aquí convergen individuos decididos a
                  trascender lo ordinario, tomar las riendas de su destino y
                  liberar su máximo potencial.
                </p>
                <p>
                  Si sientes que hay una versión más audaz y plena de ti
                  esperando ser descubierta, tu viaje comienza aquí.
                </p>
              </div>
            </motion.div>

            <a
              href="#contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 text-lg mt-8 shadow-lg transition-all duration-300 font-bold tracking-wide rounded-lg"
            >
              Comienza el cambio!
            </a>
          </div>

          {/* Image */}
          <motion.div
            className="relative px-4 py-8 lg:px-0"
            initial={{ x: 80, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative">
              <Image
                src={coachSpeaking}
                alt="Professional speaker presenting"
                className="w-full h-auto rounded-lg shadow-card object-cover"
              />
              {/* Decorative frame elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-yellow-400 mx-2"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-yellow-400 mx-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
