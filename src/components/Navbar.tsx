import { motion } from "framer-motion";

const Navbar = () => {
  // const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  // const handleNavigation = () => {
  //   setIsNavigationOpen(!isNavigationOpen);
  // };

  return (
    <div className="w-full text-black hidden lg:block">
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
    </div>
  );
};

export default Navbar;
