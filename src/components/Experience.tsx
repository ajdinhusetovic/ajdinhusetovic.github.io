import React from "react";
import Accordion from "./Accordion";

const Experience = () => {
  return (
    <div className="mt-14 text-black">
      <Accordion title="Experience">
        <div className="space-y-6">
          <div>
            <h1 className="font-semibold text-md">
              Evvent{" "}
              <span className="text-sm font-normal text-slate-800">
                (Apr 2024 - Oct 2024)
              </span>
            </h1>
            <h2 className="italic text-slate-800 pb-1 text-md">
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
          <div>
            <h1 className="font-semibold text-md">
              Blue Schindler Studio{" "}
              <span className="text-sm font-normal text-slate-800">
                (Apr 2024 - Oct 2024)
              </span>
            </h1>
            <h2 className="italic text-slate-800 pb-1 text-md">
              Front End Developer
            </h2>
            <ul className="list-disc pl-4">
              <li>
                Transformed the online presence of a premier New York-based
                photography studio by developing a high-impact, visually
                stunning portfolio website that significantly boosted client
                engagement and satisfaction.
              </li>
              <li>
                Led the full lifecycle of development, from concept to
                deployment, ensuring pixel-perfect design and a flawless user
                experience, resulting in a 35% increase in site traffic within
                the first month.
              </li>
            </ul>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Experience;
