import { Disclosure } from "@headlessui/react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

// Utility function to combine class names
export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

// global
export default function Navbar(): JSX.Element {
  return (
    <Disclosure as="nav" className="bg-neutral-900 fixed top-0 w-full z-10">
      {({ open }) => (
        <>
          <DesktopNavigation open={open} />
          <MobileNavigation />
        </>
      )}
    </Disclosure>
  );
}
