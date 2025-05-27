import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <footer className="text-secondary text-[10px] font-extralight flex justify-end items-center">
      Jy Fung Peh Portfolio based on Jenny Zhong &copy;
    </footer>
  );
};

export default SectionWrapper(Footer, "");
