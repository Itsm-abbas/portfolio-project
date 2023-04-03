import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Img from "../../../components/smallComp/image/Img";

export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 0, duration: 0 },
          opacity: { delay: props.finishedLoading ? 0 : 0.5, duration: 1.5 },
        }}
        className=" relative h-12 w-10 "
      >
        <Img src={"/img/dt-logo-grey.png"} className={"object-contain rounded-lg"} alt="My Image Not Found" />
      </motion.div>
    </>
  );
}
