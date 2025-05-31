import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";

const EducationCard = ({ education, onImageClick }) => {
  return (
    <motion.div className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full shadow-card">
      <div className="flex items-start mb-3">
        <img
          src={education.icon}
          alt={education.universityName}
          className="w-16 h-16 object-contain rounded-full mr-4 flex-shrink-0"
        />
        <div className="flex-grow">
          <h3 className=" font-bold text-[20px]">{education.title}</h3>
          <p className="mt-1  text-[15px]">{education.universityName}</p>
          <p className="mt-1  text-[14px]">{education.grade}</p>
          <p className="mt-1  text-[14px] font-normal">{education.date}</p>
        </div>
      </div>

      {education.recommendation_image && (
        <div className="mt-5">
          <p className="text-[#9aedb6] text-[16px] font-semibold mb-2">
            Recommendation Letter:
          </p>
          <img
            src={education.recommendation_image}
            alt={`${education.universityName} Recommendation`}
            className="w-full h-auto max-h-[500px] object-contain rounded-md cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onImageClick(education.recommendation_image)}
          />
        </div>
      )}

      {education.scholarship_image && (
        <div className="mt-5">
          <p className="text-[#9aedb6] text-[16px] font-semibold mb-2">
            Scholarship:
          </p>
          <img
            src={education.scholarship_image}
            alt={`${education.universityName} Scholarship`}
            className="w-full h-auto max-h-[500px] object-contain rounded-md cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onImageClick(education.scholarship_image)}
          />
        </div>
      )}
    </motion.div>
  );
};

const Education = ({ onImageClick }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mb-12`}>
          Education
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7 justify-center">
        {education.map((eduItem, index) => (
          <EducationCard
            key={`education-card-${index}`}
            education={eduItem}
            onImageClick={onImageClick}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
