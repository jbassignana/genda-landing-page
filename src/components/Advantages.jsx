import { motion } from 'framer-motion'
import { Brain, MessageCircle, Smartphone, TrendingUp } from 'lucide-react'
import ParticlesBackground from './ParticlesBackground'

const Advantages = () => {
  const advantages = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Tu bot se acuerda de todo',
      description: 'Juan prefiere cortes cortos, María viene cada 3 semanas, Pedro odia esperar. Genda recuerda y personaliza cada interacción.',
      gradient: 'from-purple-500 to-indigo-500',
      example: null
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: 'Se adapta a cada cliente',
      description: 'Con clientes nuevos es formal y claro. Con los de siempre, cercano y amigable. La IA ajusta su tono automáticamente.',
      gradient: 'from-green-500 to-teal-500',
      example: {
        new: 'Buenos días, ¿en qué puedo ayudarte?',
        regular: '¡Hola Sofi! ¿El de siempre a las 16h?'
      }
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Tus clientes usan lo que ya tienen',
      description: 'WhatsApp. Nada de descargar apps ni crear cuentas. Cero fricciones, 100% comodidad.',
      gradient: 'from-cyan-500 to-blue-500',
      example: null
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'De 1 a 50 profesionales',
      description: 'Arrancás solo o con tu equipo pequeño. Cuando crecés, Genda crece con vos. Mismo panel, misma simplicidad.',
      gradient: 'from-orange-500 to-red-500',
      example: null
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="caracteristicas" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Decorative background */}
      <ParticlesBackground variant="gradient" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            No es otro bot más.
            <br />
            <span className="text-gradient">Es tu asistente personal.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              style={{
                boxShadow: '0 0 0 0 rgba(34, 197, 94, 0)'
              }}
              whileInView={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {advantage.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {advantage.description}
              </p>

              {/* Example (if exists) */}
              {advantage.example && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2 mt-6 pt-6 border-t border-gray-200"
                >
                  <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700">
                    <span className="font-semibold text-gray-500 text-xs uppercase tracking-wide">Con nuevo:</span>
                    <p className="mt-1">{advantage.example.new}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-3 text-sm text-gray-700">
                    <span className="font-semibold text-green-600 text-xs uppercase tracking-wide">Con regular:</span>
                    <p className="mt-1">{advantage.example.regular}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Advantages
