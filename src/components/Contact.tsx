import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-green-text-color mt-6 bg-green-bg-two rounded-2xl">
      <div className="collapse collapse-arrow">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-xl font-semibold text-green-text-color">
          Contact
        </div>
        <div className="collapse-content">
          <div className="flex gap-3 items-center justify-center mt-2">
            <div className="flex flex-col items-center justify-center p-2 bg-green-bg rounded-2xl">
              <MdOutlineEmail size={30} />
            </div>
            <div className="flex flex-col items-center justify-center p-2 bg-green-bg rounded-2xl">
              <FaLinkedin size={30} />
            </div>
            <div className="flex flex-col items-center justify-center p-2 bg-green-bg rounded-2xl">
              <FaGithub size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
