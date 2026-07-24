"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroV2() {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/INICIO.png"
          alt="UniverCiudad"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Dark gradient overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        {/* Subtle Background Logo Watermark */}
        <div className="absolute -left-20 md:-left-10 top-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] opacity-[0.25] pointer-events-none mix-blend-screen overflow-hidden">
          <Image 
            src="/images/logo.jpg" 
            alt="" 
            fill
            className="object-contain invert grayscale blur-[1px] -rotate-12" 
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 mt-40 mb-48 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-medium tracking-[0.2em] text-sm md:text-base uppercase mb-6 flex items-center justify-center gap-3"
        >
          {/* Decorative line/icon */}
          <span className="w-8 h-[2px] bg-white/70"></span>
          ONG
          <span className="w-8 h-[2px] bg-white/70"></span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-5xl mx-auto mb-10 tracking-tight text-center"
        >
          Juntos Continuamos Construyendo <span className="block text-[1.2em] md:text-[1.3em] font-sans font-black tracking-tighter bg-gradient-to-r from-brand-sand to-brand-terra text-transparent bg-clip-text mt-2 drop-shadow-sm">UniverCiudad</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4"
        >
          <Button asChild size="lg" variant="outline" className="bg-black/20 text-white border-2 border-white/40 hover:bg-white/10 hover:border-white rounded-full px-12 py-7 text-lg font-bold transition-all duration-300 hover:scale-105 backdrop-blur-md">
            <Link href="#nosotros">Conócenos</Link>
          </Button>
          <Button asChild size="lg" className="relative overflow-hidden group bg-brand-teal text-white hover:bg-brand-teal rounded-full px-12 py-7 text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] border border-brand-teal hover:border-white/50">
            <Link href="/dona">
              <span className="relative z-10">Dona Ahora</span>
              {/* Efecto de brillo que pasa de izquierda a derecha en hover */}
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* White Gradient Transition Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-transparent to-white z-20 pointer-events-none translate-y-[2px]" />
    </section>
  )
}
