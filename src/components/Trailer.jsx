import React from "react";
import { FaPlay } from "react-icons/fa";

const Trailer = () => {
  return (
    <section id="trailer" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* VIDEO DE FONDO */}
      <video 
        src="/videos/hero.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        autoPlay
        loop
        muted
      />

      {/* OSCURECIDO */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 text-center px-6">

        {/* TÍTULO */}
        <h1
          className="text-5xl font-extrabold mb-6 tracking-wide"
          style={{ textShadow: "0 0 20px rgba(0,255,150,0.8)" }}
        >
          TRAILER OFICIAL
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-gray-300 mb-10 text-lg tracking-wider">
          Ajayu: La Sombra de La Paz
        </p>

        {/* BOTÓN DE VER TRAILER */}
        <a
          href="/videos/hero.mp4"
          target="_blank"
          className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-600 px-6 py-3 rounded-xl font-bold tracking-wider transition-all text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-105"
        >
          <FaPlay className="text-white" /> Reproducir
        </a>

      </div>
    </section>
  );
};

export default Trailer;
