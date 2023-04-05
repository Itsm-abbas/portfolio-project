import React from "react";

const StackArea = () => {
  let Logos = [
    {
      title: "Python",
      image: "/Stack Icons/python.png",
    },
    {
      title: "Java",
      image: "/Stack Icons/java.png",
    },
    {
      title: "C",
      image: "/Stack Icons/c.png",
    },
    {
      title: "HTML",
      image: "/Stack Icons/html.png",
    },
    {
      title: "CSS",
      image: "/Stack Icons/css3.png",
    },
    {
      title: "JS",
      image: "/Stack Icons/javascript.png",
    },
    {
      title: "React",
      image: "/Stack Icons/react.png",
    },
    {
      title: "Next",
      image: "/Stack Icons/next.png",
    },
    {
      title: "Tailwind",
      image: "/Stack Icons/tailwind-css.png",
    },
    {
      title: "Docker",
      image: "/Stack Icons/docker.png",
    },
    {
      title: "Vscode",
      image: "/Stack Icons/visual-studio-code.png",
    },
    {
      title: "Tensorflow",
      image: "/Stack Icons/tensorflow.png",
    },

    {
      title: "opencv",
      image: "/Stack Icons/opencv.png",
    },
    {
      title: "Keras",
      image: "/Stack Icons/keras.png",
    },
  ];
  return (
    <div className="px-6" data-aos="fade-up">
      <p className="text-lg sm:text-xl font-Arimo  text-gray-800 dark:text-white">
        Languages, libraries, frameworks, and tools I’ve been working with
        recently
      </p>
      <div className="grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-7 mt-10 gap-6">
        {Logos.map((item, index) => {
          return (
            <div
              key={index}
              className="w-16 xs:w-20 p-3 sm:p-4 bg-white rounded-full flex items-center justify-center"
            >
              <img
                className=" rounded-full"
                src={item.image}
                alt={item.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackArea;
