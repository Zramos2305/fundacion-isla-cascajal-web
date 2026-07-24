"use client"

import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Mail, Phone, Instagram, Heart, ArrowUp, Facebook, Youtube, MapPin } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#campos", label: "Campos de Acción" },
  { href: "#impacto", label: "Impacto" },
  { href: "#programas", label: "Programas" },
  { href: "#contacto", label: "Contacto" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/fundacionislacascajal", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/fudacionislacascajal?locale=es_LA", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@fundacionislacascajal", label: "YouTube" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-foreground text-card overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand - Takes more space */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Image src="/logo.png" alt="Logo Fundación Isla Cascajal" fill className="object-contain p-2" />
                </div>
                <div>
                  <p className="font-serif font-bold text-xl text-card">Fundación Isla Cascajal</p>
                  <p className="text-sm text-card/60">ONG - Desde 2008</p>
                </div>
              </div>
              <p className="text-card/70 leading-relaxed max-w-md mb-8">
                Generando sinergia para un desarrollo integral de la sociedad.
                Construyendo UniverCiudad a través del bienestar social, la etnoeducación,
                las artes y la cultura.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-card/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="font-semibold text-card text-lg mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-card/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-card/30 group-hover:bg-primary transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <h4 className="font-semibold text-card text-lg mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:fundacion@islacascajal.org"
                    className="flex items-center gap-3 text-card/70 hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>fundacion@islacascajal.org</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+573125674402"
                    className="flex items-center gap-3 text-card/70 hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>(+57) 312 567 4402</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/fundacionislacascajal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-card/70 hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Instagram className="h-4 w-4" />
                    </div>
                    <span>@fundacionislacascajal</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-card/70 group">
                    <div className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center transition-colors">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span>Cali, Valle del Cauca, Colombia</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-card/60 text-center md:text-left">
              © {new Date().getFullYear()} Fundación Isla Cascajal. Todos los derechos reservados.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="flex items-center gap-2 text-sm text-card/60">
                Hecho con <Heart className="h-4 w-4 text-primary fill-primary" /> para las comunidades
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-card/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
                aria-label="Volver arriba"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
