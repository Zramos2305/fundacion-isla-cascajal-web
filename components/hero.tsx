"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.6 + i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const stats = [
    { number: "17+", label: "Años de Impacto" },
    { number: "500+", label: "Familias Atendidas" },
    { number: "50+", label: "Programas Sociales" },
    { number: "4", label: "Campos de Acción" },
  ]

  return (
    <section ref={ref} id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/INICIO.png"
          alt="Comunidad trabajando juntos"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
      </motion.div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-card/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-48 h-48 border border-card/10 rounded-full"
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 lg:px-8 pt-24"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-card/20 rounded-full px-5 py-2.5 mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-accent rounded-full"
            />
            <span className="text-card text-sm font-semibold tracking-wide">Desde 2008 transformando vidas</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-card leading-[1.1] mb-6 tracking-tight"
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Construyendo
            </motion.span>
            <motion.span
              className="block text-accent relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              UniverCiudad
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 300 12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              >
                <motion.path
                  d="M0 6 Q75 0 150 6 T300 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-accent/50"
                />
              </motion.svg>
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-card/90 max-w-2xl mb-10 leading-relaxed font-light"
          >
            Trabajamos por el desarrollo social, cultural y ambiental de las comunidades más vulnerables
            a través de la etnoeducación, las artes y el acompañamiento comunitario.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-base font-bold shadow-2xl hover:shadow-accent/30 transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="#contacto">
                  Únete a Nosotros
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base font-semibold bg-card/10 border-card/30 text-card hover:bg-card/20 backdrop-blur-sm transition-all duration-300"
              >
                <Link href="#nosotros">
                  <Play className="mr-2 w-5 h-5 fill-current" />
                  Conoce Más
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center md:text-left group cursor-pointer"
              >
                <motion.p
                  className="text-3xl md:text-5xl font-bold text-card mb-1 tracking-tight"
                >
                  {stat.number}
                </motion.p>
                <p className="text-sm text-card/70 font-medium group-hover:text-card/90 transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-card/60 text-xs font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-card/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
