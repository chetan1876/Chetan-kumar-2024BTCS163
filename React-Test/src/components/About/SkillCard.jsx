import "./SkillCard.css";

const SkillCard = ({ title, items }) => {
  return (
    <div className="skill-card">

      <h3 className="skill-title">
        {title}
      </h3>

      <div className="skill-items">

        {items.map((skill, index) => (
          <span
            key={`${title}-${skill}-${index}`}
            className="skill-chip"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
};

export default SkillCard;