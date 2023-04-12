import { Copyright } from "./Copyright";
import { FooterContainer } from "./FooterContainer";
import { SlantRightUp } from "./SlantRightUp";

/** app footer */
export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gray-300 pt-8 pb-6">
      <SlantRightUp />
      <div className="container mx-auto px-4">
        <FooterContainer />
        <hr className="my-6 border-gray-400" />
        <Copyright />
      </div>
    </footer>
  );
}
