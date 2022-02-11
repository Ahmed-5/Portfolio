import React from "react";

export default function Portfolio() {
  return (
    <div className="antialiased relative text-gray-600">
      <div className="absolute w-full min-h-screen">
        <div
          className="absolute z-0 top-0 w-full h-1/2 bg-cover bg-bottom pt-20 px-12"
          style={{
            backgroundImage: `url("https://raw.githubusercontent.com/Ahmed-5/fractals/main/images/sin_julia.png")`,
          }}
        ></div>
        <div className="absolute z-20 bottom-10 right-0 left-0 inline-flex space-x-20 justify-center font-bold uppercase tracking-wide text-gray-600">
          <a href="#services" className="text-cyan-600">
            Services
          </a>
          <a href="#works" className="text-cyan-600">
            Works
          </a>
          <a href="#contact" className="text-cyan-600">
            Constact
          </a>
        </div>
      </div>
      <div className="relative z-10 flex min-h-screen h-auto justify-center items-center">
        <div className="relative max-w-4xl">
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
          <div className="relative z-20 bg-white md:flex justify-between p-12 shadow-lg rounded-lg w-full max-w-4xl">
            <div className="sm:flex flex-col justify-between space-y-6 py-6 md:pr-10">
              <div>
                <h2 className="text-lg">Hello I Am</h2>
                <h1 className="pt-1 text-5xl text-bold text-gray-600">
                  Ahmed Alhassan
                </h1>
              </div>
              <p className="text-lg leading-relaxed">
                Amet elit exercitation deserunt incididunt consequat do duis
                fugiat qui commodo eu Lorem cillum aliquip. Est id occaecat
                occaecat duis esse eiusmod dolor consequat dolor ea et cillum ut
                quis. Non pariatur reprehenderit officia tempor tempor. Ullamco
                sit qui dolor cupidatat magna id. Incididunt ea laborum in nulla
                aliqua esse magna.
              </p>
            </div>
            <img
              src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/34217-MLS-Fabian-Ekker-003flin.jpg"
              className="w-80 rounded-full flex-shrink-0 border-6 border-white shadow-lg"
              alt="image"
            />
          </div>
        </div>
      </div>
      <section id="services" className="bg-gray-50 pt-20 pb-28 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl text-gray-800">Services</h1>
            <p className="pt-2 text-2xl">What I offer</p>
          </div>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="relative">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-lg"></div>
              <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                <img
                  className="rounded-t-md servicesImageHeight bg-blue-500"
                  alt="image"
                  src="https://www.rouge-media.com/wp-content/uploads/2019/05/web-app-illustration-1.png"
                />
                <div className="px-10 pb-6">
                  <h2 className="pt-3 font-bold text-2xl text-gray-800">
                    Responsive Websites
                  </h2>
                  <p className="pt-3">
                    Cillum consectetur laborum aliqua dolore laborum occaecat
                    elit ut.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-lg"></div>
              <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                <img
                  className="rounded-t-md servicesImageHeight bg-blue-500"
                  alt="image"
                  src="https://wichitawebdev.com/lmg-cms/wp-content/uploads/2018/06/pwa-reliable.png"
                />
                <div className="px-10 pb-6">
                  <h2 className="pt-3 font-bold text-2xl text-gray-800">
                    Web Apps
                  </h2>
                  <p className="pt-3">
                    Cillum consectetur laborum aliqua dolore laborum occaecat
                    elit ut.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-lg"></div>
              <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                <img
                  className="rounded-t-md servicesImageHeight bg-blue-500"
                  alt="image"
                  src="https://www.softxpert.com/wp-content/uploads/2018/03/Mobile-app-for-your-business.png"
                />
                <div className="px-10 pb-6">
                  <h2 className="pt-3 font-bold text-2xl text-gray-800">
                    Mobile Apps
                  </h2>
                  <p className="pt-3">
                    Cillum consectetur laborum aliqua dolore laborum occaecat
                    elit ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-8" id="works">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl text-gray-800 font-bold">Work</h1>
            <p className="pt-2 text-2xl">
              Eu est aute reprehenderit do nulla veniam excepteur laboris eu
              dolore ad.
            </p>
          </div>
          <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="bg-white rounded-md shadow-md lg:col-span-2">
              <img
                src="https://slickdeals.net/blog/wp-content/uploads/2020/03/20-hero-dell-remote-work-3.jpg"
                alt=""
                className="object-cover rounded-t-md w-full h-80"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800">Project 1</h3>
                <p className="pt-3">Occaecat minim enim aute dolore veniam.</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-md text-white font-bold text-sm"
                >
                  View More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Paperless_work_desk_with_an_iPad%2C_iMac_and_a_MacBook.jpg"
                alt=""
                className="object-cover rounded-t-md w-full h-80"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800">Project 2</h3>
                <p className="pt-3">Occaecat minim enim aute dolore veniam.</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-md text-white font-bold text-sm"
                >
                  View More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <img
                src="https://hbr.org/resources/images/article_assets/2014/10/Mar20_05_1187745190.jpg"
                alt=""
                className="object-cover rounded-t-md w-full h-80"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800">Project 3</h3>
                <p className="pt-3">Occaecat minim enim aute dolore veniam.</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-md text-white font-bold text-sm"
                >
                  View More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md lg:col-span-2">
              <img
                src="https://api.time.com/wp-content/uploads/2021/02/laptop-home-office.jpg"
                alt=""
                className="object-cover rounded-t-md w-full h-80"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800">Project 4</h3>
                <p className="pt-3">Occaecat minim enim aute dolore veniam.</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-md text-white font-bold text-sm"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-36 px-8 bg-gray-50" id="contact">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-800">Contact</h1>
              <p className="pt-2 text-xl">Get In Touch</p>
            </div>
            <div className="mt-16 relative max-w-4xl mx-auto">
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
            <div className="relative z-20 bg-white rounded-md shadow-md p-12">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <input type="text" placeholder="Name" className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800"></input>
                  <input type="email" placeholder="Email" className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800"></input>
                  <input type="text" placeholder="Subject" className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800 md:col-span-2"></input>
                  <textarea rows="5" placeholder="Message" className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800 md:col-span-2"></textarea>
                </div>
                <button className="inline-block w-full mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-lg text-white font-bold text-sm">Send Message</button>
              </form>
            </div>
            </div>
          </div>
      </section>
    </div>
  );
}
