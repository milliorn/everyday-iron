import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { SiCashapp, SiGooglemaps } from "react-icons/si";

export const footerData = [
  {
    app: <SiCashapp />,
    href: "https://cash.app/$RhinoLopez",
    label: "cash app",
    class:
      "bg-green-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-black",
  },
  {
    app: <BsFacebook />,
    href: "https://www.facebook.com/rhinosEI",
    label: "facebook",
    class:
      "bg-blue-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-black",
  },
  {
    app: <BsInstagram />,
    href: "https://www.instagram.com/everyday_iron/",
    label: "instagram",
    class:
      "bg-fuchsia-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-black",
  },
  {
    app: <SiGooglemaps />,
    href: "https://goo.gl/maps/abEtXLCVTWeupqKD8",
    label: "google maps",
    class:
      "bg-red-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-black",
  },
  {
    app: <BsFillTelephoneFill />,
    href: "tel:+1-559-577-8679",
    label: "phone number",
    class:
      "bg-orange-400 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-black",
  },
  {
    app: <AiOutlineMail />,
    href: "mailto:everydayiron8489@gmail.com",
    label: "email",
    class:
      "bg-red-600 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-black",
  },
];
