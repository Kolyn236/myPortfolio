import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhatIBring } from './components/WhatIBring'
import { Experience } from './components/Experience'
import { Leadership } from './components/Leadership'
import { EngineeringStyle } from './components/EngineeringStyle'
import { AIDirection } from './components/AIDirection'
import { TechStack } from './components/TechStack'
import { Education } from './components/Education'
import { OpenTo } from './components/OpenTo'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { useContent } from './context/LanguageContext'

function App() {
  const { a11y } = useContent()

  return (
    <>
      <a href="#main-content" className="skip-link">
        {a11y.skipToMain}
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <WhatIBring />
        <Experience />
        <Leadership />
        <EngineeringStyle />
        <AIDirection />
        <TechStack />
        <Education />
        <OpenTo />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
