import React from "react";
import "./App.css";
import HeroImage from "./images/hero.jpg";
import SoldierImage from "./images/soldier.jpg";
import {
  BsFacebook,
  BsInstagram,
  BsFillTelephoneFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { FaWpforms } from "react-icons/fa";

function App() {
  const localUrl =
    "https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react";

  const facebookUrl = "https://www.facebook.com/rhinosEI";
  const instagramUrl = "https://www.instagram.com/everyday_iron/";
  const gyminsightUrl = "https://guru.gyminsight.com/join/douN8BHlzer9cdt";
  const googleMapsUrl = "https://goo.gl/maps/abEtXLCVTWeupqKD8";
  const currentyear = new Date().getFullYear();
  const telephone = "tel:+1-559-577-8679";
  const email = "mailto:everydayiron8489@gmail.com";
  const githubUrl = "https://github.com/milliorn/Everyday-Iron";

  return (
    <div className="mx-auto bg-black 2xl:container">
      <div className="relative w-full max-h-fit">
        <img
          src={HeroImage}
          alt=""
          className="w-screen h-100 brightness-105 "
        />
        <button className="absolute bg-white rounded-full cursor-pointer drop-shadow-2xl top-3/4 left-1/2 animate-pulse ">
          <a
            className="text-3xl text-green-500 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            href={localUrl}
          >
            <BsFillArrowDownCircleFill />
          </a>
        </button>
      </div>
      <div className="relative w-full max-h-fit">
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
        <button className="absolute px-3 py-1 text-xs bg-green-900 rounded-full cursor-pointer sm:text-base lg:text-lg xl:text-xl text-green-50 drop-shadow-2xl top-3/4 left-1/2 ">
          <a href={localUrl}>Registration &amp; Forms</a>
        </button>
      </div>
      <div className="w-11/12 h-px mx-auto my-10 bg-green-900"></div>

      <footer className="table mx-auto my-0 text-center text-green-50 ">
        <div className="container px-6 pt-6">
          <div className="flex justify-center mb-6">
            <a
              href={gyminsightUrl}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
              alt="guru"
            >
              <CgGym />
            </a>
            <a
              href={facebookUrl}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            >
              <BsFacebook />
            </a>

            <a
              href={instagramUrl}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            >
              <BsInstagram />
            </a>

            <a
              href={googleMapsUrl}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            >
              <SiGooglemaps />
            </a>

            <a
              href={telephone}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            >
              <BsFillTelephoneFill />
            </a>

            <a
              href={email}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            >
              <AiOutlineMail />
            </a>

            <a
              href={email}
              type="button"
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            >
              <FaWpforms />
            </a>
          </div>
        </div>

        <div className="p-4 text-sm text-center text-green-50">
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
