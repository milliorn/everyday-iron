import { HeroOverlay } from "./HeroOverlay";
import { HeroRightUp } from "./HeroRightUp";
import { HeroTextContainer } from "./HeroTextContainer";

/** app hero */
export default function Hero(): JSX.Element {
  return (
    <div
      id="home"
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{ minHeight: "95vh" }}
    >
      <HeroOverlay />
      <HeroTextContainer />
      <HeroRightUp />
    </div>
  );
}
