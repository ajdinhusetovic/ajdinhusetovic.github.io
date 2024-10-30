import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Contact = () => {
  return (
    <motion.div
      className="text-green-text-color mt-8 bg-green-bg-two rounded-2xl lg:w-10/12 w-full"
      whileHover={{ scale: 1.1 }}
    >
      <div className="collapse collapse-arrow">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-xl font-semibold text-green-text-color">
          Contact
        </div>
        <div className="collapse-content">
          <div className="flex gap-3 items-center justify-center mt-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <motion.a
                    href="mailto:ahusetovic1@gmail.com"
                    target="_blank"
                    className="flex flex-col items-center justify-center p-2 bg-green-bg rounded-2xl"
                    whileHover={{ scale: 0.9 }}
                  >
                    <MdOutlineEmail size={30} />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <motion.a
                    href="https://www.linkedin.com/in/ajdinhusetovic/"
                    target="_blank"
                    className="flex flex-col items-center justify-center p-2 bg-green-bg rounded-2xl"
                    whileHover={{ scale: 0.9 }}
                  >
                    <FaLinkedin size={30} />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <motion.a
                    href="https://github.com/ajdinhusetovic"
                    target="_blank"
                    className="flex flex-col items-center justify-center p-2 bg-green-bg rounded-2xl"
                    whileHover={{ scale: 0.9 }}
                  >
                    <FaGithub size={30} />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
