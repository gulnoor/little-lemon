import "./Hero.css";
import logo from "../assets/images/Asset 9@4x.png";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const buttonStyle = {height:"52px",fontSize:"1.2rem"};
  // const heroRef = useRef(null);
  // let heroHeight = "";
  // const [logobgStyle,setlbgs] =useState({
  //   background: "var(--md-sys-color-primary)",
  //   borderRadius: "16px",
  //   height:heroHeight
  // })
  // useEffect(()=>{
  //   setlbgs(
  //     logobgStyle=> {
  //       return {...logobgStyle,height:window.getComputedStyle(heroRef.current).getPropertyValue("height")}
  //     }
  //   )
  // },[])
  // const heroHeight = window.getComputedStyle(heroRef.current).height;
  return (

    <div className="Hero">
      <div className="hero-content">
        <h1 className="display-large">Little Lemon</h1>
        <h2 className="display-medium">Chicago</h2>
        <span className="body-large">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</span>
        <Button variant="outlined" style={buttonStyle}>Order Online</Button>
        <Button id="res" variant="filled" style={buttonStyle} onClick={()=>{navigate("/reservation")}}>Reserve a Table</Button>
      </div>
      <div
        className="logo-bg"
      // style={logobgStyle}
      >
        <h1>Little Lemmon</h1>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};
export default Hero;
