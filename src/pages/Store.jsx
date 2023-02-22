import React from "react";
import Item from "./Item";
import Cart from "./Cart";
const Store = () => {
  const url = "../images/";

  const productData = [
    {
      url: `${url}1.jpg`,
      Name: "Beans",
      Price: "22.76",
    },
    {
      url: `${url}2.jpg`,
      Name: "Bonker",
      Price: "35.76",
    },
    {
      url: `${url}3.jpg`,
      Name: "Bubbles",
      Price: "56.76",
    },
    {
      url: `${url}4.jpg`,
      Name: "Chuckles",
      Price: "15.76",
    },
    {
      url: `${url}5.jpg`,
      Name: "Gonzo",
      Price: "69.76",
    },
    {
      url: `${url}6.jpg`,
      Name: "Goofy",
      Price: "96.76",
    },
    {
      url: `${url}7.jpg`,
      Name: "Loco",
      Price: "12.76",
    },
    {
      url: `${url}8.jpg`,
      Name: "Fuzzy",
      Price: "12.76",
    },
    {
      url: `${url}9.jpg`,
      Name: "Twiggy",
      Price: "17.76",
    },
    {
      url: `${url}10.jpg`,
      Name: "Muffin",
      Price: "16.76",
    },
    {
      url: `${url}11.jpg`,
      Name: "Koko",
      Price: "72.76",
    },
    {
      url: `${url}12.jpg`,
      Name: "Caesar",
      Price: "92.76",
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
