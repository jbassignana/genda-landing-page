import { motion } from 'framer-motion'
import { Star, CheckCircle, Phone } from 'lucide-react'

const FounderProgram = () => {
  const benefits = [
    'Cupos limitados por capacidad de atención personalizada',
    'Sesiones 1 a 1 mensuales con el equipo',
    'Tu empresa destacada como "Cliente Fundador"',
    'Precio de lanzamiento congelado por 12 meses',
    'Influencia directa en nuevas funcionalidades'
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMmM1NWUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-gray-800">Programa Fundador</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-gray-900">
              Sé parte del grupo exclusivo de lanzamiento
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Genda ya está operativo y funcionando. Pero queremos que las primeras 20 empresas 
              sean especiales: ustedes no son solo clientes, son partners estratégicos que nos 
              ayudan a crecer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/60"
          >
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 mb-8"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">📌</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Nota importante:</p>
                  <p className="text-gray-700">
                    Seleccionamos empresas que valoren la atención personalizada y quieran 
                    ser parte activa del crecimiento de Genda.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <button className="bg-gradient-primary text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Solicitar Evaluación
              </button>
            </motion.div>
          </motion.div>

          {/* Testimonial placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/60"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0" />
              <div>
                <p className="text-lg text-gray-700 italic mb-3">
                  "Llevamos 2 meses usando Genda. Ahorramos 10 horas semanales y nuestros 
                  clientes están encantados con la rapidez."
                </p>
                <p className="font-semibold text-gray-900">Laura M.</p>
                <p className="text-sm text-gray-600">Salón de Belleza, Montevideo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FounderProgram
