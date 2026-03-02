import { useState } from "react";
import { ProjectElement, type ProjectContents } from "./ProjectElement";

const projects: ProjectContents[] = [
  {
    title: "Full-Stack Player Tracker",
    description:
      "An end-to-end data platform I designed to efficiently manage large-scale player history data for Toontown Rewritten.",
    imageName: "ToonTracker.png",
    projectLink1: "https://toon-tracker-frontend.vercel.app/",
    projectLinkText1: "Website ⌂",
    projectLink2: "https://github.com/antoineassaf25/toon-tracker-backend",
    projectLinkText2: "Repository ⧉",
    skills: ["TypeScript", "Node.js", "React.js", "AWS", "PostgreSQL"],
  },
  {
    title: "3D Graphing Engine",
    description:
      "An optimized C++ graphics engine that renders and efficiently manages large-scale 3D mathematical surfaces.",
    imageName: "GraphingCalculator.png",
    projectLink1: "https://www.youtube.com/watch?v=RymplOlUg_c",
    projectLinkText1: "Demo ▶",
    projectLink2: "https://github.com/antoineassaf25/3d-graphing-calculator",
    projectLinkText2: "Repository ⧉",
    skills: ["C++", "OpenGL", "Valgrind"],
  },
  {
    title: "Speedboat Racing X",
    description:
      "A multiplayer Roblox racing game inspired by Mario Kart, built with AI pathfinding CPUs and custom trigonometric models to simulate realistic boat steering.",
    imageName: "SpeedboatRacing.png",
    projectLink1: "https://www.youtube.com/watch?v=dW4Jqd0X_Qk",
    projectLinkText1: "Demo ▶",
    projectLink2: "https://www.roblox.com/games/17515784677/Speedboat-Racing-X",
    projectLinkText2: "Website ⌂",
    skills: ["Lua", "Blender", "NoSQL", "Reinforcement Learning"],
  },
  {
    title: "Volleyball Swing Simulator",
    description:
      "A computational biomechanics project that models and analyzes volleyball arm swings using a 3D double pendulum framework driven by AI pose tracking data.",
    imageName: "Volleyball.png",
    projectLink1:
      "https://github.com/antoineassaf25/VolleyballSwingSimulator/blob/main/FinalProjectReportAndCode.ipynb",
    projectLinkText1: "Repository ⧉",
    projectLink2: "",
    projectLinkText2: "",
    skills: ["Python", "MediaPipe", "NumPy", "AI/ML", "Optimization"],
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="fullscreen-section">
      <h1 className="divider">Projects</h1>

      <div>
        {visibleProjects.map((project, index) => (
          <ProjectElement key={index} content={project} />
        ))}
      </div>

      {projects.length > 3 && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="primary-button"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  );
}

export default Projects;