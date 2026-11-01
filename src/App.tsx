import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Differentials } from './components/sections/Differentials'
import { HowItWorks } from './components/sections/HowItWorks'
import { About } from './components/sections/About'
import { ServiceArea } from './components/sections/ServiceArea'
import { Faq } from './components/sections/Faq'
import { FinalCta } from './components/sections/FinalCta'

function App() {
  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <HowItWorks />
        <About />
        <ServiceArea />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App
