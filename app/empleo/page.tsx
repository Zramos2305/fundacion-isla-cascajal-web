import { BolsaEmpleo } from "@/components/bolsa-empleo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Bolsa de Empleo y Vacantes | Fundación Isla Cascajal',
  description: 'Conoce las vacantes disponibles y oportunidades laborales para formar parte del equipo de transformación social en la Fundación Isla Cascajal.',
  openGraph: {
    title: 'Bolsa de Empleo y Oportunidades Laborales | Fundación Isla Cascajal',
    description: 'Únete a nuestro equipo y sé parte del desarrollo comunitario en el Pacífico colombiano.',
  },
}

export default function EmpleoPage() {

  return (
    <main>
      <BolsaEmpleo />
    </main>
  )
}
