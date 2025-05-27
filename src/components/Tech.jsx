// import { BallCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 mb-8 group" key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <img
            className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-120"
            src={technology.icon}
            alt={technology.name}
          />

          <div className="flex justify-center item-center text-center text-[16px] font-semibold mt-2">
            {technology.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
