"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, ArrowRight } from "lucide-react"

export function VideoIntroModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  // Ruta directa configurada para el archivo local en /public/videointro.mp4 o .webm/mov
  const videoSrc = "/videointro.mp4"

  useEffect(() => {
    // Verificar si el usuario ya vio la intro previamente en este navegador
    const hasSeenIntro = localStorage.getItem("fundacion_isla_has_seen_video_intro")
    if (!hasSeenIntro) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    localStorage.setItem("fundacion_isla_has_seen_video_intro", "true")
    setIsOpen(false)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      >
        {/* Video en pantalla completa */}
        <video
          autoPlay
          muted={isMuted}
          playsInline
          onEnded={handleClose}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src="/videointro.webm" type="video/webm" />
          <source src="/videointro.mov" type="video/quicktime" />
          Tu navegador no soporta reproducción de videos.
        </video>

        {/* Botones de control flotantes (Únicos elementos visibles) */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
          {/* Botón Mute / Unmute */}
          <button
            onClick={toggleMute}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all transform hover:scale-105 shadow-lg"
            title={isMuted ? "Activar Sonido" : "Silenciar"}
          >
            {isMuted ? <VolumeX className="w-6 h-6 text-white/70" /> : <Volume2 className="w-6 h-6 text-brand-teal" />}
          </button>

          {/* Botón Saltar */}
          <button
            onClick={handleClose}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-teal hover:bg-brand-teal/90 text-slate-900 font-bold text-sm backdrop-blur-md shadow-xl transition-all transform hover:scale-105 active:scale-95 group"
          >
            <span>Saltar</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
