import "./Hero.css";
import logo from "../assets/images/Asset 9@4x.png";
import Button from "./Button/Button";
const Hero = () => {
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
        <div
          className="logo-bg"
          // style={logobgStyle}
        >
          <h1>Little Lemmon</h1>
          <img src={logo} alt="" />
        </div>

        <div className="hero-content">
        <h2>Chicago</h2>
        <span>traditional recipes served with a modern twist</span>
        <Button type="outline">Order Online</Button>
        <Button type="filled">Reserve a Table</Button>

        </div>
      </div>
  );
};
export default Hero;
