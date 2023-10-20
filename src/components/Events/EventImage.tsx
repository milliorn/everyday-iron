import image from "../../assets/iron_man_2023.jpg";
import { Img } from "react-image";

/** template for image */
export function EventImage(): JSX.Element {
  return (
    <div className="w-full px-4 mx-auto md:w-7/12" data-aos="fade">
      <Img
        src={image}
        alt="monolift"
        width={1275}
        height={1650}
        className="max-w-full rounded-lg shadow-lg opacity-60"
      />
    </div>
  );
}
