/** npm */
import Aos from "aos";
/** react */
import { useEffect } from "react";
/** components */
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Trainers from "./components/Trainers";

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
      <Footer />
    </>
  );
}
