import "./Hero.css";
import logo from "../assets/images/Asset 9@4x.png";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const buttonStyle = { height: "52px", fontSize: "1.2rem" };

  return (
    <div className="Hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <span>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist
        </span>
        <Button className={"w-fit"} variant="outlined" style={buttonStyle}>
          Order Online
        </Button>
        <Button
          className={"w-fit h-2"}
          id="res"
          variant="filled"
          style={buttonStyle}
          onClick={() => {
            navigate("/reservation");
          }}
        >
          Reserve a Table
        </Button>
      </div>
      <div className="logo-bg">
        <h1>Little Lemmon</h1>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};
export default Hero;
