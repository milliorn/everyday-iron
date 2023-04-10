import Monolith from "../../assets/monolith.webp";
import { Img } from "react-image";

/** templae for image */
export function AboutImage(): JSX.Element {
  return (
    <div className="w-full md:w-7/12 mx-auto px-4" data-aos="fade">
      <Img
        src={Monolith}
        alt="monolift"
        width={1440}
        height={1080}
        className="max-w-full rounded-lg shadow-lg opacity-60"
      />
    </div>
  );
}
