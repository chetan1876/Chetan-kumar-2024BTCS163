import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";

const ProjectSection = ({ projects }) => {
  return (
    <section className="project-section">

      <div className="section-title">
        <h2>My Projects</h2>
        <p>
          Here are some projects that showcase my skills and experience.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            bio={project.bio}
            tags={project.tags}
          />
        ))}
      </div>

    </section>
  );
};

export default ProjectSection;