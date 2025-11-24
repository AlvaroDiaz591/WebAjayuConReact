import React from "react";
import { FaMountain, FaSkull, FaBroadcastTower, FaStar } from "react-icons/fa";

const Historia = () => {
  return (
    <section id="historia" className="relative w-full min-h-screen text-gray-200">

      {/* 🎬 VIDEO DE FONDO */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src="./videos/hero.mp4" // <-- cambia por tu video
        autoPlay
        loop
        muted
      ></video>

      {/* OSCURECIDO */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 py-20 px-6 md:px-20">

        {/* TÍTULO GENERAL */}
        <div className="text-center mb-20">
          <h1
            className="text-5xl font-extrabold tracking-wide"
            style={{ textShadow: "0 0 25px rgba(0,255,150,0.8)" }}
          >
            HISTORIA DEL VIEJO MUNDO
          </h1>
          <p className="mt-3 text-gray-400 italic tracking-wider">
            Ajayu: La Sombra de La Paz
          </p>
        </div>

        {/* CONTENEDOR PRINCIPAL */}
        <div className="space-y-16 max-w-5xl mx-auto">

          {/* BLOQUE 1 */}
          <div className="bg-gray-900/60 p-8 rounded-xl border border-emerald-700 shadow-[0_0_25px_rgba(16,185,129,0.5)] backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <FaMountain className="text-emerald-400 text-3xl" />
              <h2 className="text-3xl font-bold text-emerald-300">El Despertar</h2>
            </div>
            <p className="leading-relaxed text-lg">
              Nadie pudo señalar el instante en que todo comenzó. La Paz, una ciudad viva
              entre montañas, ocultaba bajo sus calles un pulso antiguo, una fuerza esperando despertar.
              <br /><br />
              El 15 de julio de 2020, la tierra rugió como un monstruo milenario.
              Grietas abrieron la ciudad, el río Choqueyapu se desbordó arrancando consigo
              sombras que no pertenecían al mundo de los vivos.
              <br /><br />
              Había despertado el <b>Ajayu Oscuro</b>.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className="bg-gray-900/60 p-8 rounded-xl border border-red-700 shadow-[0_0_25px_rgba(220,38,38,0.5)] backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <FaSkull className="text-red-400 text-3xl" />
              <h2 className="text-3xl font-bold text-red-300">La Caída de La Paz</h2>
            </div>

            <p className="leading-relaxed text-lg">
              Criaturas arrancadas de los mitos tomaron forma:  
              Khari Khari hambrientos, duendes roba–almas, espectros con ojos vacíos.
              <br /><br />
              Las calles ardieron. Las familias se separaron.  
              La ciudad fue consumida en solo horas.
              <br /><br />
              Sin respuesta internacional, los sobrevivientes se ocultaron durante tres años
              entre escombros, polvo y lluvia negra.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className="bg-gray-900/60 p-8 rounded-xl border border-blue-700 shadow-[0_0_25px_rgba(56,189,248,0.5)] backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <FaBroadcastTower className="text-sky-400 text-3xl" />
              <h2 className="text-3xl font-bold text-blue-300">El Faro Kantuta</h2>
            </div>

            <p className="leading-relaxed text-lg">
              Del caos nació el Faro Kantuta, una enorme estructura que prometía salvación.
              <br /><br />
              Los Chukuta Pico Verde descendieron para proteger a la gente, pero las puertas
              se cerraron antes de tiempo, dejando a miles morir afuera.
              <br /><br />
              Dentro del Faro, la vida se volvió una prisión desigual: lujos arriba, miseria abajo.
              Aun así, era el único lugar seguro en el mundo.
            </p>
          </div>

          {/* BLOQUE 4 */}
          <div className="bg-gray-900/60 p-8 rounded-xl border border-purple-700 shadow-[0_0_25px_rgba(168,85,247,0.5)] backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <FaStar className="text-purple-300 text-3xl" />
              <h2 className="text-3xl font-bold text-purple-300">Un Nuevo Rumor</h2>
            </div>

            <p className="leading-relaxed text-lg">
              Doce años después, dos figuras cambian el destino del Viejo Mundo:
              <br /><br />
              <b>Carmen Quilla</b>, ingeniera transformada por una sombra luminosa,  
              líder de la resistencia y fundadora de la Casa de la Luz.
              <br /><br />
              <b>Santiago</b>, joven prodigio con fuerza y sentidos sobrehumanos,
              criado dentro del Faro y a punto de convertirse en capitán.
              <br /><br />
              Su llegada despierta nuevamente al Ajayu Oscuro.  
              La verdadera historia está por comenzar.
            </p>
          </div>

          {/* 🕒 LÍNEA DE TIEMPO */}
          <div className="mt-20">
            <h2 className="text-center text-4xl font-bold mb-10 tracking-wider"
              style={{ textShadow: "0 0 15px rgba(255,255,255,0.5)" }}>
              Línea de Tiempo del Desastre
            </h2>

            <div className="border-l-4 border-emerald-500 pl-6 space-y-10">

              {/* ITEM 1 */}
              <div>
                <h3 className="text-2xl font-bold text-emerald-300">2020 — Día del Despertar</h3>
                <p className="text-gray-300">El Ajayu Oscuro libera criaturas y destruye La Paz.</p>
              </div>

              {/* ITEM 2 */}
              <div>
                <h3 className="text-2xl font-bold text-red-300">2020-2023 — Años Oscuros</h3>
                <p className="text-gray-300">Supervivientes se esconden entre ruinas durante tres años.</p>
              </div>

              {/* ITEM 3 */}
              <div>
                <h3 className="text-2xl font-bold text-blue-300">2023 — Construcción del Faro Kantuta</h3>
                <p className="text-gray-300">El faro se cierra y divide a la sociedad.</p>
              </div>

              {/* ITEM 4 */}
              <div>
                <h3 className="text-2xl font-bold text-purple-300">2035 — Aparición de Carmen y Santiago</h3>
                <p className="text-gray-300">Comienza la leyenda de la Casa de la Luz.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Historia;
