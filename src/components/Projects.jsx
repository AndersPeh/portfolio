import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
// import { fadeIn, textVariant } from '../utils/motion'
import { projects } from "../constants";
// import { useEffect, useState } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div
    // variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      {/* <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=""
      > */}
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div onClick={() => window.open(website_link, "_blank")}>
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-[#9aedb6] text-center font-bold text-[24px]">
              {name}
            </h3>
            <p className="mt-2 text-[14px] text-justify">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[15px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div
      // variants={textVariant()}
      >
        <p className={styles.sectionHeadText}>Projects</p>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // variants={fadeIn('', '', 0.1, 1)}
          className="text-[18px] leading-[30px] text-justify"
        >
          Click on any card to visit the project's GitHub.
          <p className="mt-4">
            {" "}
            After building an Ecommerce mobile app using the React Native
            framework and JavaScript, I became interested in TypeScript due to
            its error detection capabilities during the development stage and
            became curious about the multi-threaded language C#. After speaking
            to some industry professionals at networking events, I noticed that
            many organisations adopt React and .NET in their applications. This
            insight motivated me to self-learn them and apply them to my
            personal project. It demonstrates my commitment to learning new
            skills and staying informed about industry trends through active
            learning and professional networking.
          </p>
        </motion.p>
      </div>

      <div className="flex flex-wrap mt-10 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
