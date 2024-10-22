const Experience = () => {
  return (
    <div className="mt-14 text-slate-900 bg-green-bg-two rounded-2xl">
      <div className="collapse collapse-arrow">
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
            <ul className="list-disc pl-4">
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
    </div>
  );
};

export default Experience;
