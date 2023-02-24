import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import r1 from "../images/5.jpg";
import r2 from "../images/9.jpg";
import r3 from "../images/3.jpg";

const Teams = () => {
  return (
    <>
      <div
        className="container h-[36rem] flex justify-around 
       dark:bg-grey-100 dark:text-gray-900"
      >
        <div className="border-2 rounded-3xl container h-[27rem] w-96 mt-[4.5rem] p-6 text-center bg-white">
          <img
            src={r1}
            alt="milton"
            className="border-2 h-32 w-32 ml-[6rem] rounded-full mt-5 "
          />

          <h2 className="text-2xl font-semibold text-violet-900 text-center mt-2">
            Milton Mendonsa
          </h2>
          <p className="text-xl  mt-2 text-gray-600 text-center">
            frontend web designer
          </p>
          <p className="text-xl  mt-2  text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
            magnam?
          </p>
          <div className="flex space-x-4 ml-24 mt-4">
            {" "}
            <FaLinkedin size="32" />
            <FaInstagram size="32" />
            <HiOutlineMail size="35" />
          </div>
        </div>
        <div className=" border-2 rounded-3xl bg-white container h-[27rem] w-96 mt-[4.5rem]  p-6 text-center">
          <img
            src={r2}
            alt="rohith"
            className="border-2 h-32 w-32 ml-[6rem] rounded-full mt-5 "
          />
          <h2 className="text-2xl font-semibold text-violet-900 text-center mt-2">
            Rohith K shetty
          </h2>
          <p className="text-xl  mt-2 text-gray-600 text-center">
            full stack developer
          </p>
          <p className="text-xl  mt-2  text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            dolores!
          </p>
          <div className="flex space-x-4 ml-24 mt-4">
            {" "}
            <FaLinkedin size="32" />
            <FaInstagram size="32" />
            <HiOutlineMail size="35" />
          </div>
        </div>
        <div className="border-2 rounded-3xl bg-white container h-[27rem] w-96 mt-[4.5rem]  p-6 text-center">
          <img
            src={r3}
            alt="rahul"
            className="border-2 h-32 w-32 ml-[6rem] rounded-full mt-5 "
          />
          <h2 className="text-2xl font-semibold text-violet-900 text-center mt-2">
            Rahul Jain
          </h2>
          <p className="text-xl text-gray-600 mt-2 text-center">
            full stack developer
          </p>
          <p className="text-xl text-gray-600 mt-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            veniam?
          </p>
          <div className="flex space-x-4 ml-24 mt-4">
            {" "}
            <FaLinkedin size="32" />
            <FaInstagram size="32" />
            <HiOutlineMail size="35" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
