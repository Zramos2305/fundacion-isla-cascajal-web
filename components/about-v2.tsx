"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckSquare } from "lucide-react"

export function AboutV2() {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      
      {/* Elemento decorativo sutil en el fondo (Opcional, estilo Edura) */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-gray-50 rounded-tl-full opacity-50" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO IZQUIERDO: Collage de Imágenes */}
          <div className="relative">
            {/* Imagen Principal (Fondo) */}
            <div className="relative w-4/5 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="/images/comunidad.png" 
                alt="Comunidad Fundación Isla Cascajal"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Imagen Secundaria (Superpuesta al frente) */}
            <div className="absolute -bottom-10 -right-4 w-3/5 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/images/niños.png" 
                alt="Educación en Isla Cascajal"
                fill
                className="object-cover"
              />
            </div>

            {/* Sello/Insignia Circular (estilo 24+ years) */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-white rounded-full p-2 shadow-2xl flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-full h-full rounded-full border border-brand-teal/20 flex items-center justify-center relative">
                {/* Texto curvo en SVG o simplemente centrado */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                  <span className="text-3xl font-bold text-brand-teal font-batangas">15+</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Años de<br/>Historia</span>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Texto "Nosotros" */}
          <div className="flex flex-col items-start pt-12 lg:pt-0 lg:pl-10 relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-brand-terra font-bold text-sm tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-4 h-4 text-brand-terra">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </span>
                Conócenos un Poco Más
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6 leading-tight font-batangas tracking-tight">
              Sumérgete en nuestros programas y <span className="text-brand-teal">enciende tu solidaridad!</span>
            </h2>

            <p className="text-gray-600 mb-8 font-medium leading-relaxed">
              Trabajamos incansablemente para mejorar la calidad de vida en la Isla Cascajal. A través de metodologías probadas y un enfoque profundamente humano, conectamos oportunidades con quienes más las necesitan, posicionándonos como referentes de desarrollo social en el Pacífico.
            </p>

            {/* Checkmarks Estructurados */}
            <div className="space-y-4 mb-10 w-full">
              <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                <div className="bg-brand-teal text-white rounded-md p-1">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <span className="font-bold text-[#1e293b]">Reingeniería drástica de sistemas de valor añadido</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                <div className="bg-brand-teal text-white rounded-md p-1">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <span className="font-bold text-[#1e293b]">Acceso a más de 10 programas comunitarios</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                <div className="bg-brand-teal text-white rounded-md p-1">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <span className="font-bold text-[#1e293b]">Aprende habilidades de alto impacto para la vida</span>
              </div>
            </div>

            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white rounded-md px-8 py-6 text-base font-bold shadow-md transition-transform hover:scale-105">
              <Link href="#programas">Conoce Más <span className="ml-2">→</span></Link>
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}
