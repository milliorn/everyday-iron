import Bob from "../assets/bob.webp";
import Kim from "../assets/kim.webp";
import Mark from "../assets/mark.webp";

/** text found in trainer */
function TrainerText(): JSX.Element {
  return (
    <div className="flex flex-wrap justify-center text-center mb-24">
      <div className="w-full px-4">
        <h2 className="text-4xl font-semibold uppercase text-red-600 2xl:text-5xl font-serif">
          Meet Our Trainers
        </h2>
        <p className="text-xl leading-relaxed mt-4 text-white 2xl:text-3xl">
          Our trainers are here to dedicate the time and effort that you need to
          get in the best shape of your life!
        </p>
      </div>
    </div>
  );
}

/** cards found in trainer */
function TrainerCardWrapper() {
  return (
    <div className="flex flex-wrap">
      {/** <!-- Card 1 --> */}
      <div className="w-full md:w-4/12 lg:mb-0 my-4 px-4" data-aos="flip-right">
        <div className="px-6">
          <img
            src={Mark}
            width="1440"
            height="1440"
            alt=""
            className="shadow-lg rounded max-w-full mx-auto"
            style={{ maxWidth: "240px" }}
          />
          <div className="pt-6 text-center">
            <h3 className="text-xl font-bold text-red-600 2xl:text-3xl font-serif">
              Mark Lopez
            </h3>
            <p className="mt-1 text-sm text-gray-200 uppercase font-semibold  2xl:text-base font-serif">
              Owner | Trainer | APF Director
            </p>
          </div>
        </div>
      </div>

      {/** <!-- Card 2 --> */}
      <div className="w-full md:w-4/12 lg:mb-0 my-4 px-4" data-aos="flip-right">
        <div className="px-6">
          <img
            src={Bob}
            width="1440"
            height="1440"
            alt=""
            className="shadow-lg rounded max-w-full mx-auto"
            style={{ maxWidth: "240px" }}
          />
          <div className="pt-6 text-center">
            <h3 className="text-xl font-bold text-red-600 2xl:text-3xl font-serif">
              Bob Packer
            </h3>
            <p className="mt-1 text-sm text-gray-200 uppercase font-semibold  2xl:text-base font-serif">
              Sales | Trainer | Powerlifting Hall of Fame
            </p>
          </div>
        </div>
      </div>

      {/** <!-- Card 3 --> */}
      <div className="w-full md:w-4/12 lg:mb-0 my-4 px-4" data-aos="flip-right">
        <div className="px-6">
          <img
            src={Kim}
            width="889"
            height="1191"
            alt=""
            className="shadow-lg rounded max-w-full mx-auto md:max-h-[240px]"
            style={{ maxWidth: "240px" }}
          />
          <div className="pt-6 text-center">
            <h3 className="text-xl font-bold text-red-600 2xl:text-3xl font-serif">
              Kim Packer
            </h3>
            <p className="mt-1 text-sm text-gray-200 uppercase font-semibold  2xl:text-base font-serif">
              Trainer | Competitive Powerlifter & Bodybuilder
            </p>
          </div>
        </div>
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
