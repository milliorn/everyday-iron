import uuid from "react-uuid";

import Monolith from "../assets/monolith.jpg";

const aboutData = [
  "WPC approved equipment.",
  "York, Texas, Ohio, Swiss Barbells.",
  "Dumbbell weights including Olympic handles.",
  "Isolation and Cable Machines for Bodybuilding",
  "Cardio Equipment",
];

/** Template for list items in About */
function AboutListTemplate(props: { about: string }): JSX.Element {
  const { about } = props;
  return (
    <li className="py-2" key={uuid()}>
      <div className="flex items-center">
        <h3 className="text-xl capitalize 2xl:text-3xl">{about}</h3>
      </div>
    </li>
  );
}

/** container to hold list items in about */
function AboutList() {
  return (
    <ul className="list-none mt-6">
      {aboutData.map((about) => (
        <AboutListTemplate about={about} />
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
        <p className="mt-4 text-lg leading-relaxed 2xl:text-3xl">
          65 years of combined Expertise in Powerlifting, Olympic Weightlifting,
          Strength Training, Bodybuilding and Weight Management.
        </p>
        <AboutList />
      </div>
    </div>
  );
}

/** container for image found in about component */
function AboutImageContainer(): JSX.Element {
  return (
    <div className="w-full md:w-7/12 mx-auto px-4" data-aos="fade-right">
      <img
        src={Monolith}
        alt="monolift"
        width="1440"
        height="1080"
        className="max-w-full rounded-lg shadow-lg opacity-60"
      />
    </div>
  );
}

/** app about component */
export default function About(): JSX.Element {
  return (
    <section id="about" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <AboutImageContainer />
          <AboutTextContainer />
        </div>
      </div>
    </section>
  );
}
