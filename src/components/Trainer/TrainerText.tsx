import { TrainerButtonTraining } from "./TrainerButtonTraining";

/** text found in trainer */
export function TrainerText(): JSX.Element {
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
