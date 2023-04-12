import uuid from "react-uuid";
import { eventData } from "./eventData";

/** container to hold list items in about */
export function EventList(): JSX.Element {
  return (
    <ul className="list-none mt-6">
      {eventData.map((event: string) => (
        <li
          className="py-2 flex items-center text-xl 2xl:text-3xl capitalize"
          key={uuid()}
        >
          {event}
        </li>
      ))}
    </ul>
  );
}
