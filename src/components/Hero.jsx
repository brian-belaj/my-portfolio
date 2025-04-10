import React from "react";
import ConnectedDots from "./ConnectedDots";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="hero"
      className="h-screen relative flex items-center justify-center bg-gray-500 bg-cover bg-center bg-no-repeat"
    >
      {/* Componente ConnectedDots */}
      <ConnectedDots />

      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>

      {/* Contenuto principale */}
      <div className="text-center relative z-9">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-orbitron">
          Brian Belaj
        </h1>
        <p className="mt-4 text-xl text-white font-inter">
          {" "}
          {t("hero.specialization")}{" "}
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block font-orbitron bg-white text-dark px-6 py-3 text-lg font-semibold hover:bg-transparent hover:text-white hover:border hover:border-white transition duration-300"
        >
          {t("hero.contact")}
        </a>
      </div>
    </section>
  );
};

export default Hero;
