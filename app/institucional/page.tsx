import { FileText, Music, Download } from "lucide-react"

export default function InstitucionalPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-batangas">
            Información <span className="text-brand-teal">Institucional</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Encuentra aquí los formatos, documentos oficiales y elementos de identidad de la Fundación Isla Cascajal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Formatos Propios */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col h-full">
            <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-brand-teal" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Formatos Propios</h2>
            <p className="text-gray-600 mb-8 flex-1">
              Descarga los formularios, plantillas y documentos oficiales necesarios para los procesos de la fundación.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-brand-teal transition-colors group cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-400 group-hover:text-brand-teal" />
                  <span className="font-semibold text-gray-700">Formato de Afiliación (Próximamente)</span>
                </div>
                <Download className="w-5 h-5 text-gray-300 group-hover:text-brand-teal" />
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-brand-teal transition-colors group cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-400 group-hover:text-brand-teal" />
                  <span className="font-semibold text-gray-700">Plantilla de Proyectos (Próximamente)</span>
                </div>
                <Download className="w-5 h-5 text-gray-300 group-hover:text-brand-teal" />
              </div>
            </div>
          </div>

          {/* Himno */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col h-full">
            <div className="w-16 h-16 bg-brand-terra/10 rounded-2xl flex items-center justify-center mb-6">
              <Music className="w-8 h-8 text-brand-terra" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Himno de la Fundación</h2>
            <p className="text-gray-600 mb-8 flex-1">
              Escucha y conoce la letra de nuestro himno oficial, que representa nuestros valores y nuestra misión en el territorio.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-gray-500 font-medium italic mb-4">El reproductor de audio y la letra se añadirán próximamente.</p>
              <div className="h-12 bg-gray-200 rounded-full animate-pulse w-full max-w-xs mx-auto"></div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
