"use client";
import { Button } from "@/components/ui/button";
import TextType from "./animate/TextType";
import BlurText from "./animate/BlurText";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { CornerGlow } from "./animate/CornerGlow";

const Hero = () => {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBorder(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[100dvh]  flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      <CornerGlow side="left" />
      <CornerGlow side="right" />
      <div className="container  mx-auto px-4 text-center relative z-40">
        <div className="flex flex-col  lg:flex-row items-center justify-center  w-full h-full">
          {/* Contenido principal */}
          <div className="max-w-6xl  mx-auto relative flex-1 z-10">
            {/* Main Title */}
            <h1 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl playfair relative z-50 ">
              <TextType
                text={[
                  "Despierta tu Potencial. Transforma tu Realidad. Únete a la Comunidad Olimpo.",
                ]}
                typingSpeed={75}
                pauseDuration={1000}
                showCursor={false}
                className="font-semibold mt-14 md:mt-0 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] inline-block w-full"
              />
            </h1>

            <div
              className={`flex items-center justify-center py-1 transition-all duration-500 mb-4 ${
                showBorder ? "border-y-2 border-yellow-400" : ""
              } `}
            >
              <BlurText
                text="Deja atrás la inercia. Es el momento de actuar, superar tus límites y forjar la vida que siempre has deseado."
                delay={200}
                animateBy="words"
                direction="top"
                className="text-white text-md md:text-xl"
              />
            </div>

            {/* Call to Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-cyan-light text-[#0B0B0B] px-8 py-6 text-xl shadow-soft font-family-courgette hover:bg-yellow-500 transition-all duration-300"
              >
                <FaWhatsapp />
                Comienza el cambio!
              </Button>
            </motion.div>
          </div>
          {/* Imagen al lado */}
          <div className="[perspective:1000px] px-4">
            <div
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center",
                transform: "rotateY(-15deg)",
              }}
              className="w-[80vw] lg:w-[30vw] flex justify-center items-center mt-10 lg:mt-0"
            >
              <div className="w-full [backface-visibility:hidden] ">
                <Image
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
                  alt="Imagen grande"
                  width={1600}
                  height={900}
                  className="object-contain w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute w-[40vw] top-0 bottom-0 right-0 bg-blue-600/25 z-10 rounded-bl-[6rem]"></div>{" "} */}
    </section>
  );
};

export default Hero;
