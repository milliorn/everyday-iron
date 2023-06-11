import { EventList } from "./EventList";
import { EventSignUpButton } from "./EventSignUpButton";

/** about container */
export function EventTextContainer(): JSX.Element {
  return (
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="fade">
      <div className="md:pr-12">
        <h2 className="sm:text-4xl text-3xl 2xl:text-6xl uppercase font-extrabold font-serif	text-red-600 mt-4 sm:mt-0 text-center md:text-left">
          Santa Barbara Summer Showdown
        </h2>
        <EventList />
        <EventSignUpButton />
      </div>
    </div>
  );
}
