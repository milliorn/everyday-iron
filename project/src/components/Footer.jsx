import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { SiCashapp, SiGooglemaps } from "react-icons/si";

export function Footer(props) {
  return (
    <footer className="table mx-auto my-0 text-center text-green-50 ">
      <div className="container px-6 pt-4">
        <div className="flex justify-center mb-6">
          <a
            href={props.cashAppUrl}
            type="button"
            target="_blank"
            rel="noreferrer"
            className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            alt="CashApp"
          >
            <SiCashapp />
          </a>

          <a
            href={props.facebookUrl}
            type="button"
            target="_blank"
            rel="noreferrer"
            className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            alt="FaceBook"
          >
            <BsFacebook />
          </a>

          <a
            href={props.instagramUrl}
            type="button"
            target="_blank"
            rel="noreferrer"
            className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            alt="Instagram"
          >
            <BsInstagram />
          </a>

          <a
            href={props.googleMapsUrl}
            type="button"
            target="_blank"
            rel="noreferrer"
            className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            alt="Google Maps"
          >
            <SiGooglemaps />
          </a>

          <a
            href={props.telephone}
            type="button"
            target="_blank"
            rel="noreferrer"
            className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            alt="Call"
          >
            <BsFillTelephoneFill />
          </a>

          <a
            href={props.email}
            type="button"
            target="_blank"
            rel="noreferrer"
            className="mx-1 text-3xl sm:mx-2 hover:text-green-900"
            alt="Email"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>

      <div
        className="p-4 text-sm text-center text-green-50"
        ref={props.learnMoreButton}
      >
        <a
          className="hover:text-green-900"
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
