import titled_af from "../../assets/titled_af.jpg";
import { Img } from "react-image";

/** template for image */
export function EventImage(): JSX.Element {
  return (
    <div className="w-full md:w-7/12 mx-auto px-4" data-aos="fade">
      <Img
        src={titled_af}
        alt="monolift"
        width={1275}
        height={1650}
        className="max-w-full rounded-lg shadow-lg opacity-60"
      />
    </div>
  );
}
