import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { BsBoxArrowInUpRight } from "react-icons/bs";
const Modal = ({ modal, setModal, modalData }) => {
  console.log(modalData);

  //   useEffect(() => {
  //     if (modal) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "auto";
  //     }
  //   }, [modal]);
  return (
    <div
      className={`text-gray-800 dark:text-white fixed backdrop-blur-sm transition-all duration-200 top-0 h-screen w-screen left-0 bottom-0 right-0 z-20  ${
        modal ? "scale-1 " : "scale-0"
      }`}
    >
      <div
        className={`fixed transition-all duration-400 delay-300 px-2 pb-4 pt-4 shadow-2xl border-2 border-gray-500 w-72 xs:w-96  sm:w-[480px]  left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-30 bg-AAprimary dark:bg-DarkbgColor rounded-xl ${
          modal ? "scale-1 " : "scale-0"
        }  `}
      >
        <div className="absolute -right-2 -top-2">
          <ImCross
            onClick={() => setModal(false)}
            className="cursor-pointer text-xl "
          />
        </div>
        <div className="absolute right-5 bottom-5">
          <a href="http://www.youtube.com" target="_blank">
            <BsBoxArrowInUpRight className=" text-3xl cursor-pointer" />
          </a>
        </div>
        <div>
          <img src={modalData.image} className="w-full rounded-lg" />
        </div>
        <div className="px-4 py-4 mb-8">
          <h1 className="text-2xl font-bold mb-2">{modalData.title}</h1>
          <p>{modalData.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
