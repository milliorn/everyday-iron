import React from "react";
import "./App.css";
import HeroImage from "./images/hero.jpg";
import SoldierImage from "./images/soldier.jpg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import gymSvg from "./images/gym-dumbbell.svg";

function App() {
  const localUrl =
    "https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react";

  const facebookUrl = "https://www.facebook.com/rhinosEI";
  const instagramUrl = "https://www.instagram.com/everyday_iron/";
  const gyminsightUrl = "https://guru.gyminsight.com/join/douN8BHlzer9cdt";

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
        <p className="absolute mx-auto my-0 text-sm font-semibold text-center text-white backdrop-blur-sm drop-shadow-2xl sm:text-lg md:text-xl top-2/4 left-1/2">
          Owned and Operated by U.S. ARMY Veteran. Ready to start your fitness
          journey with us? Give us a call, send an email or find us on social
          media!
        </p>
        <button className="absolute px-3 py-1 text-xs text-white bg-green-500 rounded-full cursor-pointer drop-shadow-2xl top-3/4 left-1/2 ">
          <a href={localUrl}>Learn More</a>
        </button>
      </div>
      <div className="w-11/12 h-px mx-auto my-10 bg-white"></div>

      <footer className="table mx-auto my-0 text-center text-white ">
        <div className="container px-6 pt-6">
          <div className="flex justify-center mb-6">
            <a
              href={facebookUrl}
              type="button"
              target="_blank"
              className="m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 w-9 h-9"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="w-2 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              type="button"
              className="m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 w-9 h-9"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              className="m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 w-9 h-9"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="p-4 text-center">
          © 2021 Copyright:
          <a className="text-white" href="https://tailwind-elements.com/">
            {" "}
            Everyday Iron Workout Warehouse
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
