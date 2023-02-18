import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, deleteProduct, auth } from "../firebase";
import { setGlobalState, useGlobalState, setAlert } from "../store";
import { payWithEthers } from "../shared/Freshers";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [cart] = useGlobalState("cart");
  const [isLoggedIn] = useGlobalState("isLoggedIn");
  const [buyer] = useGlobalState("connectedAccount");
  const [ethToUsd] = useGlobalState("ethToUsd");

  const addToCart = () => {
    const item = product;
    item.added = true;
    let cartItems = [...cart];
    const newItem = { ...item, qty: (item.qty += 1), stock: (item.stock -= 1) };
    if (cart.find((_item) => _item.id == item.id)) {
      cartItems[item] = newItem;
      setGlobalState("cart", [...cartItems]);
    } else {
      setGlobalState("cart", [...cartItems, newItem]);
    }
    setAlert("Product added to cart");
  };

  const handlePayWithEthers = () => {
    const item = {
      ...product,
      buyer,
      price: (product.price / ethToUsd).toFixed(4),
    };
    payWithEthers(item).then((res) => {
      if (res) setAlert("Product purchased!");
    });
  };

  const handleDeleteProduct = () => {
    deleteProduct(product).then(() => {
      setAlert("Product deleted!");
      navigate("/");
    });
  };

  const toCurrency = (num) =>
    num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  useEffect(() => {
    getProduct(id).then((data) => setProduct({ ...data, qty: 1 }));
  }, [id]);

  return (
    <div className="product">
      {!!product ? (
        <div className="flex flex-wrap justify-start items-center p-10">
          <div className="mt-4 w-64">
            Card Image
            {/* <CardImage src={product.imgURL} alt={product.name} /> */}
          </div>

          <div className="mt-4 lg:mt-0 lg:row-span-6 mx-4">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
              <h2 className="sr-only">Product information</h2>
              <div className="flex flex-row justify-start items-center">
                <span className="text-xl font-bold text-green-500">
                  {toCurrency(product.price)}
                </span>
                <span className="text-xs mx-4">
                  {product.stock} left in stock
                </span>
              </div>

              <div className="mt-2 space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-row justify-start items-center space-x-2">
              <button
                onClick={addToCart}
                color="green"
                size="md"
                ripple="light"
              >
                Add To Cart
              </button>

              {isLoggedIn ? (
                <>
                  {auth.currentUser.uid != product.uid &&
                  product.account != buyer ? (
                    <button
                      onClick={handlePayWithEthers}
                      color="amber"
                      size="md"
                      ripple="light"
                    >
                      Buy with ETH
                    </button>
                  ) : null}
                </>
              ) : null}
              {isLoggedIn && auth.currentUser.uid == product.uid ? (
                <>
                  <button
                    onClick={() => navigate("/product/edit/" + id)}
                    buttonType="link"
                    color="green"
                    size="md"
                    ripple="light"
                  >
                    Edit Product
                  </button>
                  <button
                    onClick={handleDeleteProduct}
                    buttonType="link"
                    color="red"
                    size="md"
                    ripple="light"
                  >
                    Delete
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
