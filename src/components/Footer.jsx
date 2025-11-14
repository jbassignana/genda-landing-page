import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="/logo.png" 
                alt="Genda Logo" 
                className="h-12 w-auto" 
              />
              <h3 className="text-2xl font-display font-bold text-white">
                Genda
              </h3>
            </div>
            <p className="text-gray-400">
              Agendamiento con IA para profesionales
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-green-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="hover:text-green-400 transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-green-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <p className="mb-2">
              <a href="mailto:contacto@genda.com.uy" className="hover:text-green-400 transition-colors">
                contacto@genda.com.uy
              </a>
            </p>
            <p className="text-gray-400">Uruguay 🇺🇾</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
            © {currentYear} Genda. Hecho con 
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
            en Uruguay
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
