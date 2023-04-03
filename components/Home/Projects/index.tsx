import React, { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Modal from "./Modal";
import StackArea from "../StackArea";

const Projects = () => {
  const [modalData, setmodalData] = useState({});
  const [ismodalopen, setIsModalOpen] = useState(false);
  let ProjectsData = [
    {
      id: 1,
      title: "IP Data Puller",
      type: "Web App",
      field: "CyberSecurity",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci aliquam itaque fuga illo, quibusdam voluptatibus",
      image: "/projects/hulu-clone.png",
    },
    {
      id: 2,
      title: "Giva",
      type: "Mobile App",
      field: "Donation",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci aliquam itaque fuga illo, quibusdam voluptatibus",
      image: "/projects/jobs_app.png",
    },
    {
      id: 3,
      title: "The Complete Guide to Blockchain",
      type: "Book",
      field: "Blockchain",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci aliquam itaque fuga illo, quibusdam voluptatibus",
      image: "/projects/dreamStore.png",
    },
    {
      id: 4,
      title: "Giva",
      type: "Mobile App",
      field: "Donation",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci aliquam itaque fuga illo, quibusdam voluptatibus",
      image: "/projects/jobs_app.png",
    },
    {
      id: 5,
      title: "IP Data Puller",
      type: "Web App",
      field: "CyberSecurity",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci aliquam itaque fuga illo, quibusdam voluptatibus",
      image: "/projects/hulu-clone.png",
    },
    {
      id: 6,
      title: "The Complete Guide to Blockchain",
      type: "Book",
      field: "Blockchain",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci aliquam itaque fuga illo, quibusdam voluptatibus",
      image: "/projects/dreamStore.png",
    },
  ];
  let HandleModal = (item: {
    title: string;
    type: string;
    field: string;
    desc: string;
    image: string;
  }) => {
    setIsModalOpen(true);
    setmodalData(item);
  };

  return (
    <div
      // data-aos="fade-up"
      id="ProjectSection"
      className="flex flex-col items-center justify-center py-20 space-y-8 bg-AAprimary"
    >
      <div
        className="flex flex-col space-y-8 px-4 md:px-0 w-full 
        md:w-[800px] lg:w-[1000px]"
      >
        <section className="flex items-center">
          <div className="flex flex-row items-center">
            <ArrowIcon
              className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
            />
            <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
              {" "}
              04.
            </span>
          </div>
          <span className="text-gray-800 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
            Projects
          </span>
          <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
        </section>
        {/* Table */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-lg">
                  <thead className=" border-gray-300 border-b-2 ">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 font-medium text-gray-900  py-4 text-left"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="px-4 font-medium text-gray-900  py-4 text-left"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-4 font-medium text-gray-900  py-4 text-left"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-4 font-medium text-gray-900  py-4 text-left"
                      >
                        Field
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ProjectsData.map((item) => {
                      return (
                        <tr
                          onClick={() => HandleModal(item)}
                          className="cursor-pointer rounded-sm border-gray-300 border-b-2 transition duration-300 ease-in-out hover:bg-[#f4ece5]"
                        >
                          <td className="px-4 py-4 whitespace-nowrap  font-medium text-gray-900">
                            {item.id}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap  font-medium text-gray-900">
                            {item.title}
                          </td>
                          <td className="px-4 text-gray-900 font-semibold  py-4 whitespace-nowrap">
                            {item.type}
                          </td>
                          <td className="px-4 text-gray-900 font-semibold  py-4 whitespace-nowrap">
                            {item.field}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Table end */}
      </div>
      <div className="py-10">
        <StackArea />
      </div>
      {ismodalopen && (
        <Modal
          modal={ismodalopen}
          setModal={setIsModalOpen}
          modalData={modalData}
        />
      )}
    </div>
  );
};

export default Projects;
