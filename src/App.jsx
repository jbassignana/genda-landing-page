import Hero from './components/Hero'
import TargetAudience from './components/TargetAudience'
import Advantages from './components/Advantages'
import FounderProgram from './components/FounderProgram'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Companies from './components/Companies'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
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
  )
}

export default App
