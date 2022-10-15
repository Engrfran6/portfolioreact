import "./nav.css"
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { BsBook } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { RiFileReduceFill } from "react-icons/ri";
import { useState } from "react";

export default function Nav() {
    const [ activeNav, setActiveNav ] = useState("#")
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FcAbout />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiContactsFill />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiFileReduceFill />
      </a>
    </nav>
  );
}