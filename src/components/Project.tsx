import { motion } from "framer-motion";

const Project = ({
  title,
  description,
  demoLink,
  githubLink,
}: {
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
}) => {
  return (
    <div className="bg-green-bg p-5 rounded-2xl">
      <h1 className="text-xl text-green-text-color font-bold">{title}</h1>
      <p className="text-md">{description}</p>
      <div className="flex gap-3 mt-2">
        <motion.a
          className="p-2 bg-green-bg-two text-green-text-color font-semibold rounded"
          href={demoLink}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          View Live
        </motion.a>
        <motion.a
          className="p-2 bg-green-bg-two text-green-text-color font-semibold rounded"
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
