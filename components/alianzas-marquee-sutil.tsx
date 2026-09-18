"use client"

import Image from "next/image"

// Generamos la lista automática para Imagen1.png hasta Imagen25.png en la carpeta /public/aliados/
const aliadosLogos = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Imagen${i + 1}`,
  src: `/aliados/Imagen${i + 1}.png`,
}))

export function AlianzasMarqueeSutil() {
  return (
    <section id="alianzas" className="py-14 bg-gradient-to-b from-white via-gray-50/50 to-white border-y border-gray-100/80 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-6 text-center">
        <span className="inline-block text-brand-teal font-bold text-xs tracking-[0.2em] uppercase mb-2 px-4 py-1.5 bg-brand-teal/10 rounded-full">
          Red de Cooperación
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-batangas">
          Aliados Estratégicos
        </h2>
      </div>

      {/* Marquee Track Container */}
      <div 
        className="relative w-full overflow-hidden flex py-2 group"
      >
        {/* Soft edge blur overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Continuous Animated Tape */}
        <div className="flex shrink-0 animate-marquee items-center gap-6 md:gap-10">

          {aliadosLogos.concat(aliadosLogos).map((aliado, index) => (
            <div
              key={`${aliado.id}-${index}`}
              className="relative w-32 h-20 md:w-44 md:h-24 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-teal/30 p-3.5 flex items-center justify-center transition-all cursor-pointer shrink-0 group hover:scale-105"
            >
              <div className="relative w-full h-full">
                <Image
                  src={aliado.src}
                  alt={aliado.name}
                  fill
                  className="object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    // Si alguna imagen aún no existe o cambia de extensión, oculta suavemente el contenedor vacío
                    const target = e.target as HTMLElement;
                    if (target && target.parentElement) {
                      target.parentElement.style.display = 'none';
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
