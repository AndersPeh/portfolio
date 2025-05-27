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
import React, { useState } from "react";
import ImageModal from "./ImageModal";

const ExperienceCard = ({ experience, onImageClick }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#151030", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    dateClassName="!text-[#9aedb6] !font-extrabold"
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
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
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

const Experiences = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleOpenModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImageUrl("");
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Experiences</h2>
      </motion.div>

      <div className=" flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              onImageClick={handleOpenModal}
            />
          ))}
        </VerticalTimeline>
      </div>
      <ImageModal
        src={selectedImageUrl}
        alt="Recommendation Zoomed In"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SectionWrapper(Experiences, "experiences");
