import { AboutTextContainer } from "./AboutTextContainer";
import { AboutImage } from "./AboutImage";

/** wrapper for component */
export function AboutWrapper(): JSX.Element {
  return (
    <div className="items-center flex flex-wrap">
      <AboutImage />
      <AboutTextContainer />
    </div>
  );
}
