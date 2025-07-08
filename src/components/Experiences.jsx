import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience, onImageClick }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#151030", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    dateClassName="!text-[#9aedb6] font-normal"
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain rounded-full"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-[#9aedb6] text-[22px] font-bold">
        {experience.title}
      </h3>
      <p className=" text-[16px] font-semibold">{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => {
        const isUrl = point.startsWith("https://") && !point.includes(" ");
        return (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {/* When target is _blank, open the linkin new tab. noopener means newly opened page cant access or manipulate the original page 
            noreferrer means the orignal page source is not disclosed to the newly opened page. 
            hover:underline means URL will show underline when mouse hovers, break-all is for breaking the URL to display responsively. */}
            {isUrl ? (
              <a
                href={point}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9aedb6] hover:underline break-all"
              >
                {point}
              </a>
            ) : (
              point
            )}
          </li>
        );
      })}
    </ul>

    {experience.recommendationImage && (
      <>
        <p className=" text-[16px] font-extrabold text-[#9aedb6]">
          Recognition: Click to Zoom In
        </p>
        <div className="mt-2">
          <img
            src={experience.recommendationImage}
            alt={`${experience.company_name} recommendation`}
            className="w-full h-auto object-contain rounded-lg border border-[#9aedb6] shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onImageClick(experience.recommendationImage)}
          />
        </div>
      </>
    )}
  </VerticalTimelineElement>
);

const Experiences = ({ onImageClick }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Experiences</h2>
      </motion.div>

      <p className="mt-4 text-justify text-[17px] leading-[30px]">
        {" "}
        I have worked with several organisations in the South East Queensland to
        build websites for them from scratch. This experience has enabled me to
        quickly understand the diverse requirements of organisations across
        different industries. I enjoy working collaboratively within a team and
        designing websites tailored to organisations’ specific needs. These
        projects have honed my ability to communicate effectively with diverse
        stakeholders including those without a technical background and have
        further developed my teamwork and communication skills.
      </p>

      <div className=" flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              onImageClick={onImageClick}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experiences, "experiences");
