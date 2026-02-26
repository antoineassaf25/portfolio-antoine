import { ProjectElement, type ProjectContents } from "./ProjectElement"

const projects: ProjectContents[] = [
    {
        title: "Full-Stack Player Tracker",
        description: "An end-to-end data platform I designed to efficiently manage large-scale player history data for Toontown Rewritten.",
        imageName: "ToonTracker.png",
        projectLink: "https://toon-tracker-frontend.vercel.app/",
        skills: ["TypeScript", "Node.js", "React.js", "AWS", "PostgreSQL"]
    },
    {
        title: "3D Graphing Engine ",
        description: "An optimized C++ graphics engine that renders and efficiently manages large-scale 3D mathematical surfaces.",
        imageName: "GraphingCalculator.png",
        projectLink: "https://www.youtube.com/watch?v=RymplOlUg_c",
        skills: ["C++", "OpenGL", "Valgrind"]
    },
]

function Projects() { 
    return (<section id="projects" className="fullscreen-section">
        <h1>
            Projects
        </h1>
        <div>
        {
            projects.map((project, index) => (
                <ProjectElement key = {index} content={project}/>
            ))
        }
        </div>
    </section>)
}

export default Projects