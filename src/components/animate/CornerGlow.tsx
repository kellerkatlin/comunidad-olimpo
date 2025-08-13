"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CornerGlowProps = {
  side?: "left" | "right";
};

/**
 * CornerGlow
 * - Genera un destello azul animado completamente en SVG (sin imágenes).
 * - Incluye franjas de luz que se desplazan y un relleno degradado con blur.
 */
export function CornerGlow({ side = "left" }: CornerGlowProps) {
  const isLeft = side === "left";

  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 h-full w-[42%] min-w-[220px] z-30",
        isLeft ? "left-0" : "right-0"
      )}
      aria-hidden="true"
    >
      {/* Fondo transparente, sin capa de glow */}
      {/* (Eliminado el degradado y blur) */}

      {/* SVG principal: forma curva + rayos */}
      <motion.svg
        viewBox="0 0 400 400"
        preserveAspectRatio="none"
        className={cn(
          "absolute inset-y-0",
          isLeft ? "left-[-6%] rotate-0" : "right-[-6%] rotate-180"
        )}
        width="100%"
        height="100%"
        initial={{ opacity: 0.9, scale: 1 }}
        animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.02, 1] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {/* Sin gradientes ni filtros */}

        {/* Sin masa azul curva, fondo transparente */}

        {/* Rayos: rectángulos finos inclinados que cruzan la esquina */}
        <g transform="translate(-60,0) rotate(-18 200 200)">
          {Array.from({ length: 6 }).map((_, i) => {
            const baseDelay = i * 0.6;
            return (
              <motion.rect
                key={i}
                x={-120}
                y={40 + i * 50}
                width={480}
                height={0.4} // Cambiado de 1 a 0.4 para hacer las líneas más delgadas
                fill="white"
                opacity={0.85}
                initial={{ translateX: isLeft ? -60 : 60, opacity: 0 }}
                animate={{
                  translateX: isLeft ? [-100, 180, 260] : [100, -180, -260],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3.8,
                  delay: baseDelay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </g>

        {/* Borde curvo interior para simular concavidad */}
        <motion.path
          d="M0,0 C160,40 260,120 400,200"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={2}
          initial={{ pathOffset: 0 }}
          animate={{ pathOffset: [0, 0.3, 0] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
}
