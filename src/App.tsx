import AppLayout from './components/Layout/AppLayout'
import Navbar from './components/Navigation/Navbar'
import Hero from './components/Hero/Hero'
import ValueProposition from './components/Sections/ValueProposition'
import Experience from './components/Sections/Experience'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Contact from './components/Sections/Contact'

function App() {
  return (
    <AppLayout>
      <Navbar />
      <Hero />
      <ValueProposition />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </AppLayout>
  )
}

export default App