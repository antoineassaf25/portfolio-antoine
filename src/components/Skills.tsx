const SKILLS: string[] = [
    "Java",
    "TypeScript",
    "Python",
    "C++",
    "SQL",
    "Node.js",
    "Spring Boot",
    "PostgreSQL",
    "Microservices",
    "AI/ML",
    "DSA",
    "AWS",
    "Jenkins",
    "Docker"
]

export default function() {
    return (<section id="skills" className="fullscreen-section">
        <h1>Skills</h1>
        <div style={{
                    width: "1500px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "30px",
                    justifyContent: "center"
                }}>
            {
                SKILLS.map((skill) => (<span key={skill} className="skill">
                    {skill}
                </span>))
            }
        </div>
    </section>)
}