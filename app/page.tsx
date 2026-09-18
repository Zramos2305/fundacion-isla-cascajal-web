import { HeroV5 } from "@/components/hero-v5"
import { FeaturesBar } from "@/components/features-bar"
import { SobreNosotros } from "@/components/sobre-nosotros"
import { CamposAccion } from "@/components/campos-accion"
import { EnfoqueDiferencial } from "@/components/enfoque-diferencial"
import { Impacto } from "@/components/impacto"
import { Programas } from "@/components/programas"
import { AlianzasMarqueeSutil } from "@/components/alianzas-marquee-sutil"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <HeroV5 />
      <FeaturesBar />
      <SobreNosotros />
      <CamposAccion />
      <EnfoqueDiferencial />
      <Impacto />
      <Programas />
      <AlianzasMarqueeSutil />
      <Contact />
    </>
  )
}



