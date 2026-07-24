"use client"

import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

export function FloatingDona() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Ensure hydration match
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Solo mostrar el botón flotante si NO estamos en el inicio y NO estamos en la página de donación
  const showFloating = pathname !== "/" && pathname !== "/dona"

  return (
    <AnimatePresence>
      {showFloating && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 100, x: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50, x: 50 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.3 // Pequeño retraso para que aparezca después de que la página cargue
          }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <Link 
            href="/dona" 
            className="relative overflow-hidden group bg-brand-teal text-white rounded-full px-8 py-5 text-base font-bold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(45,156,219,0.6)] border border-brand-teal hover:border-white/50 shadow-2xl flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5 group-hover:animate-pulse" />
            <span className="relative z-10">Dona Ahora</span>
            {/* Efecto de brillo que pasa de izquierda a derecha en hover */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
