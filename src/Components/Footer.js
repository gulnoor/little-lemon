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
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Follow Us On
          </h2>
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

        <div>
          <h2>Quick Links</h2>

          <ul className="footer-nav">
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

        <div className="timings">
          <h2>Working Hours</h2>
          <p>MONDAY UNTIL FRIDAY </p>
          <p>9:00 - 22:00</p>
          <p>SATURDAY & SUNDAY</p>
          <p>12:00 - 24:00 </p>
        </div>
        <div className="contactus">
          <h2>Contact Us</h2>
          <p>Phone: 123-456-7890</p>
          <p>Email: littlelemonchicago@example.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <img
          style={{
            width: "200px",
            objectFit: "contain",
            marginBottom: "16px",
          }}
          src={logo}
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
