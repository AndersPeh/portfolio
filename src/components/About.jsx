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
        My passion for software development motivates me to self-learn{" "}
        <span className="text-[#9aedb6] font-bold">React (TypeScipt)</span> and{" "}
        <span className="text-[#9aedb6] font-bold">.NET (C#)</span> and build my
        personal project in my free time. I am eager to contribute to company
        projects while working alongside experienced developers.
        <p className="mt-4">
          {" "}
          I have worked with several organisations in the Gold Coast to build
          websites for them from scratch. This experience has enabled me to
          quickly understand the diverse requirements of organisations across
          different industries. I enjoy working collaboratively within a team
          and designing websites tailored to organisations’ specific needs.
          These projects have honed my ability to communicate effectively with
          diverse stakeholders including those without a technical background
          and have further developed my teamwork and communication skills.
        </p>
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
