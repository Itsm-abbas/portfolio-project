import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

const Gallery = () => {
  return (
    <div className="flex flex-col  py-20 justify-center items-center space-y-8 bg-AAprimary">
      <section className="flex items-center mb-10   md:w-[800px] lg:w-[1000px]">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            05.
          </span>
        </div>
        <span className="text-gray-800 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Gallery
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      <div
        className="flex flex-col space-y-8 px-4 md:px-0 w-[340px] xs:w-[380px] sm:w-[640px]
        md:w-[750px] lg:w-[1000px] no-scrollbar overflow-x-scroll"
      >
        <div className=" w-[1500px] md:w-[1300px] h-[400px] box-border  relative flex items-center gap-6">
          <div>
            <img
              className="rounded-md h-[260px] md:h-[400px] w-60 md:w-80"
              src="/img/douglastjokro.JPG"
              alt=""
            />
            <h1>Dremaer</h1>
          </div>
          <div>
            <img
              className="rounded-md h-[260px] md:h-[400px] w-60 md:w-80"
              src="/img/douglastjokro.JPG"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md h-[260px] md:h-[400px] w-60 md:w-80"
              src="/img/douglastjokro.JPG"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md h-[260px] md:h-[400px] w-60 md:w-80"
              src="/img/douglastjokro.JPG"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
