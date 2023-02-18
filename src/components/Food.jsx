import React from "react";
import { setAlert, setGlobalState, useGlobalState } from "../store";
import { Link } from "react-router-dom";

const Food = ({ item }) => {
  const [cart] = useGlobalState("cart");

  const addToCart = (item) => {
    item.added = true;
    let cartItems = [...cart];
    const newItem = { ...item, qty: (item.qty += 1), stock: (item.stock -= 1) };
    if (cart.find((_item) => _item.id == item.id)) {
      cartItems[item] = newItem;
      setGlobalState("cart", [...cartItems]);
    } else {
      setGlobalState("cart", [...cartItems, newItem]);
    }
    setAlert(`${item.name} added to cart!`);
  };

  const toCurrency = (num) =>
    num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <div className="mx-4 my-6 w-64">
      <div>
        {/* <Link to={`/product/` + item.id}>
          <CardImage src={item.imgURL} alt={item.name} />
        </Link> */}
        <div>
          <Link to={`/product/` + item.id}>{item.name}</Link>

          <p>Don't be scared of the truth because we need to...</p>

          <div
            color="black"
            className="flex flex-row justify-between items-center"
          >
            <span className="font-semibold text-green-500">
              {toCurrency(item.price)}
            </span>
            <span className="text-xs text-black">{item.stock} in stock</span>
          </div>
        </div>
        <div>
          {item.stock > 0 ? (
            <button
              onClick={() => addToCart(item)}
              color="green"
              size="md"
              ripple="light"
              disabled={item.stock == 0}
            >
              Add To Cart
            </button>
          ) : (
            <button
              color="green"
              size="md"
              buttonType="outline"
              ripple="light"
              disabled
            >
              Out of Stock
            </button>
          )}
        </div>
        asdsa
      </div>
    </div>
  );
};

export default Food;
