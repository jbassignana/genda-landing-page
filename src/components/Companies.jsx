import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Companies = () => {
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)

  // Placeholder companies (reemplazar con API call)
  const placeholderCompanies = [
    { id: 1, name: 'Clínica Dental Sur', industry: 'Salud' },
    { id: 2, name: 'Barber Studio', industry: 'Belleza' },
    { id: 3, name: 'Spa Relax', industry: 'Bienestar' },
    { id: 4, name: 'Consultorio Médico', industry: 'Salud' },
    { id: 5, name: 'Estética & Más', industry: 'Belleza' },
    { id: 6, name: 'Yoga Center', industry: 'Fitness' }
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
    <section className="py-24 bg-white">
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
                {/* Cliente Fundador badge */}
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-md">
                  ⭐
                </div>

                {/* Logo placeholder */}
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">
                    {company.name.charAt(0)}
                  </span>
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
