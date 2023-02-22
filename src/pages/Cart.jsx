import React from "react";
import { payWithEthers } from "../shared/Freshers";

function Cart({ url, name, price }) {
  const handlePayWithEthers = () => {
    const item = price;
    payWithEthers(item, name).then((res) => {
      console.log(item);
      if (res) alert("Product purchased!");
    });
  };

  return (
    <div className="cart-wrapper">
      <div class="card">
        <div class="leftside">
          <img src={url} className="product" alt="Shoes" />
          <div className="left_side_text">
            <h1 className="it">{name}</h1>
            <h1 className="it">{price}</h1>
          </div>
        </div>
        <div class="rightside">
          <form action="">
            <h1 style={{ fontSize: "150%" }}>CheckOut</h1>
            <h2>Information</h2>
            <p>Name</p>
            <input type="text" class="inputbox" name="name" required />
            <p>Email</p>
            <input
              type="text"
              class="inputbox"
              name="email"
              id="email"
              required
            />
            <p>Address</p>
            <input
              type="text"
              class="inputbox"
              name="address"
              id="address"
              required
            />
          </form>
          <button
            class="bg-violet-900 h-12 w-full py-1 px-3 focus:outline-none hover:bg-violet-400  rounded-md text-lg mt-4 md:mt-3 mr-4 text-white"
            onClick={handlePayWithEthers}
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
