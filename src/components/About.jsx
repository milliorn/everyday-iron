export function About(props) {
  return (
    <section className="relative w-full max-h-fit" ref={props.aboutImage}>
      <img
        src={props.src}
        alt={props.alt}
        className="w-screen h-100 brightness-105 "
      />
      <p className="absolute mx-auto my-0 text-sm font-semibold text-center text-green-50 backdrop-blur-sm drop-shadow-2xl sm:text-lg md:text-xl top-2/4 left-1/2">
        {props.paragraph}
      </p>
      <button
        onClick={props.onClick}
        className="absolute px-3 py-1 text-xs capitalize bg-green-900 rounded-full cursor-pointer sm:text-base lg:text-lg xl:text-2xl text-green-50 drop-shadow-2xl top-3/4 left-1/2 "
      >
        <span>{props.span}</span>
      </button>
    </section>
  );
}
