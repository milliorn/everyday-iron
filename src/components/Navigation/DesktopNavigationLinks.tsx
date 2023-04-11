import { classNames } from "./classNames";
import { navigation } from "./navigation";

// generate links in navbar
export function DesktopNavigationLinks(): JSX.Element {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch">
      <div className="hidden sm:ml-6 sm:block ml-auto">
        <div className="flex space-x-4">
          {/* Map through the "navigation" array and create links */}
          {navigation.map((item) => (
            <a
              target={item.target}
              key={item.name}
              href={item.href}
              className={classNames(
                // Set background color and text color based on the "current" property
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
  );
}
