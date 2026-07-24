"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
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

export function HeaderV2() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#inicio")

  return (
    <header className="absolute top-6 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex flex-wrap lg:flex-nowrap items-center gap-2 md:gap-4">
          
          {/* Logo Box */}
          <Link 
            href="/" 
            className="flex items-center bg-white px-3 py-1 rounded-3xl rounded-br-none shadow-sm flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="Logo Fundación Isla Cascajal"
              className="w-20 h-20 object-contain"
            />
            <div className="hidden sm:block pr-2 -ml-1">
              <p className="text-base font-bold leading-tight text-gray-900 tracking-tight">Fundación</p>
              <p className="text-sm font-semibold text-brand-teal">Isla Cascajal</p>
            </div>
          </Link>

          {/* Desktop Navigation Box */}
          <div className="hidden lg:flex flex-1 items-center justify-between bg-white px-6 py-3 rounded-3xl rounded-bl-none shadow-sm">
            <div className="flex items-center gap-1 mx-auto">
              {navLinks.map((link, index) => (
                <div key={link.label} className="flex items-center relative group">
                  
                  {link.dropdown ? (
                    <>
                      <button className="px-4 py-2 text-sm font-semibold rounded-full transition-all text-gray-600 hover:text-brand-teal flex items-center gap-1">
                        {link.label} <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="w-56 bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 p-2">
                          {link.dropdown.map(drop => (
                            <Link 
                              key={drop.href} 
                              href={drop.href}
                              className="px-4 py-3 text-sm font-semibold text-gray-600 hover:text-brand-teal hover:bg-gray-50 rounded-xl transition-colors"
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
                      onClick={() => setActiveLink(link.href!)}
                      className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                        activeLink === link.href 
                        ? "bg-brand-teal text-white shadow-md" 
                        : "text-gray-600 hover:text-brand-teal"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dot separator */}
                  {index < navLinks.length - 1 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200 mx-1"></span>
                  )}
                </div>
              ))}
            </div>

            {/* Afíliate Button */}
            <Button
              asChild
              className="rounded-full px-8 py-5 bg-brand-teal hover:bg-brand-teal/90 text-white font-bold text-sm shadow-md transition-transform hover:scale-105"
            >
              <Link href="/#contacto">Afíliate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - shows on small screens */}
          <div className="lg:hidden flex-1 flex justify-end">
            <div className="bg-white p-2 rounded-2xl shadow-sm">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-800"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl p-4 space-y-2 max-h-[70vh] overflow-y-auto"
            >
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div className="space-y-1 my-2">
                      <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">{link.label}</div>
                      {link.dropdown.map(drop => (
                        <Link
                          key={drop.href}
                          href={drop.href}
                          onClick={() => setIsOpen(false)}
                          className="block pl-8 pr-4 py-3 text-gray-700 font-semibold hover:bg-brand-teal/10 rounded-xl transition-colors"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href!}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-700 font-semibold hover:bg-brand-teal/10 rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="w-full mt-4 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl py-6 font-bold">
                <Link href="/#contacto" onClick={() => setIsOpen(false)}>Afíliate</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
