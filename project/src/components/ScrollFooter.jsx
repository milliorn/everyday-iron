export function ScrollFooter(props) {
  return (
    <button className="absolute flex px-3 py-1 mx-auto text-center bg-green-900 rounded-full cursor-pointer top-4/4 left-2/4 drop-shadow-2xl">
      <a
        href={props.jotform}
        alt={props.alt}
        target="_blank"
        className="text-center capitalize text-green-50 xl:text-2xl"
        rel="noreferrer"
      >
        {props.anchor}
      </a>
    </button>
  );
}
