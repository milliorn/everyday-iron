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
      duration: 3000,
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
