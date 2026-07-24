"use client"

import Image from "next/image"
import { Sparkles, ArrowUpRight, Star, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"

// Gallery images are placeholders from your public folder. You can update these paths later!
const programas = [
  {
    title: "Mochila Atrapasueños",
    description: "Un programa que transforma eventos en experiencias significativas, promoviendo la esperanza y los sueños de niños y jóvenes de comunidades vulnerables a través de actividades educativas y culturales.",
    tag: "Educación & Cultura",
    cover: "/images/EXTENSION.png",
    gallery: ["/images/BIENESTAR.png", "/images/comunidad.png", "/images/discapacidad.jpeg", "/images/etnica.png", "/images/jornada.png", "/images/madres.png", "/images/mujeres.png", "/images/RECREACION.png", "/images/vulnerables.jpeg", "/images/niños.png"],
    stats: ["500+ Niños", "25 Comunidades", "3 Años"],
    color: "bg-brand-teal",
    gradient: "from-brand-teal/90 via-brand-teal/40 to-transparent"
  },
  {
    title: "UBUNTU - Palabras de Griot",
    description: "Iniciativa que rescata y promueve la tradición oral africana, fortaleciendo la identidad cultural afrodescendiente a través de la narrativa, los saberes ancestrales y la conexión intergeneracional.",
    tag: "Etnoeducación",
    cover: "/images/UBUNTU.png",
    gallery: ["/images/UBUNTU1.jpeg", "/images/UBUNTU2.jpeg", "/images/UBUNTU3.jpeg", "/images/UBUNTU4.jpeg", "/images/UBUNTU5.jpeg", "/images/1.jpeg", "/images/CAMPAÑA.jpeg"],
    stats: ["300+ Participantes", "15 Talleres", "2 Años"],
    color: "bg-brand-olive",
    gradient: "from-brand-olive/90 via-brand-olive/40 to-transparent"
  },
]

export function Programas() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeProgram, setActiveProgram] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Prevent scrolling when modal is open
  if (typeof window !== 'undefined') {
    if (activeProgram !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  const nextImage = () => {
    if (activeProgram === null) return;
    setCurrentImageIndex((prev) => 
      prev === programas[activeProgram].gallery.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    if (activeProgram === null) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? programas[activeProgram].gallery.length - 1 : prev - 1
    )
  }

  return (
    <section id="programas" ref={sectionRef} className="py-24 lg:py-32 bg-brand-sand overflow-hidden relative">
      
      {/* Removed Smooth Gradient Transition */}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight font-batangas"
          >
            Programas <span className="text-brand-teal">Destacados</span>
          </motion.h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium text-balance">
            Haz clic en cualquier programa para abrir la galería fotográfica y conocer más sobre el impacto en nuestras comunidades.
          </p>
        </motion.div>

        {/* Accordion Layout (Idea 1) */}
        <div className="flex flex-col lg:flex-row h-[800px] lg:h-[650px] gap-4 md:gap-6 w-full">
          {programas.map((programa, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
            
            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  flex: hoveredIndex === null ? 1 : isHovered ? 2.5 : 0.8
                }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  setActiveProgram(index)
                  setCurrentImageIndex(0)
                }}
                className="relative overflow-hidden rounded-[2.5rem] cursor-pointer group"
              >
                {/* Background Image */}
                <Image
                  src={programa.cover}
                  alt={programa.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                
                {/* Overlay Gradients */}
                <div className={`absolute inset-0 bg-gradient-to-t ${programa.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 border border-white/30">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    {/* Tag */}
                    <span className="text-white text-sm font-bold tracking-wider uppercase drop-shadow-md">
                      {programa.tag}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg font-batangas leading-tight whitespace-nowrap">
                    {programa.title}
                  </h3>

                  {/* Expanding Description (Only visible when hovered/expanded) */}
                  <motion.div 
                    initial={false}
                    animate={{ 
                      height: isHovered || hoveredIndex === null ? 'auto' : 0,
                      opacity: isHovered || hoveredIndex === null ? 1 : 0 
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/90 text-lg leading-relaxed max-w-xl font-light drop-shadow-md mb-6">
                      {programa.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-white font-bold bg-white/10 w-max px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 group-hover:bg-white group-hover:text-gray-900 transition-all">
                      Abrir Galería
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Lightbox / Modal Gallery - Premium Redesign */}
      <AnimatePresence>
        {activeProgram !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex flex-col"
          >
            {/* Top Bar: Title & Close Button */}
            <div className="absolute top-0 left-0 w-full p-6 md:p-10 flex items-start justify-between z-50 pointer-events-none">
              <div className="text-white pointer-events-auto">
                <motion.h3 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-black font-batangas tracking-tight drop-shadow-lg"
                >
                  {programas[activeProgram].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/70 mt-2 font-medium tracking-wider uppercase text-sm"
                >
                  {currentImageIndex + 1} de {programas[activeProgram].gallery.length}
                </motion.p>
              </div>
              
              <button 
                onClick={() => setActiveProgram(null)}
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all duration-300 backdrop-blur-md pointer-events-auto shadow-xl"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image Viewer */}
            <div className="flex-1 relative w-full h-full flex items-center justify-center px-4 md:px-24 py-24 z-40">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full max-w-7xl"
                >
                  <Image 
                    src={programas[activeProgram].gallery[currentImageIndex]} 
                    alt="Galería" 
                    fill 
                    className="object-contain drop-shadow-2xl" 
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Elegant Navigation Arrows */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-16 h-32 rounded-2xl hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 group z-50"
            >
              <ChevronLeft className="w-10 h-10 group-hover:-translate-x-2 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-16 h-32 rounded-2xl hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 group z-50"
            >
              <ChevronRight className="w-10 h-10 group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            {/* Floating Thumbnail Strip */}
            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 max-w-[90vw] z-50">
              <div className="bg-white/10 backdrop-blur-xl p-2 md:p-3 rounded-2xl md:rounded-[2rem] border border-white/20 flex gap-2 md:gap-3 overflow-x-auto snap-x scrollbar-hide shadow-2xl">
                {programas[activeProgram].gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 snap-center ${
                      currentImageIndex === idx 
                        ? "ring-2 ring-white ring-offset-2 ring-offset-black/50 scale-100 opacity-100" 
                        : "opacity-40 hover:opacity-100 scale-90 hover:scale-95"
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Removed Smooth Transition to Next Section */}
    </section>
  )
}
