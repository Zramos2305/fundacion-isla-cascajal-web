"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, User, Menu, X, ArrowRight, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeaderV4() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* Top Bar (Dark Teal) */}
      <div className="bg-[#0b3b45] text-white text-sm py-3 px-4 hidden md:block">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-8 font-semibold text-sm">
            <a href="mailto:fundacion@islacascajal.org" className="flex items-center gap-2 hover:text-brand-sand transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span>fundacion@islacascajal.org</span>
            </a>
            <a href="https://wa.me/573125674402" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-sand transition-colors cursor-pointer">
              <Phone className="w-5 h-5" />
              <span>(+57) 312 567 4402</span>
            </a>
            <div className="flex items-center gap-2 hover:text-brand-sand transition-colors cursor-pointer">
              <MapPin className="w-5 h-5" />
              <span>Cali, Colombia</span>
            </div>
            
            <div className="flex items-center gap-3 ml-4">
              <a href="https://www.facebook.com/fudacionislacascajal/" target="_blank" rel="noopener noreferrer" title="Facebook">
                <Facebook className="w-4 h-4 hover:text-brand-sand cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/fundacionislacascajal/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <Instagram className="w-4 h-4 hover:text-brand-sand cursor-pointer transition-colors" />
              </a>
              <a href="https://www.youtube.com/@fundacionislacascajal" target="_blank" rel="noopener noreferrer" title="YouTube">
                <Youtube className="w-4 h-4 hover:text-brand-sand cursor-pointer transition-colors" />
              </a>
              <a href="https://wa.me/573125674402" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <svg className="w-4 h-4 hover:text-brand-sand cursor-pointer transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <div 
              className="flex items-center gap-2 hover:text-[#0b3b45] hover:bg-white cursor-pointer transition-colors font-bold text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/20 tracking-wider"
              onClick={() => {
                const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
                if (select) {
                  const currentLang = select.value || 'es';
                  select.value = currentLang === 'en' ? 'es' : 'en';
                  select.dispatchEvent(new Event('change'));
                }
              }}
            >
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> EN
              </span>
            </div>
            
            <a 
              href="https://fundacion.islacascajal.org/afiliado"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-brand-sand cursor-pointer transition-colors font-semibold text-sm"
            >
              <User className="w-5 h-5" />
              <span>Portal afiliado</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - 3 Floating Pills */}
      <div className="mt-4 px-4 w-full">
        <div className="container mx-auto max-w-7xl flex items-center justify-between gap-4">
          
          {/* Pill 1: Logo */}
          <div className="bg-white rounded-full p-2 pr-2 md:pr-6 shadow-xl flex items-center shrink-0 hover:scale-105 transition-transform">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="Logo Fundación" 
                  width={48} 
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="hidden md:flex flex-col">
                <span className="font-bold text-[#0a3842] leading-tight text-sm">Fundación</span>
                <span className="font-bold text-[#0a3842] leading-tight text-sm">Isla Cascajal</span>
              </div>
            </Link>
          </div>

          {/* Pill 2: Nav Links (Hidden on Mobile) */}
          <div className="hidden lg:flex bg-white rounded-full py-2.5 px-6 shadow-xl flex-1 items-center justify-center max-w-4xl">
            <nav className="flex items-center gap-4 xl:gap-6 font-semibold text-gray-800 text-sm whitespace-nowrap">
              <Link href="/equipo" className="hover:text-brand-teal transition-colors">
                Nuestro Equipo
              </Link>
              
              <div 
                className="relative flex items-center gap-1 hover:text-brand-teal transition-colors cursor-pointer py-2"
                onMouseEnter={() => setActiveDropdown('nosotros')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Nosotros <ChevronDown className="w-4 h-4" />
                
                {/* Dropdown Menu */}
                {activeDropdown === 'nosotros' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="w-64 bg-white rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                      <Link href="#sobre-nosotros" className="px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-teal font-medium">
                        Sobre Nosotros
                      </Link>
                      <Link href="#campos" className="px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-teal font-medium">
                        Campos de Acción
                      </Link>
                      <Link href="#enfoque" className="px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-teal font-medium">
                        Enfoque Diferencial
                      </Link>
                      <Link href="#impacto" className="px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-teal font-medium">
                        Impacto y Compromiso
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/educacion" className="hover:text-brand-teal transition-colors">
                Educación
              </Link>
              <Link href="/salud" className="hover:text-brand-teal transition-colors">
                Salud
              </Link>
              <Link href="#alianzas" className="hover:text-brand-teal transition-colors">
                Alianzas
              </Link>
              <Link href="/empleo" className="hover:text-brand-teal transition-colors">
                Bolsa de empleo
              </Link>
            </nav>
          </div>

          {/* Pill 3: CTA Button (Hidden on Mobile) */}
          <div className="hidden lg:flex bg-white rounded-full p-2 shadow-xl shrink-0">
            <Button asChild className="bg-[#2A6573] hover:bg-[#1E4D5A] text-white rounded-full px-6 py-2 h-auto text-sm font-bold">
              <Link href="https://fundacion.islacascajal.org/registro" target="_blank" rel="noopener noreferrer">
                Afíliate <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden bg-white rounded-full p-2 shadow-xl shrink-0 ml-auto">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-brand-teal" /> : <Menu className="w-6 h-6 text-brand-teal" />}
            </Button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <Link href="/equipo" className="text-lg font-semibold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Nuestro Equipo</Link>
          <div className="h-px bg-gray-100" />
          <Link href="#sobre-nosotros" className="text-lg font-semibold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Sobre Nosotros</Link>
          <div className="h-px bg-gray-100" />
          <Link href="#campos" className="text-lg font-semibold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Campos de Acción</Link>
          <div className="h-px bg-gray-100" />
          <Link href="/educacion" className="text-lg font-semibold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Educación</Link>
          <div className="h-px bg-gray-100" />
          <Link href="/salud" className="text-lg font-semibold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Salud</Link>
          <div className="h-px bg-gray-100" />
          <Link href="#alianzas" className="text-lg font-semibold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Alianzas</Link>
          <div className="h-px bg-gray-100" />
          <Link href="/empleo" className="text-lg font-semibold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Bolsa de empleo</Link>
          
          <Button asChild className="w-full mt-4 bg-[#2A6573] hover:bg-[#1E4D5A] text-white rounded-full h-12 text-lg font-bold">
            <Link href="https://fundacion.islacascajal.org/registro" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
              Afíliate <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}
