import Bob from "./assets/309664365_506748041277421_8884733249368847757_n.webp";
import Mark from "./assets/131258568_302848314385492_1215783431070905553_n.jpg";
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
                  <h1 className="text-red-600 font-semibold text-5xl ">
                    Everyday <span className="text-white">Iron</span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Welcome to The Official California American Powerlifting
                    Federation Gym. Sanctioned by World Powerlifting Congress,
                    it’s not just a gym, it’s an environment we created for
                    people from all walks of life.
                  </p>
                  <a
                    href="https://worldpowerliftingcongress.com/"
                    target="_blank"
                    className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white p-4 border border-red-600 hover:border-transparent rounded inline-block mt-5 cursor-pointer"
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
                    fitness center made for everyone
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
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
                          <h4 className="text-xl">
                            The latest & greatest gym equipment
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
                          <h4 className="text-xl">
                            5-inch, quality foam floor padding
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
                          <h4 className="text-xl">3 professional trainers</h4>
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
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold uppercase">
                  Meet Our Trainers
                </h2>
                <p className="text-lg leading-relaxed m-4">
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
                <div className="px-6">
                  <img
                    alt="..."
                    src={Mark}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "240px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Mark Lopez</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
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
                <div className="px-6">
                  <img
                    alt="..."
                    src={Bob}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "240px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Bob Packer</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
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
                <div className="px-6">
                  <img
                    alt="..."
                    src={Kim}
                    className="shadow-lg rounded max-w-full mx-auto md:max-h-[240px]"
                    style={{ maxWidth: "240px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Kim Packer</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Trainer | Competitive Powerlifter & Bodybuilder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/** <!-- Contact Header Section --> */}
        <section className="pb-20 relative block bg-black text-white">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: `translateZ(0px)` }}
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
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white uppercase">
                  Contact Us
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4">
                  Contact us to ask any questions, aquire a membership, talk to
                  our trainers or anything else
                </p>
              </div>
            </div>
          </div>
        </section>

        {/** <!-- Contact Form --> */}
        <section className="relative block py-24 lg:pt-0 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div
                  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                  data-aos="fade-up-right"
                >
                  <div className="flex-auto p-5 lg:p-10 bg-red-600 text-white">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Full Name"
                        style={{ transition: `all 0.15s ease 0s` }}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: `all 0.15s ease 0s` }}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows={4}
                        cols={80}
                        className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                      ></textarea>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: `all 0.15s ease 0s` }}
                      >
                        Send Message
                      </button>
                    </div>
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
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Follow us on social media
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-twitter text-red-600"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-facebook-square text-red-600"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-linkedin text-red-600"></i>
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © The Power Room
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
