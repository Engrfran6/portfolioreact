import About from "./about/About";
import Experience from "./experience/Experience";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";
import Testimony from "./testimony/Testimony";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimony />
        <Contacts />
        <Footer />
      </>
    </div>
  );
}

export default App;
