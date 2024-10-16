import { motion } from "framer-motion";

const Project = ({ title, description, demoLink, githubLink }) => {
  return (
    <div>
      <h1 className="text-xl text-teal-500">{title}</h1>
      <p>{description}</p>
      <div className="flex gap-3 mt-2">
        <motion.a
          className="p-2 bg-teal-500 rounded text-white"
          href={demoLink}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          View Live
        </motion.a>
        <motion.a
          className="p-2 bg-teal-500 rounded text-white"
          href={githubLink}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          GitHub
        </motion.a>
      </div>
    </div>
  );
};

export default Project;
