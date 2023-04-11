import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home", current: true, target: "" },
  { name: "About", href: "#about", current: false, target: "" },
  { name: "Trainers", href: "#trainer", current: false, target: "" },
  { name: "Contact", href: "#contact", current: false, target: "" },
  { name: "Waiver", href: "/waiver", current: false, target: "_blank" },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(): JSX.Element {
  return (
    <Disclosure as="nav" className="bg-neutral-900 fixed top-0 w-full z-10">
      {({ open }) => (
        <>
          {/* Desktop navigation */}
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-100 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="hidden sm:ml-6 sm:block ml-auto">
                  <div className="flex space-x-4">
                    {/* Map through navigation array and create links */}
                    {navigation.map((item) => (
                      <a
                        target={item.target}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          // Set background color and text color based on "current" property (disabled)
                          item.current
                            ? "bg-neutral-900 text-white"
                            : "text-gray-300 hover:bg-neutral-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        rel="noreferrer"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  target={item.target}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-neutral-900 text-white"
                      : "text-gray-300 hover:bg-neutral-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
