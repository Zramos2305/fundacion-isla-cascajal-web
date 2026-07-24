"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Heart, Users } from "lucide-react"

export function HeroV3() {
  return (
    <section className="relative w-full bg-[#f8fafd] overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32">
      {/* Elementos Geométricos de Fondo (Abstract Patterns) */}
      <div className="absolute top-20 left-10 w-64 h-64 border-[40px] border-brand-teal/5 rounded-full blur-sm" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-sand/10 rounded-full blur-3xl" />
      {/* Puntos (Dots pattern) usando un radial gradient como hack de CSS */}
      <div className="absolute top-40 right-1/4 w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #3A6F82 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #CC7A46 2px, transparent 2px)', backgroundSize: '20px 20px' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LADO IZQUIERDO: Texto y Llamado a la Acción */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-brand-terra"></span>
              <span className="text-brand-terra font-bold text-sm tracking-[0.2em] uppercase">
                Construyendo UniverCiudad
              </span>
            </div>

            <h1 className="text-5xl lg:text-[4rem] font-bold text-[#1e293b] leading-[1.1] mb-6 font-batangas tracking-tight">
              Transformando <br />
              <span className="text-brand-teal">Realidades</span> en el <br />
              Territorio
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl font-medium leading-relaxed">
              Trabajamos por el desarrollo social de las comunidades más vulnerables a través de programas educativos, artístico-culturales y acompañamiento integral.
            </p>

            {/* Checkmarks / Beneficios */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-terra shrink-0" />
                <span className="font-bold text-[#1e293b]">Educación Integral</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-terra shrink-0" />
                <span className="font-bold text-[#1e293b]">Desarrollo Comunitario</span>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white rounded-full px-10 py-6 text-lg font-bold shadow-[0_8px_20px_rgba(58,111,130,0.3)] transition-transform hover:scale-105">
                <Link href="#nosotros">Conócenos</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-gray-50 text-[#1e293b] border-2 border-gray-200 rounded-full px-10 py-6 text-lg font-bold shadow-sm transition-transform hover:scale-105">
                <Link href="/dona">Cómo Ayudar</Link>
              </Button>
            </div>
          </div>

          {/* LADO DERECHO: Imagen recortada e insignias flotantes */}
          <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
            
            {/* Círculo de fondo grande (estilo Edura) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] border-[12px] border-brand-teal rounded-full opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-brand-teal/5 rounded-full" />

            {/* Imagen Principal Recortada */}
            <div className="relative z-10 w-full max-w-[500px] aspect-[4/5] flex items-end justify-center">
              {/* Usando una imagen genérica mientras el usuario sube la suya recortada. Le pondremos un object-contain. */}
              <div className="relative w-full h-full bg-brand-olive/20 rounded-t-full overflow-hidden border-b-8 border-brand-teal">
                 <Image 
                  src="/images/niña.png"
                  alt="Estudiante Isla Cascajal"
                  fill
                  className="object-cover"
                 />
              </div>
            </div>

            {/* Badge Flotante 1 (Izquierda) */}
            <div className="absolute bottom-12 -left-4 sm:left-4 z-20 bg-white rounded-full py-3 px-6 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] animate-bounce-slow">
              <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-[#1e293b]">2,500+</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Familias Apoyadas</p>
              </div>
            </div>

            {/* Badge Flotante 2 (Derecha Arriba) */}
            <div className="absolute top-20 -right-4 sm:right-0 z-20 bg-white rounded-full py-3 px-6 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-brand-terra text-white rounded-full flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-[#1e293b]">15+ Años</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">De Experiencia</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
