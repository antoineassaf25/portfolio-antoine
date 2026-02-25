import HeadShot from "./../assets/Headshot.jpg"

function HomeSection() { 
  return (
    <section id="aboutme" className="fullscreen-section" style={{ height: "100vh" }}>
    <img src={HeadShot} alt="My Headshot" className="headshot" />
    <p className="about-text">
    Here is some text. this is about what i want to be talking about. this is what is about me. this is my intro.
    </p>
    <div className="about-row">
    </div>
    </section>
  )
}

export default HomeSection