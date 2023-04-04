import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
const MobileMenu = (props) => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={props.rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0 } }}
        className="w-full fixed h-screen flex md:hidden duration-300 z-20"
      >
        <div
          onClick={() => closeMenu()}
          className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/50 hover:cursor-pointer"
        ></div>
        <div
          className="w-3/4 h-full bg-MobileNavBarColor dark:bg-DarkbgColor flex flex-col 
        justify-center items-center space-y-8 font-sans"
        >
          <Link
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs font-mono">01.</span>
            <span
              className="text-white font-Text2 text-sm sm:text-base
             hover:text-AAsecondary hover:cursor-pointer duration-300"
            >
              About
            </span>
          </Link>
          <Link
            to="WhereIhaveWorkedSection"
            spy={true}
            smooth={true}
            offset={-250}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs font-mono hover:cursor-pointer">
              02.
            </span>
            <span
              className="text-white font-Text2 text-sm sm:text-base
             hover:text-AAsecondary hover:cursor-pointer duration-300"
            >
              Work Experience
            </span>
          </Link>
          <Link
            to="EducationSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs font-mono">03.</span>
            <span
              className="text-white font-Text2 text-sm sm:text-base
             hover:text-AAsecondary hover:cursor-pointer duration-300"
            >
              Education
            </span>
          </Link>
          <Link
            to="ProjectSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs font-mono">04.</span>
            <span
              className="text-white font-Text2 text-sm sm:text-base
             hover:text-AAsecondary hover:cursor-pointer duration-300"
            >
              Projects
            </span>
          </Link>
          <Link
            to="GallerySection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs font-mono">05.</span>
            <span
              className="text-white font-Text2 text-sm sm:text-base
             hover:text-AAsecondary hover:cursor-pointer duration-300"
            >
              Gallery
            </span>
          </Link>
        </div>
      </motion.div>
    </>
  );
};
export default MobileMenu;
