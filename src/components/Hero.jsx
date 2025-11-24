import React from 'react'

const Hero = () => {
  return (
    <main className='relative w-full h-screen overflow-hidden flex justify-center mb-[10%]'>
      <video src="/videos/hero1.mp4" 
      autoPlay 
      loop 
      muted
      playsInline
      className='w-full h-[95%] object-cover absolute top-0 first-letter:left-0 -z-10'>
      </video>

      <div className='absolute bottom-[15%] flex flex-col items-center gap-5'>
        <img className='md:w-[25rem] w-[20rem]' src="public\images\letras.png" alt="ajayu" />

        <h1 className='md:text-2xl text-1xl font-bold'>
          Explora, Captura, y Mundo Increíble
        </h1>
        <div className='md:w-[75%] w-[60%] h-[0.1px] bg-[#babaff]'>
        </div>

          <button
            className="h-10 px-6 bg-gradient-to-r from-red-800 to-red-500 
              rounded-lg font-bold tracking-wide text-gray-100 shadow-lg shadow-red-900/50 
            hover:from-red-700 hover:to-red-500 hover:scale-105 transition-all duration-300"
          >
            Jugar Ahora
          </button>


          <div className='flex items-center gap-5 text-3xl font-extrabold text-red-500'>
            <img className='md:h-16 h-12' src="public\images\logo.png" alt="logo"/> ELMO
          </div>
      </div>

      <div className='absolute bottom-40 lg:right-24 right-5 mt-24 animate-bounce sm:inline-block hidden'>
        <div className='flex flex-col items-center'>
          <div className='w-8 h-12 border-2 border-[#e01e1e] rounded-full flex justify-center pt-1'>
            <div className='w-1 h-3 bg-[#db0f0f] rounded-full animate-pulse'></div>
          </div>

          <p className='text-[#df2f2f] mt-2'>Baja Abajo</p>
        </div>
      
      </div>

    </main>
  )
}

export default Hero