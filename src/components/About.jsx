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
          Good day, I&apos;m{" "}
          <span className="text-[#9aedb6]">Jy Fung (Anders) Peh</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-justify text-[17px] leading-[30px]"
      >
        I enjoy self-learning{" "}
        <span className="text-[#9aedb6] font-bold">React (TypeScipt)</span> and{" "}
        <span className="text-[#9aedb6] font-bold">.NET (C#)</span> in my own
        time. I am currently applying my learning to build a full-stack personal
        project. I am excited for an opportunity where I can contribute to
        company projects, take on responsibility and grow alongside experienced
        developers.
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
