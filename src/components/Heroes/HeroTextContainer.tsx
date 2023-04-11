import { HeroTextInner } from "./HeroTextInner";

/** wrapper text and button for hero image */
export function HeroTextContainer(): JSX.Element {
  return (
    <div className="container relative mx-auto" data-aos="fade">
      <div className="items-center flex flex-wrap">
        <HeroTextInner />
      </div>
    </div>
  );
}
