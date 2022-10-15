import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs";

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <ul className="experience_list">
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">HTML</li>
                <h5 className="text-light">Experienced</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">CSS</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">Javascript</li>
                <h5 className="text-light">Experienced</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">Tailwind</li>
                <h5 className="text-light">Experienced</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">Boostrap</li>
                <h5 className="text-light">Experienced</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">ReactJs</li>
                <h5 className="text-light">Experienced</h5>
              </div>
            </span>
          </ul>
        </div>

        <div className="backend">
          <h3>Backend Development</h3>
          <ul className="experience_list">
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">Node Js</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">PHP</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">Python</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">MongoDB</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">MySQL</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
          </ul>
        </div>
      </div>
    </section>
  );
}