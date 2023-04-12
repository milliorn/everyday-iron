import uuid from "react-uuid";
import { footerData } from "./footerData";

/** generate footer buttons */
export function FooterAnchorContainer(): JSX.Element {
  return (
    <div className="mt-6 justify-center flex">
      {footerData.map((item) => (
        <a
          aria-label={item.label}
          className={item.class}
          href={item.href}
          key={uuid()}
          rel="noreferrer"
          target="_blank"
          type="button"
        >
          {item.app}
        </a>
      ))}
    </div>
  );
}
