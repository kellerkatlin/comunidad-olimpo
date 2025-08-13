"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";

const TESTIMONIOS = [
  {
    quote:
      "Llegué buscando dirección, estancado en la rutina. Hoy tengo claridad, metas ambiciosas y un progreso innegable.",
    name: "Carlos M.",
    age: 32,
    avatar: "/avatars/avatar1.jpg",
  },
  {
    quote:
      "Nunca imaginé el alcance de mi propia capacidad. Ahora sé que puedo lograr mucho más de lo que creía posible.",
    name: "Sofía R.",
    age: 28,
    avatar: "/avatars/avatar2.jpg",
  },
  {
    quote:
      "Nunca imaginé el alcance de mi propia capacidad. Ahora sé que puedo lograr mucho más de lo que creía posible.",
    name: "Sofía R.",
    age: 28,
    avatar: "/avatars/avatar2.jpg",
  },
  {
    quote:
      "Nunca imaginé el alcance de mi propia capacidad. Ahora sé que puedo lograr mucho más de lo que creía posible.",
    name: "Sofía R.",
    age: 28,
    avatar: "/avatars/avatar2.jpg",
  },
];

export default function Testimonials() {
  const reduced = useReducedMotion();

  // Variants suaves y reutilizables
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.6, ease: "easeOut" },
    },
  };

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : 0.08,
      },
    },
  };

  return (
    <section
      id="testimonies"
      className="relative py-16 px-5 md:py-20"
      aria-label="Testimonios (prueba social)"
    >
      {/* Fondo suave */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h3
            variants={fadeUp}
            className="text-yellow-500 text-lg font-medium italic mb-2"
          >
            Testimonios
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-dark-text text-3xl md:text-4xl font-bold tracking-tight"
          >
            Historias reales de transformación
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {TESTIMONIOS.map((t, i) => (
            <motion.article
              key={`${t.name}-${i}`}
              variants={fadeUp}
              whileHover={reduced ? {} : { y: -2, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="
                relative rounded-2xl
                bg-white/60 dark:bg-white/10
                backdrop-blur-md
                border border-yellow-500/20
                shadow-card hover:shadow-lg
                transition-all duration-300
                p-6 md:p-8
                flex flex-col
              "
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-yellow-500 shadow-md">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-dark-text font-semibold">{t.name}</p>
                  <p className="text-sm text-medium-gray">{t.age} años</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed text-dark-text italic flex-grow">
                “{t.quote}”
              </blockquote>

              {/* Esquina decorativa */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-yellow-500" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
