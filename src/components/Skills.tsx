import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { SiTrpc } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiLua } from "react-icons/si";
import { TbSql } from "react-icons/tb";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      className="mt-8 text-green-text-color bg-green-bg-two rounded-2xl font-semibold lg:w-10/12 w-full"
      whileHover={{ scale: 1.1 }}
    >
      <div className="collapse collapse-arrow">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-green-text-color">
          Skills
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-3 gap-2 mt-2">
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">React.js</h1>
              <GrReactjs size={40} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">TailwindCSS</h1>
              <RiTailwindCssFill size={40} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">Next.js</h1>
              <RiNextjsLine size={40} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">PostgreSQL</h1>
              <DiPostgresql size={40} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">Typescript</h1>
              <BiLogoTypescript size={40} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">tRPC</h1>
              <SiTrpc size={40} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">NestJS</h1>
              <SiNestjs size={40} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">Express.js</h1>
              <SiExpress size={40} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">Node.js</h1>
              <FaNodeJs size={40} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">Python</h1>
              <FaPython size={40} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">Lua</h1>
              <SiLua size={40} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-green-bg rounded-2xl"
              whileHover={{ scale: 0.9 }}
            >
              <h1 className="text-md">SQL</h1>
              <TbSql size={40} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
