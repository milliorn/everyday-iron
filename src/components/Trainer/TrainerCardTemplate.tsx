import { Img } from "react-image";
import { TrainerCardInnerText } from "./TrainerCardInnerText";

/** template to make trainer card image */
export function TrainerCardTemplate(props: {
  alt: string;
  classCSS: string;
  height: string;
  info: string;
  src: string;
  trainer: string;
  width: string;
}): JSX.Element {
  const { src, width, height, alt, classCSS, trainer, info } = props;
  return (
    <div className="px-6">
      <Img
        alt={alt}
        className={classCSS}
        height={height}
        src={src}
        style={{ maxWidth: "240px" }}
        width={width}
      />
      <TrainerCardInnerText trainer={trainer} info={info} />
    </div>
  );
}
