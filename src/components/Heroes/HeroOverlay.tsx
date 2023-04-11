import { Suspense } from "react";
import hero from "../../assets/hero.webp";

/** render a black overlap on top of hero image */
export function HeroOverlay(): JSX.Element {
  return (
    <Suspense>
      <div
        className="absolute top-0 w-full h-full bg-top bg-cover"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-80 bg-black"
        />
      </div>
    </Suspense>
  );
}
