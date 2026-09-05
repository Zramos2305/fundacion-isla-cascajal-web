"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, FileText, Send, CheckCircle, Upload, MapPin, Clock, ChevronRight, Map as MapIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ColombiaMap } from "@/components/colombia-map"

type Vacante = {
  id: number;
  title: string;
  department: string; // <-- Nuevo campo para el mapa
  location: string;
  type: string;
  description: string;
  requirements: string[];
  modality: string;
  salary: string;
  contractType: string;
  activities: string[];
};

// Por ahora el arreglo está vacío como solicitó el usuario.
const vacantes: Vacante[] = [
  // Ejemplo de cómo se vería una vacante a futuro:
  // {
  //   id: 1,
  //   title: "Docente de Etnoeducación",
  //   department: "Valle del Cauca",
  //   location: "Isla Cascajal, Buenaventura",
  //   type: "Tiempo Completo",
  //   description: "Buscamos un docente apasionado...",
  //   requirements: ["Licenciatura", "Experiencia"],
  //   modality: "Presencial",
  //   salary: "$2.000.000 COP",
  //   contractType: "Prestación de Servicios",
  //   activities: ["Diseñar e impartir talleres."]
  // }
];

export function BolsaEmpleo() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const filteredVacantes = selectedDept 
    ? vacantes.filter(v => v.department === selectedDept)
    : [];

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
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-teal/10 text-brand-teal mb-6">
            <Briefcase className="w-8 h-8" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-batangas">
            Bolsa de <span className="text-brand-teal">Empleo</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium text-balance">
            Únete a nuestro equipo y ayúdanos a transformar la realidad de nuestro territorio. Buscamos personas apasionadas y comprometidas con el desarrollo social.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          
          {/* MAPA DE COLOMBIA (Lado Izquierdo) */}
          <div className="w-full lg:w-5/12 bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Busca por Región</h3>
            <p className="text-gray-500 text-center mb-6">Selecciona un departamento en el mapa para ver las oportunidades disponibles.</p>
            <ColombiaMap selectedDepartment={selectedDept} onSelectDepartment={setSelectedDept} />
          </div>

          {/* ÁREA DE VACANTES (Lado Derecho) */}
          <div className="w-full lg:w-7/12">
            {!selectedDept ? (
              // Estado 1: Ningún departamento seleccionado
              <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12 text-center h-full flex flex-col justify-center items-center">
                <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center mb-6">
                  <MapIcon className="w-10 h-10 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Selecciona un departamento</h3>
                <p className="text-gray-500 max-w-sm mx-auto text-lg mb-8">
                  Haz clic en el mapa para descubrir las vacantes que tenemos en las diferentes regiones del país.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/5 rounded-full px-8 h-14 font-bold text-base shadow-sm transition-transform hover:scale-105">
                      Candidatura Espontánea
                    </Button>
                  </DialogTrigger>
                  {renderFormDialog("Postulación Espontánea", "Déjanos tus datos y adjunta tu currículum en formato PDF. Te contactaremos cuando se abra una vacante acorde a tu perfil.", true)}
                </Dialog>
              </div>
            ) : filteredVacantes.length === 0 ? (
              // Estado 2: Departamento seleccionado pero sin vacantes
              <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12 text-center h-full flex flex-col justify-center items-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
                  <FileText className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No hay vacantes en {selectedDept}</h3>
                <p className="text-gray-500 max-w-sm mx-auto text-lg mb-8">
                  Por el momento no tenemos procesos de selección abiertos en esta región. ¡Mantente atento!
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white rounded-full px-10 h-14 font-bold text-base shadow-lg transition-transform hover:scale-105">
                      Próximamente
                    </Button>
                  </DialogTrigger>
                  {renderFormDialog(`Postulación anticipada: ${selectedDept}`, "Déjanos tu hoja de vida de forma anticipada. Te contactaremos cuando se abra una vacante en esta región.", true)}
                </Dialog>
              </div>
            ) : (
              // Estado 3: Vacantes encontradas
              <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-10 h-full flex flex-col">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Vacantes en {selectedDept}</h3>
                    <p className="text-gray-500 mt-1">{filteredVacantes.length} vacante(s) encontrada(s).</p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="mt-4 sm:mt-0 border-brand-teal text-brand-teal hover:bg-brand-teal/5 rounded-xl h-12 font-bold">
                        Candidatura Espontánea
                      </Button>
                    </DialogTrigger>
                    {renderFormDialog(`Postulación en ${selectedDept}`, "Déjanos tus datos y adjunta tu currículum. Te contactaremos cuando haya más oportunidades.", true)}
                  </Dialog>
                </div>

                <div className="grid gap-6 overflow-y-auto custom-scrollbar flex-1 pr-2 pb-4">
                  {filteredVacantes.map((vacante) => (
                    <div key={vacante.id} className="group border border-gray-200 rounded-3xl p-6 hover:border-brand-teal hover:shadow-xl transition-all duration-300 bg-white flex flex-col gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 group-hover:text-brand-teal transition-colors">{vacante.title}</h4>
                          <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-600 font-medium">
                            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100"><MapPin className="w-4 h-4 text-brand-terra" /> {vacante.location}</span>
                            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100"><Clock className="w-4 h-4 text-brand-terra" /> {vacante.type}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">{vacante.description}</p>
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full bg-white border-brand-teal text-brand-teal hover:bg-brand-teal/5 rounded-xl h-12 shadow-sm transition-all font-bold">
                              Más Info
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
                            <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl h-12 shadow-md hover:shadow-lg transition-all font-bold">
                              Postularme <ChevronRight className="w-5 h-5 ml-1" />
                            </Button>
                          </DialogTrigger>
                          {renderFormDialog(`Postulación: ${vacante.title}`, "Completa tus datos para aplicar a esta vacante específica. Nuestro equipo revisará tu perfil.", false)}
                        </Dialog>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
