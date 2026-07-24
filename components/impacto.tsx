"use client"

import { Megaphone, BookOpen, Users, Stethoscope, Palette, Handshake, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const acciones = [
  { icon: Megaphone, label: "Campañas Sociales", description: "Llevamos mensajes de concientización a cada rincón.", image: "/images/CAMPAÑA.jpeg", color: "from-brand-teal/90 to-brand-teal/40", height: "h-64 md:h-72" },
  { icon: BookOpen, label: "Procesos Educativos", description: "Herramientas para el desarrollo intelectual y la formación.", image: "/images/proceso.jpeg", color: "from-brand-olive/90 to-brand-olive/40", height: "h-80 md:h-96" },
  { icon: Users, label: "Acompañamiento", description: "Apoyo psicosocial continuo a las familias.", image: "/images/acompañamiento.jpeg", color: "from-brand-terra/90 to-brand-terra/40", height: "h-64 md:h-72" },
  { icon: Stethoscope, label: "Jornadas de Bienestar", description: "Brigadas médicas para poblaciones sin acceso.", image: "/images/jornada.png", color: "from-brand-sand/90 to-brand-sand/40", height: "h-80 md:h-96" },
  { icon: Palette, label: "Cultura", description: "Rescatamos el arte y saberes ancestrales.", image: "/images/cultura1.jpeg", color: "from-brand-teal/90 to-brand-teal/40", height: "h-64 md:h-72" },
  { icon: Handshake, label: "Alianzas", description: "Multiplicamos el impacto con el sector público y privado.", image: "/images/alianza.jpg", color: "from-brand-olive/90 to-brand-olive/40", height: "h-80 md:h-96" },
]

export function Impacto() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="impacto" ref={sectionRef} className="relative py-24 lg:py-32 bg-brand-teal overflow-hidden">
      
      {/* Removed Smooth Gradient Transition */}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Masonry Gallery (Muro de los Sueños) */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-4 md:gap-6 mt-0 md:mt-12">
                {[acciones[0], acciones[1], acciones[2]].map((acc, i) => (
                  <motion.div
                    key={`col1-${i}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className={`group relative w-full ${acc.height} rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500`}
                  >
                    {/* Background Image */}
                    <Image 
                      src={acc.image}
                      alt={acc.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Brand Color Overlay (Visible by default, fades on hover) */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${acc.color} transition-opacity duration-500 group-hover:opacity-0 mix-blend-multiply`} />
                    <div className={`absolute inset-0 bg-gradient-to-t ${acc.color} opacity-80 transition-opacity duration-500 group-hover:opacity-0`} />

                    {/* Dark Reading Gradient (Hidden by default, shows on hover) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 text-white border border-white/30 group-hover:bg-brand-teal transition-colors">
                          <acc.icon className="w-5 h-5" />
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight leading-tight drop-shadow-md">
                          {acc.label}
                        </h3>
                        
                        {/* Hidden Description */}
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                          <div className="overflow-hidden">
                            <p className="text-white/90 text-sm leading-relaxed mt-2">
                              {acc.description}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 md:gap-6 mt-12 md:mt-0">
                {[acciones[3], acciones[4], acciones[5]].map((acc, i) => (
                  <motion.div
                    key={`col2-${i}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + (i * 0.2) }}
                    className={`group relative w-full ${acc.height} rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500`}
                  >
                    {/* Background Image */}
                    <Image 
                      src={acc.image}
                      alt={acc.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Brand Color Overlay (Visible by default, fades on hover) */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${acc.color} transition-opacity duration-500 group-hover:opacity-0 mix-blend-multiply`} />
                    <div className={`absolute inset-0 bg-gradient-to-t ${acc.color} opacity-80 transition-opacity duration-500 group-hover:opacity-0`} />

                    {/* Dark Reading Gradient (Hidden by default, shows on hover) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 text-white border border-white/30 group-hover:bg-brand-olive transition-colors">
                          <acc.icon className="w-5 h-5" />
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight leading-tight drop-shadow-md">
                          {acc.label}
                        </h3>
                        
                        {/* Hidden Description */}
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                          <div className="overflow-hidden">
                            <p className="text-white/90 text-sm leading-relaxed mt-2">
                              {acc.description}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

          {/* Right: Text Content & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="inline-block text-brand-sand font-bold text-sm tracking-[0.2em] uppercase mb-4 px-5 py-2 bg-brand-sand/10 rounded-full w-max">
              Nuestro Legado
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-balance leading-tight">
              Impacto y <span className="text-brand-sand">Compromiso Social</span>
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 font-medium text-balance">
              A lo largo de nuestra trayectoria hemos impulsado acciones enfocadas en construir una sociedad más justa, participativa y solidaria. Cada proyecto representa una oportunidad de transformación.
            </p>

            <div className="p-8 rounded-3xl bg-white/5 mb-10 relative overflow-hidden group border border-white/10 backdrop-blur-sm">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 group-hover:text-brand-sand/10 transition-colors" />
              <p className="text-white/90 italic font-medium relative z-10">
                "Nuestra misión no es solo llevar ayuda, es caminar de la mano con las comunidades para que ellas mismas construyan su futuro."
              </p>
            </div>

            {/* CTA */}
            <div>
              <Button asChild size="lg" className="rounded-full px-8 py-7 text-lg font-bold bg-brand-sand hover:bg-brand-sand/90 text-brand-teal shadow-xl hover:shadow-brand-sand/30 transition-all group w-full sm:w-auto">
                <Link href="#contacto">
                  Únete a Nuestra Causa
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
