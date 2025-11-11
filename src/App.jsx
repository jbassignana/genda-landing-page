import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TargetAudience from './components/TargetAudience'
import Advantages from './components/Advantages'
import FounderProgram from './components/FounderProgram'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Companies from './components/Companies'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import GeometricBackground from './components/GeometricBackground'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-x-hidden">
      {/* Background global fijo */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <GeometricBackground variant="global" />
      </div>
      
      {/* Contenido con z-index superior */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      <TargetAudience />
      <Advantages />
      <FounderProgram />
      <HowItWorks />
      <Features />
      <Companies />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
