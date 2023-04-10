/** information about wpc */
export function AboutWpc(): JSX.Element {
  return (
    <div className="text-center">
      {/** https://stackoverflow.com/a/9721865/11986604 */}
      <a
        href="https://worldpowerliftingcongress.com/"
        target="_blank"
        className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white p-4 border border-red-600 hover:border-transparent rounded inline-block mt-8 cursor-pointer 2xl:text-2xl"
        rel="noreferrer"
      >
        Go to WPC Website
      </a>
    </div>
  );
}
