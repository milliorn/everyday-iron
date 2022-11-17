import hero from "../assets/hero.webp";

/** render a black overlap on top of hero image */
function HeroOverlay(): JSX.Element {
  return (
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
        Welcome to The Official California American Powerlifting Federation Gym.
        Sanctioned by World Powerlifting Congress, it’s not just a gym but an
        environment for people of all walks of life. Owned and Operated by U.S.
        ARMY Veteran. Ready to start your fitness journey? Click the button
        below or scroll down to learn more!
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
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
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
