import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
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

        
        <ul className="footer-nav">
            Quick Links
          <li>
            <Link
              to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to = "/menu" >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/reservation">
              Reservation
            </Link>
          </li>
          <li>
            <Link
              to="/about-us">
              About Us
            </Link>
          </li>


        </ul>
      </div>
    </footer>
  );
};

export default Footer;
