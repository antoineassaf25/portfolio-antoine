import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <main style={{ paddingTop: "120px" }}>
      <section id="home" style={{ height: "100vh" }}>
        <h1>Home</h1>
      </section>

      <section id="projects" style={{ height: "100vh" }}>
        <h1>Projects</h1>
      </section>

      <section id="experience" style={{ height: "100vh" }}>
        <h1>Experience</h1>
      </section>

      <section id="contact" style={{ height: "100vh" }}>
        <h1>Contact</h1>
      </section>
    </main>
  </StrictMode>,
)
