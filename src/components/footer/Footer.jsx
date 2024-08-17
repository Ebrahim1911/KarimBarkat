import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Kraken
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a
          href="https://www.facebook.com/kemo.karmaz.9?mibextid=LQQJ4d"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/karimbarkaat?igsh=MXVvZ3VxN3Z0eG1lNQ%3D%3D&utm_source=qr"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy;Kareem Barkat. All rights reserved. </small>
      </div>
    </footer>
  );
}

export default Footer;
