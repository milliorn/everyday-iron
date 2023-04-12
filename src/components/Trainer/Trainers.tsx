import { TrainerCardWrapper } from "./TrainerCardWrapper";
import { TrainerText } from "./TrainerText";

/** app trainer roster */
export default function Trainers(): JSX.Element {
  return (
    <section id="trainer" className="pt-20 pb-48 bg-neutral-900">
      <div className="container mx-auto px-4">
        <TrainerText />
        <TrainerCardWrapper />
      </div>
    </section>
  );
}
