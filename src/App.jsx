import { Navbar } from './sections/Navbar.jsx'
import { Hero } from './sections/Hero.jsx'
import { About } from './sections/About.jsx'
import { Projects } from './sections/Projects.jsx'
import { Contact } from './sections/Contact.jsx'
import { Footer } from './sections/Footer.jsx'

function App() {
  return (
    <div className="min-h-svh bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
