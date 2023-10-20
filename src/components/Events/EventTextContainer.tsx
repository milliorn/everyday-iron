import { EventList } from "./EventList";
import { EventSignUpButton } from "./EventSignUpButton";

/** about container */
export function EventTextContainer(): JSX.Element {
  return (
    <div className="w-full px-4 ml-auto mr-auto md:w-5/12" data-aos="fade">
      <div className="md:pr-12">
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-center text-red-600 uppercase sm:text-4xl 2xl:text-6xl sm:mt-0 md:text-left">
          2023 Ironman
        </h2>
        <EventList />
        <EventSignUpButton />
      </div>
    </div>
  );
}
