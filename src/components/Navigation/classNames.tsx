// utility class to combine classes
export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
