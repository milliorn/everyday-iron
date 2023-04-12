/** draw line with background color to make border */
export function HeroRightUp(): JSX.Element {
  return (
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: "70px", transform: "translateZ(0px)" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <polygon points="2560 0 2560 100 0 100" />
      </svg>
    </div>
  );
}
