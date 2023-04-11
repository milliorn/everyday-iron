import { AboutList } from "./AboutList";
import { AboutWpc } from "./AboutWpc";

/** about container */
export function AboutTextContainer(): JSX.Element {
  return (
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="fade">
      <div className="md:pr-12">
        <h2 className="sm:text-3xl 2xl:text-4xl text-xl uppercase font-extrabold font-serif	text-red-600 mt-4 sm:mt-0 text-center md:text-left">
          Rhino ATHLETIC Performance
        </h2>
        <AboutList />
        <AboutWpc />
      </div>
    </div>
  );
}
