import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "../components/Abouts/About";
import Footer from "../components/Footers/Footer";
import Hero from "../components/Heroes/Hero";
import Trainers from "../components/Trainer/Trainers";
import Event from "../components/Events/Event";

/** main app */
export default function App(): JSX.Element {
  /** https://stackoverflow.com/a/59507994/11986604 */
  useEffect(() => {
    Aos.init({
      /** https://github.com/michalsnik/aos#predefined-options */
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Trainers />
      <Event />
      <Footer />
    </>
  );
}
