/** holds text found in trainer cards */
export function TrainerCardInnerText(props: {
  trainer: string;
  info: string;
}): JSX.Element {
  const { trainer, info } = props;
  return (
    <div className="pt-6 text-center">
      <h3 className="text-xl font-bold text-red-600 2xl:text-3xl font-serif">
        {trainer}
      </h3>
      <p className="mt-1 text-sm text-gray-200 uppercase font-semibold  2xl:text-base font-serif">
        {info}
      </p>
    </div>
  );
}
