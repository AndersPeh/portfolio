// import { BallCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mb-5`}>Technical Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 mb-8 group" key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
            <img
              className="w-full h-full transition-transform duration-200 ease-in-out group-hover:scale-125"
              src={technology.icon}
              alt={technology.name}
            />

            <div className="flex justify-center item-center text-center text-[16px] font-semibold mt-2">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
