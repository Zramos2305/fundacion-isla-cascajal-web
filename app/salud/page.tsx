import { Salud } from "@/components/salud"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Salud y Bienestar Comunitario | Fundación Isla Cascajal',
  description: 'Brigadas médicas, salud etnoeducativa, atención psicosocial y programas de bienestar integral para familias y niños del litoral Pacífico.',
  openGraph: {
    title: 'Salud y Bienestar Comunitario | Fundación Isla Cascajal',
    description: 'Promovemos la prevención, salud ancestral e inclusión en comunidades vulnerables.',
  },
}

export default function SaludPage() {

  return (
    <div className="pt-24 bg-[#EAE8E3] min-h-screen">
      <Salud />
    </div>
  )
}
