// import { Tilt } from "react-tilt"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-[20px] font-bold text-center text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-5">
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Good day, I&apos;m <span className="text-[#9aedb6]">Anders Peh</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-justify text-[17px] leading-[30px]"
      >
        I'm a Master of IT student with a passion for building clean and
        user-focused applications using my full-stack development skills. My
        background in real estate has equipped me with strong stakeholder
        communication skills, which allows me to bridge the gap between
        technical implementation and business needs. I am driven by the process
        of identifying a problem, developing a solution, and building it from
        the ground up.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10 text-[28px] text-[#9aedb6] font-extrabold text-center"
      >
        I'm looking for an opportunity in
      </motion.p>

      <div className="mt-5 flex flex-wrap gap-10 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
