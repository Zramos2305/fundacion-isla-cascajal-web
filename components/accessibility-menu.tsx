"use client"

import { useState, useEffect, useRef } from "react"
import { Accessibility, Type, Contrast, Baseline, Link as LinkIcon, Volume2, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [dyslexiaFont, setDyslexiaFont] = useState(false)
  const [highlightLinks, setHighlightLinks] = useState(false)
  const [ttsEnabled, setTtsEnabled] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  // Handlers to toggle classes on the HTML element
  useEffect(() => {
    const root = document.documentElement

    if (highContrast) root.classList.add("a11y-high-contrast")
    else root.classList.remove("a11y-high-contrast")

    if (dyslexiaFont) root.classList.add("a11y-dyslexia")
    else root.classList.remove("a11y-dyslexia")

    if (highlightLinks) root.classList.add("a11y-highlight-links")
    else root.classList.remove("a11y-highlight-links")
  }, [highContrast, dyslexiaFont, highlightLinks])

  // Text to Speech Logic
  useEffect(() => {
    if (!ttsEnabled) {
      window.speechSynthesis.cancel() // Stop speaking if disabled
      return
    }

    const handleReadText = (e: MouseEvent) => {
      // Don't read if clicking inside the accessibility menu itself
      if (menuRef.current && menuRef.current.contains(e.target as Node)) {
        return
      }

      const target = e.target as HTMLElement
      // Extract readable text
      const textToRead = target.innerText || target.textContent || target.getAttribute('aria-label') || target.getAttribute('alt')
      
      if (textToRead && textToRead.trim().length > 0) {
        window.speechSynthesis.cancel() // Stop previous speech
        const utterance = new SpeechSynthesisUtterance(textToRead)
        utterance.lang = "es-CO" // Colombian Spanish
        utterance.rate = 0.9 // Slightly slower for clarity
        window.speechSynthesis.speak(utterance)
        
        // Visual feedback
        const originalOutline = target.style.outline
        target.style.outline = "3px dashed #F4B860"
        
        utterance.onend = () => {
          target.style.outline = originalOutline
        }
      }
    }

    // Add listener for click
    document.addEventListener("click", handleReadText)

    return () => {
      document.removeEventListener("click", handleReadText)
      window.speechSynthesis.cancel()
    }
  }, [ttsEnabled])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  return (
    <div 
      className="fixed bottom-6 left-6 z-[110]" 
      ref={menuRef}
      aria-label="Menú de Accesibilidad"
    >
      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl w-72 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Opciones de Accesibilidad"
          >
            <div className="bg-[#0b3b45] p-4 flex justify-between items-center text-white">
              <h3 className="font-bold flex items-center gap-2">
                <Accessibility className="w-5 h-5" /> Accesibilidad
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar menú de accesibilidad"
                className="hover:bg-white/20 p-1 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="p-2 flex flex-col gap-1">
              <A11yToggle 
                icon={<Contrast className="w-5 h-5" />}
                label="Alto Contraste"
                isActive={highContrast}
                onClick={() => setHighContrast(!highContrast)}
                description="Mejora la visibilidad de colores"
              />
              <A11yToggle 
                icon={<Baseline className="w-5 h-5" />}
                label="Fuente Dislexia"
                isActive={dyslexiaFont}
                onClick={() => setDyslexiaFont(!dyslexiaFont)}
                description="Letras más fáciles de leer"
              />
              <A11yToggle 
                icon={<LinkIcon className="w-5 h-5" />}
                label="Resaltar Enlaces"
                isActive={highlightLinks}
                onClick={() => setHighlightLinks(!highlightLinks)}
                description="Subraya botones y links"
              />
              <A11yToggle 
                icon={<Volume2 className="w-5 h-5" />}
                label="Lectura en Voz Alta"
                isActive={ttsEnabled}
                onClick={() => setTtsEnabled(!ttsEnabled)}
                description="Haz clic en cualquier texto para escucharlo"
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Abrir menú de accesibilidad"
        className="bg-[#2A6573] hover:bg-[#1E4D5A] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-brand-sand/50 group"
      >
        <Accessibility className="w-7 h-7 group-hover:animate-pulse" />
      </button>
    </div>
  )
}

// Reusable Toggle Component with Semantic HTML and ARIA
function A11yToggle({ icon, label, isActive, onClick, description }: { 
  icon: React.ReactNode, 
  label: string, 
  isActive: boolean, 
  onClick: () => void,
  description: string
}) {
  return (
    <button
      onClick={onClick}
      role="switch"
      aria-checked={isActive}
      className={`flex items-start gap-3 p-3 w-full rounded-xl transition-colors text-left ${
        isActive ? "bg-brand-sand/20 text-[#0b3b45]" : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      <div className={`mt-0.5 ${isActive ? "text-brand-terra" : "text-gray-500"}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-sm leading-none mb-1">{label}</div>
        <div className="text-[11px] text-gray-500 leading-tight">{description}</div>
      </div>
      {/* Custom Switch Visual */}
      <div className={`w-10 h-5 rounded-full relative flex items-center transition-colors ${
        isActive ? "bg-[#2A6573]" : "bg-gray-300"
      }`}>
        <div className={`w-3.5 h-3.5 bg-white rounded-full absolute transition-all ${
          isActive ? "right-1" : "left-1"
        }`} />
      </div>
    </button>
  )
}
