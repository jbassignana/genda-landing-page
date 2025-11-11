import { motion } from 'framer-motion'
import { Link, Settings, Zap } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <Link className="w-8 h-8" />,
      title: 'Conectás tu WhatsApp',
      description: 'En 5 minutos vinculás tu número de negocio',
      time: '5 min'
    },
    {
      number: '02',
      icon: <Settings className="w-8 h-8" />,
      title: 'Configurás servicios y horarios',
      description: 'Setup guiado paso a paso, simple y rápido',
      time: '15 min'
    },
    {
      number: '03',
      icon: <Zap className="w-8 h-8" />,
      title: 'Tu bot empieza a agendar',
      description: 'Automatización 24/7, sin intervención',
      time: 'Listo'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            En marcha en <span className="text-gradient">menos de 30 minutos</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-teal-200 to-green-200 transform -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center text-green-600">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {step.description}
                  </p>
                  
                  {/* Time badge */}
                  <div className="inline-block mx-auto bg-green-50 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                    ⏱ {step.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
