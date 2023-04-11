import { Disclosure } from "@headlessui/react";
import { navigation } from "./navigation";
import { classNames } from "./classNames";

// Mobile navigation
export function MobileNavigation(): JSX.Element {
  return (
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
  );
}
