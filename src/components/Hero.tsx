import { Suspense } from "react";
import hero from "../assets/hero.webp";

/** render a black overlap on top of hero image */
function HeroOverlay(): JSX.Element {
  return (
    <Suspense>
      <div
        className="absolute top-0 w-full h-full bg-top bg-cover"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-80 bg-black"
        />
      </div>
    </Suspense>
  );
}

/** holds text and button for hero image */
function HeroTextInner(): JSX.Element {
  return (
    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
      <h1 className="text-red-600 font-semibold text-4xl sm:text-7xl font-serif">
        <span>Everyday</span> <span className="text-white">Iron</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300 xl:text-xl 2xl:text-3xl">
        Welcome to Everyday Iron, the Official Training Site for California
        American Powerlifting Federation, powered by the World Powerlifting
        Congress. We are not just a gym, we are a training facility optimized to
        adhere all walks of life, all training needs and styles. Owned and
        Operated by U.S. ARMY Veteran and Competitive Powerlifter Mark
        &quot;Rhino&quot; Lopez. If you&apos;re ready to take the Rhino
        challenge scroll down to learn more.
      </p>
      <a
        href="https://guru.gyminsight.com/join/douN8BHlzer9cdt"
        target="_blank"
        className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:bold hover:text-white p-4 border border-red-600 hover:border-transparent rounded inline-block mt-5 cursor-pointer 2xl:text-2xl"
        rel="noreferrer"
      >
        Let&apos;s Get Started!
      </a>
    </div>
  );
}

/** wrapper text and button for hero image */
function HeroTextContainer(): JSX.Element {
  return (
    <div className="container relative mx-auto" data-aos="fade">
      <div className="items-center flex flex-wrap">
        <HeroTextInner />
      </div>
    </div>
  );
}

/** draw line with background color to make border */
function HeroRightUp(): JSX.Element {
  return (
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: "70px", transform: `translateZ(0px)` }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <polygon points="2560 0 2560 100 0 100" />
      </svg>
    </div>
  );
}

/** app hero */
export default function Hero(): JSX.Element {
  return (
    <div
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{ minHeight: "95vh" }}
    >
      <HeroOverlay />
      <HeroTextContainer />
      <HeroRightUp />
    </div>
  );
}
