"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { 
    label: "Nuestra Labor", 
    dropdown: [
      { href: "/#campos", label: "Campos de Acción" },
      { href: "/#enfoque", label: "Enfoque Diferencial" },
      { href: "/#impacto", label: "Impacto Social" },
      { href: "/#programas", label: "Programas Destacados" },
    ]
  },
  { href: "/educacion", label: "Educación" },
  { href: "/salud", label: "Salud" },
  { href: "/alianzas", label: "Alianzas" },
  { href: "/empleo", label: "Bolsa de Empleo" },
]

export function HeaderPill() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detect scroll to add background blur/shadow if needed, though pill usually stays consistent
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      
      {/* Main Pill Container */}
      <div className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 bg-[#1B2A2F]/95 backdrop-blur-md border border-white/10 rounded-full p-2 pl-4 pr-2 shadow-2xl transition-all duration-300 w-full max-w-5xl ${scrolled ? 'top-4' : ''}`}>
        
        {/* Left: Logo Area */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 bg-brand-sand rounded-full flex items-center justify-center shadow-inner overflow-hidden border-2 border-brand-sand">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="hidden lg:block">
            <span className="text-white font-bold tracking-wide group-hover:text-brand-sand transition-colors">Isla Cascajal</span>
          </div>
        </Link>

        {/* Middle: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.dropdown ? (
                <>
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-brand-sand transition-colors tracking-wide">
                    {link.label} <ChevronDown className="w-3 h-3 opacity-70" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="w-56 bg-[#1B2A2F]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden py-2">
                      {link.dropdown.map(drop => (
                        <Link 
                          key={drop.href} 
                          href={drop.href}
                          className="block px-6 py-3 text-sm text-gray-300 hover:text-brand-sand hover:bg-white/5 transition-colors"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href!}
                  className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-brand-sand transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden lg:block shrink-0">
          <Link 
            href="/#contacto" 
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold bg-white text-[#1B2A2F] rounded-full hover:bg-brand-sand hover:text-white transition-colors shadow-sm"
          >
            Afíliate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden shrink-0">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-[#1B2A2F]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl pointer-events-auto lg:hidden"
          >
            <div className="flex flex-col space-y-4 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div className="space-y-2 mb-4">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest px-4">{link.label}</div>
                      {link.dropdown.map(drop => (
                        <Link
                          key={drop.href}
                          href={drop.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 text-gray-200 font-medium hover:bg-white/5 hover:text-brand-sand rounded-xl transition-colors"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href!}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-200 font-medium hover:bg-white/5 hover:text-brand-sand rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link 
                  href="/#contacto" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-4 text-base font-bold bg-white text-[#1B2A2F] rounded-full hover:bg-brand-sand transition-colors"
                >
                  Afíliate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
