import React, { useState } from "react";

const Caracteristicas = () => {
  // PERSONAJES
  const [seleccionarPersonaje, setSeleccionarPersonaje] = useState("Santiago");

  const Avatar = {
    Santiago: {
      nombre: "Santiago",
      poder: 75,
      ajayu: 50,
      vitalidad: 60,
      oscuridad: 30,
      img: "./images/PoseSantiago1.png", 
    },
    Carmen: {
      nombre: "Carmen Quilla",
      poder: 40,
      ajayu: 80,
      vitalidad: 70,
      oscuridad: 20,
      img: "./images/mujer1.png", 
    },
  };

  const personaje = Avatar[seleccionarPersonaje];

  return (
    <div id="personajes" className="relative w-full min-h-screen overflow-hidden py-10">
      {/* TITULO */}
      <div className="relative z-10 text-center mb-10">
        <h1
          className="text-5xl font-extrabold tracking-widest"
          style={{ textShadow: "0 0 15px rgba(212, 39, 8, 0.7)" }}
        >
          PERSONAJES
        </h1>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 px-8 lg:px-20">

      
        <div className="w-full lg:w-1/2 flex flex-col">
         
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-red-700 shadow-[0_0_25px_rgba(220,38,38,0.4)] mb-6">
            <h1 className="text-3xl font-semibold mb-4">{personaje.nombre}</h1>

          
            <div className="space-y-4 mb-10">
              
              {[
                { nombre: "Fuerza", valor: personaje.poder, color: "from-red-900 to-red-400" },
                { nombre: "Ajayu", valor: personaje.ajayu, color: "from-emerald-700 to-emerald-200" },
                { nombre: "Vitalidad", valor: personaje.vitalidad, color: "from-purple-800 to-purple-400" },
                { nombre: "Oscuridad", valor: personaje.oscuridad, color: "from-gray-900 to-gray-500" },
              ].map((stat) => (
                <div className="flex items-center" key={stat.nombre}>
                  <span className="w-28 text-gray-300 font-semibold">{stat.nombre}</span>
                  <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stat.color} shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-500`}
                      style={{ width: `${stat.valor}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 font-bold">{stat.valor}%</span>
                </div>
              ))}
            </div>

            {/* BOTONES */}
            <div className="flex gap-4">
              <button
                className="px-5 py-2 bg-gradient-to-r from-red-900 to-red-600 text-gray-100 rounded-md font-bold tracking-wide border border-red-700 shadow-lg hover:scale-105 transition-all duration-300"
              >
                Ajayu
              </button>

              <button
                className="px-5 py-2 bg-gradient-to-r from-emerald-800 to-emerald-500 text-gray-100 rounded-md font-bold tracking-wide border border-emerald-600 shadow-lg hover:scale-105 transition-all duration-300"
              >
                Oscuridad
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {Object.keys(Avatar).map((key) => (
              <div
                key={key}
                onClick={() => setSeleccionarPersonaje(key)}
                className={`relative bg-gray-900/70 backdrop-blur-md rounded-lg p-5 border flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105
                  ${seleccionarPersonaje === key ? "border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.7)]" : "border-gray-700"}`}
              >
                <div className="text-xl font-bold mb-2">{Avatar[key].nombre}</div>

                {/* IMAGEN */}
                <img
                  src={Avatar[key].img}
                  alt={Avatar[key].nombre}
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={personaje.img}
            alt={personaje.nombre}
            className="w-90 h-auto drop-shadow-[0_0_30px_rgba(16,185,129,0.5)] rounded-xl transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;
