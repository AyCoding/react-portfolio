import './Projects.css';

function Projects() {
    return (
        <section className="projects" id="projects">
            <h1>Projets</h1>
            <article>
                <div className="projects-img">
                    {/*<h3>Lorem ipsum</h3>*/}
                    <img src="/ims3.png" alt=""/>
                </div>
                <div className="projects-item">
                    <div>
                        <h4>Présentation du projet</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Tincidunt sit velit purus pharetra urna sollicitudin. Sit
                            egestas ut velit vitae amet gravida.</p>
                    </div>
                    <h4>Date : 2023</h4>
                </div>
            </article>
        </section>
    )
}

export default Projects