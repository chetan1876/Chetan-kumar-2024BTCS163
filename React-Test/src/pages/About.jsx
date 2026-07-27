import Navbar from "../components/Navbar/Navbar";
import AboutHero from "../components/About/AboutHero";
import SkillSection from "../components/About/SkillSection";
import ProjectSection from "../components/About/ProjectSection";

import portfolioData from "../data/portfolioData";

import "./About.css";

const About = () => {
  return (
    <>
      <Navbar
        name={portfolioData.name}
        tag={portfolioData.tag}
      />

      <main className="about-page">

        <div className="container">

          <AboutHero
            fullBio={portfolioData.fullBio}
          />

          <SkillSection
            skills={portfolioData.skills}
          />

          <ProjectSection
            projects={portfolioData.projects}
          />

        </div>

      </main>
    </>
  );
};

export default About;