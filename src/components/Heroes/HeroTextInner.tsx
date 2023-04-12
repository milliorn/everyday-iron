/** holds text and button for hero image */
export function HeroTextInner(): JSX.Element {
  return (
    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
      <h1 className="text-red-600 font-semibold text-4xl sm:text-7xl font-serif">
        <span>Everyday</span> <span className="text-white">Iron</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300 xl:text-xl 2xl:text-3xl">
        Welcome to Everyday Iron, the Official Training Site for California
        American Powerlifting Federation, powered by the World Powerlifting
        Congress. We are not just a gym, we are a training facility optimized to
        adhere all walks of life, all training needs and styles. Owned and
        Operated by U.S. ARMY Veteran and Competitive Powerlifter Mark
        &quot;Rhino&quot; Lopez. If you&apos;re ready to take the Rhino
        challenge scroll down to learn more.
      </p>
      <a
        href="https://guru.gyminsight.com/join/douN8BHlzer9cdt"
        target="_blank"
        className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:bold hover:text-white p-4 border border-red-600 hover:border-transparent rounded inline-block mt-5 cursor-pointer 2xl:text-2xl"
        rel="noreferrer"
      >
        Let&apos;s Get Started!
      </a>
    </div>
  );
}
