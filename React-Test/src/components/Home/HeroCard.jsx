import { useNavigate } from "react-router-dom";
import "./HeroCard.css";

const HeroCard = ({ data }) => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <p className="welcome">Welcome 👋</p>

        <h1 className="hero-title">
          Hi, I am <span>{data.name}</span>
        </h1>

        <p className="hero-bio">
          {data.shortBio}
        </p>

        <button
          className="know-more-btn"
          onClick={handleKnowMore}
        >
          Know More
        </button>
      </div>

      <div className="hero-right">
        <div className="image-card">
          <img
            src={data.image}
            alt={data.name}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCard;