import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 1.3,
        }}
        className=" text-AAsecondary"
      >
        <ReactScrollLink
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 01.{" "}
          <span className="text-gray-500 dark:text-gray-100 hover:cursor-pointer hover:text-AAsecondary dark:hover:text-AAsecondary duration-300">
            About
          </span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 1.4,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink
          to="WhereIhaveWorkedSection"
          spy={true}
          smooth={true}
          offset={-300}
          duration={200}
        >
          &gt; 02.{" "}
          <span className="text-gray-500 dark:text-gray-100  hover:cursor-pointer dark:hover:text-AAsecondary hover:text-AAsecondary duration-300">
            Work Experience
          </span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 1.5,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink
          to="EducationSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 03.{" "}
          <span className="text-gray-500 dark:text-gray-100  hover:cursor-pointer hover:text-AAsecondary  dark:hover:text-AAsecondary duration-300">
            Education
          </span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 1.5,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink
          to="ProjectSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 04.{" "}
          <span className="text-gray-500 dark:text-gray-100  hover:cursor-pointer hover:text-AAsecondary  dark:hover:text-AAsecondary duration-300">
            Projects
          </span>
        </ReactScrollLink>
      </motion.div>
      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 1.7,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink
          to="GallerySection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 05.{" "}
          <span className="text-gray-500 dark:text-gray-100  hover:cursor-pointer hover:text-AAsecondary dark:hover:text-AAsecondary duration-300">
            Gallery
          </span>
        </ReactScrollLink>
      </motion.span>
    </div>
  );
}
