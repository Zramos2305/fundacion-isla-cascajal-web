"use client"

import { BookOpen, HeartPulse, Leaf, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"

type LineaEstrategica = "Educación" | "Salud" | "Huella Ambiental" | "Bienestar"

interface Aliado {
  id: number
  name: string
  description: string
  linea: LineaEstrategica
  icon: React.ReactNode
  color: string
}

const aliados: Aliado[] = [
  // Educación
  { id: 1, name: "Universidad del Valle", description: "Apoyo en alfabetización y acceso a educación superior.", linea: "Educación", icon: <BookOpen className="w-8 h-8 text-blue-600" />, color: "border-blue-200 hover:border-blue-400" },
  { id: 2, name: "Fundación Carvajal", description: "Dotación de bibliotecas comunitarias y formación docente.", linea: "Educación", icon: <BookOpen className="w-8 h-8 text-blue-600" />, color: "border-blue-200 hover:border-blue-400" },
  { id: 9, name: "SENA", description: "Programas de formación técnica y tecnológica para jóvenes.", linea: "Educación", icon: <BookOpen className="w-8 h-8 text-blue-600" />, color: "border-blue-200 hover:border-blue-400" },
  { id: 10, name: "Ministerio de Educación", description: "Articulación de políticas de inclusión educativa regional.", linea: "Educación", icon: <BookOpen className="w-8 h-8 text-blue-600" />, color: "border-blue-200 hover:border-blue-400" },

  // Salud
  { id: 3, name: "Hospital Departamental", description: "Brigadas médicas mensuales y atención prioritaria integral.", linea: "Salud", icon: <HeartPulse className="w-8 h-8 text-rose-600" />, color: "border-rose-200 hover:border-rose-400" },
  { id: 4, name: "Cruz Roja Colombiana", description: "Capacitación constante en primeros auxilios comunitarios.", linea: "Salud", icon: <HeartPulse className="w-8 h-8 text-rose-600" />, color: "border-rose-200 hover:border-rose-400" },
  { id: 11, name: "Secretaría de Salud", description: "Jornadas masivas de vacunación y prevención.", linea: "Salud", icon: <HeartPulse className="w-8 h-8 text-rose-600" />, color: "border-rose-200 hover:border-rose-400" },
  { id: 12, name: "Profamilia", description: "Talleres de educación en salud sexual y reproductiva.", linea: "Salud", icon: <HeartPulse className="w-8 h-8 text-rose-600" />, color: "border-rose-200 hover:border-rose-400" },

  // Huella Ambiental
  { id: 5, name: "CVC", description: "Proyectos de reforestación activa de manglares y humedales.", linea: "Huella Ambiental", icon: <Leaf className="w-8 h-8 text-emerald-600" />, color: "border-emerald-200 hover:border-emerald-400" },
  { id: 6, name: "WWF Colombia", description: "Conservación de la biodiversidad marina local.", linea: "Huella Ambiental", icon: <Leaf className="w-8 h-8 text-emerald-600" />, color: "border-emerald-200 hover:border-emerald-400" },
  { id: 13, name: "Parques Nacionales", description: "Cuidado de reservas naturales aledañas al territorio.", linea: "Huella Ambiental", icon: <Leaf className="w-8 h-8 text-emerald-600" />, color: "border-emerald-200 hover:border-emerald-400" },
  { id: 14, name: "Ecopetrol", description: "Apoyo en transición energética y jornadas de limpieza.", linea: "Huella Ambiental", icon: <Leaf className="w-8 h-8 text-emerald-600" />, color: "border-emerald-200 hover:border-emerald-400" },

  // Bienestar
  { id: 7, name: "ACNUR", description: "Atención psicosocial de primera línea para población desplazada.", linea: "Bienestar", icon: <Smile className="w-8 h-8 text-amber-600" />, color: "border-amber-200 hover:border-amber-400" },
  { id: 8, name: "Comfandi", description: "Desarrollo de actividades recreativas, deporte y cultura.", linea: "Bienestar", icon: <Smile className="w-8 h-8 text-amber-600" />, color: "border-amber-200 hover:border-amber-400" },
  { id: 15, name: "ICBF", description: "Protección integral a la primera infancia y nutrición.", linea: "Bienestar", icon: <Smile className="w-8 h-8 text-amber-600" />, color: "border-amber-200 hover:border-amber-400" },
  { id: 16, name: "Unicef", description: "Garantía de derechos de niños, niñas y adolescentes.", linea: "Bienestar", icon: <Smile className="w-8 h-8 text-amber-600" />, color: "border-amber-200 hover:border-amber-400" },
]

const lineas: { titulo: LineaEstrategica, speed: string, direction: 'normal' | 'reverse' }[] = [
  { titulo: "Educación", speed: "40s", direction: "normal" },
  { titulo: "Salud", speed: "50s", direction: "reverse" },
  { titulo: "Huella Ambiental", speed: "45s", direction: "normal" },
  { titulo: "Bienestar", speed: "55s", direction: "reverse" },
]

export function AlianzasMarquee() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16 text-center relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-batangas tracking-tight">
          Aliados <span className="text-brand-terra">Estratégicos</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium text-balance mb-8">
          Transformamos realidades gracias al respaldo de organizaciones líderes que comparten nuestro sueño de construir UniverCiudad.
        </p>
        <Button asChild size="lg" className="bg-brand-terra hover:bg-brand-terra/90 text-white rounded-full px-10 py-6 text-lg font-bold shadow-lg transition-transform hover:scale-105">
          <a href="mailto:info@fundacionislacascajal.org">Hazte Aliado</a>
        </Button>
      </div>

      {/* Marquees */}
      <div className="space-y-16 lg:space-y-20 relative z-10">
        {lineas.map((linea) => {
          const aliadosLinea = aliados.filter(a => a.linea === linea.titulo)
          
          return (
            <div key={linea.titulo} className="relative w-full flex flex-col">
              {/* Título de la franja */}
              <div className="container mx-auto px-4 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-4 font-batangas">
                  {linea.titulo}
                  <span className="h-[2px] bg-gray-100 flex-1 rounded-full" />
                </h3>
              </div>

              {/* Contenedor del Marquee */}
              <div className="flex overflow-hidden relative group w-full py-4">
                
                {/* Degradados laterales para difuminar los bordes (Efecto fade) */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                {/* Primera cinta */}
                <div 
                  className="flex shrink-0 min-w-full items-center justify-around gap-6 px-3 group-hover:[animation-play-state:paused] transition-all"
                  style={{ 
                    animation: `marquee${linea.direction === 'reverse' ? '-reverse' : ''} ${linea.speed} linear infinite` 
                  }}
                >
                  {aliadosLinea.map(aliado => (
                    <div 
                      key={aliado.id} 
                      className={`w-28 h-28 md:w-40 md:h-40 shrink-0 border-2 ${aliado.color} rounded-2xl md:rounded-3xl flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-default bg-white shadow-sm hover:z-30`}
                    >
                      <div className="scale-125 md:scale-150">
                        {aliado.icon}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Segunda cinta (Duplicado exacto para crear el loop sin fin) */}
                <div 
                  className="flex shrink-0 min-w-full items-center justify-around gap-6 px-3 group-hover:[animation-play-state:paused] transition-all"
                  aria-hidden="true"
                  style={{ 
                    animation: `marquee${linea.direction === 'reverse' ? '-reverse' : ''} ${linea.speed} linear infinite` 
                  }}
                >
                  {aliadosLinea.map(aliado => (
                    <div 
                      key={`${aliado.id}-dup`} 
                      className={`w-28 h-28 md:w-40 md:h-40 shrink-0 border-2 ${aliado.color} rounded-2xl md:rounded-3xl flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-default bg-white shadow-sm hover:z-30`}
                    >
                      <div className="scale-125 md:scale-150">
                        {aliado.icon}
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
