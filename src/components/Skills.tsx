import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTrpc } from "react-icons/si";

const Skills = () => {
  return (
    <div className="mt-6 text-black">
      <div className="collapse collapse-arrow border border-black">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Skills</div>
        <div className="collapse-content">
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center p-2 hover:bg-blue-500 rounded hover:text-white">
              <h1 className="text-md">React.js</h1>
              <GrReactjs size={40} />
            </div>
            <div className="flex flex-col items-center p-2 hover:bg-blue-500 rounded hover:text-white">
              <h1 className="text-md">TailwindCSS</h1>
              <RiTailwindCssFill size={40} />
            </div>
            <div className="flex flex-col items-center p-2 hover:bg-blue-500 rounded hover:text-white">
              <h1 className="text-md">Next.js</h1>
              <RiNextjsLine size={40} />
            </div>
            <div className="flex flex-col items-center p-2 hover:bg-blue-500 rounded hover:text-white">
              <h1 className="text-md">PostgreSQL</h1>
              <DiPostgresql size={40} />
            </div>
            <div className="flex flex-col items-center p-2 hover:bg-blue-500 rounded hover:text-white">
              <h1 className="text-md">Typescript</h1>
              <BiLogoTypescript size={40} />
            </div>
            <div className="flex flex-col items-center p-2 hover:bg-blue-500 rounded hover:text-white">
              <h1 className="text-md">tRPC</h1>
              <SiTrpc size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
