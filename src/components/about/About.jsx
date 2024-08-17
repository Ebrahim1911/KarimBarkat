import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Go To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>Mid-Level</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>8 Completed</small>
            </article>
          </div>
          <p>
            In the depths of creativity, where innovation converges, lies a
            force akin to the ancient kraken—karim. my multifaceted skills
            stretch like sinuous arms that squirtle the ink of creative, and
            strategy. Marketing campaigns, branding, and storytelling—all within
            my grasp. Adaptability, resilience, and impact define me. i’m not
            merely a copywriter ; iam the kraken
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
