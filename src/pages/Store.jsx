import React from "react";
import Item from "../components/Item";
import { useEffect, useState } from "react";
import { getProducts } from "../firebase";
import Foods from "../components/Foods";
import { productData } from "./products.js";
import { Link } from "react-router-dom";

const Store = () => {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   getProducts().then((products) => {
  //     console.log(products);
  //     products.filter((item) => {
  //       item.price = Number(item.price);
  //       item.qty = 0;
  //     });
  //     setProducts(products);
  //   });
  // }, []);

  return (
    <>
      {/* <div className="container px-5 py-24 mx-auto  bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-wrap ">
          <Foods products={products} />{" "}
        </div>
      </div> */}
      <div class="container px-5 py-24 mx-auto  bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-wrap ">
          {productData.map((data, key) => {
            return (
              <Item
                url={"https://picsum.photos/200/"}
                name={data.Name}
                price={data.Price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Store;
