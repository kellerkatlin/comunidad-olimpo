"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

type Review = {
  quote: string;
  author?: string;
};

const POOL: Review[] = [
  {
    quote: "El empuje definitivo para salir de mi estancamiento.",
    author: "Camila R.",
  },
  { quote: "Ahora vivo con un propósito renovado.", author: "Luis M." },
  {
    quote: "Herramientas simples, impacto enorme en mi día a día.",
    author: "Valeria G.",
  },
  { quote: "Me ordené, avancé y recuperé la confianza.", author: "Javier P." },
  {
    quote: "La comunidad te sostiene cuando las excusas aparecen.",
    author: "María F.",
  },
  { quote: "Claridad + acción: resultados reales.", author: "Andrés T." },
];

function MarqueeRow({
  items,
  speed = 58, // segundos por ciclo (más alto = más lento)
}: {
  items: Review[];
  speed?: number;
}) {
  const prefersReduced = useReducedMotion();
  const doubled = useMemo(() => [...items, ...items], [items]); // loop continuo

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex py-2 gap-4 md:gap-6 will-change-transform"
        animate={prefersReduced ? {} : { x: ["0%", "-50%"] }}
        transition={
          prefersReduced
            ? {}
            : { duration: speed, ease: "linear", repeat: Infinity }
        }
        style={{ translateZ: 0 }}
        aria-hidden="true"
      >
        {doubled.map((r, i) => (
          <figure
            key={`${r.quote}-${i}`}
            className="
              w-[280px] md:w-[380px]
              rounded-2xl
              bg-white/60 dark:bg-white/10
              backdrop-blur-md
              border border-white/20 dark:border-white/15
              shadow-sm hover:shadow-md
              transition-shadow duration-300
              p-5 md:p-6
            "
          >
            {/* Estrellas plateadas */}
            <div className="flex items-center gap-1 mb-3 text-zinc-300">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 md:h-5 md:w-5" />
              ))}
              <span className="sr-only">5 de 5 estrellas</span>
            </div>

            <blockquote className="text-[15px] md:text-base leading-relaxed text-dark-text">
              “{r.quote}”
            </blockquote>
            {r.author && (
              <figcaption className="mt-3 text-sm text-medium-gray">
                — {r.author}
              </figcaption>
            )}
          </figure>
        ))}
      </motion.div>
    </div>
  );
}

export default function Reviews() {
  const row = useMemo(() => POOL, []);

  return (
    <section
      className="relative py-16 md:py-20"
      aria-label="Reseñas y calificaciones"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

      <div className="container mx-auto px-4  relative">
        <header className="text-center mb-10 md:mb-12">
          <h3 className="text-yellow-500 text-lg font-medium italic mb-2">
            Reseñas y calificaciones
          </h3>
        </header>

        {/* ÚNICA FILA */}
        <MarqueeRow items={row} speed={58} />
      </div>
    </section>
  );
}
