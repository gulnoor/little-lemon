import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import logo from "../assets/images/Asset 14@4x.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
       
      <div className="footer">
        <div>
          <div style={{
            fontSize:"1.4rem",
            
            textAlign:"center",
          }}>Follow Us On</div>
          <ul className="socials">
            <li>
              <a href="">
                <FontAwesomeIcon icon={faFacebook} size={"3x"} />
                Facebook
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} size={"3x"} />
                Instagram
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faTwitter} size={"3x"} />
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <ul className="footer-nav">
          Quick Links
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
      
      <div className="footer-bottom">
      <img
          style={{
            width: "200px",
            objectFit: "contain",
            marginBottom: "16px"
          }}
          src={logo}
          alt=""
        />
        
        <p>&copy; 2021</p>
      </div>
    </footer>
    
  );
};

export default Footer;
