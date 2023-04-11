import uuid from "react-uuid";
import { trainerData } from "./trainerData";
import { TrainerCardTemplate } from "./TrainerCardTemplate";
import { TrainerButtonTour } from "./TrainerButtonTour";

/** cards found in trainer */
export function TrainerCardWrapper(): JSX.Element {
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
