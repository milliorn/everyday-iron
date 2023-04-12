import uuid from "react-uuid";
import { aboutData } from "./aboutData";

/** container to hold list items in about */
export function AboutList(): JSX.Element {
  return (
    <ul className="list-none mt-6">
      {aboutData.map((about) => (
        <li
          className="py-2 flex items-center text-xl 2xl:text-3xl"
          key={uuid()}
        >
          {about}
        </li>
      ))}
    </ul>
  );
}
