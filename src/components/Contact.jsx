import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedin as linkedinIcon, github as githubIcon } from "../assets";

const Contact = () => {
  const email = "pehjyfung@gmail.com";
  const phone = "0488 711 030";
  const linkedInUrl = "https://www.linkedin.com/in/anders-peh";
  const githubUrl = "https://github.com/AndersPeh";

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden items-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl w-full md:w-3/4 lg:w-1/2"
      >
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <div className="mt-12 flex flex-col gap-8">
          <div>
            <h4 className="text-white font-medium mb-2">Email</h4>
            <a
              href={`mailto:${email}`}
              className=" hover:text-[#9aedb6] break-all"
            >
              {email}
            </a>
          </div>

          <div>
            <h4 className="text-white font-medium mb-2">Phone</h4>
            <a href={`tel:${phone}`} className=" hover:text-[#9aedb6]">
              {phone}
            </a>
          </div>

          <div>
            <h4 className="text-white font-medium mb-2">LinkedIn</h4>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-[#9aedb6] flex items-center"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-6 h-6 object-contain mr-2"
              />
              Visit LinkedIn Profile
            </a>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">GitHub</h4>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-[#9aedb6] flex items-center"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-6 h-6 object-contain mr-2"
              />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
