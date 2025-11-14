import { motion } from 'framer-motion'
import { 
  Stethoscope, 
  Scissors, 
  Sparkles, 
  Hand,
  Activity,
  PawPrint 
} from 'lucide-react'
import ParticlesBackground from './ParticlesBackground'

const TargetAudience = () => {
  const industries = [
    {
      icon: <span className="text-4xl">🦷</span>,
      name: 'Odontólogos',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: <Stethoscope className="w-10 h-10" />,
      name: 'Médicos Particulares',
      gradient: 'from-red-400 to-pink-400'
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      name: 'Masajistas & Spa',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: <Scissors className="w-10 h-10" />,
      name: 'Barberías',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: <Hand className="w-10 h-10" />,
      name: 'Manicuristas',
      gradient: 'from-pink-400 to-rose-400'
    },
    {
      icon: <span className="text-4xl">💇</span>,
      name: 'Salones de Belleza',
      gradient: 'from-purple-400 to-indigo-400'
    },
    {
      icon: <Activity className="w-10 h-10" />,
      name: 'Yoga & Fitness',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: <PawPrint className="w-10 h-10" />,
      name: 'Veterinarias',
      gradient: 'from-orange-400 to-amber-400'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="publico" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <ParticlesBackground variant="default" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Creado especialmente para
            <br />
            <span className="text-gradient">profesionales como vos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Si tu negocio vive de citas y atención personalizada, Genda fue pensado para vos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform duration-300`}>
                {industry.icon}
              </div>
              <h3 className="text-center font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TargetAudience
