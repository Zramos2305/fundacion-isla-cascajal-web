import { HeroV5 } from "@/components/hero-v5"
import { FeaturesBar } from "@/components/features-bar"
import { SobreNosotros } from "@/components/sobre-nosotros"
import { CamposAccion } from "@/components/campos-accion"
import { EnfoqueDiferencial } from "@/components/enfoque-diferencial"
import { Impacto } from "@/components/impacto"
import { Programas } from "@/components/programas"
import { AlianzasOrbital } from "@/components/alianzas-orbital"
import { Contact } from "@/components/contact"
import { VideoIntroModal } from "@/components/video-intro-modal"

export default function Home() {
  return (
    <>
      <VideoIntroModal />
      <HeroV5 />
      <FeaturesBar />
      <SobreNosotros />
      <CamposAccion />
      <EnfoqueDiferencial />
      <Impacto />
      <Programas />
      <div id="alianzas">
        <AlianzasOrbital />
      </div>
      <Contact />
    </>
  )
}
