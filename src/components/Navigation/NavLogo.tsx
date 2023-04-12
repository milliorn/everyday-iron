import { Img } from "react-image";
import navLogo from "../../assets/navLogo.jpg";

// navbar logo in mobile viewpoint
export function NavLogo(): JSX.Element {
  return (
    <div className="flex-shrink-0 flex items-center rounded-lg overflow-hidden sm:hidden">
      <a href="#home">
        <Img src={navLogo} alt="Logo" className="h-12 w-auto" />
      </a>
    </div>
  );
}
