import HeadShot from "./../assets/Headshot.jpg"
import GitHubIcon from "./../assets/github.png"
import LinkedInIcon from "./../assets/linkedin.png"

function HomeSection() { 
  return (
    <section id="home" className="fullscreen-section">
        <img src={HeadShot} alt="My Headshot" className="headshot" />
        <p className="home-text">
        <strong>Hi, I'm Antoine.</strong> I'm a CS graduate student at Georgia Tech focused on building reliable, data-driven systems.
        </p>

        <p className="home-text">
            I've worked on backend services, CI/CD automation, and AI-powered systems. I believe the best <strong>software</strong> starts with the <strong>user</strong>. I’m interested in contributing to teams building scalable systems with real impact.
        </p>
        <div className="home-row">
            <a className="primary-button" href="#contact">
                Contact Me 👋
            </a>
            <a
            href="/Resume_Antoine.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
            >
                Download CV 📄
            </a>
            <a className="icon-button"
            href="https://github.com/antoineassaf25"
            target="_blank"
            rel="noopener noreferrer"
            >
                <img src={GitHubIcon} alt="GitHub" style = {{width: "30px", height: "30px"}} />
            </a>
            <a className="icon-button"
            href="https://www.linkedin.com/in/aassaf25"
            target="_blank"
            rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" style = {{width: "30px", height: "30px"}}/>
            </a>
        </div>

        <div className="vertical-line"/>
        
    </section>
  )
}

export default HomeSection