import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Writting Skills</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Brand storytelling</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Creative consulting</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Brochures</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Website content</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>TVC</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4 className="small-size-front">Company Profile</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Content strategy</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Content Calendar</h4>
            </article>
          </div>
        </div>

        <div className="experience-backend">
          <h3>Technical Skills</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Cinematography</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Video Editing</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Directing</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
