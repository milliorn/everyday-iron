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
import SoldierImage from "./images/soldier.jpg";

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

  const currentyear = new Date().getFullYear();
  const jotform = "https://form.jotform.com/220908419051149";
  const githubUrl = "https://github.com/milliorn/Everyday-Iron";

  return (
    <div className="mx-auto bg-black 2xl:container">
      <ScrollUp
        classNames={classNames}
        isVisible={isVisible}
        scrollToTop={scrollToTop}
      />

      <Hero img={HeroImage} alt="hero-image" onClick={jumpToAbout} />

      <About
        src={SoldierImage}
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
        currentyear={currentyear}
        owner="Everyday Iron Workout Warehouse"
        githubUrl={githubUrl}
      ></Footer>
    </div>
  );
}

export default App;
