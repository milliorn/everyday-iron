/** draw line with background color to make border */
export function SlantRightUp(): JSX.Element {
  return (
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 "
      style={{ height: "80px", transform: "translateZ(0px)" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        y="0"
      >
        <polygon
          className="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
  );
}
