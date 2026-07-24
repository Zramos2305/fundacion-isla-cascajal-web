"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { Users, Baby, User, UserCheck, Heart, Accessibility, ArrowRight, ChevronRight, ChevronLeft } from "lucide-react"

const poblaciones = [
  { id: "etnicas", label: "Comunidades étnicas", count: "2,500+", image: "/images/etnica.png", icon: Users },
  { id: "mujeres", label: "Mujeres cabeza de hogar", count: "800+", image: "/images/mujeres.png", icon: User },
  { id: "ninez", label: "Niñez y juventud", count: "1,200+", image: "/images/niños.png", icon: Baby },
  { id: "adultos", label: "Adultos mayores", count: "450+", image: "/images/madres.png", icon: UserCheck },
  { id: "discapacidad", label: "Personas con discapacidad", count: "200+", image: "/images/discapacidad.jpeg", icon: Accessibility },
  { id: "familias", label: "Familias vulnerables", count: "500+", image: "/images/vulnerables.jpeg", icon: Heart },
]

const stats = [
  { number: 17, suffix: "+", label: "Años de experiencia" },
  { number: 5, suffix: "K+", label: "Personas beneficiadas" },
  { number: 50, suffix: "+", label: "Proyectos realizados" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const spring = useSpring(0, { duration: 2500, bounce: 0 })
  const display = useTransform(spring, (current) => Math.floor(current))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => setDisplayValue(v))
    return () => unsubscribe()
  }, [display])

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  )
}

export function EnfoqueDiferencial() {
  const sectionRef = useRef(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="enfoque" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#f4f7f6] overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />

      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          {/* Main Title and Intro */}
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-brand-teal font-bold text-sm tracking-[0.3em] uppercase mb-6 px-6 py-2 bg-brand-teal/10 rounded-full"
            >
              A Quiénes Servimos
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight text-balance leading-tight"
            >
              Enfoque Diferencial <br className="hidden md:block" /> e <span className="text-brand-terra">Inclusión</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed font-light text-balance"
            >
              Nuestros programas están orientados a garantizar participación y atención a las poblaciones más vulnerables. Desliza para conocer a las personas que impactamos a diario.
            </motion.p>
          </div>

          {/* Global Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-8 lg:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <p className="text-4xl lg:text-5xl font-black text-brand-olive mb-1 tracking-tighter">
                  {isInView ? <AnimatedNumber value={stat.number} suffix={stat.suffix} /> : "0"}
                </p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-widest max-w-[100px]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Swipe Hint for Mobile */}
        <div className="flex md:hidden items-center gap-2 text-brand-teal font-medium mb-4 ml-2">
          <ArrowRight className="w-5 h-5 animate-pulse" />
          <span>Desliza para ver más</span>
        </div>

        {/* Horizontal Scroll Carousel Wrapper */}
        <div className="relative mt-4">
          
          {/* Navigation Arrows (Desktop Only) */}
          <button 
            onClick={() => carouselRef.current?.scrollBy({ left: -400, behavior: 'smooth' })} 
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 -mt-6 z-20 w-16 h-16 rounded-full bg-white text-brand-teal shadow-[0_0_40px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all duration-300 hidden md:flex cursor-pointer"
          >
             <ChevronLeft className="w-10 h-10 pr-1" />
          </button>
          
          <button 
            onClick={() => carouselRef.current?.scrollBy({ left: 400, behavior: 'smooth' })} 
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 -mt-6 z-20 w-20 h-20 rounded-full bg-brand-teal text-white shadow-[0_0_40px_rgba(58,111,130,0.4)] flex items-center justify-center hover:scale-110 transition-all duration-300 hidden md:flex cursor-pointer animate-pulse hover:animate-none"
          >
             <ChevronRight className="w-12 h-12 pl-1" />
          </button>

          <div ref={carouselRef} className="flex gap-4 md:gap-6 overflow-x-auto pb-16 pt-4 px-4 md:px-8 snap-x snap-mandatory scroll-pl-4 md:scroll-pl-8 scrollbar-hide -mx-4 md:-mx-8">
            {poblaciones.map((poblacion, index) => (
              <motion.div
                key={poblacion.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative w-72 md:w-80 lg:w-96 aspect-[3/4] rounded-[2.5rem] overflow-hidden flex-shrink-0 snap-start cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <Image 
                  src={poblacion.image}
                  alt={poblacion.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent group-hover:from-brand-teal/95 group-hover:via-brand-teal/60 transition-colors duration-500" />

                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 text-white border border-white/20 group-hover:bg-white/30 transition-colors">
                      <poblacion.icon className="w-6 h-6" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight leading-tight">
                      {poblacion.label}
                    </h3>
                    
                    {/* Hidden Stat revealing on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-6 border-t border-white/20 pt-4">
                      <p className="text-brand-sand text-xs font-bold tracking-[0.2em] uppercase mb-1">
                        Impacto a la fecha
                      </p>
                      <p className="text-4xl font-black text-white">
                        {poblacion.count}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Spacer div to ensure the last item can be scrolled completely into view */}
            <div className="w-12 md:w-32 flex-shrink-0" />
          </div>
        </div>

      </div>

    </section>
  )
}
