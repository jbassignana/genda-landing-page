import { motion } from 'framer-motion'
import { User, Clock, Heart, Sparkles, ArrowRight, Check } from 'lucide-react'

const SmartProfile = () => {
  const features = [
    {
      icon: <User className="w-6 h-6" />,
      title: 'Una sola vez',
      description: 'Compartí tus datos una vez y están disponibles en todos los negocios Genda'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Preferencias recordadas',
      description: 'Tus horarios favoritos, servicios preferidos y notas especiales viajan con vos'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Experiencia personalizada',
      description: 'Cada negocio sabe cómo preferís ser atendido desde el primer contacto'
    }
  ]

  const scenarios = [
    {
      business: 'Barbería Norte',
      preference: 'Puntualidad extrema',
      emoji: '⏰',
      color: 'from-blue-500 to-cyan-500',
      clientMessage: 'Por favor que sea a las 3 en punto, no estoy con mucho tiempo',
      type: 'client'
    },
    {
      business: 'Spa Relax',
      preference: 'Cliente valora puntualidad',
      emoji: '💼',
      color: 'from-purple-500 to-pink-500',
      workerAlert: 'Por favor estate a las 3 en punto ya que Juan tiene poco tiempo disponible.',
      type: 'worker'
    },
    {
      business: 'Clínica Dental',
      preference: 'Perfil detectado',
      emoji: '🔔',
      color: 'from-green-500 to-emerald-500',
      workerAlert: 'Se agendó a Juan para el día 15/11 a las 14:00hs. Es un cliente que valora mucho la puntualidad, ten eso en cuenta.',
      type: 'worker'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-teal-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Perfil Inteligente</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Tu perfil te sigue
            <br />
            <span className="text-gradient">a donde vayas</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Registrate una vez en Genda y todos los negocios conectados conocerán tus preferencias. 
            Ya no tenés que repetir que la puntualidad es importante para vos en cada lugar nuevo.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual Example - Flow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-200"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ejemplo: Juan y su preferencia de puntualidad
            </h3>
            <p className="text-gray-600">
              Juan valora mucho la puntualidad. Lo registró una vez, y ahora todos los negocios lo saben.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-green-400 transition-all duration-300">
                  {/* Business Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${scenario.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {scenario.emoji}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{scenario.business}</h4>
                      <p className="text-xs text-gray-500">Negocio Genda</p>
                    </div>
                  </div>

                  {/* Preference Alert */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-green-900">Preferencia detectada</p>
                        <p className="text-sm text-green-700 mt-1">"{scenario.preference}"</p>
                      </div>
                    </div>
                  </div>

                  {/* Bot Messages */}
                  {scenario.type === 'client' ? (
                    <>
                      <div className="mt-4 bg-gray-100 rounded-xl rounded-tl-sm p-3 border border-gray-200 shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">Juan escribe:</p>
                        <p className="text-sm text-gray-700">
                          "{scenario.clientMessage}"
                        </p>
                      </div>
                      <div className="mt-2 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-xl rounded-tr-sm p-3 shadow-sm">
                        <p className="text-xs opacity-90 mb-1">Bot responde:</p>
                        <p className="text-sm">
                          "Perfecto Juan! Te agendo a las 15:00 en punto. ⏰"
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="mt-4 bg-amber-50 rounded-xl p-3 border-2 border-amber-300 shadow-sm">
                      <p className="text-xs text-amber-700 font-semibold mb-1 flex items-center gap-1">
                        <span>📢</span> Notificación al worker:
                      </p>
                      <p className="text-sm text-amber-900 font-medium">
                        "{scenario.workerAlert}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Arrow connector (hidden on last item and mobile) */}
                {index < scenarios.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-green-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-teal-50 px-6 py-3 rounded-full border border-green-200">
              <Sparkles className="w-5 h-5 text-green-600" />
              <p className="text-sm font-semibold text-gray-700">
                Tu perfil se sincroniza automáticamente en toda la red Genda
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default SmartProfile
