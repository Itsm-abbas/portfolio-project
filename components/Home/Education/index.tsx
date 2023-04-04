import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Image from "next/image";

const Education = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-20 space-y-8 bg-AAprimary dark:bg-DarkbgColor"
    >
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[800px] lg:w-[1000px]"
      >
        <section className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            <ArrowIcon
              className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
            />
            <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
              {" "}
              03.
            </span>
          </div>
          <span className="text-gray-800 dark:text-white opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
            Education
          </span>
          <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
        </section>
        <div className="grid grid-cols-1 py-10 gap-6 md:gap-8 lg:gap-10">
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-20"
          >
            <div className="bg-white dark:bg-DarkPalette dark:text-white flex flex-col px-8 py-5 rounded-md">
              <div className="flex gap-6  items-center ">
                <Image width={50} height={45} src="/uni_1.png" alt="uni" />
                <div>
                  <h3 className="font-bold text-lg">
                    Massachutssetts Institure of Technology
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    Msc. Supply Chain Management
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 w-full flex justify-end py-2 text-sm font-semibold">
                2021 - 2025
              </p>
            </div>
            <div className="bg-white dark:bg-DarkPalette dark:text-white flex flex-col px-8 py-5 rounded-md">
              <div className="flex gap-6  items-center ">
                <Image width={50} height={45} src="/uni_2.png" alt="uni" />

                <div>
                  <h3 className="font-bold text-lg">
                    Massachutssetts Institure of Technology
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    Msc. Supply Chain Management
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 w-full flex justify-end py-2 text-sm font-semibold">
                2021 - 2025
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-20"
          >
            <div className="bg-white shadow-sm dark:bg-DarkPalette dark:text-white  flex flex-col px-8 py-5 rounded-md">
              <div className="flex gap-6  items-center ">
                <Image width={50} height={45} src="/uni_3.png" alt="uni" />

                <div>
                  <h3 className="font-bold text-lg">
                    Massachutssetts Institure of Technology
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    Msc. Supply Chain Management
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 w-full flex justify-end py-2 text-sm font-semibold">
                2021 - 2025
              </p>
            </div>
            <div className="bg-white dark:bg-DarkPalette dark:text-white flex flex-col px-8 py-5 rounded-md">
              <div className="flex gap-6  items-center ">
                <Image width={50} height={45} src="/uni-4.png" alt="uni" />

                <div>
                  <h3 className="font-bold text-lg">
                    Massachutssetts Institure of Technology
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    Msc. Supply Chain Management
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 w-full flex justify-end py-2 text-sm font-semibold">
                2021 - 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
