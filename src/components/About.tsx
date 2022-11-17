import uuid from "react-uuid";

import Monolith from "../assets/monolith.webp";

const aboutData = [
  "WPC approved equipment.",
  "York, Texas, Ohio, Swiss Barbells.",
  "Dumbbell weights including Olympic handles.",
  "Isolation and Cable Machines for Bodybuilding",
  "Cardio Equipment",
];

/** container to hold list items in about */
function AboutList() {
  return (
    <ul className="list-none mt-6">
      {aboutData.map((about) => (
        <li
          className="py-2 flex items-center text-xl capitalize 2xl:text-3xl"
          key={uuid()}
        >
          {about}
        </li>
      ))}
    </ul>
  );
}

/** about container */
function AboutTextContainer(): JSX.Element {
  return (
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="fade-left">
      <div className="md:pr-12">
        <h2 className="sm:text-3xl 2xl:text-4xl text-xl uppercase font-bold font-serif	text-red-600 mt-4 sm:mt-0 text-center md:text-left">
          Rhino Performance
        </h2>
        <AboutList />
        <p className="mt-8 text-lg text-gray-300 xl:text-xl 2xl:text-3xl">
          Want to compete in a sport? World Powerlifting Congress is the
          premiere destination in Powerlifting. Visit the WPC website by
          clicking on the button below and learn more!
        </p>
        <div className="text-center">
          {/** https://stackoverflow.com/a/9721865/11986604 */}
          <a
            href="https://worldpowerliftingcongress.com/"
            target="_blank"
            className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white p-4 border border-red-600 hover:border-transparent rounded inline-block mt-8 cursor-pointer 2xl:text-2xl"
            rel="noreferrer"
          >
            Go to WPC Website
          </a>
        </div>
      </div>
    </div>
  );
}

/** wrapper for component */
function AboutWrapper(): JSX.Element {
  return (
    <div className="items-center flex flex-wrap">
      <div className="w-full md:w-7/12 mx-auto px-4" data-aos="fade-right">
        <img
          src={Monolith}
          alt="monolift"
          width={1440}
          height={1080}
          className="max-w-full rounded-lg shadow-lg opacity-60"
        />
      </div>
      <AboutTextContainer />
    </div>
  );
}

/** app about component */
export default function About(): JSX.Element {
  return (
    <section id="about" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <AboutWrapper />
      </div>
    </section>
  );
}
