import { motion } from 'framer-motion'
import { Sparkles, Play } from 'lucide-react'

const Hero = () => {
  const confirmedCompanies = 13
  const totalSpots = 20
  const availableSpots = totalSpots - confirmedCompanies

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-full px-5 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-gray-800">
                Programa de Lanzamiento
              </span>
              <span className="text-sm text-gray-600">|</span>
              <span className="text-sm font-semibold text-green-600">
                20 Empresas Seleccionadas
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
            >
              Tu agenda trabaja sola
              <br />
              <span className="text-gradient">
                mientras atendés clientes
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              Genda es el asistente de WhatsApp con IA que agenda citas, 
              recuerda preferencias y habla como vos. Diseñado para 
              profesionales de salud y belleza en Uruguay.
            </motion.p>

            {/* Spots Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-lg mb-8"
            >
              {/* Avatars */}
              <div className="flex -space-x-2">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-teal-500 border-2 border-white flex items-center justify-center text-xs font-semibold text-white"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>

              <div className="border-l border-gray-300 pl-4">
                <p className="text-sm font-semibold text-gray-900">
                  {confirmedCompanies} de {totalSpots} lugares confirmados
                </p>
                <p className="text-xs text-gray-600">
                  Cupos limitados disponibles
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Solicitar mi Lugar
              </button>
              
              <button className="group flex items-center justify-center gap-2 bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-green-500 transition-all duration-300">
                <Play className="w-5 h-5" />
                Ver Demo en Video
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* WhatsApp Mockup Placeholder */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                      G
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Genda Bot</h3>
                      <p className="text-xs text-gray-500">en línea</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                      className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-xs"
                    >
                      <p className="text-sm text-gray-800">
                        Hola, quiero turno para corte 💇
                      </p>
                      <p className="text-xs text-gray-500 mt-1">10:23</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                      className="bg-gradient-primary text-white rounded-2xl rounded-tr-sm p-4 ml-auto max-w-sm"
                    >
                      <p className="text-sm">
                        ¡Hola Sofi! 👋 Te conozco, preferís con Juan los martes a las 15h. ¿Te sirve mañana?
                      </p>
                      <p className="text-xs opacity-80 mt-1">10:23</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2 }}
                      className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-xs"
                    >
                      <p className="text-sm text-gray-800">
                        ¡Perfecto! Anotame 🙌
                      </p>
                      <p className="text-xs text-gray-500 mt-1">10:24</p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating badge - Memory indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute -top-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
              >
                <span className="text-2xl">🧠</span>
                <span className="text-sm font-semibold">¡Recuerda todo!</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
