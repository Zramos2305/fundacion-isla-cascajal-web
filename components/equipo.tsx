"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Briefcase, X } from "lucide-react"

const team = [
  {
    id: 1,
    name: "Mansa Bryan Mosquera",
    role: "CEO",
    image: "/images/A1.jpeg",
    profile: " Hijo del pacífico colombiano y descendiente de Alkebulan, es profesional en Artes y en la Primera Infancia, investigador y oralitor de la cultura de los pueblos de la diáspora africana en Colombia, donde además es líder social y comunitario.   Heredero de los saberes ancestrales de los pueblos del Pacífico Colombiano e integrante del movimiento de narradores orales y oralitores en Colombia.   Este docente universitario con una trayectoria de más de 25 años, en la actualidad dirige esta organización, desde donde se hace una apuesta social con la etnoeducación y la educación para adultos, además del acceso a la educación superior en todos los niveles formativos para todas las personas especialmente la comunidad NARP y las comunidades vulnerables. "
  },
  {
    id: 2,
    name: "Diana Carolina Rojas Vallejo",
    role: "Directora Administrativa",
    image: "/images/A2.png",
    profile: "Profesional en Salud y líder sociocultural vallecaucana con trayectoria en el sector público y social, impulsora de programas de inclusión, desarrollo comunitario y fortalecimiento institucional en el Pacífico colombiano. Su perfil combina formación en salud y Auditoría interna con el compromiso de la transformación social.\n\nSu trayectoria representa una nueva generación de liderazgo social en el Valle del Cauca, siendo una profesional comprometida y con enfoque comunitario. Desde la Fundación Isla Cascajal, su gestión busca consolidar proyectos que integren tecnología, equidad y desarrollo humano, posicionando a la organización como referente en transformación social y sostenibilidad territorial. En su liderazgo de planeación estratégica y en la articulación interinstitucional de la Fundación con otros sectores, ha fortalecido su papel como agente de desarrollo social en la región. Las principales líneas de acción van desde la gestión social y comunitaria, promoviendo proyectos de bienestar, inclusión y reconstrucción del tejido social en comunidades vulnerables del litoral Pacífico, continuando con la administración institucional, optimizando procesos de contratación, control financiero y transparencia en la ejecución de recursos, hasta lograr la innovación y sostenibilidad, impulsando la integración de tecnología y buenas prácticas administrativas para mejorar la eficiencia de los programas sociales."
  },
  {
    id: 3,
    name: "Johan Andrés García Quintero",
    role: "Subdirector General de Regionales",
    image: "/images/A3.png",
    profile: "Ingeniero Comercial especialista en Gestión Integral de Proyectos, con Maestría en Gerencia de la Ciencia, Tecnología e Innovación y sólida experiencia en el diseño y gestión de proyectos sociales y educativos orientados al fortalecimiento de las comunidades afrocolombianas. Su formación en gestión empresarial se ha articulado con un profundo compromiso con la inclusión, la equidad y el desarrollo comunitario, consolidando iniciativas que integran sostenibilidad económica e impacto social.\n\nSu gestión social y comunitaria se desarrolla mediante programas de capacitación, emprendimiento y desarrollo económico para comunidades afrocolombianas, promoviendo la autonomía y la generación de ingresos sostenibles. Asimismo, coordina proyectos educativos que visibilizan los saberes ancestrales, fomentan la identidad cultural y fortalecen competencias en jóvenes y adultos del litoral Pacífico. Su experiencia también se ha enfocado en la articulación interinstitucional, generando alianzas con entidades públicas, privadas y comunitarias para potenciar proyectos de inclusión y desarrollo territorial, e implementando estrategias comerciales y sociales que integran tecnología, gestión administrativa y buenas prácticas para mejorar la eficiencia de los programas comunitarios."
  },
  {
    id: 4,
    name: "Xiomara Mosquera Torres",
    role: "Subdirectora de Extensión y Cosmovisión Etnoeducativa",
    image: "/images/A4.png",
    profile: "Es Licenciada en Educación Preescolar, Especialista en Pedagogía Infantil, Magíster en Educación y candidata a Doctora en Educación, experta y líder en gestión pedagógica con profunda vocación fortaleza en el campo de la Educación Inicial, la Primera Infancia y la gestión social.\n\nReferente Territorial de Educación Inicial, líder dinamizadora de procesos de cualificación a maestras y maestros de zonas urbanas y rurales a través de los colectivos pedagógicos del territorio, desempeñándose también como Asesora y Coordinadora Pedagógica de programas del ICBF y Tutora del programa PTAF.I 3.0 del Ministerio de Educación Nacional. Amplia experiencia en rectoría y coordinación académica de centros educativos públicos y privados.\n\nAuditora Interna de Calidad y Gestión de la Calidad para el sector educativo, certificada por ICONTEC Internacional. Líder por más de una década de diseño y ejecución de proyectos sobre niñez, familia y liderazgo en la región Pacífico y Caribe. Experta en articulación de estrategias educativas y empoderamiento a los docentes para enriquecer los ambientes de aprendizaje."
  },
  {
    id: 4,
    name: "Germán Enrique Ruiz Valencia",
    role: "Coordinador Jurídico ",
    image: "/images/GER.jpeg",
    profile: "Abogado litigante en ejercicio y especialista en Derecho Administrativo, con experiencia en la defensa de derechos e intereses colectivos y en la representación de comunidades, especialmente de sectores en condición de vulnerabilidad. Cuenta con experiencia en procesos relacionados con acciones de grupo, participación ciudadana y defensa de los derechos de las comunidades. Complementa su formación jurídica con una amplia trayectoria en el sector cultural y musical, como docente universitario y músico especializado en instrumentos de percusión, liderando proyectos artísticos de carácter nacional e internacional y en procesos comunitarios orientados a la formación, el bienestar y el desarrollo integral de niños y jóvenes.  Su experiencia interdisciplinaria entre el Derecho, la cultura, la educación y el trabajo comunitario le ha permitido liderar y acompañar iniciativas encaminadas a generar oportunidades, fortalecer el tejido social y promover nuevas perspectivas de desarrollo y proyecto de vida para las nuevas generaciones. Se caracteriza por su liderazgo, compromiso social, capacidad de gestión, vocación de servicio y sensibilidad frente a las necesidades de las comunidades, integrando sus conocimientos profesionales y culturales para contribuir a la construcción de una sociedad más justa, participativa e incluyente. "
  },
  {
    id: 5,
    name: "José David Valencia Valencia",
    role: "Coordinador Comercial",
    image: "/images/A5.png",
    profile: "Publicista con Especialización en Gerencia de Mercadeo Global, Especialización en Marketing Digital y Magister en Dirección Empresarial con más de una década de experiencia en la gestión de comunidades digitales, posicionamiento de marcas educativas y promoción de programas académicos orientados al ingreso universitario. Su formación en mercadeo se ha complementado con una práctica constante en el diseño de estrategias de comunicación digital, fidelización de audiencias y generación de contenidos de alto impacto.\n\nHa liderado campañas de captación y acompañamiento para estudiantes aspirantes a la educación superior, consolidando procesos de orientación vocacional y fortalecimiento académico. Su experiencia como jefe de mercadeo le ha permitido construir comunidades digitales sólidas, generar interacción significativa y potenciar la visibilidad institucional en entornos altamente competitivos.\n\nParalelamente, su trayectoria en el trabajo social se refleja en proyectos comunitarios que promueven inclusión, equidad y acceso a la educación, articulando esfuerzos con organizaciones sociales y educativas para transformar realidades locales."
  },
  {
    id: 6,
    name: "Heidy Tatiana Cortés Castillo",
    role: "Coordinadora de Operaciones Financieras",
    image: "/images/A6.png",
    profile: "Contador Público especialista en finanzas con experiencia en el sector financiero y contable. Experto en análisis financiero, gestión contable, elaboración e interpretación de estados financieros, control presupuestal y cumplimiento tributario. Orientado a la optimización de procesos, la toma de decisiones estratégicas y la generación de valor para las organizaciones mediante una gestión eficiente y transparente de los recursos.\n\nReconocida por su capacidad de integrar la rigurosidad técnica con un profundo compromiso social. Su trayectoria combina la gestión financiera estratégica con el liderazgo en programas de inclusión, equidad y desarrollo comunitario.\n\nA lo largo de su carrera ha impulsado proyectos que fortalecen la sostenibilidad económica de organizaciones sociales, garantizando transparencia en el manejo de recursos y eficiencia en la planeación presupuestal. Su visión financiera se orienta hacia la responsabilidad social, articulando procesos contables y financieros con iniciativas que promueven bienestar colectivo y transformación territorial."
  },
  {
    id: 7,
    name: "Duván Camilo Balanta Bonilla",
    role: "Coordinador de Proyectos",
    image: "/images/A7.png",
    profile: "Ingeniero Electrónico con Especialización en Gerencia de Proyectos y MBA en Proyectos, con sólida trayectoria en sistemas de acueducto, medición hidráulica y análisis de datos de caudales, presiones y demás variables críticas. Su formación técnica se complementa con una visión estratégica que integra innovación tecnológica, gestión eficiente de recursos y sostenibilidad ambiental.\n\nHa liderado proyectos de formulación y ejecución con alto impacto social y comunitario, orientados a garantizar el acceso equitativo al agua potable y mejorar la calidad de vida en territorios vulnerables. Su experiencia combina el rigor científico con la capacidad de articular actores institucionales y comunitarios, consolidando soluciones que responden tanto a necesidades técnicas como humanas."
  },
  {
    id: 8,
    name: "Holdy Méndez Londoño",
    role: "Coordinador de Cooperación e Internacionalización",
    image: "/images/A8.png",
    profile: "Ingeniero Electrónico especialista en Gerencia de Proyectos con amplia trayectoria en el sector corporativo y público. Su experiencia combina el rigor técnico con la innovación estratégica, liderando proyectos de infraestructura TI, seguridad de redes y procesos de contratación estatal.\n\nA lo largo de su carrera ha consolidado un enfoque que trasciende lo tecnológico, integrando la gestión social como eje fundamental de cada iniciativa, impulsando proyectos que fortalecen la inclusión, la equidad y el desarrollo comunitario, articulando soluciones técnicas con impacto humano y sostenible."
  },
  {
    id: 9,
    name: "Zayra Ramos Ramírez",
    role: "Coordinadora de Comunicaciones y Canales Digitales",
    image: "/images/A9.png",
    profile: "Ingeniera Multimedia con formación en formulación de proyectos y sólida trayectoria en el desarrollo de software y la implementación de soluciones tecnológicas innovadoras. Su formación le permite integrar creatividad, diseño digital y programación avanzada con un enfoque estratégico orientado al impacto social.\n\nHa liderado proyectos que combinan la tecnología multimedia con la gestión social, desarrollando plataformas digitales, aplicaciones y sistemas interactivos que promueven inclusión, participación ciudadana y fortalecimiento comunitario. Su visión se centra en utilizar la innovación tecnológica como herramienta para la transformación social y el desarrollo sostenible."
  },
  {
    id: 10,
    name: "Roberto Robles Castrillo",
    role: "Coordinador de las Artes, las Culturas y los Saberes",
    image: "/images/A10.png",
    profile: "Magister en educación superior, Especialista en docencia universitaria, Licenciado en Educación artística, es influenciado por el maestro de la crítica de la mirada Bruno Tackels. Discípulo del pedagogo Eduardo Pastrana Rodríguez. Creador del programa de pregrado Gestión cultural y Artística del FCECEP, Ministerio de Educación Nacional de Colombia.\n\nGestor cultural, investigador y docente con larga experiencia en la administración cultural y artística en educación superior. Lideró la coordinación de arte y cultura de la Universidad Santiago de Cali, donde diseñó e implementó programas académicos y proyectos de formación en gestión cultural, educación artística y políticas culturales.\n\nCo-investigador en proyectos del Ministerio de Cultura sobre emprendimiento cultural y políticas públicas, y autor de libros como Partitura de las Emociones y Sensibilidad estética entre saberes científicos y artísticos. Su trayectoria incluye participación en redes de gestores culturales, formulación de planes decenales de cultura y dirección del Observatorio Cultural de Cali, consolidándose como un referente en el diseño, planeación y evaluación de proyectos culturales y educativos."
  },
  {
    id: 11,
    name: "Gladys Zamudio Tobar",
    role: "Coordinadora de Extensión",
    image: "/images/A11.png",
    profile: "Licenciada en Ciencias de la Educación, Literatura e Idiomas. Especialista en Desarrollo Intelectual y Educación y Maestría en Lingüística y Español.\n\nFundadora del Grupo de Investigación Ciencias del Lenguaje de la Facultad de Educación de la USC, el cual ha alcanzado la Categoría A otorgada por MinCiencias. Así mismo, ejerció la dirección del Centro del Lenguaje en la Institución Universitaria de las Culturas y las Artes Populares (IPC). Es creadora del Club Literario Clepsidra, un espacio enfocado en impulsar el panorama literario y cultural en el Valle del Cauca.\n\nSus proyectos se centran en procesos de comprensión y producción textual, los lenguajes de la diversidad, la deserción y permanencia estudiantil, y el valor pedagógico de los discursos narrativos. Cuenta con más de 50 publicaciones entre artículos científicos y libros formativos.\n\nAdemás de su producción científica, posee una profunda vocación poética que cultiva desde su infancia. En 2025 presentó en la Feria Internacional del Libro de Bogotá (FILBo) su poemario titulado \"Sin espinas en el cuerpo\", publicado bajo el sello editorial de la USC. Su obra poética se caracteriza por explorar la profundidad emocional, la resiliencia y el uso de la palabra como una herramienta de sanación."
  },
  {
    id: 12,
    name: "Indhira Valdeira Valdés Salazar",
    role: "Coordinadora de Cosmovisión de Etnoeducativa",
    image: "/images/A12.png",
    profile: "Maestra de Matemáticas con formación en Etnoeducación, comprometida con la integración de los saberes ancestrales y la enseñanza científica en contextos comunitarios. Su trayectoria combina la rigurosidad académica con un enfoque intercultural, promoviendo procesos educativos que fortalecen la identidad cultural y el desarrollo social.\n\nHa liderado iniciativas pedagógicas que vinculan la enseñanza de las matemáticas con la realidad territorial y comunitaria, generando metodologías inclusivas que reconocen la diversidad cultural y fomentan la participación de estudiantes y líderes sociales. Su gestión se orienta a la construcción de proyectos educativos que contribuyen a la equidad, la cohesión social y la sostenibilidad comunitaria.\n\nTiene reconocimiento y visibilización en diversos escenarios de los derechos de las comunidades étnicas, como en la Mesa Nacional de Mujeres Negras, Afrocolombianas, Raizales y Palenqueras. Ha sido destacada en procesos comunitarios orientados al empoderamiento femenino y la participación política con enfoque étnico en el departamento del Valle del Cauca."
  }

]

export function Equipo() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [flippedId, setFlippedId] = useState<number | null>(null)
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null)

  return (
    <section id="equipo" ref={sectionRef} className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-brand-teal font-bold text-sm tracking-[0.2em] uppercase mb-4 px-5 py-2 bg-brand-teal/10 rounded-full">
            Las personas detrás
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Nuestro <span className="text-brand-teal">Equipo</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Conoce a los profesionales apasionados que trabajan día a día para transformar realidades en Isla Cascajal.
          </p>
        </motion.div>

        {/* Cuadrícula de Equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative cursor-pointer perspective-[1000px]"
              onClick={() => setFlippedId(flippedId === member.id ? null : member.id)}
            >
              <motion.div
                className="relative aspect-[3/4] w-full rounded-[2rem] shadow-lg transition-all duration-500"
                animate={{ rotateY: flippedId === member.id ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Lado Frontal (Foto) */}
                <div
                  className="absolute inset-0 rounded-[2rem] overflow-hidden bg-gray-100"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b3b45]/90 via-[#0b3b45]/20 to-transparent opacity-80" />

                  {/* Glassmorphism Info Panel */}
                  <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                    <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-brand-sand font-medium text-sm">{member.role}</p>
                  </div>
                </div>

                {/* Lado Trasero (Perfil Resumido) */}
                <div
                  className="absolute inset-0 rounded-[2rem] bg-[#0b3b45] p-6 flex flex-col justify-center items-center text-center shadow-inner border border-brand-teal/30"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <h3 className="text-white font-bold text-2xl mb-1">{member.name}</h3>
                  <p className="text-brand-sand font-semibold text-sm tracking-wide uppercase mb-3">{member.role}</p>
                  <div className="w-12 h-1 bg-brand-sand mb-4 rounded-full shrink-0"></div>

                  {/* Perfil cortado a unas cuantas líneas */}
                  <div className="text-white/90 text-sm leading-relaxed line-clamp-4 md:line-clamp-5 whitespace-pre-wrap overflow-hidden">
                    {member.profile}
                  </div>

                  {/* Botón Leer Más */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Evita que se voltee la tarjeta al dar clic en leer más
                      setSelectedMember(member);
                    }}
                    className="mt-4 px-4 py-2 bg-brand-sand/20 hover:bg-brand-sand text-brand-sand hover:text-[#0b3b45] rounded-full text-sm font-bold tracking-wider uppercase transition-colors"
                  >
                    Leer más
                  </button>

                  <span className="absolute bottom-4 text-brand-teal/70 text-xs">
                    Toca afuera para voltear
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner: Trabaja con nosotros */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#0b3b45] shadow-2xl"
        >
          {/* Decorative shapes inside banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sand/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-olive/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 lg:p-14 gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Briefcase className="w-8 h-8 text-brand-sand" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                ¿Deseas trabajar con nosotros?
              </h3>
              <p className="text-white/80 text-lg max-w-xl">
                Únete a nuestro equipo y sé parte de la transformación social. Estamos buscando talento comprometido con el desarrollo de nuestras comunidades.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <Link href="/empleo" className="group flex items-center justify-center gap-3 bg-brand-sand hover:bg-[#e0a44f] text-[#0a3842] rounded-full px-8 py-5 text-xl font-bold transition-all w-full md:w-auto shadow-lg hover:shadow-xl">
                Ver vacantes disponibles
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modal / Ventana Emergente para el Perfil Completo */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Fondo Oscuro Desenfocado */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            />

            {/* Contenido del Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
                {/* Botón Cerrar */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Encabezado del Modal */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
                  <div className="relative w-32 h-32 rounded-3xl overflow-hidden shrink-0 shadow-lg">
                    <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-3xl font-black text-[#0b3b45] mb-2">{selectedMember.name}</h3>
                    <p className="text-brand-teal font-bold text-lg tracking-wide uppercase">{selectedMember.role}</p>
                  </div>
                </div>

                <div className="w-16 h-1.5 bg-brand-sand mb-8 rounded-full mx-auto sm:mx-0"></div>

                {/* Texto Completo Respetando Párrafos */}
                <div className="text-gray-700 text-lg leading-relaxed">
                  {selectedMember.profile.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-5">{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
