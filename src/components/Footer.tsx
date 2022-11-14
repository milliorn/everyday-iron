import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { SiCashapp, SiGooglemaps } from "react-icons/si";
import uuid from "react-uuid";

const footerData = [
  {
    href: "https://cash.app/$RhinoLopez",
    app: <SiCashapp />,
    label: "cash app",
    class:
      "bg-green-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3",
  },
  {
    href: "https://www.facebook.com/rhinosEI",
    app: <BsFacebook />,
    label: "facebook",
    class:
      "bg-blue-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3",
  },
  {
    href: "https://www.instagram.com/everyday_iron/",
    app: <BsInstagram />,
    label: "instagram",
    class:
      "bg-fuchsia-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3",
  },
  {
    href: "https://goo.gl/maps/abEtXLCVTWeupqKD8",
    app: <SiGooglemaps />,
    label: "google maps",
    class:
      "bg-red-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3",
  },
  {
    href: "tel:+1-559-577-8679",
    app: <BsFillTelephoneFill />,
    label: "phone number",
    class:
      "bg-orange-400 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3",
  },
  {
    href: "mailto:everydayiron8489@gmail.com",
    app: <AiOutlineMail />,
    label: "email",
    class:
      "bg-red-600 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3",
  },
];

/** container for footer */
function FooterContainer(): JSX.Element {
  return (
    <div className="flex flex-wrap  items-center justify-center align-center">
      <div className="w-full lg:w-6/12 px-4">
        <h3 className="text-3xl font-semibold capitalize text-center font-serif">
          Follow us on social media!
        </h3>
        <h4 className="text-lg my-2 text-gray-700 text-center">
          Contact us on those platforms. Also by phone or email.
        </h4>
        <FooterAnchorContainer />
      </div>
    </div>
  );
}

/** generate footer buttons */
function FooterAnchorContainer(): JSX.Element {
  return (
    <div className="mt-6 justify-center flex">
      {footerData.map((item) => (
        <a
          className={item.class}
          type="button"
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          key={uuid()}
        >
          {item.app}
        </a>
      ))}
    </div>
  );
}

/** draw line with background color to make border */
function SlantRightUp(): JSX.Element {
  return (
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 "
      style={{ height: `80px`, transform: `translateZ(0px)` }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        y="0"
      >
        <polygon
          className="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
  );
}

/** print copyright in footer */
function Copyright(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-gray-900 font-semibold py-1">
          Copyright © {new Date().getFullYear()} Everyday Iron Workout Warehouse
          Gym
        </div>
      </div>
    </div>
  );
}

/** app footer */
export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <SlantRightUp />
      <div className="container mx-auto px-4">
        <FooterContainer />
        <hr className="my-6 border-gray-400" />
        <Copyright />
      </div>
    </footer>
  );
}
