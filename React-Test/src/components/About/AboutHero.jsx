import "./AboutHero.css";

const AboutHero = ({ fullBio }) => {
  return (
    <section className="about-hero">

      <div className="about-heading">
        <h2>About Me</h2>
        <div className="heading-line"></div>
      </div>

      <div className="about-card">

        <p className="about-text">
          {fullBio}
        </p>

      </div>

    </section>
  );
};

export default AboutHero;