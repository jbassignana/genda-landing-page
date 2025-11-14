import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Companies = () => {
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)

  // Placeholder companies (reemplazar con API call)
  const placeholderCompanies = [
    { 
      id: 1, 
      name: 'Clínica Dental Sonría', 
      industry: 'Salud',
      logo: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=128&h=128&fit=crop&q=80'
    },
    { 
      id: 2, 
      name: 'The Barber Club', 
      industry: 'Belleza',
      logo: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=128&h=128&fit=crop&q=80'
    },
    { 
      id: 3, 
      name: 'Spa Serenidad', 
      industry: 'Bienestar',
      logo: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=128&h=128&fit=crop&q=80'
    },
    { 
      id: 4, 
      name: 'Dr. García Medicina', 
      industry: 'Salud',
      logo: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=128&h=128&fit=crop&q=80'
    },
    { 
      id: 5, 
      name: 'Beauty Estética', 
      industry: 'Belleza',
      logo: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=128&h=128&fit=crop&q=80'
    },
    { 
      id: 6, 
      name: 'Yoga & Wellness', 
      industry: 'Fitness',
      logo: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=128&h=128&fit=crop&q=80'
    },
    { 
      id: 7, 
      name: 'Fisioterapia Total', 
      industry: 'Salud',
      logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=128&h=128&fit=crop&q=80'
    },
    { 
      id: 8, 
      name: 'Nail Art Studio', 
      industry: 'Belleza',
      logo: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=128&h=128&fit=crop&q=80'
    },
    { 
      id: 9, 
      name: 'Gym Power Fitness', 
      industry: 'Fitness',
      logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=128&h=128&fit=crop&q=80'
    },
    { 
      id: 10, 
      name: 'Veterinaria Pets', 
      industry: 'Veterinaria',
      logo: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=128&h=128&fit=crop&q=80'
    },
    { 
      id: 11, 
      name: 'Psicología Integral', 
      industry: 'Salud Mental',
      logo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=128&h=128&fit=crop&q=80'
    },
    { 
      id: 12, 
      name: 'Tattoo & Piercing', 
      industry: 'Arte Corporal',
      logo: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=128&h=128&fit=crop&q=80'
    }
  ]

  useEffect(() => {
    // TODO: Fetch from API
    // fetch(`${import.meta.env.VITE_API_URL}/api/companies`)
    //   .then(res => res.json())
    //   .then(data => setCompanies(data.companies))
    //   .catch(err => console.error(err))
    //   .finally(() => setLoading(false))
    
    // For now, use placeholders
    setTimeout(() => {
      setCompanies(placeholderCompanies)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <section id="empresas" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Empresas que ya
            <br />
            <span className="text-gradient">agendaron su éxito</span>
          </h2>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Cliente Fundador ribbon badge */}
                <div className="absolute -top-3 -right-3 transform rotate-12">
                  <div className="relative bg-gradient-to-br from-green-600 to-teal-600 text-white px-3 py-1.5 rounded shadow-lg">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black">FIRST</span>
                      <span className="text-lg font-black">20</span>
                    </div>
                    {/* Triangle tails */}
                    <div className="absolute -bottom-1.5 left-0 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-green-800"></div>
                    <div className="absolute -bottom-1.5 right-0 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-teal-800"></div>
                    {/* Gold accent */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>

                {/* Logo */}
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Company name */}
                <h4 className="text-sm font-semibold text-gray-900 text-center mb-1">
                  {company.name}
                </h4>
                
                {/* Industry badge */}
                <span className="block text-xs text-center text-gray-500 bg-gray-100 rounded-full px-2 py-1">
                  {company.industry}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Companies
