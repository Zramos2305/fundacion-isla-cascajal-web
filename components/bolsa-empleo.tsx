"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, FileText, Send, CheckCircle, Upload, MapPin, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const vacantes = [
  {
    id: 1,
    title: "Docente de Etnoeducación",
    location: "Isla Cascajal, Buenaventura",
    type: "Tiempo Completo",
    description: "Buscamos un docente apasionado por la etnoeducación para liderar procesos de aprendizaje con niños y jóvenes de la comunidad, fomentando el orgullo por la cultura afrocolombiana y la identidad territorial.",
    requirements: ["Licenciatura en Educación o áreas afines", "Experiencia mínima de 2 años en trabajo comunitario", "Conocimiento del territorio y sus dinámicas"],
    modality: "Presencial",
    salary: "$2.000.000 COP mensuales",
    contractType: "Prestación de Servicios",
    activities: [
      "Diseñar e impartir talleres de etnoeducación.",
      "Acompañar a líderes infantiles en procesos de identidad.",
      "Articular con la comunidad educativa local."
    ]
  },
  {
    id: 2,
    title: "Trabajador(a) Social",
    location: "Isla Cascajal, Buenaventura",
    type: "Medio Tiempo",
    description: "Profesional encargado de brindar acompañamiento psicosocial a las familias vinculadas a los programas de la fundación, identificando riesgos y construyendo redes de apoyo comunitario.",
    requirements: ["Profesional en Trabajo Social", "Experiencia en intervención familiar y comunitaria", "Habilidades de mediación y resolución de conflictos"],
    modality: "Presencial",
    salary: "$1.500.000 COP mensuales",
    contractType: "Término Fijo (6 meses)",
    activities: [
      "Realizar visitas domiciliarias y diagnósticos familiares.",
      "Brindar acompañamiento psicosocial a casos vulnerables.",
      "Dinamizar escuelas de padres y talleres comunitarios."
    ]
  },
  {
    id: 3,
    title: "Coordinador(a) de Proyectos Culturales",
    location: "Cali / Buenaventura (Híbrido)",
    type: "Por Proyecto",
    description: "Buscamos un perfil creativo y organizado para formular, gestionar y ejecutar proyectos artísticos y culturales orientados a la recuperación de tradiciones ancestrales en el Pacífico colombiano.",
    requirements: ["Experiencia en formulación de proyectos", "Habilidades de escritura para convocatorias", "Sensibilidad artística y cultural"],
    modality: "Híbrido (Remoto y viajes puntuales)",
    salary: "Pago por producto / hitos del proyecto",
    contractType: "Prestación de Servicios por obra o labor",
    activities: [
      "Redactar propuestas para convocatorias nacionales e internacionales.",
      "Coordinar la ejecución de las actividades culturales en territorio.",
      "Elaborar informes de gestión e impacto."
    ]
  }

]

export function BolsaEmpleo() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset after some time
    setTimeout(() => {
      setIsSubmitted(false)
      setFileName(null)
    }, 4000)
  }

  const renderFormDialog = (title: string, description: string, showRoleInput: boolean = false) => (
    <DialogContent className="sm:max-w-md rounded-3xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
      <DialogHeader className="mb-4">
        <DialogTitle className="text-2xl font-bold text-gray-900">{title}</DialogTitle>
        <DialogDescription className="text-base text-gray-500 mt-2">
          {description}
        </DialogDescription>
      </DialogHeader>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">¡Recibido con éxito!</h4>
            <p className="text-gray-500">Hemos guardado tu hoja de vida. ¡Gracias por tu interés en la Fundación!</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="font-semibold text-gray-700">Nombre completo</Label>
              <Input id="name" required className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white" placeholder="Ej: Juan Pérez" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold text-gray-700">Correo electrónico</Label>
              <Input id="email" type="email" required className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white" placeholder="ejemplo@correo.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-semibold text-gray-700">Teléfono de contacto</Label>
              <Input id="phone" type="tel" required className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white" placeholder="+57 300 000 0000" />
            </div>
            {showRoleInput && (
              <div className="space-y-2">
                <Label htmlFor="role" className="font-semibold text-gray-700">Cargo al que aspira</Label>
                <Input id="role" required className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white" placeholder="Ej: Psicólogo, Administrador..." />
              </div>
            )}
            <div className="space-y-2">
              <Label className="font-semibold text-gray-700">Hoja de Vida (PDF)</Label>
              <div className="relative mt-2">
                <Input
                  id="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                  onChange={handleFileChange}
                />
                <Label
                  htmlFor="cv"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl hover:border-brand-teal hover:bg-brand-teal/5 transition-colors cursor-pointer bg-gray-50"
                >
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600 font-medium text-center px-4">
                    {fileName ? <span className="text-brand-teal font-bold">{fileName}</span> : "Haz clic para subir tu documento"}
                  </span>
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl text-base font-bold shadow-md mt-6 transition-all"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Postulación
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </DialogContent>
  )

  return (
    <section className="min-h-screen py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-teal/10 text-brand-teal mb-6">
            <Briefcase className="w-8 h-8" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-batangas">
            Bolsa de <span className="text-brand-teal">Empleo</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium text-balance">
            Únete a nuestro equipo y ayúdanos a transformar la realidad de nuestro territorio . Buscamos personas apasionadas y comprometidas con el desarrollo social.
          </p>
        </div>

        {/* Vacancies List */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12 mb-12">
          {vacantes.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 text-gray-400 mb-6">
                <FileText className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Actualmente no tenemos vacantes abiertas</h3>
              <p className="text-gray-500 max-w-lg mx-auto mb-8 text-lg">
                Sin embargo, siempre estamos en la búsqueda de talento excepcional. Si crees que tu perfil hace match con nuestra misión, déjanos tu hoja de vida.
              </p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white rounded-full px-10 py-6 text-lg font-bold shadow-lg transition-transform hover:scale-105">
                    Enviar Hoja de Vida
                  </Button>
                </DialogTrigger>
                {renderFormDialog("Postulación Espontánea", "Déjanos tus datos y adjunta tu currículum en formato PDF. Te contactaremos cuando se abra una vacante acorde a tu perfil.", true)}
              </Dialog>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Vacantes Disponibles ({vacantes.length})</h3>
                  <p className="text-gray-500 mt-1">Únete a nuestro equipo y haz parte del cambio.</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="mt-4 md:mt-0 border-brand-teal text-brand-teal hover:bg-brand-teal/5 rounded-xl h-12 font-bold">
                      Candidatura Espontánea
                    </Button>
                  </DialogTrigger>
                  {renderFormDialog("Postulación Espontánea", "Déjanos tus datos y adjunta tu currículum en formato PDF. Te contactaremos cuando se abra una vacante acorde a tu perfil.", true)}
                </Dialog>
              </div>

              <div className="grid gap-6">
                {vacantes.map((vacante) => (
                  <div key={vacante.id} className="group border border-gray-200 rounded-3xl p-6 md:p-8 hover:border-brand-teal hover:shadow-xl transition-all duration-300 bg-white flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 group-hover:text-brand-teal transition-colors">{vacante.title}</h4>
                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600 font-medium">
                          <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100"><MapPin className="w-4 h-4 text-brand-terra" /> {vacante.location}</span>
                          <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100"><Clock className="w-4 h-4 text-brand-terra" /> {vacante.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed max-w-3xl">{vacante.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {vacante.requirements.map((req, i) => (
                          <span key={i} className="px-3 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-xs font-bold border border-brand-teal/20">{req}</span>
                        ))}
                      </div>
                    </div>

                    <div className="w-full lg:w-auto pt-4 lg:pt-0 lg:pl-6 lg:border-l border-gray-100 flex flex-col sm:flex-row lg:flex-col gap-3 items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full lg:w-auto bg-white border-brand-teal text-brand-teal hover:bg-brand-teal/5 rounded-xl h-12 px-6 shadow-sm transition-all font-bold">
                            Más Información
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-2xl rounded-3xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
                          <DialogHeader className="mb-6">
                            <DialogTitle className="text-3xl font-bold text-gray-900">{vacante.title}</DialogTitle>
                            <div className="flex flex-wrap gap-3 mt-4 text-sm font-medium">
                              <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg"><MapPin className="w-4 h-4 text-brand-terra" /> {vacante.location}</span>
                              <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg"><Clock className="w-4 h-4 text-brand-terra" /> {vacante.type}</span>
                            </div>
                          </DialogHeader>

                          <div className="space-y-6 text-gray-700">
                            <div>
                              <h4 className="text-lg font-bold text-brand-teal mb-2">Descripción del Cargo</h4>
                              <p className="leading-relaxed">{vacante.description}</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                              <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Modalidad de Trabajo</p>
                                <p className="font-semibold text-gray-900">{vacante.modality}</p>
                              </div>
                              <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Tipo de Contrato</p>
                                <p className="font-semibold text-gray-900">{vacante.contractType}</p>
                              </div>
                              <div className="sm:col-span-2">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Salario / Forma de Pago</p>
                                <p className="font-semibold text-gray-900">{vacante.salary}</p>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-lg font-bold text-brand-teal mb-2">Actividades del Cargo</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {vacante.activities.map((act, i) => (
                                  <li key={i}>{act}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-bold text-brand-teal mb-2">Requisitos</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {vacante.requirements.map((req, i) => (
                                  <li key={i}>{req}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full lg:w-auto bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl h-12 px-8 shadow-md hover:shadow-lg transition-all font-bold text-base">
                            Postularme <ChevronRight className="w-5 h-5 ml-1" />
                          </Button>
                        </DialogTrigger>
                        {renderFormDialog(`Postulación: ${vacante.title}`, "Completa tus datos para aplicar a esta vacante específica. Nuestro equipo de selección revisará tu perfil.", false)}
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
