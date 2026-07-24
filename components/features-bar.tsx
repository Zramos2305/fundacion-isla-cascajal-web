"use client"

import { BookOpen, Sprout, HeartHandshake, ShieldCheck } from "lucide-react"

export function FeaturesBar() {
  return (
    <div className="w-full bg-white border-b border-gray-100 py-8 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 md:gap-8">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="font-bold text-[#1e293b] text-sm md:text-base">Educación de Calidad</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-olive/10 flex items-center justify-center text-brand-olive">
              <Sprout className="w-5 h-5" />
            </div>
            <span className="font-bold text-[#1e293b] text-sm md:text-base">Desarrollo Sostenible</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-sand/20 flex items-center justify-center text-amber-600">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <span className="font-bold text-[#1e293b] text-sm md:text-base">Impacto Comunitario</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-terra/10 flex items-center justify-center text-brand-terra">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-bold text-[#1e293b] text-sm md:text-base">Acompañamiento Integral</span>
          </div>

        </div>
      </div>
    </div>
  )
}
