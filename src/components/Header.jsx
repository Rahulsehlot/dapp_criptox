import React from "react";
import { Link } from "react-router-dom";
import Nft from "../images/nft1.png";
const Header = () => {
  return (
    <>
      <header className=" sticky top-0 text-gray-600 bg-white body-font border-b-2 cursor-pointer">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src={Nft}
              class="w-20 h-20 mt-1 ml-4 text-white p-2 rounded-full"
              alt="imgage"
            />
            <span className="ml-3.5 mt-.5 text-3xl ">Criftoz</span>
          </a>
          <nav className="md:ml-auto md:mr-auto ml-0 flex flex-wrap text-xl ">
            <Link to="/" className="mr-7 mt-1  hover:text-gray-900">
              Home
            </Link>
            <Link to="/profile/store" className="mr-7 mt-1 hover:text-gray-900">
              Store
            </Link>
            <Link to="/teams" className="mr-7 mt-1 hover:text-gray-900">
              Teams
            </Link>
            <Link to="/about" className="mr-7 mt-1 hover:text-gray-900">
              About
            </Link>
          </nav>
          <button className=" bg-violet-900 w-24 py-1 px-3 focus:outline-none hover:bg-violet-400  rounded-md text-lg mt-4 md:mt-3 mr-4 text-white ">
            <Link to="/login"> SignIn</Link>
          </button>
          <button className=" bg-violet-900 w-24 py-1 px-3 focus:outline-none hover:bg-violet-400 rounded-md text-lg mt-4 md:mt-3 ml-3 mr-16   text-white">
            <Link to="/register"> SignUp</Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
