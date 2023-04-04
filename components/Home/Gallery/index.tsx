import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

const Gallery = () => {
  // Slider is here
  const Gallery = [
    {
      title: "Title Here",
      image: "/img/douglastjokro.JPG",
    },
    {
      title: "Title Here",
      image: "/img/douglastjokro.JPG",
    },
    {
      title: "Title Here",
      image: "/img/douglastjokro.JPG",
    },
    {
      title: "Title Here",
      image: "/img/douglastjokro.JPG",
    },
    {
      title: "Title Here",
      image: "/img/douglastjokro.JPG",
    },
  ];
  return (
    <div
      data-aos="fade-up"
      id="GallerySection"
      className="flex flex-col overflow-scroll  py-20 justify-center items-center space-y-8 bg-AAprimary dark:bg-DarkbgColor"
    >
      <section className="flex items-center md:mb-10   md:w-[800px] lg:w-[1000px]">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            05.
          </span>
        </div>
        <span className="text-gray-800 dark:text-white opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Gallery
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      <div
        className="flex flex-col space-y-8  w-[350px] xs:w-[430px] sm:w-[640px]
        md:w-[750px] lg:w-[1020px] scrollbar-hide overflow-x-scroll"
      >
        <div className=" w-[1000px] md:w-[1500px] h-[400px] box-border  relative flex items-center gap-6">
          {/* Mapping on gallery */}
          {Gallery.map((item) => {
            return (
              <div className="w-80 h-auto flex flex-col gap-5 ">
                <img
                  className="rounded-md h-[260px] md:h-[350px] w-60 md:w-80"
                  src={item.image}
                  alt=""
                />
                <div>
                  <h1 className="text-lg text-gray-800 dark:text-gray-200 text-center md:text-xl font-semibold">
                    {item.title}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
