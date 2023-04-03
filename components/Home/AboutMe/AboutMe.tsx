import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
import Link from 'next/link';

export default function AboutMe(props) {

  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >

        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-800 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-600  tracking-wide">
                I am a business professional by day, and a developer by night. I am absolutely hooked on anything tech
                and I'm always on the hunt to explore emerging technologies such as blockchain, AI, computational linguistics and computer vision.
                
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-600  tracking-wide">
                My interest started back in middle school when I made several mini flash games after school.
                Turns out making flash game replicas of Cooking Mama and Amateur Surgeon taught me a great deal 
                on coding and development.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-600  tracking-wide">
                Today, I primarily work on consulting in supply chain and maritime areas, with a focus on digitalization
                and optimization. I have published Indonesia's first official book on blockchain, and run <span className="text-AAsecondary"><Link href="https://www.techwarung.com">Tech Warung</Link></span> on the side.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-600  tracking-wide">
                
                Most would refer to me as a music aficionado, as I love to listen, play, and create music in my spare time. 
                
                I enjoy cooking, basketball, and contemporary art. I am also a longtime fan of the New York Knicks.
              
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
              <Img src={"/img/douglastjokro.jpg"} className={"object-contain rounded-lg"} alt="My Image Not Found" />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img src={"/img/douglastjokro.jpg"} className={"object-contain rounded-lg"} alt="My Image Not Found" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
