import { motion } from 'framer-motion'
import { Clock, Bell, BarChart, Users, Calendar, Zap } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Agendamiento 24/7',
      description: 'Tu bot nunca descansa. Acepta citas a cualquier hora.'
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Recordatorios Automáticos',
      description: 'Reduce ausencias hasta un 80% con notificaciones inteligentes.'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Panel Centralizado',
      description: 'Todas tus citas en un solo lugar, fácil de gestionar.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Multi-profesional',
      description: 'Maneja múltiples agendas de tu equipo sin complicaciones.'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Reportes y Estadísticas',
      description: 'Visualiza tu negocio con métricas claras y útiles.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Configuración Flexible',
      description: 'Adapta horarios, servicios y disponibilidad en segundos.'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Todo lo que necesitás,
            <br />
            <span className="text-gradient">nada que sobre</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
