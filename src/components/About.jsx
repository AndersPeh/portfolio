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
          Good day, I&apos;m <span className="text-[#9aedb6]">Jy Fung Peh</span>
        </h2>
        <h3 className={` text-white font-extrabold text-[20px]`}>
          You can call me Anders.
        </h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-justify text-[17px] leading-[30px]"
      >
        A motivated software development student actively developing full-stack
        skills in{" "}
        <span className="text-[#9aedb6] font-bold">React (TypeScipt)</span> and{" "}
        <span className="text-[#9aedb6] font-bold">.NET (C#)</span> through my
        personal project in my free time. I am eager to learn from experienced
        developers while contributing to a team, so I am seeking a software
        development internship to start from July or earlier. Open to
        relocation.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10 text-[28px] text-[#9aedb6] font-extrabold text-center"
      >
        I'm looking for opportunity in
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
