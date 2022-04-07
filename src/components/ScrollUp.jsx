import { BsFillArrowUpCircleFill } from "react-icons/bs";

export function ScrollUp(props) {
  return (
    <div className="fixed z-10 top-8 left-8 lg:top-11 lg:left-11 xl:top-12 xl:left-12">
      <button
        type="button"
        onClick={props.scrollToTop}
        className={props.classNames(
          props.isVisible ? "opacity-100" : "opacity-0",
          'bg-white rounded-full cursor-pointer drop-shadow-2xl top-3/4 left-1/2 animate-pulse"'
        )}
      >
        <BsFillArrowUpCircleFill
          className="text-3xl text-green-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          aria-hidden="true" />
      </button>
    </div>
  );
}
