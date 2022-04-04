import { data } from "../data";

export function Footer(props) {
  const social = data.map((e, i) => (
    <a
      key={i}
      href={e.href}
      type="button"
      target="_blank"
      rel="noreferrer"
      className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
      alt={e.alt}
    >
      {e.icon}
    </a>
  ));

  return (
    <footer className="table mx-auto my-0 text-center text-green-50 ">
      <div className="container px-6 pt-4">
        <div className="flex justify-center mb-6">{social}</div>
      </div>

      <div
        className="p-4 text-sm text-center text-green-50"
        ref={props.learnMoreButton}
      >
        <a
          className="hover:text-green-900 cursor-pointer"
          href={props.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          © {props.currentyear} {props.owner}
        </a>
      </div>
    </footer>
  );
}
