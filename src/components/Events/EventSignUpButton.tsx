/** information about wpc */
export function EventSignUpButton(): JSX.Element {
  return (
    <div className="text-center">
      {/** https://stackoverflow.com/a/9721865/11986604 */}
      <a
        href="https://form.jotform.com/232411596142148"
        target="_blank"
        className="inline-block p-4 my-8 font-semibold text-red-600 capitalize bg-transparent border border-red-600 rounded cursor-pointer hover:bg-red-600 hover:text-white hover:border-transparent 2xl:text-2xl"
        rel="noreferrer"
      >
        Sign up now!
      </a>
    </div>
  );
}
