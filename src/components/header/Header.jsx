import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="dynamic-txts">
          <h5>Hi, I'm</h5>
          <h1>Karim Barakat</h1>
          <h5 className="text-light">Creative Copywriter</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnBteGVmY2c3ZGxvNGlyNG91aWRjc3VyazJtNzlyN2t2cXpmNmRlYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y8cV4zwLat5bBhXFNg/giphy.gif"
              alt="me"
            />
          </div>
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
