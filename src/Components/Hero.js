import "./Hero.css";
import logo from "../assets/images/bing image creator/_6f3b3a12-fb05-405b-b999-0bf287ef5c12.jpeg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Hero = () => {
  const navigate = useNavigate();
  const buttonStyle = { height: "52px", fontSize: "1.2rem" };

  return (
    <header
      // style={{
      //       backgroundImage:
      //         theme === "dark"
      //           ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgimg}) `
      //           : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${bgimg})`,
      //     }}
      className="Hero"
    >
      <h1 className="med-heading">Little Lemon</h1>

      <div className="hero-content">
        <h1>Little Lemon</h1>
        <img className="hero-img" src={logo} alt="" />

        <h2>Chicago</h2>
        <span>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist
        </span>
        <Button variant="outlined" onClick={()=>navigate("/menu")}>
          Order Online
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/reservation");
          }}
        >
          Reserve a Table
        </Button>
      </div>
      <img className="hero-img2" src={logo} alt="" />
    </header>
  );
};
export default Hero;
