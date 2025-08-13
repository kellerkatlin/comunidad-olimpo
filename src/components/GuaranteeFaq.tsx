"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Gem, ShieldCheck, Clock3, Wallet } from "lucide-react";

const FAQ = [
  {
    q: "¿Cómo funciona la garantía de 7 días?",
    a: "Tienes 7 días desde tu registro para probar todo. Si no sientes una transformación significativa, solicitas el reembolso y te devolvemos el 100% sin preguntas.",
  },
  {
    q: "¿Qué pasos sigo para pedir el reembolso?",
    a: "Solo envía un mensaje a soporte con tu correo de compra dentro del periodo de garantía. Procesamos la devolución por el mismo medio de pago.",
  },
  {
    q: "¿Cuánto tarda el reembolso?",
    a: "Generalmente entre 24 y 72 horas hábiles. El tiempo exacto puede variar según tu entidad bancaria.",
  },
  {
    q: "¿Pierdo el acceso si pido reembolso?",
    a: "Sí, al emitirse el reembolso se revoca el acceso a la comunidad y a los recursos premium.",
  },
  {
    q: "¿Qué incluye mi acceso?",
    a: "Sesiones, workshops seleccionados, materiales y comunidad. Los eventos especiales o mentoring 1:1 pueden tener condiciones adicionales.",
  },
];

export default function GuaranteeFaq() {
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

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : 0.08,
      },
    },
  };

  return (
    <section id="garantia" className="relative py-16 md:py-20">
      {/* Fondo sutil acorde al sitio */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.header
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
            Garantía y preguntas frecuentes
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-dark-text text-3xl md:text-4xl font-bold tracking-tight"
          >
            Ingresa con tranquilidad:{" "}
            <span className="text-yellow-500">cero riesgo</span>
          </motion.p>
        </motion.header>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Tarjeta de Garantía */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="
              relative rounded-2xl
              bg-white/60 dark:bg-white/10
              backdrop-blur-md
              border border-yellow-500/20
              shadow-card
              p-6 md:p-8
            "
          >
            {/* Icono diamante con pulso */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                aria-hidden="true"
                animate={
                  reduced
                    ? {}
                    : {
                        scale: [1, 1.08, 1],
                        filter: [
                          "brightness(1)",
                          "brightness(1.15)",
                          "brightness(1)",
                        ],
                      }
                }
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="
                  inline-flex h-12 w-12 items-center justify-center
                  rounded-2xl border border-yellow-500/30 bg-yellow-500/10
                  shadow-sm
                "
              >
                <Gem className="h-6 w-6 text-yellow-500" />
              </motion.div>
              <div>
                <p className="text-xl font-semibold text-dark-text">
                  Garantía Olimpo
                </p>
                <p className="text-sm text-medium-gray">
                  Satisfacción 100% o reembolso
                </p>
              </div>
            </div>

            {/* Texto de garantía */}
            <p className="text-lg leading-relaxed text-dark-text italic">
              “Dispones de <strong>7 días</strong> para explorar. Si no
              experimentas una transformación significativa, te reembolsamos el{" "}
              <strong>100%</strong> de tu inversión.{" "}
              <strong>Sin complicaciones. Sin ataduras.</strong>”
            </p>

            {/* Badges de confianza */}
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {[
                { Icon: ShieldCheck, label: "Reembolso garantizado" },
                { Icon: Clock3, label: "7 días de prueba" },
                { Icon: Wallet, label: "Sin letra chica" },
              ].map(({ Icon, label }) => (
                <motion.li
                  key={label}
                  variants={fadeUp}
                  className="flex items-center gap-2 text-sm text-dark-text"
                >
                  <Icon className="h-4 w-4 text-yellow-500" />
                  {label}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-8"
            >
              <Button className="bg-dark-text hover:bg-yellow-500/60 hover:text-white text-yellow-500 px-8 py-3 text-lg rounded-2xl shadow-md">
                Comenzar sin riesgo
              </Button>
              <p className="mt-3 text-xs text-medium-gray">
                Al hacer clic aceptas nuestra política de reembolsos y términos
                de uso.
              </p>
            </motion.div>

            {/* Esquina decorativa */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-yellow-500" />
          </motion.article>

          {/* Preguntas frecuentes */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="
              rounded-2xl
              bg-white/60 dark:bg-white/10
              backdrop-blur-md
              border border-yellow-500/20
              shadow-card
              p-6 md:p-8
            "
          >
            <h4 className="text-xl font-semibold text-dark-text mb-4">
              Preguntas frecuentes
            </h4>

            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-dark-text hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-medium-gray leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
