import "boxicons/css/boxicons.min.css";

const Header = () => {
  // menu funcion
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    // Alternar la clase 'hidden' para mostrar u ocultar el menú móvil
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <header
      className="py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full 
    border-b-[0.3px] border-[#981f41] bg-black"
    >
      {/* seccion de izquierda */}
      <div className="flex lg:gap-14 gap-4 items-center">
        <img className="md:w-16 w-12" src="public\images\logo.png" alt="logo" />

        <div className="hidden md:flex gap-5 items-center">
          <button
            className="h-10 px-6 bg-gradient-to-r from-red-800 to-red-500 
  rounded-lg font-bold tracking-wide text-gray-100 shadow-lg shadow-red-900/50 
  hover:from-red-700 hover:to-red-500 hover:scale-105 transition-all duration-300"
          >
            Jugar Ahora
          </button>

         <a href="#historia">
           <button
            className="h-10 px-6 bg-gradient-to-r from-gray-900 to-gray-700 
  rounded-lg font-medium tracking-wide text-emerald-400 border border-emerald-500 
  shadow-md shadow-emerald-900/40 
  hover:from-gray-800 hover:to-gray-600 hover:text-emerald-300 hover:scale-105 transition-all duration-300"
          >
            Conocer la Historia
          </button>
         </a>
        </div>
      </div>


      <nav className="hidden md:flex lg:gap-8 gap-4">
        <a
          href="#personajes"
          className="relative py-1 text-lg hover:text-emerald-300
         transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bottom-0 after:transition-all
         hover:after:w-full text-nowrap"
        >
          <i class="bx bx-user-circle"></i> Personajes
        </a>

        <a
          href="#trailer"
          className="relative py-1 text-lg hover:text-emerald-300
         transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bottom-0 after:transition-all
         hover:after:w-full text-nowrap"
        >
          <i class="bx bx-video"></i> Trailer
        </a>

        <a
          href="#historia"
          className="relative py-1 text-lg hover:text-emerald-300
         transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bottom-0 after:transition-all
         hover:after:w-full text-nowrap"
        >
          <i class="bx bxs-book"></i> Historia
        </a>

        <a
          href="#"
          className="relative py-1 text-lg hover:text-emerald-300
         transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bottom-0 after:transition-all
         hover:after:w-full text-nowrap"
        >
          <i class="bx bx-joystick"></i> Descargar
        </a>
      </nav>

      <button onClick={toggleMobileMenu} className="text-3xl p-2 md:hidden">
        <i class="bx bx-menu"></i>
      </button>


      <div
        id="mobileMenu"
        className="hidden fixed top-14 right-0 left-0 bg-black p-5 md:hidden"
      >
        <nav className="flex flex-col gap-4 items-center">
          <a
            href=""
            className="relative py-1 text-lg hover:text-emerald-300
         transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bottom-0 after:transition-all
         hover:after:w-full text-nowrap"
          >
            <i class="bx bx-user-circle"></i> Personajes
          </a>

          <a
            href=""
            className="relative py-1 text-lg hover:text-emerald-300
         transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bottom-0 after:transition-all
         hover:after:w-full text-nowrap"
          >
            <i class="bx bx-planet"></i> Entorno
          </a>

          <a
            href=""
            className="relative py-1 text-lg hover:text-emerald-300
         transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bottom-0 after:transition-all
         hover:after:w-full text-nowrap"
          >
            <i class="bx bxs-chevrons-up"></i> Historia
          </a>

          <a
            href=""
            className="relative py-1 text-lg hover:text-emerald-300
         transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bottom-0 after:transition-all
         hover:after:w-full text-nowrap"
          >
            <i class="bx bx-joystick"></i> Descargar
          </a>
        </nav>

        <div className="flex flex-col gap-3 w-full mt-4">
          <button className="bg-red-800 py-2 rounded">Jugar Ahora</button>

          <button className="bg-gray-500 py-2 rounded">Descargar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
