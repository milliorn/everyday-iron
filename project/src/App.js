import React from "react";
import './App.css';
import HeroImage from "./images/hero.jpg";

function App() {
  const url = "https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react";

  return (
    <div>
      <div className="relative w-full max-h-fit">
        <img src={HeroImage} alt="" className="w-screen h-100" />
        <button className="absolute px-6 py-3 mx-auto my-0 text-xl font-bold text-center text-white bg-green-500 border-none rounded-full cursor-pointer sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl top-3/4 left-1/2">
          <a href={url}>Learn More</a>
        </button>
      </div>

    </div>

  );
}

export default App;
