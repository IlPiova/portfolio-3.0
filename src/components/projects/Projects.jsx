import "./projects.scss";

import projectsObj from "../../assets/objs/projects-obj.json";

export default function Projects() {
  function makeProjectList() {
    return projectsObj.map((project) => {
      return (
        <div className="project-container" key={project.id}>
          <div class="project-image-container">
            <a href={project.demoUrl}>
              <img class="project-image" src={project.imageUrl} alt="" />
            </a>
          </div>
          <h3 class="project-name">{project.name}</h3>
          <p class="project-description">{project.description}</p>
          <div class="project-technologies">
            {project.technologies.map((technology, i) => (
              <div className="box">{technology}</div>
            ))}
          </div>
          <div className="buttons-container">
            <a href={project.codeUrl} className="project-urls">
              &lt;source code&gt;
            </a>
            <a href={project.demoUrl} className="project-urls demo-button">
              Watch demo
            </a>
          </div>
        </div>
      );
    });
  }
  return (
    <>
      <h2 className="subtitle">Projects</h2>
      <div className="projects-container">{makeProjectList()}</div>
    </>
  );
}
