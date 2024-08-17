import { BiCheck } from "react-icons/bi";
import "./services.css";
function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Copy Writing </h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Crafting creative narratives that connect with audiences and
                drive results
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Helping brands find their unique stories that inspire innovation
                and drive results.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Writing brochure content that brings your brand's story to life,
                captures attention, informs your audience, and inspires them to
                act.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                write content that keeps your visitors coming back for more and
                helps you achieve your online goals.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Write creative script that will build loyalty among your
                customers and make them remember your brand forever.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Writing company profiles that showcase your brand's unique
                vision and position you as an industry leader.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                in content Strategy:-I'll work with you to define your target
                audience, identify your goals, and create a content calendar
                that aligns with your overall business objectives
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Creating customized content calendars that organize your content
                objective
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
