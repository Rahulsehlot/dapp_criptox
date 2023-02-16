import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Teams = () => {
  return (
    <>
      <div
        className="container h-[36rem] flex justify-around 
       dark:bg-grey-100 dark:text-gray-900"
      >
        <div className="border-2 rounded-3xl container h-[27rem] w-96 mt-[4.5rem] p-6 text-center bg-white">
          <div className="border-2 h-32 w-32 ml-[6rem] rounded-full mt-5 text-center">
            image
          </div>
          <h2 className="text-2xl font-semibold font-mono text-center mt-2">
            milton mendonsa
          </h2>
          <p className="text-xl font-mono mt-2 text-center">
            frontend web designer
          </p>
          <p className="text-xl font-mono mt-2 text-center">
            frontend web designer.......... rsdtyfugih vhbjnkmltyu
          </p>
          <div className="flex space-x-4 ml-24 mt-4">
            {" "}
            <FaLinkedin size="32" />
            <FaInstagram size="32" />
            <HiOutlineMail size="35" />
          </div>
        </div>
        <div className=" border-2 rounded-3xl bg-white container h-[27rem] w-96 mt-[4.5rem]  p-6 text-center">
          <div className="border-2 h-32 w-32 ml-[6rem] rounded-full mt-5 text-cente">
            image
          </div>
          <h2 className="text-2xl font-semibold font-mono text-center mt-2">
            milton mendonsa
          </h2>
          <p className="text-xl font-mono mt-2 text-center">
            frontend web designer
          </p>
          <p className="text-xl font-mono mt-2 text-center">
            frontend web designer.......... rsdtyfugih vhbjnkmltyu
          </p>
          <div className="flex space-x-4 ml-24 mt-4">
            {" "}
            <FaLinkedin size="32" />
            <FaInstagram size="32" />
            <HiOutlineMail size="35" />
          </div>
        </div>
        <div className="border-2 rounded-3xl bg-white container h-[27rem] w-96 mt-[4.5rem]  p-6 text-center">
          <div className="border-2 h-32 w-32 ml-[6rem] rounded-full mt-5 text-cente">
            image
          </div>
          <h2 className="text-2xl font-semibold font-mono text-center mt-2">
            milton mendonsa
          </h2>
          <p className="text-xl font-mono mt-2 text-center">
            frontend web designer
          </p>
          <p className="text-xl font-mono mt-2 text-center">
            frontend web designer.......... rsdtyfugih vhbjnkmltyu
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
