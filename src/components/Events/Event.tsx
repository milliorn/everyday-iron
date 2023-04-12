import { EventWrapper } from "./EventWrapper";

/** app about component */
export default function Event(): JSX.Element {
  return (
    <section id="event" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <EventWrapper />
      </div>
    </section>
  );
}
