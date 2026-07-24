"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, HeartPulse, Leaf, Smile } from "lucide-react"

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
  { id: 1, name: "Universidad del Valle", description: "Apoyo en programas de alfabetización y acceso a educación superior para jóvenes de la Isla Cascajal.", linea: "Educación", icon: <BookOpen className="w-6 h-6 text-white" />, color: "bg-blue-600" },
  { id: 2, name: "Fundación Carvajal", description: "Dotación de bibliotecas comunitarias y formación docente continua.", linea: "Educación", icon: <BookOpen className="w-6 h-6 text-white" />, color: "bg-blue-500" },
  // Salud
  { id: 3, name: "Hospital Departamental", description: "Brigadas médicas mensuales y atención prioritaria para madres gestantes y primera infancia.", linea: "Salud", icon: <HeartPulse className="w-6 h-6 text-white" />, color: "bg-rose-500" },
  { id: 4, name: "Cruz Roja Colombiana", description: "Capacitación en primeros auxilios y prevención de enfermedades endémicas en el Pacífico.", linea: "Salud", icon: <HeartPulse className="w-6 h-6 text-white" />, color: "bg-rose-600" },
  // Huella Ambiental
  { id: 5, name: "CVC", description: "Proyectos de reforestación de manglares y educación ambiental comunitaria.", linea: "Huella Ambiental", icon: <Leaf className="w-6 h-6 text-white" />, color: "bg-emerald-500" },
  { id: 6, name: "WWF Colombia", description: "Conservación de la biodiversidad marina y prácticas de pesca sostenible.", linea: "Huella Ambiental", icon: <Leaf className="w-6 h-6 text-white" />, color: "bg-emerald-600" },
  // Bienestar
  { id: 7, name: "ACNUR", description: "Atención psicosocial y rutas de protección para población desplazada en asentamientos urbanos.", linea: "Bienestar", icon: <Smile className="w-6 h-6 text-white" />, color: "bg-amber-500" },
  { id: 8, name: "Comfandi", description: "Desarrollo de actividades recreativas, deporte y cultura para la integración familiar.", linea: "Bienestar", icon: <Smile className="w-6 h-6 text-white" />, color: "bg-amber-600" },
]

// Orbits config
const orbitas = [
  { linea: "Educación", size: 350, speed: "60s", borderColor: "border-blue-500/30" },
  { linea: "Salud", size: 500, speed: "80s", borderColor: "border-rose-500/30" },
  { linea: "Huella Ambiental", size: 650, speed: "100s", borderColor: "border-emerald-500/30" },
  { linea: "Bienestar", size: 800, speed: "120s", borderColor: "border-amber-500/30" },
]

export function AlianzasOrbital() {
  const [activeAliado, setActiveAliado] = useState<Aliado | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="relative w-full h-[900px] bg-[#050B14] overflow-hidden flex items-center justify-center font-sans">
      {/* Estrellas de fondo (Opcional, muy sutil) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050B14] to-[#050B14] z-0" />

      {/* Título Desktop */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 text-center hidden lg:block">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-batangas tracking-tight">Aliados <span className="text-brand-teal">Estratégicos</span></h1>
        <p className="text-white/60 font-medium text-lg">Las fuerzas que hacen posible UniverCiudad</p>
      </div>

      {/* Sistema Orbital (Desktop) */}
      <div className="hidden lg:flex relative w-full h-full items-center justify-center z-10 pt-24">
        
        {/* Centro: Logo de la Fundación */}
        <div className="absolute z-50 flex items-center justify-center w-36 h-36 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(45,156,219,0.3)]">
          <Image 
            src="/images/logo.jpg" 
            alt="Logo Fundación" 
            width={90} 
            height={90} 
            className="rounded-full object-cover invert grayscale brightness-200"
          />
        </div>

        {/* Órbitas */}
        {orbitas.map((orbita) => {
          const aliadosDeLinea = aliados.filter(a => a.linea === orbita.linea)
          const animationDuration = orbita.speed

          return (
            <div 
              key={orbita.linea}
              className={`absolute rounded-full border border-dashed ${orbita.borderColor} transition-all duration-500`}
              style={{ 
                width: orbita.size, 
                height: orbita.size,
                animation: `spin ${animationDuration} linear infinite`,
                animationPlayState: isHovering ? 'paused' : 'running',
                opacity: isHovering && activeAliado?.linea !== orbita.linea ? 0.3 : 1
              }}
            >
              {/* Planetas (Aliados) en esta órbita */}
              {aliadosDeLinea.map((aliado, index) => {
                const angle = (360 / aliadosDeLinea.length) * index
                const radius = orbita.size / 2
                const isThisHovered = activeAliado?.id === aliado.id

                return (
                  <div
                    key={aliado.id}
                    className="absolute top-1/2 left-1/2 w-0 h-0"
                    style={{
                      transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div 
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full ${aliado.color} shadow-lg flex items-center justify-center cursor-pointer transform transition-all duration-300 ring-4 ring-[#050B14] z-10 ${isThisHovered ? 'scale-125 z-50 ring-white/20 shadow-[0_0_30px_rgba(255,255,255,0.4)]' : 'scale-100 hover:scale-125'}`}
                      style={{
                        animation: `spin-reverse ${animationDuration} linear infinite`,
                        animationPlayState: isHovering ? 'paused' : 'running'
                      }}
                      onMouseEnter={() => {
                        setActiveAliado(aliado)
                        setIsHovering(true)
                      }}
                      onMouseLeave={() => {
                        setActiveAliado(null)
                        setIsHovering(false)
                      }}
                    >
                      {aliado.icon}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      {/* Info Card Tooltip (Desktop) */}
      <AnimatePresence>
        {activeAliado && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="hidden lg:block absolute bottom-12 right-12 z-50 w-[400px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-2xl ${activeAliado.color} shadow-lg`}>
                {activeAliado.icon}
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1">{activeAliado.linea}</p>
                <h3 className="text-2xl font-bold font-batangas leading-tight">{activeAliado.name}</h3>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed text-sm font-medium">
              {activeAliado.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile View: Grilla Elegante (Fallback) */}
      <div className="lg:hidden w-full h-full p-6 overflow-y-auto pt-32 pb-24 z-10 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 font-batangas tracking-tight">Aliados <span className="text-brand-teal">Estratégicos</span></h1>
          <p className="text-white/60">Trabajando juntos por UniverCiudad</p>
        </div>
        <div className="space-y-10 max-w-lg mx-auto">
          {orbitas.map(orbita => {
            const aliadosDeLinea = aliados.filter(a => a.linea === orbita.linea)
            if (aliadosDeLinea.length === 0) return null
            
            return (
              <div key={orbita.linea} className="space-y-4">
                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">{orbita.linea}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {aliadosDeLinea.map(aliado => (
                    <div key={aliado.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${aliado.color} shrink-0 shadow-lg`}>
                        {aliado.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{aliado.name}</h4>
                        <p className="text-white/60 text-sm">{aliado.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
