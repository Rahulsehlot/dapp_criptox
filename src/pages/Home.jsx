import React, { useContext } from "react";
import nft2 from "../images/nft5.jpg";
import { Link } from "react-router-dom";
import f1 from "../images/f1.jpg";
import f2 from "../images/f2.jpg";
import f3 from "../images/f3.jpg";
import { SceneContext } from "../SceneContext";
const Home = () => {
  const { loggedIn } = useContext(SceneContext);

  return (
    <>
      <div
        className="h-[38rem] container bg-white flex
      p-10"
      >
        <div className=" w-1/2 ml-10 mt-5">
          <img src={nft2} alt="nf2" />
        </div>
        <div className="  ml-10 text-center mt-20 h-[20rem] ml-10 p-5">
          <h1 className="text-5xl font-bold text-violet-900 mt-6 p-5">
            Buy and sell your <span>NFT</span> <br />
            at one marketplace <br />
            <div className="text-5xl text-gray-900 font-extrabold p-2">
              -Criftoz
            </div>
          </h1>
          {loggedIn ? (
            <></>
          ) : (
            <div className="ml-20 ">
              <button className=" bg-violet-900 w-24 py-1 px-3 focus:outline-none hover:bg-violet-400  rounded-md text-lg mt-4 md:mt-3 mr-4 text-white ">
                <Link to="/login"> SignIn</Link>
              </button>
              <button className=" bg-violet-900 w-24 py-1 px-3 focus:outline-none hover:bg-violet-400 rounded-md text-lg mt-4 md:mt-3 ml-3 mr-16   text-white">
                <Link to="/register"> SignUp</Link>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* second division */}
      <div className="container h-[28rem] border-2 bg-violet-900 ">
        <div
          className="h-[22rem]  w-[85%] mx-[6.5rem] my-11 overflow-auto 
          p-3 flex flex-row "
        >
          <div className="h-[20rem] w-[17.6rem] ml-8 mt-1 cursor-pointer ">
            <img
              src={f1}
              alt="image1"
              className="h-[19rem] mt-1.5 rounded-xl shadow-xl"
            />
          </div>
          <div className="h-[20rem] w-[17.6rem]  ml-8 mt-1 cursor-pointer">
            <img
              src={f2}
              alt="image1"
              className="h-[19rem] mt-1.5 rounded-xl shadow-xl"
            />
          </div>
          <div className="h-[20rem] w-[17.6rem]  ml-8 mt-1 cursor-pointer">
            <img
              src={f3}
              alt="image1"
              className="h-[19rem] mt-1.5 rounded-xl shadow-xl"
            />
          </div>
          <div className="h-[20rem] w-[17.6rem]  ml-8 mt-1 cursor-pointer">
            <img
              src={f1}
              alt="image1"
              className="h-[19rem] mt-1.5 rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
