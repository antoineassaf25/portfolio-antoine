import HeadShot from "./../assets/Headshot.jpg"
import GitHubIcon from "./../assets/github.png"
import LinkedInIcon from "./../assets/linkedin.png"

function HomeSection() { 
  return (
    <section id="aboutme" className="fullscreen-section" style={{ height: "100vh" }}>
    <img src={HeadShot} alt="My Headshot" className="headshot" />
    <p className="about-text">
    Here is some text. this is about what i want to be talking about. this is what is about me. this is my intro.
    </p>
    <div className="about-row">
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
            <img src={GitHubIcon} alt="GitHub" style = {{width: "40px", height: "40px"}} />
        </a>
        <a className="icon-button"
        href="https://www.linkedin.com/in/aassaf25"
        target="_blank"
        rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" style = {{width: "40px", height: "40px"}}/>
        </a>
    </div>
    </section>
  )
}

export default HomeSection