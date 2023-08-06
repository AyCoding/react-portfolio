import './Projects.scss';
import {data} from "@/data.js";
import {Folder} from "lucide-react";

function Projects() {
    return (
        <section className="projects" id="projects">
            <h1>
                <Folder/>
                Projets</h1>

            {data.projects.map(project => (
                <article key={project.id}>
                    <div className="projects-img">
                        <img src={`${project.img}`} alt={`${project["img-alt"]}`}/>
                    </div>
                    <div className="projects-item">
                        <div>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <p className="projects-stacks">{project.stacks}</p>
                        </div>
                        <h4>Date : {project["date-project"]}</h4>
                        {project.link && (
                            <a href={`${project.link}`} className="projects-link">Lien du projet</a>
                        )}
                    </div>
                </article>
            ))}
        </section>
    )
}

export default Projects