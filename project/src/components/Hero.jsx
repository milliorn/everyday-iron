import { BsFillArrowDownCircleFill } from "react-icons/bs";

export function Hero(props) {
  return (
    <div className="relative w-full max-h-fit">
      <img
        src={props.img}
        alt={props.alt}
        className="w-screen h-100 brightness-105 "
      />
      <button
        onClick={props.onClick}
        className="absolute bg-white rounded-full cursor-pointer drop-shadow-2xl top-3/4 left-1/2 animate-pulse "
      >
        <div className="text-3xl text-green-500 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <BsFillArrowDownCircleFill />
        </div>
      </button>
    </div>
  );
}
