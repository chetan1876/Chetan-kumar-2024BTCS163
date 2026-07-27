import SkillCard from "./SkillCard";
import "./SkillSection.css";

const SkillSection = ({ skills }) => {
  return (
    <section className="skill-section">

      <div className="section-title">
        <h2>My Skills</h2>
        <p>
          Here are some of my technical and professional skills.
        </p>
      </div>

      <div className="skill-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            title={skill.title}
            items={skill.items}
          />
        ))}
      </div>

    </section>
  );
};

export default SkillSection;