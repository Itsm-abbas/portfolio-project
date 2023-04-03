import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

const Education = () => {
  return (
    <div>
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-800 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Work Experience
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
    </div>
  );
};

export default Education;
