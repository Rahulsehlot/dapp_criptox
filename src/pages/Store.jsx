import React from "react";
import Item from "../components/Item";
import Cart from "./Cart";
import { productData } from "./products.js";

const Store = () => {
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
      <div className="container px-5 py-24 mx-auto  bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-wrap ">
          {productData.map((data, key) => {
            return (
              <>
                <Item
                  url={"https://picsum.photos/200/"}
                  name={data.Name}
                  price={data.Price}
                />
                {/* <div className="buy_now_pos">
              <button className=" bg-violet-900 w-24 py-1 px-3 focus:outline-none hover:bg-violet-400  rounded-md text-lg mt-4 md:mt-3 mr-4 text-white ">
                <Link to="/login"> Buy Now</Link>
              </button>
            </div> */}
              </>
            );
          })}
        </div>
        {/* <button
          className=" w-16 h-16 rounded-full 
          bg-violet-900 hover:bg-violet-400 text-white text-xs "
        >
          <Link to="/login"> Add Products</Link>
        </button> */}
      </div>
    </>
  );
};

export default Store;
