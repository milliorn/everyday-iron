import Monolith from "../assets/monolith.jpg";

/** app about component */
export function About(): JSX.Element {
  return (
    <section id="about" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-7/12 mx-auto px-4" data-aos="fade-right">
            <img
              src={Monolith}
              alt="monolift"
              width="1440"
              height="1080"
              className="max-w-full rounded-lg shadow-lg opacity-60"
            />
          </div>
          <div
            className="w-full md:w-5/12 ml-auto mr-auto px-4"
            data-aos="fade-left"
          >
            <div className="md:pr-12">
              <h2 className="sm:text-3xl 2xl:text-4xl text-xl uppercase font-bold font-serif	text-red-600 mt-4 sm:mt-0 text-center md:text-left">
                Rhino Performance
              </h2>
              <p className="mt-4 text-lg leading-relaxed 2xl:text-3xl">
                65 years of combined Expertise in Powerlifting, Olympic
                Weightlifting, Strength Training, Bodybuilding and Weight
                Management.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-red-600">
                        <i className="fas fa-dumbbell fa-2x"></i>
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl capitalize 2xl:text-3xl">
                        WPC approved equipment.
                      </h3>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-red-600">
                        <i className="fas fa-hard-hat fa-2x"></i>
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl capitalize 2xl:text-3xl">
                        York, Texas, Ohio, Swiss Barbells.
                      </h3>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-red-600">
                        <i className="fas fa-users fa-2x"></i>
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl capitalize 2xl:text-3xl">
                        Dumbbell weights including Olympic handles.
                      </h3>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-red-600">
                        <i className="fas fa-users fa-2x"></i>
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl capitalize 2xl:text-3xl">
                        Isolation and Cable Machines for Bodybuilding
                      </h3>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-red-600">
                        <i className="fas fa-users fa-2x"></i>
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl capitalize 2xl:text-3xl">
                        Cardio Equipment
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
