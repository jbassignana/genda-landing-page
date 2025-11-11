import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const FinalCTA = () => {
  const availableSpots = 7

  return (
    <section className="py-24 bg-gradient-to-br from-green-600 via-teal-600 to-green-700 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
            ¿Listo para unirte a las empresas seleccionadas?
          </h2>
          
          <p className="text-xl lg:text-2xl text-green-50 mb-8">
            Solo <span className="font-bold text-white">{availableSpots} lugares disponibles</span> en esta primera etapa
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white text-green-600 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-3 mb-12"
          >
            Solicitar Evaluación
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Process info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Proceso de selección en 48-72 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Sin compromiso inicial</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA
