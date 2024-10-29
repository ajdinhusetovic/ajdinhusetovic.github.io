// import taskManagementImage from "../assets/taskmanagment.png";

const Experience = () => {
  return (
    <div className="mt-14 lg:mt-20 text-slate-900 bg-green-bg-two lg:bg-green-bg rounded-2xl lg:w-10/12">
      <div className="collapse collapse-arrow bg-green-bg-two">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-green-text-color">
          Experience
        </div>
        <div className="collapse-content">
          <div className="mt-2">
            <h1 className="font-bold text-md text-green-text-color p-2 bg-green-bg w-fit rounded-2xl">
              Evvent{" "}
              <span className="text-sm font-normal text-green-text-color">
                (Apr 2024 - Oct 2024)
              </span>
            </h1>
            <h2 className="font-semibold italic text-green-text-color my-2 text-md p-2 bg-green-bg w-fit rounded-2xl">
              Full Stack Developer Intern
            </h2>
            <ul className="list-disc pl-12">
              <li>
                Engineered a comprehensive and scalable review system that
                streamlined user feedback processes.
              </li>
              <li>
                Developed and integrated a real-time chat application within the
                product, enhancing user interaction and communication, and
                driving up platform engagement.
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h1 className="font-bold text-md text-green-text-color p-2 bg-green-bg w-fit rounded-2xl">
              Blue Schindler Studios{" "}
              <span className="text-sm font-normal text-green-text-color block">
                (Apr 2024 - Oct 2024)
              </span>
            </h1>
            <h2 className="font-semibold italic text-green-text-color my-2 p-2 bg-green-bg w-fit rounded-2xl text-md">
              Front End Developer
            </h2>
            <ul className="list-disc pl-12">
              <li>
                Transformed the online presence of a premier New York-based
                photography studio by developing a high- impact, visually
                stunning portfolio website that significantly boosted client
                engagement and satisfaction.
              </li>
              <li>
                Led the full lifecycle of development, from concept to
                deployment, ensuring pixel-perfect design and a flaw- less user
                experience, resulting in a 35% increase in site traffic within
                the first month.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Desktop version */}
      {/* <div className="hidden lg:block w-11/12 m-auto p-6 pb-12 bg-green-bg-two rounded-2xl">
        <h1 className="text-2xl text-green-text-color font-bold">Experience</h1>
        <div className="flex gap-4">
          <div className="w-1/2 mt-4 bg-green-bg rounded-2xl p-4 ml-8">
            <h1 className="font-bold text-md text-green-text-color">
              Evvent{" "}
              <span className="text-sm font-normal text-green-text-color">
                (Apr 2024 - Oct 2024)
              </span>
            </h1>
            <h2 className="font-semibold italic text-green-text-color my-2 text-md ">
              Full Stack Developer Intern
            </h2>
            <ul className="list-disc pl-4">
              <li>
                Engineered a comprehensive and scalable review system that
                streamlined user feedback processes.
              </li>
              <li>
                Developed and integrated a real-time chat application within the
                product, enhancing user interaction and communication, and
                driving up platform engagement.
              </li>
            </ul>
            <div className="flex gap-2 mt-4 flex-wrap">
              <p className="bg-green-bg-two p-1 rounded-2xl">TypeScript</p>
              <p className="bg-green-bg-two p-1 rounded-2xl">Next.js</p>
              <p className="bg-green-bg-two p-1 rounded-2xl">TailwindCSS</p>
              <p className="bg-green-bg-two p-1 rounded-2xl">tRPC</p>
              <p className="bg-green-bg-two p-1 rounded-2xl">PostgreSQL</p>
            </div>
          </div>
          <div className="w-1/2 mt-4 bg-green-bg rounded-2xl p-4 mr-8">
            <h1 className="font-bold text-md text-green-text-color">
              Evvent{" "}
              <span className="text-sm font-normal text-green-text-color">
                (Apr 2024 - Oct 2024)
              </span>
            </h1>
            <h2 className="font-semibold italic text-green-text-color my-2 text-md ">
              Full Stack Developer Intern
            </h2>
            <ul className="list-disc pl-4">
              <li>
                Engineered a comprehensive and scalable review system that
                streamlined user feedback processes.
              </li>
              <li>
                Developed and integrated a real-time chat application within the
                product, enhancing user interaction and communication, and
                driving up platform engagement.
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <p className="bg-green-bg-two p-1 rounded-2xl">TypeScript</p>
              <p className="bg-green-bg-two p-1 rounded-2xl">React.js</p>
              <p className="bg-green-bg-two p-1 rounded-2xl">SCSS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-11/12 m-auto p-6 pb-12 bg-green-bg-two rounded-2xl mt-8">
        <h1 className="text-2xl text-green-text-color font-bold">Projects</h1>

        <div className="flex gap-4">
          <div className="w-1/2 mt-4 rounded-2xl">
            <div>
              <div className="relative">
                <img src={taskManagementImage} className="rounded-2xl" />
                <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                <div className="absolute inset-y-0 left-0 w-1/2 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg">
                    GitHub
                  </button>
                </div>
                <h1 className="absolute inset-0 flex items-center justify-center text-green-text-color font-bold text-4xl">
                  Task Management
                </h1>
              </div>
            </div>
          </div>
          <div className="w-1/2 mt-4 bg-green-bg rounded-2xl">
            <div>
              <div className="relative">
                <img src={taskManagementImage} className="rounded-2xl" />
                <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                <h1 className="absolute inset-0 flex items-center justify-center text-green-text-color font-bold text-4xl">
                  Recipi
                </h1>
              </div>
            </div>
          </div>
        </div> 
      </div>*/}
    </div>
  );
};

export default Experience;
