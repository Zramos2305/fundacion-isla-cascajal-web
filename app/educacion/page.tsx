import { Educacion } from "@/components/educacion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Educación y Etnoeducación | Fundación Isla Cascajal',
  description: 'Programas educativos, formación etnoeducativa, alfabetización y diplomados orientados al fortalecimiento de las comunidades del Pacífico colombiano.',
  openGraph: {
    title: 'Educación y Etnoeducación | Fundación Isla Cascajal',
    description: 'Transformación social a través de la educación superior, técnica y continua para comunidades vulnerables.',
  },
}

export default function EducacionPage() {

  return (
    <div className="pt-24">
      <Educacion />
    </div>
  )
}
