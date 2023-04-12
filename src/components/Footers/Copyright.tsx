/** print copyright in footer */

export function Copyright(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="2xl:text-xl text-gray-900 font-semibold py-1">
          © {new Date().getFullYear()} Everyday Iron, LLC
        </div>
      </div>
    </div>
  );
}
