import uuid from "react-uuid";
import Bob from "../assets/bob.webp";
import Kim from "../assets/kim.webp";
import Mark from "../assets/mark.webp";

const trainerData = [
  {
    src: Mark,
    width: "1440",
    height: "1440",
    alt: "trainer mark",
    classCSS: "shadow-lg rounded max-w-full mx-auto",
    trainer: "Mark Lopez",
    info: "Owner | Trainer | APF Director",
  },
  {
    src: Bob,
    width: "1440",
    height: "1440",
    alt: "trainer bob",
    classCSS: "shadow-lg rounded max-w-full mx-auto",
    trainer: "Bob Packer",
    info: "Sales | Trainer | Powerlifting Hall of Fame",
  },
  {
    src: Kim,
    width: "889",
    height: "1191",
    alt: "trainer kim",
    classCSS: "shadow-lg rounded max-w-full mx-auto md:max-h-[240px]",
    trainer: "Kim Packer",
    info: "Trainer | Competitive Powerlifter & Bodybuilder",
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
  src: string;
  width: string;
  height: string;
  alt: string;
  classCSS: string;
  trainer: string;
  info: string;
}): JSX.Element {
  const { src, width, height, alt, classCSS, trainer, info } = props;
  return (
    <div className="px-6">
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={classCSS}
        style={{ maxWidth: "240px" }}
      />
      <TrainerCardInnerText trainer={trainer} info={info} />{" "}
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
              src={data.src}
              width={data.width}
              height={data.height}
              alt={data.alt}
              classCSS={data.classCSS}
              trainer={data.trainer}
              info={data.info}
            />
          </div>
        );
      })}
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
