import "./Hero.css";
import logo from "../assets/images/Asset 9@4x.png";
import Button from "./Button/Button";
const Hero = () => {
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
        <h1>Little Lemmon</h1>
        <h2>Chicago</h2>
        <span>traditional recipes served with a modern twist</span>
        <Button type="outline" style={buttonStyle}>Order Online</Button>
        <Button id="res" type="filled" style={buttonStyle}>Reserve a Table</Button>

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
