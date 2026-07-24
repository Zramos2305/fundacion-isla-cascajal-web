"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Briefcase } from "lucide-react"

const team = [
  {
    id: 1,
    name: "Carlos Restrepo",
    role: "Director Ejecutivo",
    image: "/images/1A.png"
  },
  {
    id: 2,
    name: "María González",
    role: "Coordinadora de Proyectos",
    image: "/images/2A.png"
  },
  {
    id: 3,
    name: "Jorge Torres",
    role: "Trabajador Social",
    image: "/images/3A.png"
  },
  {
    id: 4,
    name: "Ana Sofía Martínez",
    role: "Líder Comunitaria",
    image: "/images/4A.png"
  }
]

export function Equipo() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="equipo" ref={sectionRef} className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-brand-teal font-bold text-sm tracking-[0.2em] uppercase mb-4 px-5 py-2 bg-brand-teal/10 rounded-full">
            Las personas detrás
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Nuestro <span className="text-brand-teal">Equipo</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Conoce a los profesionales apasionados que trabajan día a día para transformar realidades en Isla Cascajal.
          </p>
        </motion.div>

        {/* Cuadrícula de Equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden bg-gray-100 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b3b45]/90 via-[#0b3b45]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glassmorphism Info Panel */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-brand-sand font-medium text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner: Trabaja con nosotros */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#0b3b45] shadow-2xl"
        >
          {/* Decorative shapes inside banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sand/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-olive/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 lg:p-14 gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Briefcase className="w-8 h-8 text-brand-sand" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                ¿Deseas trabajar con nosotros?
              </h3>
              <p className="text-white/80 text-lg max-w-xl">
                Únete a nuestro equipo y sé parte de la transformación social. Estamos buscando talento comprometido con el desarrollo de nuestras comunidades.
              </p>
            </div>
            
            <div className="shrink-0 w-full md:w-auto">
              <Link href="/empleo" className="group flex items-center justify-center gap-3 bg-brand-sand hover:bg-[#e0a44f] text-[#0a3842] rounded-full px-8 py-5 text-xl font-bold transition-all w-full md:w-auto shadow-lg hover:shadow-xl">
                Ver vacantes disponibles
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
