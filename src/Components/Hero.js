import "./Hero.css";
import logo from "../assets/images/Asset 9@4x.png";
import Button from "./Button/Button";
import { createRef, useEffect, useRef, useState } from "react";
const Hero = () => {
  const heroRef = useRef(null);
  let heroHeight = "";
  const [logobgStyle,setlbgs] =useState({
    background: "var(--md-sys-color-primary)",
    borderRadius: "16px",
    height:heroHeight
  })
  useEffect(()=>{
    setlbgs(
      logobgStyle=> {
        return {...logobgStyle,height:window.getComputedStyle(heroRef.current).getPropertyValue("height")}
      }
    )
  },[])
  // const heroHeight = window.getComputedStyle(heroRef.current).height;
  return (
    <div ref={heroRef} className="Hero">
      <div className="hero-text">
        <h1>Little Lemmon</h1>
        <h2>Chicago</h2>
        <span>traditional recipes served with a modern twist</span>
        <Button type="outline">Order Online</Button>
        <Button type="filled">Reserve a Table</Button>
      </div>
      <div
        className="logo-bg"
        // style={logobgStyle}
      >
        <img src={logo} alt="" />
      </div>
    </div>
  );
};
export default Hero;
