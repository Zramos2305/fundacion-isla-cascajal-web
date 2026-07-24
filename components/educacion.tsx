"use client"

import { motion } from "framer-motion"
import { Search, ChevronRight, ChevronLeft, GraduationCap, Building2, Globe, Laptop, Award, Image as ImageIcon, Briefcase, FileText, Percent, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export function Educacion() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden font-sans">
      
      {/* =========================================
          1. TOP PART (Hero) - Light Gray Bg
          ========================================= */}
      <section className="relative w-full pt-32 pb-16 bg-[#F8F9FA] z-10">
        {/* Abstract Watermark */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#0b3b45] stroke-[0.2]">
            <circle cx="80" cy="20" r="30" />
            <circle cx="80" cy="20" r="45" />
            <circle cx="80" cy="20" r="60" />
            <circle cx="80" cy="20" r="75" />
          </svg>
        </div>

        <div className="w-[95%] max-w-[1600px] mx-auto flex flex-col lg:flex-row relative">
          
          {/* Left Image Area */}
          <div className="w-full lg:w-[60%] h-[400px] lg:h-[500px] bg-gray-200 lg:rounded-[3rem] relative overflow-hidden shadow-sm border border-gray-100">
            <Image 
              src="/images/edu1.jpg"
              alt="Estudiantes"
              fill
              className="object-cover"
            />
            
            {/* Pagination dots simulation */}
            <div className="absolute bottom-6 left-12 flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/50 border border-white/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/50 border border-white/50"></div>
            </div>
          </div>

          {/* Right Panel (Overlapping) - REMOVED SEARCH BAR */}
          <div className="w-full lg:w-[45%] lg:-ml-12 mt-[-50px] lg:mt-12 relative z-20 px-4 lg:px-0">
            <div className="bg-[#EBE9EE]/90 backdrop-blur-2xl rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-white flex flex-col justify-center h-full">
              <h2 className="text-2xl lg:text-4xl font-black text-[#0b3b45] mb-8 font-batangas">¿Qué programa buscas?</h2>
              
              {/* Quick Filters / Pills */}
              <div className="grid grid-cols-2 gap-4 lg:gap-5">
                <button className="flex items-center gap-3 bg-white p-4 lg:p-5 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow text-left text-sm lg:text-base font-bold text-[#0b3b45] border border-transparent hover:border-gray-100">
                  <Globe className="w-7 h-7 text-[#CC7A46]" /> Maestrías
                </button>
                <button className="flex items-center gap-3 bg-white p-4 lg:p-5 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow text-left text-sm lg:text-base font-bold text-[#0b3b45] border border-transparent hover:border-gray-100">
                  <GraduationCap className="w-7 h-7 text-[#CC7A46]" /> Pregrados
                </button>
                <button className="flex items-center gap-3 bg-white p-4 lg:p-5 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow text-left text-sm lg:text-base font-bold text-[#0b3b45] border border-transparent hover:border-gray-100">
                  <Briefcase className="w-7 h-7 text-[#CC7A46]" /> Técnicos
                </button>
                <button className="flex items-center gap-3 bg-white p-4 lg:p-5 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow text-left text-sm lg:text-base font-bold text-[#0b3b45] border border-transparent hover:border-gray-100">
                  <FileText className="w-7 h-7 text-[#CC7A46]" /> Saber Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          A LA UNE (Destacado) - White Bg
          ========================================= */}
      <section className="w-full py-16 lg:py-24 bg-white relative z-10">
        <div className="w-[95%] max-w-[1500px] mx-auto">
          <h3 className="text-3xl lg:text-4xl font-black text-[#0b3b45] font-batangas mb-8 pl-4">Destacado</h3>
          
          <div className="bg-[#F8F9FA] rounded-[2.5rem] p-8 lg:p-14 shadow-sm border border-gray-100 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Text - REMOVED ARROWS */}
            <div className="w-full lg:w-[55%]">
              <h4 className="text-3xl lg:text-4xl font-black text-[#0b3b45] mb-6 leading-tight">Hasta 80% de descuento en el Marco Europeo</h4>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nos complace contar con las mejores alianzas internacionales (UCAM, Alcalá, NIU). Da el siguiente paso en tu carrera profesional con doble titulación internacional.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link href="https://fundacion.islacascajal.org/registro" target="_blank" className="bg-[#0b3b45] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#07252c] hover:shadow-lg hover:-translate-y-1 transition-all">
                  AFÍLIATE AHORA
                </Link>
                {/* Las flechas fueron eliminadas aquí */}
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-[45%] relative lg:-mr-20 lg:-mt-24 z-20">
              <div className="w-full aspect-[4/3] bg-gray-200 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white relative">
                <Image 
                  src="/images/edu3.jpg"
                  alt="Programas Internacionales"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. BOTTOM PART - Distinct Colored Sections
          ========================================= */}

      {/* BENEFICIOS CLAVE - Sand/Arena Bg */}
      <section className="w-full py-20 lg:py-24 bg-[#EAE8E3] relative z-10">
        <div className="w-[95%] max-w-[1500px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0b3b45] mb-4 font-batangas">Beneficios Exclusivos</h2>
            <p className="text-lg text-[#0b3b45]/70 max-w-2xl mx-auto">Alianzas estratégicas diseñadas para potenciar tu futuro profesional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-[#0b3b45] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                <Percent className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0b3b45] mb-4">Tarifas Preferenciales</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Beneficios de hasta 80% garantizados en matrículas para toda nuestra red de afiliados a nivel nacional e internacional.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#CC7A46] to-[#a65d2f] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0b3b45] mb-4">Convalidación Oficial</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Programas internacionales con doble titulación, válidos para convalidar en Colombia y más de 150 países.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-olive to-[#53592f] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                <Laptop className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0b3b45] mb-4">Estudia a tu Ritmo</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Opciones de modalidad 100% virtual, semipresencial o presencial adaptadas a tu tiempo y ubicación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE PROGRAMAS - Light Gray/Blue Bg */}
      <section id="programas" className="w-full py-24 bg-[#F2F4F7] relative z-10">
        <div className="w-[95%] max-w-[1500px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0b3b45] mb-4 font-batangas">Nuestros Niveles de Formación</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nuestro portafolio cubre desde la preparación básica hasta el más alto nivel de posgrado con nuestros aliados.</p>
          </div>

          <div className="space-y-16">
            
            {/* Categoria 1: Posgrados Internacionales */}
            <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col lg:flex-row group">
              <div className="lg:w-[45%] bg-[#0b3b45] p-12 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />
                <span className="bg-brand-sand text-[#0b3b45] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full w-fit mb-8 shadow-md">Marco Europeo y Norteamericano</span>
                <h3 className="text-4xl lg:text-5xl font-black font-batangas mb-6">Maestrías, MBA y Doctorados</h3>
                <p className="text-white/80 text-xl mb-10 leading-relaxed">Da el gran salto profesional con un título internacional de las universidades UCAM, Complutense de Madrid, Alcalá y NIU.</p>
                <ul className="space-y-5 text-white/90 font-medium text-lg">
                  <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-[#CC7A46]"/> +50 Maestrías Oficiales Europeas</li>
                  <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-[#CC7A46]"/> Doctorados Virtuales</li>
                  <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-[#CC7A46]"/> Apostilla de la Haya</li>
                </ul>
              </div>
              <div className="lg:w-[55%] p-12 lg:p-16 bg-white">
                <h4 className="text-2xl font-bold text-[#0b3b45] mb-8 border-b border-gray-100 pb-4">Áreas de Especialización</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:shadow-md hover:border-[#CC7A46] hover:bg-white transition-all">
                    <h5 className="font-bold text-[#0b3b45] text-lg">Dirección y Administración</h5>
                    <p className="text-gray-500 mt-2 leading-relaxed">MBA, Finanzas, RRHH, Marketing</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:shadow-md hover:border-[#CC7A46] hover:bg-white transition-all">
                    <h5 className="font-bold text-[#0b3b45] text-lg">Tecnología y Sistemas</h5>
                    <p className="text-gray-500 mt-2 leading-relaxed">Big Data, Inteligencia Artificial, Ciberseguridad</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:shadow-md hover:border-[#CC7A46] hover:bg-white transition-all">
                    <h5 className="font-bold text-[#0b3b45] text-lg">Educación y Psicología</h5>
                    <p className="text-gray-500 mt-2 leading-relaxed">Neurociencia, Inclusión, Gestión Educativa</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:shadow-md hover:border-[#CC7A46] hover:bg-white transition-all">
                    <h5 className="font-bold text-[#0b3b45] text-lg">Derecho y Salud</h5>
                    <p className="text-gray-500 mt-2 leading-relaxed">Gestión Pública, Salud Laboral, DDHH</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Categoria 2: Pregrados */}
            <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col lg:flex-row-reverse group">
              <div className="lg:w-[45%] bg-brand-olive p-12 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 group-hover:bg-white/10 transition-colors" />
                <span className="bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full w-fit mb-8 backdrop-blur-md border border-white/20 shadow-md">Marco Internacional y Local</span>
                <h3 className="text-4xl lg:text-5xl font-black font-batangas mb-6">Pregrados Universitarios</h3>
                <p className="text-white/90 text-xl mb-10 leading-relaxed">Obtén tu título profesional con doble titulación internacional o estudia presencialmente en las mejores instituciones locales.</p>
                <ul className="space-y-5 text-white/90 font-medium text-lg">
                  <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-brand-sand"/> Pregrados NIU (Virtuales)</li>
                  <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-brand-sand"/> Universidad Santiago de Cali</li>
                  <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-brand-sand"/> 10% a 80% de descuento</li>
                </ul>
              </div>
              <div className="lg:w-[55%] p-12 lg:p-16 bg-white">
                <h4 className="text-2xl font-bold text-[#0b3b45] mb-8 border-b border-gray-100 pb-4">Programas Destacados</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50/80 hover:bg-white hover:shadow-md transition-all text-gray-700 font-medium border border-transparent hover:border-gray-100"><GraduationCap className="w-6 h-6 text-brand-olive"/> Derecho e Internacional</div>
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50/80 hover:bg-white hover:shadow-md transition-all text-gray-700 font-medium border border-transparent hover:border-gray-100"><GraduationCap className="w-6 h-6 text-brand-olive"/> Ingeniería de Software</div>
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50/80 hover:bg-white hover:shadow-md transition-all text-gray-700 font-medium border border-transparent hover:border-gray-100"><GraduationCap className="w-6 h-6 text-brand-olive"/> Administración de Empresas</div>
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50/80 hover:bg-white hover:shadow-md transition-all text-gray-700 font-medium border border-transparent hover:border-gray-100"><GraduationCap className="w-6 h-6 text-brand-olive"/> Psicología Educativa</div>
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50/80 hover:bg-white hover:shadow-md transition-all text-gray-700 font-medium border border-transparent hover:border-gray-100"><GraduationCap className="w-6 h-6 text-brand-olive"/> Contaduría y Finanzas</div>
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-brand-olive/5 hover:bg-brand-olive/10 transition-colors text-brand-olive font-bold border border-brand-olive/10"><GraduationCap className="w-6 h-6"/> + Áreas de la USC</div>
                </div>
              </div>
            </div>

            {/* Categoria 3: Técnicos y Pruebas */}
            <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col lg:flex-row group">
              <div className="lg:w-[45%] bg-gray-900 p-12 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />
                <span className="bg-brand-teal/20 text-brand-teal text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full w-fit mb-8 border border-brand-teal/30 shadow-md">Educación para el Trabajo</span>
                <h3 className="text-4xl lg:text-5xl font-black font-batangas mb-6">Técnicos, Bachillerato y Saber Pro</h3>
                <p className="text-white/80 text-xl mb-10 leading-relaxed">Educación accesible y de calidad para cerrar brechas sociales. Convenios con INTENALCO y programas propios.</p>
                <div className="bg-gradient-to-r from-brand-teal/20 to-transparent p-6 rounded-3xl border-l-4 border-brand-teal mt-2">
                  <p className="text-white font-bold uppercase tracking-wider mb-2">Beneficio Especial</p>
                  <p className="text-white/90 font-medium text-lg">Gratuidad en algunos programas técnicos y hasta 80% DTO en el resto.</p>
                </div>
              </div>
              <div className="lg:w-[55%] p-12 lg:p-16 bg-white">
                <h4 className="text-2xl font-bold text-[#0b3b45] mb-8 border-b border-gray-100 pb-4">Nuestra Oferta Técnica y Básica</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:shadow-md hover:border-gray-300 hover:bg-white transition-all">
                    <h5 className="font-bold text-[#0b3b45] text-lg">Técnicos Laborales</h5>
                    <p className="text-gray-500 mt-2 leading-relaxed">Sistemas, Enfermería, Veterinaria, Producción Gráfica, Turismo.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:shadow-md hover:border-gray-300 hover:bg-white transition-all">
                    <h5 className="font-bold text-[#0b3b45] text-lg">Técnicos INTENALCO</h5>
                    <p className="text-gray-500 mt-2 leading-relaxed">Mercadeo, Comercio Exterior, Costos y SST.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:shadow-md hover:border-gray-300 hover:bg-white transition-all">
                    <h5 className="font-bold text-[#0b3b45] text-lg">Bachillerato Adultos</h5>
                    <p className="text-gray-500 mt-2 leading-relaxed">Ciclos virtuales o presenciales para terminar tus estudios.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:shadow-md hover:border-gray-300 hover:bg-white transition-all">
                    <h5 className="font-bold text-[#0b3b45] text-lg">Pruebas Saber Pro</h5>
                    <p className="text-gray-500 mt-2 leading-relaxed">PreICFES, Simulacros, Orientación vocacional y Malla curricular.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA - Dark Teal Bg
          ========================================= */}
      <section className="w-full py-24 bg-[#0b3b45] relative z-10">
        <div className="w-[95%] max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-batangas tracking-tight">¿Listo para dar el siguiente paso?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">No dejes pasar esta oportunidad de estudiar con descuentos diseñados exclusivamente para nuestra comunidad. El trámite es 100% online y muy sencillo.</p>
          <Button asChild className="bg-[#CC7A46] hover:bg-[#a65d2f] text-white rounded-full px-16 py-8 text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <Link href="https://fundacion.islacascajal.org/registro" target="_blank" rel="noopener noreferrer">
              Afíliate y Solicita tu Beca <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </Button>
          <p className="mt-8 text-sm text-white/50 font-medium">Serás redirigido a nuestra plataforma oficial de registro seguro.</p>
        </div>
      </section>

    </div>
  )
}
