import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { SiCashapp, SiGooglemaps } from "react-icons/si";

import Mark from "./assets/131258568_302848314385492_1215783431070905553_n.jpg";
import Bob from "./assets/309664365_506748041277421_8884733249368847757_n.webp";
import Kim from "./assets/775165_107401996137699_1929697052_o.jpg";

export default function App(): JSX.Element {
  return (
    <>
      {/** <!-- Main Area --> */}
      <main>
        {/** <!-- Hero --> */}
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{ minHeight: "95vh" }}
        >
          <div
            className="absolute top-0 w-full h-full bg-top bg-cover"
            style={{
              backgroundImage:
                "url('https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-6/301132168_1336908660049421_5821234938742637666_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=32yLPE-k3q8AX_NBXas&_nc_ht=scontent.fsac1-2.fna&oh=00_AfBw1pYTkEWr7NV8nF8Qh3ttluyL-z7c-E_2En-2eu7fwg&oe=6374FC6D')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-80 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto" data-aos="fade-in">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-red-600 font-semibold text-4xl sm:text-7xl">
                    Everyday <span className="text-white">Iron</span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-300 xl:text-xl 2xl:text-3xl">
                    Welcome to The Official California American Powerlifting
                    Federation Gym. Sanctioned by World Powerlifting Congress,
                    it’s not just a gym but an environment for people of all
                    walks of life. Owned and Operated by U.S. ARMY Veteran.
                    Ready to start your fitness journey? Scroll down to learn
                    more!
                  </p>
                  <a
                    href="https://worldpowerliftingcongress.com/"
                    target="_blank"
                    className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white p-4 border border-red-600 hover:border-transparent rounded inline-block mt-5 cursor-pointer 2xl:text-2xl"
                    rel="noreferrer"
                  >
                    Go to WPC Website
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: `translateZ(0px)` }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        {/** <!-- About Section --> */}
        <section id="about" className="relative py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div
                className="w-full md:w-6/12 ml-auto mr-auto px-4"
                data-aos="fade-right"
              >
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg opacity-60"
                  src="https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/280504714_1270228856717402_4541068673034417592_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=rrXxa-rSop8AX85Bbyk&tn=prYenuatE62SFggE&_nc_ht=scontent.fsac1-1.fna&oh=00_AfC0fXC89jQzyxyAl87kOTMLVFG3nmTC4bGoF4wW5lc2Wg&oe=6373852B"
                />
              </div>
              <div
                className="w-full md:w-5/12 ml-auto mr-auto px-4"
                data-aos="fade-left"
              >
                <div className="md:pr-12">
                  <small className="text-red-600">About our gym</small>
                  <h3 className="text-4xl uppercase font-bold">
                    Rhino Performance
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed">
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
                          <h4 className="text-xl capitalize">
                            WPC approved equipment.
                          </h4>
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
                          <h4 className="text-xl capitalize">
                            York, Texas, Ohio, Swiss Barbells.
                          </h4>
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
                          <h4 className="text-xl capitalize">
                            Full shelves of Dumbbell weights including Olympic
                            handles.
                          </h4>
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
                          <h4 className="text-xl capitalize">
                            Isolation and Cable Machines for Bodybuilding
                          </h4>
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
                          <h4 className="text-xl capitalize">
                            Cardio Equipment
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/** <!-- Trainers Section --> */}
        <section className="pt-20 pb-48 bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold uppercase text-red-600">
                  Meet Our Trainers
                </h2>
                <p className="text-xl leading-relaxed m-4 text-white">
                  Our trainers are are here to dedicate the time and effort that
                  you need to get in the best shape of your life
                </p>
              </div>
            </div>
            {/** <!-- Trainer Card Wrapper --> */}
            <div className="flex flex-wrap">
              {/** <!-- Card 1 --> */}
              <div
                className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
                data-aos="flip-right"
              >
                <div className="px-6 md:relative">
                  <img
                    alt="..."
                    src={Mark}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "240px" }}
                  />
                  <div className="pt-6 text-center md:absolute">
                    <h5 className="text-xl font-bold text-red-600">
                      Mark Lopez
                    </h5>
                    <p className="mt-1 text-sm text-gray-200 uppercase font-semibold">
                      Owner | Trainer | APF Director
                    </p>
                  </div>
                </div>
              </div>
              {/** <!-- Card 2 --> */}
              <div
                className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
                data-aos="flip-right"
              >
                <div className="px-6 md:relative">
                  <img
                    alt="..."
                    src={Bob}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "240px" }}
                  />
                  <div className="pt-6 text-center md:absolute">
                    <h5 className="text-xl font-bold text-red-600">
                      Bob Packer
                    </h5>
                    <p className="mt-1 text-sm text-gray-200 uppercase font-semibold">
                      Sales | Trainer | Powerlifting Hall of Fame
                    </p>
                  </div>
                </div>
              </div>
              {/** <!-- Card 3 --> */}
              <div
                className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
                data-aos="flip-right"
              >
                <div className="px-6 md:relative">
                  <img
                    alt="..."
                    src={Kim}
                    className="shadow-lg rounded max-w-full mx-auto md:max-h-[240px]"
                    style={{ maxWidth: "240px" }}
                  />
                  <div className="pt-6 text-center md:absolute">
                    <h5 className="text-xl font-bold text-red-600">
                      Kim Packer
                    </h5>
                    <p className="mt-1 text-sm text-gray-200 uppercase font-semibold">
                      Trainer | Competitive Powerlifter & Bodybuilder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/** <!-- Footer --> */}
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: `80px`, transform: `translateZ(0px)` }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap  items-center justify-center align-center">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold capitalize text-center">
                Follow us on social media!
              </h4>
              <h5 className="text-lg my-2 text-gray-700 text-center">
                Contact us on those platforms. Also by phone or email.
              </h5>
              <div className="mt-6 justify-center flex">
                <a
                  className="bg-green-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                  href="https://cash.app/$RhinoLopez"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiCashapp />
                </a>
                <a
                  className="bg-blue-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                  href="https://cash.app/$RhinoLopez"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </a>
                <a
                  className="bg-fuchsia-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                  href="https://cash.app/$RhinoLopez"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
                <a
                  className="bg-red-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                  href="https://cash.app/$RhinoLopez"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGooglemaps />
                </a>
                <a
                  className="bg-orange-400 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                  href="https://cash.app/$RhinoLopez"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillTelephoneFill />
                </a>
                <a
                  className="bg-red-600 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                  href="https://cash.app/$RhinoLopez"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-900 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Everyday Iron Workout
                Warehouse Gym
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
