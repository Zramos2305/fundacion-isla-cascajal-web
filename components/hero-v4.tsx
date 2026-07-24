"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroV4() {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 bg-[#0B1B2A]">
        <Image
          src="/images/INICIO.png"
          alt="Comunidad UniverCiudad"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-40 pb-20 flex flex-col items-center">
        
        {/* Massive Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-[6.5rem] font-bold text-white leading-[1.05] max-w-6xl mx-auto mb-8 font-batangas tracking-tight"
        >
          Construyendo <br className="hidden md:block" />
          <span className="text-brand-sand">
            UniverCiudad
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
        >
          Transformamos realidades en el territorio a través de educación, cultura y desarrollo social para las comunidades más vulnerables.
        </motion.p>

        {/* Calls to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button asChild size="lg" className="bg-brand-teal text-white hover:bg-[#2A5262] rounded-full px-12 py-8 text-lg font-bold transition-all duration-300 hover:scale-105 border border-brand-teal">
            <Link href="/dona" className="flex items-center gap-3">
              Dona Ahora
              <svg className="w-5 h-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:border-white rounded-full px-12 py-8 text-lg font-bold transition-all duration-300 hover:scale-105">
            <Link href="#nosotros">Conócenos</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
