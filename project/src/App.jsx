import { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { SiCashapp, SiGooglemaps } from "react-icons/si";
import "./App.css";
import { Hero } from "./components/Hero";
import Apf from "./images/apf.jpg";
import HeroImage from "./images/hero.jpg";
import SoldierImage from "./images/soldier.jpg";
import { ScrollUp } from "./components/ScrollUp";

function App() {
  const soldierImage = useRef();
  const learnMoreButton = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 30) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  function jumpToSoldier() {
    soldierImage.current.scrollIntoView({ behavior: "smooth" });
  }

  function jumpToFooter() {
    learnMoreButton.current.scrollIntoView({ behavior: "smooth" });
  }

  const jotform = "https://form.jotform.com/220908419051149";

  const facebookUrl = "https://www.facebook.com/rhinosEI";
  const instagramUrl = "https://www.instagram.com/everyday_iron/";
  const cashAppUrl = "https://cash.app/$RhinoLopez";
  const googleMapsUrl = "https://goo.gl/maps/abEtXLCVTWeupqKD8";
  const currentyear = new Date().getFullYear();
  const telephone = "tel:+1-559-577-8679";
  const email = "mailto:everydayiron8489@gmail.com";
  const githubUrl = "https://github.com/milliorn/Everyday-Iron";

  return (
    <div className="mx-auto bg-black 2xl:container">
      <ScrollUp
        isVisible={isVisible}
        scrollToTop={scrollToTop}
        classNames={classNames}
      />

      <Hero img={HeroImage} alt="hero-image" onClick={jumpToSoldier} />

      <div className="relative w-full max-h-fit" ref={soldierImage}>
        <img
          src={SoldierImage}
          alt=""
          className="w-screen h-100 brightness-105 "
        />
        <p className="absolute mx-auto my-0 text-sm font-semibold text-center text-green-50 backdrop-blur-sm drop-shadow-2xl sm:text-lg md:text-xl top-2/4 left-1/2">
          Owned and Operated by U.S. ARMY Veteran. Ready to start your fitness
          journey with us? Give us a call, send an email or find us on social
          media!
        </p>
        <button
          onClick={jumpToFooter}
          className="absolute px-3 py-1 text-xs capitalize bg-green-900 rounded-full cursor-pointer sm:text-base lg:text-lg xl:text-2xl text-green-50 drop-shadow-2xl top-3/4 left-1/2 "
        >
          <span>Learn more</span>
        </button>
      </div>

      <section className="w-11/12 h-px mx-auto my-12 bg-green-900"></section>

      <article>
        <h1 className="mb-4 text-4xl text-center capitalize sm:text-5xl md:text-6xl lg:text-7xl text-green-50">
          upcoming events
        </h1>
        <h2 className="mb-4 text-2xl text-center capitalize sm:text-4xl md:text-5xl lg:text-6xl text-green-50">
          2022 APF iron wars 6
        </h2>
        <img
          src={Apf}
          alt="apf logo"
          className="relative w-screen max-w-screen-sm p-8 mx-auto my-4 h-100 brightness-105"
        />

        <button className="absolute flex px-3 py-1 mx-auto text-center bg-green-900 rounded-full cursor-pointer top-4/4 left-2/4 drop-shadow-2xl">
          <a
            href={jotform}
            alt="registration"
            target="_blank"
            className="text-center capitalize text-green-50 xl:text-2xl"
            rel="noreferrer"
          >
            register now!
          </a>
        </button>
      </article>

      <section className="w-11/12 h-px mx-auto my-16 bg-green-900"></section>

      <footer className="table mx-auto my-0 text-center text-green-50 ">
        <div className="container px-6 pt-4">
          <div className="flex justify-center mb-6">
            <a
              href={cashAppUrl}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
              alt="CashApp"
            >
              <SiCashapp />
            </a>
            <a
              href={facebookUrl}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
              alt="FaceBook"
            >
              <BsFacebook />
            </a>

            <a
              href={instagramUrl}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
              alt="Instagram"
            >
              <BsInstagram />
            </a>

            <a
              href={googleMapsUrl}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
              alt="Google Maps"
            >
              <SiGooglemaps />
            </a>

            <a
              href={telephone}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
              alt="Call"
            >
              <BsFillTelephoneFill />
            </a>

            <a
              href={email}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
              alt="Email"
            >
              <AiOutlineMail />
            </a>
          </div>
        </div>

        <div
          className="p-4 text-sm text-center text-green-50"
          ref={learnMoreButton}
        >
          <a
            className="hover:text-green-900"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            © {currentyear} Everyday Iron Workout Warehouse
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
