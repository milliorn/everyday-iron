import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Hidden mobile menu button
export function HiddenMobileMenuButton(props: { open: boolean }): JSX.Element {
  const { open } = props;

  return (
    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
      {/* Display either an X icon or a menu icon depending on the value of "open" */}
      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-100 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );
}
