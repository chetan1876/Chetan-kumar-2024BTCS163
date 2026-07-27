import "./ProjectCard.css";

const ProjectCard = ({ title, bio, tags }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">
          {title}
        </h3>

        <p className="project-bio">
          {bio}
        </p>

        <div className="project-tags">
          {tags.map((tag, index) => (
            <span
              key={`${title}-${tag}-${index}`}
              className="project-tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;