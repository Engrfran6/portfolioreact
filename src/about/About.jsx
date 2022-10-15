import "./about.css"
import ME from "../assets/me-about.png"
import {BsAward} from "react-icons/bs"
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_content_cards">
            <article className="about_content_card">
              <BsAward className="about_card_icon" />
              <h5>Experience</h5>
              <small>3+ Yeras Working</small>
            </article>

            <article className="about_content_card">
              <FiUsers className="about_card_icon" />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className="about_content_card">
              <VscFolderLibrary className="about_card_icon" />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>

          <p className="about_content_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            provident, ullam minima quod dicta deserunt
          </p>

          <a href="#contacts" className="btn btn-primary">
            Let's talk
          </a>

        </div>
      </div>
    </section>
  );
}