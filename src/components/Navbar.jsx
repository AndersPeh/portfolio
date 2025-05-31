import { Link } from "react-router-dom";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { github, linkedin } from "../assets";

const Navbar = () => {
  const [active, SetActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // defines a line that a section's content should reach to be considered active, which is the px of NavBar.
      // inspector in browser -> elements -> the class fixed top-0 z-20 bg-primary -> computed tab -> list of properties in the bottom -> look for height.
      const activationLineInViewport = 80;

      // Because hash-span is 100 which means the content of a Section starts after 100 px of the section. In order to display active title accurately,
      // a section should only become active after its hash-span has been scrolled past the NavBar height of 80px.
      const effectiveThresholdForHashSpan = activationLineInViewport;

      let newActive = "";

      for (const link of navLinks) {
        const sectionElement = document.getElementById(link.id);

        if (sectionElement) {
          // getBoundingClientRect().top is for getting the distance between top of the browser and top of the section.
          const rect = sectionElement.getBoundingClientRect();

          if (rect.top <= effectiveThresholdForHashSpan) {
            newActive = link.title;
          } else {
            break;
          }
        }
      }

      const atBottom =
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.body.scrollHeight - 5;
      if (atBottom && navLinks.length > 0) {
        newActive = navLinks[navLinks.length - 1].title;
      }

      if (active !== newActive) {
        SetActive(newActive);
      }
    };
    // passive true means browser doesnt wait for javascript to finish running before continuing the scrooll, smoother scrolling performance.
    // It notifies handleScroll whenever user scrolls, then handleScroll will get position of sections to determine which section is active.
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    // remove listener when the component is about to unmount to prevent memory leaks. When NavBar component is removed from the UI or before the effect runs again.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // useEffect runs when the component mounts initially or when active/ SetActive changes. So event listener will stay active from the beginning to listen to scrolls.
    // When user scrolls to a new section, handleScroll identifies newActive, then SetActive is executed
    // and active will be changed which triggers useEffect to cleanup old listener, create new handleScroll with updated active value + new event listener.
  }, [active, SetActive]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            SetActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />

          <p className="text-white text-[18px] font-bold cursor-pointer flex flex-col md:flex-row md:items-baseline">
            Anders Peh &nbsp;
            <span className="block md:inline text-[14px] sm:text-[18px]">
              {" "}
              | Seeking Tech Internship
            </span>
          </p>

          <div
            onClick={() =>
              window.open("https://www.linkedin.com/in/anders-peh", "_blank")
            }
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            onClick={() =>
              window.open("https://github.com/AndersPeh", "_blank")
            }
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#9aedb6]" : "text-white"
              } hover:text-[#b1a1ed] text-[18px] font-bold cursor-pointer`}
              onClick={() => SetActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#3EB489]" : "text-white"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    SetActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
