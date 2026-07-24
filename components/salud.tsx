"use client"

import { motion } from "framer-motion"
import { HeartPulse, Stethoscope, Microscope, Eye, Brain, Bone, Activity, ArrowRight, ShieldCheck, Clock, MapPin, Syringe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export function Salud() {
  return (
    <section id="salud" className="w-full relative overflow-hidden font-sans pb-24 z-20">
      
      {/* =========================================
          1. TOP PART (Hero) - Light Beige Bg
          ========================================= */}
      <div className="relative w-full pt-16 lg:pt-20 pb-20 bg-[#EAE8E3] z-10 border-t border-brand-olive/10">
        <div className="w-[95%] max-w-[1600px] mx-auto flex flex-col lg:flex-row relative items-center gap-10 lg:gap-0">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[45%] lg:pr-12 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-olive/10 text-brand-olive font-bold text-sm uppercase tracking-widest mb-6"
            >
              <HeartPulse className="w-4 h-4" />
              Red de Salud
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-6 font-batangas leading-[1.1] tracking-tight"
            >
              Tu bienestar, <br className="hidden lg:block"/>
              <span className="text-brand-olive relative">
                nuestra prioridad
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-sand opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-xl"
            >
              Accede a la mejor red médica de la región. Descuentos exclusivos en consultas con especialistas, exámenes avanzados y laboratorios para que nunca pospongas tu salud.
            </motion.p>
          </div>

          {/* Right Image Area (Overlapping) */}
          <div className="w-full lg:w-[55%] h-[400px] lg:h-[600px] bg-gray-200 lg:rounded-[3rem] rounded-[2rem] relative overflow-hidden shadow-2xl border-4 border-white z-10">
            {/* Actual Photo */}
            <Image 
              src="/images/SALUD.jpg"
              alt="Red de Salud"
              fill
              className="object-cover"
            />
            
            {/* Glassmorphism Badge */}
            <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-white/80 backdrop-blur-md rounded-2xl p-4 lg:p-6 shadow-xl border border-white/50 flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-olive rounded-full flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-gray-900 text-lg leading-tight">+200</p>
                <p className="text-sm text-gray-600 font-medium">Especialidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          2. BENTO GRID SECTION
          ========================================= */}
      <div className="w-full bg-[#F8F9FA] pt-24 pb-12 relative z-10">
        <div className="w-[95%] max-w-[1500px] mx-auto">
          
          <div className="text-center mb-16">
             <h3 className="text-3xl lg:text-5xl font-black text-[#0b3b45] font-batangas">Servicios Exclusivos</h3>
             <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">Una red integral pensada para cubrir todas las necesidades médicas de tu familia.</p>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* ITEM 1: Centro Médico Vida (Spans 2 columns) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-[#0b3b45] rounded-[3rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-xl group hover:shadow-2xl transition-all"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-brand-teal/30 transition-colors" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-bold border border-white/20 flex items-center gap-2 w-fit mb-6 text-sm">
                    <MapPin className="w-4 h-4" /> San Fernando, Cali
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black font-batangas mb-4">Centro Médico Vida</h3>
                  <p className="text-white/80 text-lg max-w-xl font-light leading-relaxed mb-8">Complejo médico de vanguardia. Accede a medicina general, especialidades e imágenes diagnósticas de alta tecnología.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <HeartPulse className="w-8 h-8 text-brand-sand mb-3" />
                    <h4 className="text-lg font-bold mb-2">Especialidades</h4>
                    <p className="text-white/60 text-sm">Cardiología, Ginecología, Oncología, Dermatología...</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <Activity className="w-8 h-8 text-brand-sand mb-3" />
                    <h4 className="text-lg font-bold mb-2">Imágenes & Rx</h4>
                    <p className="text-white/60 text-sm">Resonancias, TAC, Ecografías, Rayos X, Mamografías...</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ITEM 2: Laboratorio (Spans 1 column) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[3rem] p-8 lg:p-10 border border-gray-100 shadow-xl relative overflow-hidden flex flex-col hover:shadow-2xl transition-all"
            >
              <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-blue-100 w-fit">
                Certificación ICONTEC
              </div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-brand-olive to-[#53592f] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                <Microscope className="w-8 h-8" />
              </div>
              
              <h3 className="text-3xl font-black font-batangas text-gray-900 mb-4">Laboratorio Bioanálisis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-1">Resultados el mismo día con máxima precisión. Exámenes preventivos, de rutina y especializados.</p>
              
              <div className="space-y-3 mt-auto">
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <Clock className="w-5 h-5 text-brand-teal" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Resultados rápidos</p>
                    <p className="text-xs text-gray-500">Entre 1 a 3 horas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <Syringe className="w-5 h-5 text-brand-teal" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Servicio a Domicilio</p>
                    <p className="text-xs text-gray-500">Toma de muestras en casa</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ITEM 3: Especialistas (Spans 3 columns as a sub-grid) */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-4">
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-sand/30 text-[#CC7A46] flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-batangas">Óptica Distrivisión</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Cuidado integral de tu visión. Optometría, monturas, lentes de contacto y deportivas.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-sand/30 text-[#CC7A46] flex items-center justify-center mb-6">
                  <Bone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-batangas">Ortopedia COF</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Centro de Ortopedia y Fracturas. Cirugía ortopédica, fisioterapia y rehabilitación.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-sand/30 text-[#CC7A46] flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-batangas">Red de Psicología</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Salud mental integral. Terapia individual, familiar y manejo de conductas adictivas.</p>
              </motion.div>
              
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          3. FINAL CTA 
          ========================================= */}
      <div className="w-full bg-[#F8F9FA] pb-24 relative z-10">
        <div className="w-[95%] max-w-[1500px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-olive to-[#2c5563] rounded-[3rem] p-12 lg:p-20 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-sand/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-batangas tracking-tight">
                No pospongas más tu salud
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Únete a nuestra fundación y empieza a disfrutar de inmediato de todos los beneficios y descuentos médicos para ti y los tuyos.
              </p>
              <Button asChild className="bg-white hover:bg-gray-100 text-brand-olive rounded-full px-12 py-8 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <Link href="https://fundacion.islacascajal.org/registro" target="_blank" rel="noopener noreferrer">
                  Afíliate Hoy Mismo
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <p className="text-white/50 text-sm mt-6 font-medium">Aplican términos y condiciones. Válido con carnet de afiliado.</p>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
