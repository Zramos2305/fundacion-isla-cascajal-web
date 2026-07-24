"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { QrCode, Landmark, Copy, MessageCircle, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Dona() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="dona" ref={sectionRef} className="relative min-h-screen pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dona.jpg"
          alt="Donaciones"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay to make text readable and highlight cards */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-batangas drop-shadow-lg">
            Haz una <span className="text-brand-terra drop-shadow-md">Donación</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto font-medium text-balance drop-shadow">
            Tu apoyo nos permite seguir construyendo UniverCiudad y transformando realidades en nuestro territorio. Cada aporte cuenta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Tarjeta 1: Aporte Económico */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-teal" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <Landmark className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Aporte Económico</h3>
                <p className="text-gray-500 text-sm">Transferencia o Consignación</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-6 border border-gray-200 border-dashed mb-8">
              <div className="relative w-40 h-40 mb-4 rounded-xl overflow-hidden shadow-sm">
                <Image 
                  src="/images/donaciones.jpeg" 
                  alt="Código QR Donaciones" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="text-sm font-medium text-gray-500 text-center">Escanea para transferir rápidamente</p>
            </div>

            <div className="space-y-4 flex-1">
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Entidad Bancaria</p>
                <p className="font-semibold text-gray-900">Bancolombia</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Tipo y Número de Cuenta</p>
                  <p className="font-semibold text-gray-900">Cuenta de Ahorros - 858-000-03165</p>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("85800003165");
                    alert("¡Número de cuenta copiado al portapapeles!");
                  }}
                  className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-teal hover:border-brand-teal transition-colors shadow-sm"
                  title="Copiar número"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Titular</p>
                <p className="font-semibold text-gray-900">Fundación Isla Cascajal <br /><span className="text-sm font-normal text-gray-500">NIT: 900248351-0</span></p>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 2: Donación en Especie */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-brand-teal rounded-[2rem] p-8 md:p-10 shadow-xl border border-brand-teal/20 flex flex-col relative overflow-hidden group text-white"
          >
            {/* Decorative background circle */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-sand">
                <Gift className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Donación en Especie</h3>
                <p className="text-white/70 text-sm">Alimentos, ropa, útiles, etc.</p>
              </div>
            </div>

            <div className="flex-1 relative z-10">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Recibimos con los brazos abiertos donaciones de elementos físicos que puedan sumar al bienestar de nuestras comunidades.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Alimentos no perecederos",
                  "Ropa y calzado en buen estado",
                  "Útiles escolares y libros",
                  "Materiales para artes y cultura"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-brand-sand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              className="w-full h-16 rounded-xl bg-brand-sand hover:bg-[#e6bb5c] text-brand-teal font-black text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 relative z-10 hover:-translate-y-1"
            >
              <a
                href="https://wa.me/573125674402?text=¡Hola%20Fundación%20Isla%20Cascajal!%20Me%20gustaría%20hacer%20una%20donación%20en%20especie%20y%20aportar%20mi%20granito%20de%20arena."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6" />
                Coordinar por WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
