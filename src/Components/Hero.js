import "./Hero.css";
import logo from "../assets/Asset 9@4x.png";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-text">
        <h1>Little Lemmon</h1>
        <h2>Chicago</h2>
        <span>traditional recipes served with a modern twist</span>
      </div>
      <img src={logo} alt="" />
    </div>
  );
};
export default Hero;
