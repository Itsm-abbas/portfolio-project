import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52 mb-8"
    >
      
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 1.6, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 1.6, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-600 font-mono"
        >
          Hey. I'm
        </motion.span>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 1.8, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 1.8, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-950 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
        >
          Douglas Tjokrosetio
        </motion.h1>

        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 2.0, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 2.0, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-600 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
        >
          A <span className="text-AAsecondary">business professional</span> with expertise in consulting and supply chains.
          <br className="md:block hidden" /> I am also a computer science student with a deep passion for <span className="text-AAsecondary">emerging technologies</span> and design.
        </motion.h3>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 2.2, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 2.2, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="mt-12"
        >
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">

          <button
            className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary"
          >
            Download my resume.
          </button>
          </a>
        </motion.div>

        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 2.4, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 2.4, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-600 font-Header text-xs md:text-lg sm:text-md mt-10 tracking-wider"
        >
          Website built from scratch using Next JS, Tailwind CSS and Framer.
        </motion.h3>

    </div>
  );
}
