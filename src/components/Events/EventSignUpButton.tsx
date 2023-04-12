/** information about wpc */
export function EventSignUpButton(): JSX.Element {
  return (
    <div className="text-center">
      {/** https://stackoverflow.com/a/9721865/11986604 */}
      <a
        href="https://form.jotform.com/230717412394151"
        target="_blank"
        className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white p-4 border border-red-600 hover:border-transparent rounded inline-block my-8 cursor-pointer 2xl:text-2xl capitalize"
        rel="noreferrer"
      >
        Sign up now!
      </a>
    </div>
  );
}
