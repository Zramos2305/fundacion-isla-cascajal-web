"use client"

import Image from "next/image"
import { Heart, GraduationCap, Palette, TreePine, ArrowRight } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useState, useRef } from "react"

const campos = [
  {
    icon: Heart,
    title: "Bienestar y Proyección Social",
    description: "Brindamos acompañamiento a comunidades haciendo inclusión social, fortaleciendo el liderazgo y el tejido humano para garantizar un desarrollo integral.",
    image: "/images/BIENESTAR.png",
    items: ["Desarrollo comunitario", "Reducción de brechas", "Liderazgo social"],
  },
  {
    icon: GraduationCap,
    title: "Extensión Etnoeducativa",
    description: "Ofrecemos formación académica contribuyendo al fortalecimiento de saberes y procesos pedagógicos con una fuerte identidad cultural.",
    image: "/images/EXTENSION.png",
    items: ["Talleres formativos", "Etnoeducación", "Alfabetización"],
  },
  {
    icon: Palette,
    title: "Turismo, Artes y Culturas",
    description: "Promovemos la identidad cultural, el arte y los saberes tradicionales como los principales motores de transformación social en el territorio.",
    image: "/images/TURISMO.png",
    items: ["Patrimonio cultural", "Expresiones artísticas", "Tradiciones"],
  },
  {
    icon: TreePine,
    title: "Recreación, Salud y Ambiente",
    description: "Fomentamos espacios de recreación, deporte y un profundo cuidado del medio ambiente que contribuyen al bienestar integral de todos.",
    image: "/images/RECREACION.png",
    items: ["Conciencia ambiental", "Vida saludable", "Deporte comunitario"],
  },
]

export function CamposAccion() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="campos" ref={sectionRef} className="relative py-24 lg:py-32 z-10 overflow-hidden bg-gray-50/50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image src="/images/fondo%20.png" alt="Fondo" fill className="object-cover object-top" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-brand-teal font-bold text-sm tracking-[0.2em] uppercase mb-4 px-5 py-2 bg-brand-teal/10 rounded-full">
            Qué Hacemos
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Nuestros <span className="text-brand-teal">Campos de Acción</span>
          </h2>
          <p className="text-black text-lg md:text-xl max-w-3xl mx-auto font-medium text-balance">
            Trabajamos en cuatro áreas fundamentales que abarcan el desarrollo integral de las comunidades, combinando tradición, innovación y compromiso social.
          </p>
        </motion.div>

        {/* Dynamic Selector Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Left: Dynamic Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12 relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] xl:h-[750px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100"
          >
            {campos.map((campo, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Background Image */}
                <Image 
                  src={campo.image} 
                  alt={campo.title} 
                  fill 
                  className={`object-cover transition-transform duration-[2s] ease-out ${
                    activeIndex === index ? 'scale-105' : 'scale-100'
                  }`} 
                />
                
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent" />
                
                {/* Floating Info on Image */}
                <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12">
                  <motion.div
                    initial={false}
                    animate={{ 
                      y: activeIndex === index ? 0 : 30, 
                      opacity: activeIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-md">
                      {campo.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {campo.items.map((item, idx) => (
                        <span 
                          key={idx} 
                          className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-full border border-white/30 shadow-lg"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Interactive List Menu */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-5/12 flex flex-col justify-center gap-4"
          >
            {campos.map((campo, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-[2rem] p-6 lg:p-8 transition-all duration-500 border-2 relative overflow-hidden ${
                    isActive 
                      ? 'bg-white border-brand-teal shadow-2xl scale-105 z-10' 
                      : 'bg-white border-transparent hover:bg-brand-teal/5 shadow-sm hover:shadow-md text-gray-500 scale-100'
                  }`}
                >
                  {/* Subtle background glow for active item */}
                  {isActive && (
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-teal/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
                  )}

                  <div className="flex items-center gap-5 md:gap-6 relative z-10">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 shrink-0 ${
                      isActive ? 'bg-brand-teal text-white shadow-lg shadow-brand-teal/30' : 'bg-gray-100 text-gray-400 group-hover:bg-brand-teal/10'
                    }`}>
                      <campo.icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-500 leading-tight ${
                      isActive ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {campo.title}
                    </h3>
                  </div>
                  
                  {/* Accordion-style description reveal */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden relative z-10"
                      >
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed lg:pl-[5.5rem]">
                          {campo.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>

        </div>
      </div>

      {/* Removed Smooth Transition to Next Section */}
    </section>
  )
}
