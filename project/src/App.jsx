import { useEffect, useRef, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Divider } from "./components/Divider";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ScrollUp } from "./components/ScrollUp";
import Apf from "./images/apf.jpg";
import HeroImage from "./images/hero.jpg";

function App() {
  const aboutImage = useRef();
  const learnMoreButton = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 30) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  const jumpToAbout = () =>
    aboutImage.current.scrollIntoView({ behavior: "smooth" });

  const jumpToFooter = () =>
    learnMoreButton.current.scrollIntoView({ behavior: "smooth" });

  const cashAppUrl = "https://cash.app/$RhinoLopez";
  const currentyear = new Date().getFullYear();
  const email = "mailto:everydayiron8489@gmail.com";
  const facebookUrl = "https://www.facebook.com/rhinosEI";
  const githubUrl = "https://github.com/milliorn/Everyday-Iron";
  const googleMapsUrl = "https://goo.gl/maps/abEtXLCVTWeupqKD8";
  const instagramUrl = "https://www.instagram.com/everyday_iron/";
  const jotform = "https://form.jotform.com/220908419051149";
  const telephone = "tel:+1-559-577-8679";

  return (
    <div className="mx-auto bg-black 2xl:container">
      <ScrollUp
        classNames={classNames}
        isVisible={isVisible}
        scrollToTop={scrollToTop}
      />

      <Hero img={HeroImage} alt="hero-image" onClick={jumpToAbout} />

      <About
        aboutImage={aboutImage}
        alt="about-section"
        onClick={jumpToFooter}
        paragraph="Owned and Operated by U.S. ARMY Veteran. Ready to start your fitness
        journey with us? Give us a call, send an email or find us on social
        media!"
        span="learn more"
      />

      <Divider />

      <Events
        jotform={jotform}
        h1="upcoming events"
        h2="2022 APF iron wars 6"
        img={Apf}
        alt="apf logo"
      ></Events>

      <Divider />

      <Footer
        learnMoreButton={learnMoreButton}
        facebookUrl={facebookUrl}
        instagramUrl={instagramUrl}
        cashAppUrl={cashAppUrl}
        googleMapsUrl={googleMapsUrl}
        currentyear={currentyear}
        telephone={telephone}
        email={email}
        githubUrl={githubUrl}
        owner="Everyday Iron Workout Warehouse"
      ></Footer>
    </div>
  );
}

export default App;
