"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function VirtualRadio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
        audioRef.current.removeAttribute('src')
        audioRef.current.load()
      } else {
        // Enlace de prueba mientras nos entregan el real
        audioRef.current.src = "https://server2.streaminghd.co/listen/ubuntu/radio.mp3"
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(error => {
              console.error("Error al reproducir audio:", error)
              // Simulamos el estado 'playing' para que puedas ver la animación del botón
              // aunque el audio falle (hasta tener el link definitivo).
              setIsPlaying(true)
            })
        }
      }
    }
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 pr-6 rounded-full shadow-2xl hover:bg-white/20 transition-colors"
    >
      <audio ref={audioRef} preload="none" className="hidden" />


      <button
        onClick={togglePlay}
        className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-teal shadow-[0_0_15px_rgba(42,101,115,0.6)] bg-white flex items-center justify-center group focus:outline-none focus:ring-4 ring-brand-teal/50"
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative"
        >
          {/* Logo comportándose como un disco de vinilo */}
          <Image
            src="/radio.jpeg"
            alt="Radio Logo"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Overlay semi-transparente al hacer hover para mostrar la acción */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {isPlaying ? (
            <div className="w-5 h-5 bg-white rounded-sm" /> /* Icono Cuadrado Stop */
          ) : (
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" /> /* Icono Triángulo Play */
          )}
        </div>

        {/* Punto central del disco (agujero del vinilo) */}
        <div className="absolute w-3 h-3 bg-white rounded-full border border-gray-200 z-10 shadow-inner" />
      </button>

      <div className="flex flex-col text-left">
        <span className="text-white font-bold text-lg leading-tight tracking-wide">Radio Institucional</span>
        <div className="flex items-center gap-2 mt-0.5">
          {isPlaying ? (
            <span className="flex items-center gap-1.5 text-brand-sand text-xs font-bold uppercase tracking-wider">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
              />
              Transmitiendo
            </span>
          ) : (
            <span className="text-white/80 text-sm font-medium">Haz clic para escuchar</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
