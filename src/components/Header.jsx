import React, { useContext } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../firebase";
import Nft from "../images/nft1.png";
import { SceneContext } from "../SceneContext";
import { connectWallet } from "../shared/Freshers";

import { useGlobalState } from "../store";
const Header = () => {
  const [account] = useGlobalState("connectedAccount");
  const { loggedIn, setloggedIn } = useContext(SceneContext);
  const [isLoggedIn] = useGlobalState("isLoggedIn");
  const navigate = useNavigate();
  const handleSignOut = () => {
    logout().then((res) => {
      if (res) {
        alert("Logged out successfully");
        navigate("/login");
        setloggedIn("");
      }
    });
  };

  return (
    <>
      <header className=" sticky top-0 text-gray-600 bg-white body-font border-b-2 cursor-pointer">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src={Nft}
              className="w-20 h-20 mt-1 ml-4 text-white p-2 rounded-full"
              alt="imgage"
            />
            <span className="ml-3.5 mt-.5 text-3xl ">Criftoz</span>
          </a>
          <nav className="md:ml-auto md:mr-auto ml-0 flex flex-wrap text-xl ">
            <Link to="/" className="mr-7 mt-1  hover:text-gray-900 ">
              Home
            </Link>
            {loggedIn ? (
              <Link
                to="/profile/store"
                className="mr-7 mt-1 hover:text-gray-900"
              >
                Store
              </Link>
            ) : (
              <></>
            )}

            <Link to="/teams" className="mr-7 mt-1 hover:text-gray-900">
              Teams
            </Link>
            <Link to="/about" className="mr-7 mt-1 hover:text-gray-900">
              About
            </Link>
          </nav>
          {loggedIn ? (
            <>
              {account ? null : (
                <button
                  className=" bg-violet-900 w-24  h-10 py-1 px-3 focus:outline-none hover:bg-violet-400 rounded-md text-xs mt-4 md:mt-3 ml-3 mr-13   text-white"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              )}
              <button
                className=" bg-violet-900 w-24 h-10 py-1 px-3 focus:outline-none hover:bg-violet-400 rounded-md text-lg mt-4 md:mt-3 ml-3 mr-16   text-white"
                onClick={handleSignOut}
              >
                Logout
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
