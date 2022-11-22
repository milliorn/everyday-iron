import uuid from "react-uuid";
import Bob from "../assets/bob.webp";
import Kim from "../assets/kim.webp";
import Mark from "../assets/mark.webp";
import { Img } from "react-image";

const trainerData = [
  {
    alt: "trainer mark",
    classCSS: "shadow-lg rounded max-w-full mx-auto",
    height: "1440",
    info: "Owner | Personal Trainer | APF Meet Director",
    src: Mark,
    trainer: 'Mark "Rhino" Lopez',
    width: "1440",
  },
  {
    alt: "trainer bob",
    classCSS: "shadow-lg rounded max-w-full mx-auto",
    height: "1440",
    info: "Sales | Personal Trainer | Powerlifting Hall of Fame",
    src: Bob,
    trainer: "Bob Packer",
    width: "1440",
  },
  {
    alt: "trainer kim",
    classCSS: "shadow-lg rounded max-w-full mx-auto md:max-h-[240px]",
    height: "1191",
    info: "Personal Trainer | Competitive Powerlifter & Bodybuilder",
    src: Kim,
    trainer: "Kim Packer",
    width: "889",
  },
];

/** holds text found in trainer cards */
function TrainerCardInnerText(props: {
  trainer: string;
  info: string;
}): JSX.Element {
  const { trainer, info } = props;
  return (
    <div className="pt-6 text-center">
      <h3 className="text-xl font-bold text-red-600 2xl:text-3xl font-serif">
        {trainer}
      </h3>
      <p className="mt-1 text-sm text-gray-200 uppercase font-semibold  2xl:text-base font-serif">
        {info}
      </p>
    </div>
  );
}

/** template to make trainer card image */
function TrainerCardTemplate(props: {
  alt: string;
  classCSS: string;
  height: string;
  info: string;
  src: string;
  trainer: string;
  width: string;
}): JSX.Element {
  const { src, width, height, alt, classCSS, trainer, info } = props;
  return (
    <div className="px-6">
      <Img
        alt={alt}
        className={classCSS}
        height={height}
        src={src}
        style={{ maxWidth: "240px" }}
        width={width}
      />
      <TrainerCardInnerText trainer={trainer} info={info} />
    </div>
  );
}

/** holds text and button for hero image */
function TrainerButtonTraining(): JSX.Element {
  return (
    <div className="w-full lg:w-6/12 px-4 pt-8 sm:pt-8 ml-auto mr-auto text-center">
      <a
        href="https://widgets.gyminsight.com/appointment-widget/index.html?l=86b49615-1f03-466d-b889-eb72b67b220b&t=America%2FLos_Angeles&widgetId=zQc1pvGBnNM04EL"
        target="_blank"
        className="bg-transparent hover:bg-red-600 text-white font-semibold hover:bold hover:text-white p-4 border border-red-600 hover:border-transparent rounded inline-block mt-5 cursor-pointer 2xl:text-2xl"
        rel="noreferrer"
      >
        Book a Session with us!
      </a>
    </div>
  );
}

// button that redirects to making tour appointment
function TrainerButtonTour(): JSX.Element {
  return (
    <div className="w-full lg:w-6/12 px-4 pt-8 sm:pt-8 mx-auto text-center">
      <a
        href="https://widgets.gyminsight.com/appointment-widget/index.html?l=86b49615-1f03-466d-b889-eb72b67b220b&t=America%2FLos_Angeles&widgetId=6m4SQd3VbKDxGqh"
        target="_blank"
        className="bg-transparent hover:bg-red-600 text-white font-semibold hover:bold hover:text-white p-4 border border-red-600 hover:border-transparent rounded inline-block mt-5 cursor-pointer 2xl:text-2xl"
        rel="noreferrer"
      >
        Take a Tour of the Gym!
      </a>
    </div>
  );
}

/** cards found in trainer */
function TrainerCardWrapper() {
  return (
    <div className="flex flex-wrap">
      {trainerData.map((data): JSX.Element => {
        return (
          <div
            className="w-full lg:w-4/12 lg:mb-0 my-4 px-4"
            data-aos="fade"
            key={uuid()}
          >
            <TrainerCardTemplate
              alt={data.alt}
              classCSS={data.classCSS}
              height={data.height}
              info={data.info}
              src={data.src}
              trainer={data.trainer}
              width={data.width}
            />
          </div>
        );
      })}
      <TrainerButtonTour />
    </div>
  );
}

/** text found in trainer */
function TrainerText(): JSX.Element {
  return (
    <div className="flex flex-wrap justify-center text-center mb-24">
      <div className="w-full px-4">
        <h2 className="text-4xl font-semibold uppercase text-red-600 2xl:text-5xl font-serif">
          Meet Our Trainers
        </h2>
        <p className="text-xl leading-relaxed mt-4 text-white 2xl:text-3xl">
          65 years of combined Expertise in Powerlifting, Olympic Weightlifting,
          Strength Training, Bodybuilding and Weight Management. Our trainers
          are here to dedicate the time and effort that you need to get in the
          best shape of your life!
        </p>
      </div>
      <TrainerButtonTraining />
    </div>
  );
}

/** app trainer roster */
export default function Trainers(): JSX.Element {
  return (
    <section className="pt-20 pb-48 bg-neutral-900">
      <div className="container mx-auto px-4">
        <TrainerText />
        <TrainerCardWrapper />
      </div>
    </section>
  );
}
