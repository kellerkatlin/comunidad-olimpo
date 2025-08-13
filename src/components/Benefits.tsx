import { Button } from "@/components/ui/button";
import { Mountain, Gauge, Sparkles } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Desafía tus límites",
      desc: "La complacencia es el enemigo del progreso. Aquí te impulsaremos a ir más allá de lo conocido.",
      icon: Mountain,
    },
    {
      title: "Maximiza tu rendimiento",
      desc: "Estrategias probadas para optimizar tu desarrollo personal, físico y financiero.",
      icon: Gauge,
    },
    {
      title: "Conviértete en tu mejor versión",
      desc: "Experimenta una evolución constante que impactará positivamente cada aspecto de tu vida.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="benefits" className="py-20 relative">
      {/* fondo sutil con gradiente */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-yellow-500 text-lg font-medium italic mb-3">
            Beneficios
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text tracking-tight">
            Impulsa tu crecimiento
            <br className="hidden md:block" />
            con enfoque y propósito
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-medium-gray text-lg leading-relaxed">
            Presentado en 3 pilares con enfoque práctico para llevarte del punto
            A al punto B.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map(({ title, desc, icon: Icon }, i) => (
            <article
              key={title}
              className="
                group relative rounded-2xl
                bg-yellow-500/60 dark:bg-white/10
                backdrop-blur-md
                border border-yellow-500/20 
                shadow-card hover:shadow-soft
                transition-all duration-300
                shadow-sm
                p-6 md:p-7
              "
            >
              {/* Esquina decorativa */}
              <div className="absolute top-4 right-4 w-6 h-6 border border-yellow-500/50 rounded-sm" />

              {/* Icono */}
              <div
                className="
                  inline-flex items-center justify-center
                  h-12 w-12 rounded-2xl
                  bg-yellow-500/10 border border-yellow-500/30
                  group-hover:scale-105 transition-transform
                "
                aria-hidden="true"
              >
                <Icon className="h-6 w-6 text-yellow-500" />
              </div>

              {/* Texto */}
              <h3 className="mt-5 text-xl font-bold text-dark-text">{title}</h3>
              <p className="mt-3 text-medium-gray leading-relaxed">{desc}</p>

              {/* CTA sutil dentro de la card (opcional) */}
              <div className="mt-5">
                <a
                  href="#contacto"
                  className="text-sm font-semibold text-yellow-600 hover:text-yellow-500 transition-colors"
                >
                  Saber más →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="text-center mt-6">
          <Button className="bg-dark-text cursor-pointer hover:bg-yellow-500/60 hover:text-white text-yellow-500 px-8 py-3 text-lg rounded-2xl shadow-md">
            ÚNETE AHORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
