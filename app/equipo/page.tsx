import { Equipo } from "@/components/equipo"

export const metadata = {
  title: 'Nuestro Equipo | Fundación Isla Cascajal',
  description: 'Conoce a los profesionales apasionados que trabajan día a día para transformar realidades en Isla Cascajal.',
}

export default function EquipoPage() {
  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-white">
      <Equipo />
    </div>
  )
}
