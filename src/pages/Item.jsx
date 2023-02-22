import React, { useState } from "react";
import Cart from "./Cart";
import { connectWallet } from "../shared/Freshers";
import { useGlobalState } from "../store";
import f1 from "../images/f1.jpg";

const Item = ({ url, name, price }) => {
  const [show, setShow] = useState(false);
  const [account] = useGlobalState("connectedAccount");

  const toggleShow = () => {
    if (!account) {
      connectWallet();
    } else {
      setShow(true);
    }
  };
  return (
    <>
      <div className="lg:w-1/4 before:md:w-1/2 p-4 w-full ">
        <a className="block h-84 rounded overflow-hidden">
          <img
            src={url}
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
          />
        </a>
        <div className="mt-4">
          <div className="buys_pos">
            <h2 className="dark:text-white title-font text-lg font-medium ml-5">
              {name}
            </h2>
            <p className="mt-1 dark:text-white mr-5">${price}</p>
          </div>
          <div className="buy_now_pos">
            <button
              className=" bg-violet-900 w-24 py-1 px-3 focus:outline-none hover:bg-violet-400  rounded-md text-lg mt-4 md:mt-3 mr-4 text-white "
              onClick={toggleShow}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          <Cart url={url} name={name} price={price} />
        </div>
      </div>
    </>
  );
};

export default Item;
