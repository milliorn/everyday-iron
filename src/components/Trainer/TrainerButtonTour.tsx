// button that redirects to making tour appointment
export function TrainerButtonTour(): JSX.Element {
  return (
    <div className="w-full lg:w-6/12 px-4 pt-8 sm:pt-8 mx-auto text-center">
      <a
        href="https://widgets.gyminsight.com/appointment-widget/index.html?l=86b49615-1f03-466d-b889-eb72b67b220b&t=America%2FLos_Angeles&widgetId=6m4SQd3VbKDxGqh"
        target="_blank"
        className="bg-transparent hover:bg-red-600 text-white font-semibold hover:bold hover:text-white p-4 border border-red-600 hover:border-transparent rounded inline-block mt-5 cursor-pointer 2xl:text-2xl"
        rel="noreferrer"
      >
        Take a Tour of the Gym!
      </a>
    </div>
  );
}
