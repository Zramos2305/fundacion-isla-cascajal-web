"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import { useState, useRef } from "react"
import { Play, Volume2 } from "lucide-react"
import { VirtualRadio } from "@/components/virtual-radio"

export function HeroV5() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="inicio" className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      
      {/* Background Image & Solid Teal Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/INICIO.png"
          alt="Comunidad UniverCiudad"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Solid Teal Overlay similar to the screenshot */}
        <div className="absolute inset-0 bg-[#0c404d]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0c404d]/40" />
      </div>

      {/* Decorative Circles (Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute top-0 md:-top-10 lg:-top-16 xl:-top-[40px] -left-[150px] lg:-left-[200px] xl:-left-[250px] hidden lg:block z-10 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
      >
        <Image 
          src="/images/elemento1.png" 
          alt="Elementos decorativos" 
          fill 
          className="object-contain object-bottom" 
        />
      </motion.div>

      {/* Decorative Circles (Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="absolute -bottom-[20px] md:-bottom-[40px] xl:-bottom-[60px] -right-[100px] md:-right-[120px] lg:-right-[150px] xl:-right-[180px] hidden lg:block z-10 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]"
      >
        <Image 
          src="/images/elemento2.png" 
          alt="Elementos decorativos" 
          fill 
          className="object-contain object-center" 
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-32 pb-20 flex flex-col items-center">
        
        {/* Title Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-[900px] h-[250px] md:h-[320px] lg:h-[380px] flex items-center justify-center mt-0 mb-4"
        >
          <Image
            src="/images/TITULO.png"
            alt="Continuamos Construyendo UniverCiudad"
            fill
            className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)]"
            priority
          />
        </motion.div>

        {/* Calls to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="bg-[#2A6573] text-white hover:bg-[#1E4D5A] rounded-full px-8 py-6 text-lg font-medium transition-all shadow-xl hover:shadow-[#2A6573]/40">
              <Link href="/dona">
                Dona Ahora
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="bg-[#F4B860] text-[#0a3842] hover:bg-[#e0a44f] rounded-full px-8 py-6 text-lg font-bold transition-all shadow-xl hover:shadow-[#F4B860]/40">
              <Link href="/#sobre-nosotros">
                Conócenos
              </Link>
            </Button>
          </motion.div>
          
          <VirtualRadio />

          {/* Audio Welcome Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleAudio}
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full px-6 py-4 text-lg font-medium transition-all shadow-lg hover:shadow-white/20"
          >
            {isPlaying ? <Volume2 className="w-5 h-5 animate-pulse text-brand-sand" /> : <Play className="w-5 h-5 ml-1" />}
            {isPlaying ? "Escuchando..." : "Escuchar Bienvenida"}
          </motion.button>
          
          <audio 
            ref={audioRef} 
            src="/images/BIENVENIDO.mp3" 
            onEnded={() => setIsPlaying(false)}
            className="hidden" 
          />
        </motion.div>

      </div>

    </section>
  )
}
