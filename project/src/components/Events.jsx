import { ScrollFooter } from "./ScrollFooter";

export function Events(props) {
  return (
    <article>
      <h1 className="mb-4 text-4xl text-center capitalize sm:text-5xl md:text-6xl lg:text-7xl text-green-50">
        {props.h1}
      </h1>
      <h2 className="mb-4 text-2xl text-center capitalize sm:text-4xl md:text-5xl lg:text-6xl text-green-50">
        {props.h2}
      </h2>
      <img
        src={props.img}
        alt={props.alt}
        className="relative w-screen max-w-screen-sm p-8 mx-auto my-4 h-100 brightness-105"
      />
      <ScrollFooter
        jotform={props.jotform}
        alt="registration"
        anchor="register now!"
      />
    </article>
  );
}
