import AboutMeGraphic from "./../assets/aboutme-graphic.png"

function About() { 
    return (<section id="about" className="fullscreen-section">
        <h1 className="divider">
            About Me
        </h1>

        <div className="about-row">
            <p className="about-text">
                Here is a long paragraph trying to convince idek what is going on, iam going to put some text here but in the meantime here is an image of something ive made on the ... right?  i dont know. More text here idk Here is a long paragraph trying to convince idek what is going on, iam going to put some text here but in the meantime here is an image of something ive made on the ... right?  i dont know. More text here idk
            </p>
            <img src={AboutMeGraphic} alt="Apps I've Made" className="about-graphic"/>
        </div>
    </section>)
}

export default About