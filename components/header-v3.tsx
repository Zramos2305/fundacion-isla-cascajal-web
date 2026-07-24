"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Menu, X, ChevronDown, ArrowRight } from "lucide-react"
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

export function HeaderV3() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full relative z-50">
      {/* --- TOP BAR --- */}
      <div className="bg-[#0B1B2A] text-gray-300 py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium">
          
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-brand-sand" />
              <span>+57 (300) 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-brand-sand" />
              <span>info@fundacionislacascajal.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-brand-sand" />
              <span>Lun - Sab: 8:00 - 17:00</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Síguenos:</span>
            <div className="flex items-center gap-3">
              <Link href="#" className="hover:text-brand-sand transition-colors"><Facebook className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-brand-sand transition-colors"><Twitter className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-brand-sand transition-colors"><Linkedin className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-brand-sand transition-colors"><Instagram className="w-4 h-4" /></Link>
            </div>
          </div>

        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <div className="bg-white shadow-md relative">
        <div className="container mx-auto px-0 lg:px-4 flex items-center justify-between">
          
          {/* Logo Box (Slanted Blue Background) */}
          <Link href="/" className="relative flex items-center bg-brand-teal pr-12 lg:pr-16 pl-4 lg:pl-8 py-2 shrink-0" style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}>
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Logo Fundación Isla Cascajal" className="w-20 h-20 lg:w-24 lg:h-24 object-contain drop-shadow-md" />
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-lg lg:text-xl leading-none font-batangas tracking-wide">FUNDACIÓN</h1>
                <p className="text-brand-sand font-semibold text-xs tracking-widest uppercase">Isla Cascajal</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 py-6 text-sm font-bold text-gray-700 hover:text-brand-teal transition-colors uppercase tracking-wider">
                      {link.label} <ChevronDown className="w-4 h-4" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64 bg-white border-t-4 border-brand-teal shadow-xl rounded-b-lg overflow-hidden">
                      {link.dropdown.map(drop => (
                        <Link 
                          key={drop.href} 
                          href={drop.href}
                          className="block px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-brand-teal transition-colors border-b border-gray-100 last:border-0"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href!}
                    className="flex items-center gap-1 py-6 text-sm font-bold text-gray-700 hover:text-brand-teal transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section (Button) */}
          <div className="hidden lg:flex items-center pr-4">
            <Button asChild className="bg-brand-teal hover:bg-[#2A5262] text-white font-bold px-6 py-6 rounded-md shadow-lg flex items-center gap-2">
              <Link href="/#contacto">
                AFÍLIATE <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden pr-4 py-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none p-2 bg-gray-100 rounded-md"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col py-4 px-4 space-y-2 max-h-[60vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.dropdown ? (
                      <div className="space-y-1">
                        <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-50 rounded-md">{link.label}</div>
                        {link.dropdown.map(drop => (
                          <Link
                            key={drop.href}
                            href={drop.href}
                            onClick={() => setIsOpen(false)}
                            className="block pl-8 pr-4 py-3 text-gray-700 font-semibold hover:bg-brand-teal/10 rounded-md transition-colors"
                          >
                            {drop.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={link.href!}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-gray-700 font-semibold hover:bg-brand-teal/10 rounded-md transition-colors uppercase tracking-wider text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <Button asChild className="w-full bg-brand-teal text-white font-bold py-6">
                    <Link href="/#contacto" onClick={() => setIsOpen(false)}>AFÍLIATE</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
