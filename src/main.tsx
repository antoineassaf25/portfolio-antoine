import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar.tsx'
import HomeSection from './components/HomeSection.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import Experience from './components/Experience.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <main style={{ paddingTop: "40px" }}>
      <div className="page-spine"></div>
      <HomeSection/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  </StrictMode>,
)
