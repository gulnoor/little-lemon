import "./Hero.css"
import logo from "../assets/Asset 9@4x.png"
const Hero = ()=>{
    return(
        <div className="Hero">
            <div className="hero-text">
                <h1 className="display-large">Little Lemmon</h1>
            </div>
                <img src={logo} alt="" />
        </div>
    )
}
export default Hero;