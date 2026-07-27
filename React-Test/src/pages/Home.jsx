import HeroCard from "../components/Home/HeroCard";
import portfolioData from "../data/portfolioData";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="container">
        <HeroCard data={portfolioData} />
      </div>
    </main>
  );
};

export default Home;