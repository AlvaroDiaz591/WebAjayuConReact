import React from "react";

const Autores = () => {
  return (
    <section id="autores" className="w-full py-20 bg-gradient-to-b from-black to-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6 tracking-wide" style={{ textShadow: "0 0 15px rgba(16,185,129,0.12)" }}>
          Creadores de Ajayu
        </h2>

        <p className="text-gray-400 mb-10">Diseño y desarrollo por el equipo</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          {/* Alvaro */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-600 shadow-[0_6px_30px_rgba(16,185,129,0.15)]">
              <img src="/images/alvaro.png" alt="Alvaro Antonio Diaz Cerda" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <div className="text-lg font-bold">Alvaro Antonio Diaz Cerda</div>
              <div className="text-sm text-gray-400">Lead Developer</div>
            </div>
          </div>

          {/* Isaac */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-600 shadow-[0_6px_30px_rgba(16,185,129,0.15)]">
              <img src="/images/issac.png" alt="Isaac Alejandro Tola" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <div className="text-lg font-bold">Isaac Alejandro Tola</div>
              <div className="text-sm text-gray-400">Art & UX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Autores;
