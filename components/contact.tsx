"use client"

import { useState, useRef } from "react"
import { Mail, Phone, Globe, MapPin, Send, Instagram, ArrowUpRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, useInView, AnimatePresence } from "framer-motion"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "fundacion@islacascajal.org",
    href: "mailto:fundacion@islacascajal.org",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "(+57) 312 567 4402",
    href: "tel:+573125674402",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@fundacionislacascajal",
    href: "https://instagram.com/fundacionislacascajal",
  },
  {
    icon: Globe,
    label: "Facebook",
    value: "Fundación Isla Cascajal",
    href: "https://www.facebook.com/fudacionislacascajal?locale=es_LA",
  },
  {
    icon: Globe,
    label: "YouTube",
    value: "@fundacionislacascajal",
    href: "https://www.youtube.com/@fundacionislacascajal",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
}

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-24 lg:py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-[#0b3b45] font-bold text-sm tracking-[0.2em] uppercase mb-4 px-4 py-2 bg-[#0b3b45]/10 rounded-full"
          >
            Hablemos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight"
          >
            <span className="text-[#0b3b45]">Contáctanos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto font-light"
          >
            Juntos generamos bienestar, inclusión y oportunidades. 
            Continuamos construyendo UniverCiudad.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Información de Contacto
            </h3>
            <p className="text-muted-foreground mb-8 font-light">
              Estamos listos para escucharte. No dudes en comunicarte con nosotros 
              para más información sobre nuestros programas.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-[#0b3b45]/30 hover:shadow-xl transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-xl bg-[#0b3b45]/10 flex items-center justify-center group-hover:bg-[#0b3b45] transition-all"
                  >
                    <info.icon className="h-5 w-5 text-[#0b3b45] group-hover:text-[#0b3b45]-foreground transition-colors" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-[#0b3b45] group-hover:rotate-45 transition-all" />
                </motion.a>
              ))}
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="mt-8 p-6 rounded-2xl bg-[#0b3b45]/5 border border-[#0b3b45]/10"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-[#0b3b45]/10 flex items-center justify-center"
                >
                  <MapPin className="h-5 w-5 text-[#0b3b45]" />
                </motion.div>
                <div>
                  <p className="font-bold text-foreground mb-1">Ubicación</p>
                  <p className="text-muted-foreground text-sm">
                    Cali,<br />
                    Valle del Cauca, Colombia
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Envíanos un Mensaje
              </h3>
              <p className="text-muted-foreground mb-8 font-light">
                Completa el formulario y te responderemos lo antes posible.
              </p>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-[#0b3b45]/10 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-[#0b3b45]" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">Mensaje Enviado</h4>
                    <p className="text-muted-foreground">Gracias por contactarnos. Te responderemos pronto.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="nombre" className="block text-sm font-semibold text-foreground mb-2">
                        Nombre completo
                      </label>
                      <Input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                        className="bg-background h-12 rounded-xl border-border focus:border-[#0b3b45] transition-colors"
                      />
                    </motion.div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Correo electrónico
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-background h-12 rounded-xl border-border focus:border-[#0b3b45] transition-colors"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label htmlFor="telefono" className="block text-sm font-semibold text-foreground mb-2">
                          Teléfono (opcional)
                        </label>
                        <Input
                          id="telefono"
                          type="tel"
                          placeholder="+57 300 000 0000"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          className="bg-background h-12 rounded-xl border-border focus:border-[#0b3b45] transition-colors"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="mensaje" className="block text-sm font-semibold text-foreground mb-2">
                        Mensaje
                      </label>
                      <Textarea
                        id="mensaje"
                        placeholder="Cuéntanos cómo podemos ayudarte o cómo te gustaría colaborar..."
                        rows={5}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        required
                        className="bg-background rounded-xl resize-none border-border focus:border-[#0b3b45] transition-colors"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#0b3b45] hover:bg-[#072a31] text-white rounded-xl h-14 text-base font-bold shadow-lg hover:shadow-xl transition-all"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Enviar Mensaje
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
