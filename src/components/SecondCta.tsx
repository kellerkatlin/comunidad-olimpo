"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, ArrowUpRight } from "lucide-react";

export default function SecondCta() {
  const [showFAB, setShowFAB] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShowFAB(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Variants suaves
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.7, ease: "easeOut" },
    },
  };
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.08 },
    },
  };

  return (
    <section id="cta-2" className="relative py-20 md:py-24">
      {/* Fondo sutil */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Texto + CTA */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold tracking-tight text-dark-text"
          >
            El futuro no espera a quienes dudan.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg md:text-xl leading-relaxed text-dark-text/90"
          >
            O tomas la iniciativa hoy o permaneces en el mismo lugar.{" "}
            <span className="text-yellow-600 font-semibold">
              La decisión es tuya.
            </span>
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <Link href="#contacto" aria-label="Acceder a Olimpo ahora">
              <Button className="bg-dark-text hover:bg-yellow-500/60 hover:text-white text-yellow-500 px-8 py-3 text-lg rounded-2xl shadow-md">
                ACCEDER A OLIMPO AHORA
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Video recomendado */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 md:mt-16 max-w-5xl mx-auto"
        >
          <div
            className="
              relative aspect-video overflow-hidden rounded-2xl
              bg-white/60 dark:bg-white/10 backdrop-blur-md
              border border-yellow-500/20 shadow-card
            "
          >
            {/* Placeholder con botón play.
                Reemplaza por tu iframe de YouTube/Vimeo si lo deseas. */}
            <div className="absolute inset-0 grid place-items-center">
              <button
                className="inline-flex items-center gap-2 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-5 py-3 text-dark-text shadow-sm hover:shadow-md transition"
                aria-label="Reproducir video recomendado"
              >
                <Play className="h-5 w-5 text-yellow-500" />
                Ver video (45–60s)
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Botón flotante (FAB) que aparece al hacer scroll + brillo cíclico */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={
          showFAB
            ? {
                opacity: 1,
                scale: 1,
                y: 0,
                // Brillo cada 5s: sombra + leve brillo
                boxShadow: reduced
                  ? undefined
                  : [
                      "0 0 0px rgba(234,179,8,0.0)",
                      "0 0 22px rgba(234,179,8,0.35)",
                      "0 0 0px rgba(234,179,8,0.0)",
                    ],
              }
            : {
                opacity: 0,
                scale: 0.9,
                y: 12,
                boxShadow: "0 0 0px rgba(0,0,0,0)",
              }
        }
        transition={
          showFAB
            ? {
                duration: reduced ? 0 : 0.35,
                ease: "easeOut",
                // ciclo de brillo
                boxShadow: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }
            : { duration: 0.25 }
        }
        className="fixed right-4  rounded-full bottom-5 md:right-6 md:bottom-7 z-50"
      >
        <Link href="#contact" aria-label="Acceder a Olimpo ahora (flotante)">
          <button
            className="
              group inline-flex items-center gap-2
              rounded-full px-5 py-3
              bg-dark-text text-yellow-500
              hover:bg-yellow-500/60 hover:text-white
              transition-colors shadow-lg
              ring-1 ring-yellow-500/30
            "
          >
            <span className="font-semibold">Acceder ahora</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
