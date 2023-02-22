import React from "react";
import Item from "./Item";
import Cart from "./Cart";
const Store = () => {
  const url = "../images/";

  const productData = [
    {
      url: `${url}1.jpg`,
      Name: "Nano Droid",
      Price: "22.76",
    },
    {
      url: `${url}2.jpg`,
      Name: "Mono Droid",
      Price: "35.76",
    },
    {
      url: `${url}3.jpg`,
      Name: "Nano Droid",
      Price: "56.76",
    },
    {
      url: `${url}4.jpg`,
      Name: "Mono Droid",
      Price: "15.76",
    },
    {
      url: `${url}5.jpg`,
      Name: "Nano Droid",
      Price: "69.76",
    },
    {
      url: `${url}6.jpg`,
      Name: "Mono Droid",
      Price: "96.76",
    },
    {
      url: `${url}7.jpg`,
      Name: "Nano Droid",
      Price: "12.76",
    },
  ];

  return (
    <>
      <div className="container px-5 py-24 mx-auto  bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-wrap ">
          {productData.map((data, key) => {
            return (
              <>
                <Item url={data.url} name={data.Name} price={data.Price} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Store;
