import "./Hero.css";
import logo from "../assets/images/Asset 9@4x.png";
import Button from "./Button/Button";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-text">
        <h1>Little Lemmon</h1>
        <h2>Chicago</h2>
        <span>traditional recipes served with a modern twist</span>
        <Button type="outline">Order Online</Button>
        <Button type="filled">Reserve a Table</Button>
      </div>
      <div
        className="logo-bg"
        style={{
          background: "var(--md-sys-color-primary)",
          borderRadius: "16px",
        }}
      >
        <img src={logo} alt="" />
      </div>
    </div>
  );
};
export default Hero;
