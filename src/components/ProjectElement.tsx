
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
            <div style = {{display: "flex"}}>
                <div className ="project-info">
                    <h1 style={{fontSize: "40px", fontWeight: "700"}}> {content.title} </h1>
                    <a
                    href={content.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{fontSize: "20px"}}
                    > See more </a>
                    <h2 style={{fontSize: "20px", fontWeight: "200"}}> {content.description}</h2>
                </div>
                <img src={`/assets/${content.imageName}`} alt={content.title} className="project-image"/>
            </div>
        </div>
    )
}
