import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, CircleX } from "lucide-react";

const Navbar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <div className="w-full text-black">
      <div className="hidden lg:flex flex-row gap-8 items-center justify-center mt-4 text-2xl font-semibold text-red-500">
        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1 }}
          href="#"
          className="hover:text-purple-500"
        >
          About Me
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1 }}
          href="#"
          className="hover:text-purple-500"
        >
          Experience
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1 }}
          href="#"
          className="hover:text-purple-500"
        >
          Projects
        </motion.a>
      </div>
      <div className="w-full flex justify-end">
        <Menu
          className={`mt-4 ${
            isNavigationOpen ? "hidden" : "block"
          } cursor-pointer text-purple-500 lg:hidden`}
          onClick={handleNavigation}
          size={35}
        />
      </div>
      <div
        className={`bg-white z-10 fixed top-0 bottom-0 right-0 left-0 ${
          isNavigationOpen ? "flex" : "hidden"
        }`}
      >
        <div className="w-full flex flex-col justify-center items-center gap-5 text-2xl">
          <CircleX
            className="absolute top-4 right-4 text-purple-500 cursor-pointer"
            onClick={handleNavigation}
            size={35}
          />
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="#aboutme"
            className="text-red-500 font-semibold"
          >
            About Me
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="#aboutme"
            className="text-red-500 font-semibold"
          >
            Experience
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="#aboutme"
            className="text-red-500 font-semibold"
          >
            Projects
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
