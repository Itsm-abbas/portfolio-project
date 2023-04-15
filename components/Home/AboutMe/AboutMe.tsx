import React from "react";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="dark:bg-DarkbgColor snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-800 dark:text-white opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400  h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-600 dark:text-white  tracking-wide">
                Hello, my name is Muhammad Abbas and I'm a frontend web
                developer. I have a passion for creating beautiful and
                functional websites that provide a seamless user experience.
                With over 3 years of experience in the industry, I have
                developed a strong understanding of web development.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-600 dark:text-white  tracking-wide">
                I specialize in HTML, CSS, and JavaScript, and have experience
                working with various frontend frameworks such as React. I'm
                constantly learning and experimenting with new technologies to
                improve my skills and stay up-to-date with the latest industry
                trends.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-600 dark:text-white  tracking-wide">
                I'm a creative problem solver and enjoy working collaboratively
                with clients to understand their needs and develop custom
                solutions that exceed their expectations. My goal is to create
                visually stunning websites that are easy to use and accessible
                to everyone.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-600 dark:text-white  tracking-wide">
                If you're looking for a talented frontend web developer to bring
                your website to life, I'd love to hear from you!
              </span>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-0 duration-300 rounded overflow-hidden"></div>
              <img
                src={"/img/Abbas.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <img
                src={"/img/douglastjokro.JPG"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
