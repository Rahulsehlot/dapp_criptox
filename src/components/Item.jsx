import React from "react";
import { useNavigate } from "react-router";
import CartItem from "./CartItem";
const Item = ({ url, name, price }) => {
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="lg:w-1/4 before:md:w-1/2 p-4 w-full " onClick={onClick}>
        <a className="block h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={url}
          />
        </a>
        <div className="mt-4">
          <h2 className="dark:text-white title-font text-lg font-medium">
            {name}
          </h2>
          <p className="mt-1 dark:text-white">${price}</p>
        </div>
      </div>
    </>
  );
};

export default Item;
