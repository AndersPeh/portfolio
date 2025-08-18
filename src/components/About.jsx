// import { Tilt } from "react-tilt"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[280px] w-full"
      options={{ max: 35, scale: 1.02, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.8)}
        whileHover={{ scale: 1.03 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-8 px-12 min-h-[320px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
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
          Hi, I&apos;m <span className="text-[#9aedb6]">Anders Peh</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-justify text-[17px] leading-[30px]"
      >
        I am a Master of IT student with demonstrated skills in software
        development. My professional background has given me strong
        problem-solving and stakeholder communication skills. I am looking to
        apply my technical abilities and contribute to company projects while
        working in a collaborative team. I am passionate about tech‑driven
        buildings and how automation and efficiency improve daily life, which
        motivates me to keep improving my software development skills and to
        lead technology projects that make a practical difference.
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
