import { EventImage } from "./EventImage";
import { EventTextContainer } from "./EventTextContainer";

/** wrapper for component */
export function EventWrapper(): JSX.Element {
  return (
    <div className="items-center flex flex-wrap">
      <EventTextContainer />
      <EventImage />
    </div>
  );
}
