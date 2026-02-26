
export type ProjectContents = {
  title: string;
  description: string;
  imageName: string;
  projectLink: string;
  skills: string[];
};

type ProjectElementProps = {
  content: ProjectContents;
};

export function ProjectElement({ content } : ProjectElementProps) {
    return (
        <div className="project-element">
            <div className="project-row">
                <div className ="project-info">
                    <h1 style={{fontSize: "40px", fontWeight: "700"}}> {content.title} </h1>
                    <a
                    href={content.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{fontSize: "25px" , fontWeight: "500"}}
                    > See more → </a>
                    <h2 style={{fontSize: "25px", fontWeight: "400", width: "90%"}}> {content.description}</h2>
                    <div>
                        {content.skills.map((text) => (
                           <span className="project-skill"> {text} </span>
                        ))}
                    </div>
                </div>
                <div style= {{display: "flex", justifyContent: "center", alignItems: "center", height: "400px", paddingLeft: "30px", paddingRight: "30px"}}>
                    <img src={`/assets/${content.imageName}`} alt={content.title} className="project-image"/>
                </div>
            </div>
        </div>
    )
}
