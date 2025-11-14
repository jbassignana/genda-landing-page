import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Play } from 'lucide-react'

const SectionCTA = ({ variant = 'demo' }) => {
  const variants = {
    demo: {
      title: '¿Querés ver Genda en acción?',
      description: 'Mirá cómo funciona en una conversación real',
      primaryButton: {
        text: 'Ver Demo',
        icon: <Play className="w-5 h-5" />,
        gradient: 'from-green-600 to-teal-600'
      },
      secondaryButton: {
        text: 'Solicitar Evaluación',
        icon: <ArrowRight className="w-5 h-5" />
      }
    },
    founder: {
      title: '¿Listo para transformar tu negocio?',
      description: 'Unite al programa fundador y asegurá tu lugar',
      primaryButton: {
        text: 'Unirse al Programa Fundador',
        icon: <Sparkles className="w-5 h-5" />,
        gradient: 'from-emerald-600 to-green-600'
      },
      secondaryButton: {
        text: 'Conocer más',
        icon: <ArrowRight className="w-5 h-5" />
      }
    },
    evaluate: {
      title: '¿Tu negocio es ideal para Genda?',
      description: 'Solicitá una evaluación gratuita sin compromiso',
      primaryButton: {
        text: 'Solicitar Evaluación',
        icon: <ArrowRight className="w-5 h-5" />,
        gradient: 'from-teal-600 to-emerald-600'
      },
      secondaryButton: {
        text: 'Hablar con un asesor',
        icon: <ArrowRight className="w-5 h-5" />
      }
    }
  }

  const config = variants[variant]

  return (
    <section className="py-16 relative overflow-hidden bg-white z-20">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 lg:p-12">
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4"
              >
                {config.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 mb-8"
              >
                {config.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                {/* Primary Button */}
                <button className={`group bg-gradient-to-r ${config.primaryButton.gradient} text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2`}>
                  {config.primaryButton.text}
                  <span className="group-hover:translate-x-1 transition-transform">
                    {config.primaryButton.icon}
                  </span>
                </button>

                {/* Secondary Button */}
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-300 hover:border-green-400 hover:text-green-600 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                  {config.secondaryButton.text}
                  <span className="group-hover:translate-x-1 transition-transform">
                    {config.secondaryButton.icon}
                  </span>
                </button>
              </motion.div>

              {/* Trust indicators */}
              {variant === 'founder' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500"
                >
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span>Solo quedan <strong className="text-gray-900">7 lugares</strong> disponibles</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default SectionCTA
