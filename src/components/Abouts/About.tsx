import { AboutWrapper } from "./AboutWrapper";

/** app about component */
export default function About(): JSX.Element {
  return (
    <section id="about" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <AboutWrapper />
      </div>
    </section>
  );
}
