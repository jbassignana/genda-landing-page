import { motion } from 'framer-motion'
import { Sparkles, Play } from 'lucide-react'
import { useState, useEffect } from 'react'
import ParticlesBackground from './ParticlesBackground'

const Hero = () => {
  const confirmedCompanies = 13
  const totalSpots = 20
  const availableSpots = totalSpots - confirmedCompanies
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Características', href: '#caracteristicas' },
    { label: 'Programa', href: '#programa' },
    { label: 'Empresas', href: '#empresas' },
  ]

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Particles Background */}
      <ParticlesBackground variant="hero" />

      {/* Floating Navigation Buttons - Solo visible cuando NO hay scroll */}
      {!isScrolled && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute top-8 right-12 z-20 hidden lg:flex items-center gap-4"
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 text-gray-700 hover:text-green-600 hover:border-green-400 hover:shadow-lg transition-all duration-300 font-medium"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Solicitar Evaluación
          </motion.button>
        </motion.div>
      )}

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
                {[
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&q=80'
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Usuario ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                  />
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
                    <img 
                      src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=80&h=80&fit=crop&q=80"
                      alt="The Barber Shop"
                      className="w-12 h-12 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">The Barber Shop</h3>
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
                        Hola! Necesito turno con Facu 💈
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
                        ¡Martín! Lo de siempre mañana a las 3 como siempre? 😄
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
                        Dale, perfecto! 🙌
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
