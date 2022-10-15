import "./footer.css"
import FooterSocials from "./FooterSocials";


export default function Footer() {
  return (
    <footer>
      <a href="" className="deulo_logo">DEULO</a>
      
        <ul className="footer_list_links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonial</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>

        <FooterSocials />
   

      <div className="footer_author">
        <small>&copy; Deulo portfolio page</small>
      </div>
    </footer>
  );
}