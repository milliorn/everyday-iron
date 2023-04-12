import { FooterAnchorContainer } from "./FooterAnchorContainer";

/** container for footer */
export function FooterContainer(): JSX.Element {
  return (
    <div
      className="flex flex-wrap  items-center justify-center align-center"
      data-aos="fade"
    >
      <div className="w-full lg:w-6/12 px-4">
        <h3 className="text-3xl font-semibold capitalize text-center font-serif">
          Follow us on social media!
        </h3>
        <h4 className="text-lg my-2 text-gray-700 text-center">
          Contact us on these platforms, phone, or email.
        </h4>
        <FooterAnchorContainer />
      </div>
    </div>
  );
}
