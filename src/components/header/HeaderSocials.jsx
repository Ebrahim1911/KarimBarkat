import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/karim-barkat-33baaa216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.instagram.com/karimbarkaat/?igsh=MXVvZ3VxN3Z0eG1lNQ%3D%3D&utm_source=qr"
        target="_blank"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
