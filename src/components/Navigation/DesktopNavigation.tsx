import { DesktopNavigationLinks } from "./DesktopNavigationLinks";
import { HiddenMobileMenuButton } from "./HiddenMobileMenuButton";
import { NavLogo } from "./NavLogo";

// Define a component that accepts an object with an "open" boolean property as its props
export function DesktopNavigation(props: { open: boolean }): JSX.Element {
  const { open } = props;

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <NavLogo />
        <HiddenMobileMenuButton open={open} />
        <DesktopNavigationLinks />
      </div>
    </div>
  );
}
