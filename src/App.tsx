import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Trainers from "./components/Trainers";

/** main app */
export default function App(): JSX.Element {
  return (
    <>
      <Hero />
      <About />
      <Trainers />
      <Footer />
    </>
  );
}
