"use client"

import { useState, useEffect } from "react"
import { Eye, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

interface VisitorCounterProps {
  /** Cifra inicial base sobre la cual se acumularán las visitas */
  initialCount?: number
}

export function VisitorCounter({ initialCount = 12450 }: VisitorCounterProps) {
  const [count, setCount] = useState<number>(initialCount)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const STORAGE_KEY = "fundacion_isla_visit_count"
    const VISITED_SESSION_KEY = "fundacion_isla_has_counted_session"

    const fetchGlobalVisits = async () => {
      try {
        // Consultar API global pública de conteo
        const response = await fetch("https://countapi.mileshilliard.com/api/v1/hit/fundacion_isla_cascajal_official_visits")
        if (response.ok) {
          const data = await response.json()
          if (data && typeof data.value === "number") {
            const apiHits = data.value
            const totalWithBase = initialCount + apiHits
            setCount(totalWithBase)
            localStorage.setItem(STORAGE_KEY, totalWithBase.toString())
            setIsLoading(false)
            return
          }
        }
      } catch (err) {
        console.log("Usando contador local de respaldo:", err)
      }

      // Fallback local en caso de estar offline o sin conexión a la API
      const storedCount = localStorage.getItem(STORAGE_KEY)
      let currentTotal = storedCount ? parseInt(storedCount, 10) : initialCount

      const hasCountedInSession = sessionStorage.getItem(VISITED_SESSION_KEY)
      if (!hasCountedInSession) {
        currentTotal += 1
        localStorage.setItem(STORAGE_KEY, currentTotal.toString())
        sessionStorage.setItem(VISITED_SESSION_KEY, "true")
      }

      setCount(currentTotal)
      setIsLoading(false)
    }

    fetchGlobalVisits()
  }, [initialCount])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-20 left-4 sm:bottom-6 sm:left-24 z-[100] flex items-center gap-2.5 bg-[#0b3b45]/90 hover:bg-[#0b3b45] backdrop-blur-md text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border border-white/20 shadow-2xl transition-all cursor-default group"
    >
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-teal/30 flex items-center justify-center border border-brand-teal/50 shrink-0">
        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-teal group-hover:scale-110 transition-transform" />
      </div>

      <div className="flex flex-col text-left">
        <span className="text-[9px] sm:text-[10px] uppercase font-bold text-white/70 tracking-wider leading-none">
          Visitas a la plataforma
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-sm sm:text-base font-black tracking-tight text-white font-mono">
            {isLoading ? "..." : count.toLocaleString("es-CO")}
          </span>
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
        </div>
      </div>
    </motion.div>
  )
}
