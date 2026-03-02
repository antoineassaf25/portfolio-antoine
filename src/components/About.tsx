import AboutMeGraphic from "./../assets/aboutme-graphic.png"

function About() { 
    return (<section id="about" className="fullscreen-section">
        <h1 className="divider">
            About Me
        </h1>

        <div className="about-row">
            <div className="about-col" >
                <p className="about-text">
                    I started programming by building games on Roblox. What began as experimenting with game mechanics grew into a fascination with how systems work end to end, from user interaction to backend logic. I experienced it from both sides: as the builder and through player feedback. Watching people interact with what I created and iterating based on their responses taught me early that good products are shaped by the user.
                </p>
                <p className="about-text">
                    During my co-ops, that mindset matured into an appreciation for production systems. I began to understand the importance of reliability, infrastructure, and disciplined engineering. CI/CD pipelines, backend architecture, and data systems determine whether an idea actually scales.
                </p>
                <p className="about-text">
                    Now, I’m interested in building intelligent systems grounded in strong fundamentals and production-grade infrastructure, with users at the center.
                </p>
            </div>
        </div>
    </section>)
}

export default About