import { motion } from "framer-motion";

const ResumeButton = () => {
  return (
    <motion.div
      className="bg-green-bg-three rounded-2xl mt-6 h-[60px] flex items-center justify-center xl:w-[200px] w-full cursor-pointer"
      whileTap={{ scale: 0.9 }}
    >
      <a
        href="/AjdinHusetovic.pdf"
        download="AjdinHusetovic.pdf"
        className="text-green-bg text-xl font-semibold w-full h-full flex items-center justify-center"
      >
        Resume
      </a>
    </motion.div>
  );
};

export default ResumeButton;
