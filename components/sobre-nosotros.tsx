"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Target, Eye, Flag, Calendar } from "lucide-react"

const sections = [
  {
    id: "historia",
    title: "Nuestra Historia",
    subtitle: "2008",
    description: "El año en que nació nuestro sueño de transformar realidades en Isla Cascajal. Trabajamos incansablemente por crear verdaderas oportunidades de desarrollo.",
    image: "/images/1.jpeg",
    icon: Calendar
  },
  {
    id: "mision",
    title: "Nuestra Misión",
    subtitle: "El Propósito",
    description: "Buscamos el bienestar y desarrollo integral de comunidades vulnerables, preservando siempre su identidad y garantizando el respeto de sus derechos fundamentales.",
    image: "/images/mision.jpg",
    icon: Target,
    imagePosition: "object-top"
  },
  {
    id: "vision",
    title: "Nuestra Visión",
    subtitle: "Hacia el 2030",
    description: "Ser referentes a nivel nacional en innovación social, educación, sustentabilidad y en la promoción activa de la cultura comunitaria.",
    image: "/images/vision.jpg",
    icon: Eye
  },
  {
    id: "valores",
    title: "Nuestros Valores",
    subtitle: "La Esencia",
    description: "Compromiso, Transparencia, Solidaridad e Inclusión. Son los grandes pilares que sostienen y guían cada uno de nuestros pasos en la comunidad.",
    image: "/images/BIENESTAR.png",
    icon: Flag
  }
]

export function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="relative w-full pt-10 pb-32 z-20 overflow-x-clip">
      {/* Solid background that covers the entire section */}
      <div className="absolute inset-0 bg-[#EAE8E3] z-0" />

      {/* Decorative Circles (Left) */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-[150px] lg:-left-[200px] hidden md:block z-10 w-[400px] h-[400px] opacity-80 pointer-events-none">
        <Image 
          src="/images/elemento1.png" 
          alt="Elementos decorativos" 
          fill 
          className="object-contain object-bottom" 
        />
      </div>

      {/* Decorative Circles (Right) */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[150px] lg:-right-[200px] hidden md:block z-10 w-[400px] h-[400px] opacity-80 pointer-events-none">
        <Image 
          src="/images/elemento2.png" 
          alt="Elementos decorativos" 
          fill 
          className="object-contain object-center" 
        />
      </div>

      {/* Intro Text */}
      <div className="relative z-20 container mx-auto px-6 pt-16 pb-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-[42px] font-black text-gray-900 leading-snug max-w-5xl mx-auto tracking-tight font-batangas"
        >
          Trabajamos por el desarrollo <span className="text-brand-teal">social, cultural</span><br className="hidden md:block"/> y <span className="text-brand-teal">ambiental</span> de las comunidades más<br className="hidden md:block"/> vulnerables a través de la etnoeducación,<br className="hidden md:block"/> las artes y el acompañamiento comunitario.
        </motion.h2>
      </div>

      {/* Contenedor principal de las tarjetas apilables */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 max-w-7xl">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="sticky top-0 flex items-center justify-center w-full"
            style={{
              zIndex: index,
              // Each card sticks a bit lower than the previous one so you can see the stack growing
              top: `calc(5vh + ${index * 30}px)`
            }}
          >
            {/* Card Body */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/5] md:aspect-[21/9] lg:h-[75vh] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-200"
            >
              {/* Background Image inside the Card */}
              <Image
                src={section.image}
                alt={section.title}
                fill
                className={`object-cover ${section.imagePosition || "object-center"}`}
                priority={index === 0}
              />

              {/* Subtle gradient to ensure the white card pops out */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Information White Card inside the image */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-auto md:w-[480px] bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col justify-center">

                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center">
                    <section.icon className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h4 className="text-sm font-bold text-brand-teal tracking-[0.2em] uppercase">
                    {section.subtitle}
                  </h4>
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                  {section.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {section.description}
                </p>

              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
