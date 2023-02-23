import React, { useState } from "react";
import abi from "../shared/abis/Store.json";
import { ethers } from "ethers";
import Web3 from "web3";

function Cart({ url, name, price }) {
  const contractAddress = "0x171e6D075Aa24629EAB3F0f5aC6720aaCcb7bb16";
  const contractABI = abi.abi;
  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const buyProduct = async () => {
    const web3 = window.web3;
    try {
      const { ethereum } = window;
      console.log(ethereum);
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const buyProduct = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH"
        );
        const data = ((await response.json()).ETH / price).toFixed(15);
        console.log(data);

        console.log("buying " + name + " ..");

        const productTxn = await buyProduct.buysProduct(name ? name : "name", {
          value: ethers.utils.parseEther(data.toString()),
        });

        await productTxn.wait();

        console.log("mined ", productTxn.hash);

        console.log(name + " purchased!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-wrapper">
      <div className="card">
        <div className="leftside">
          <img src={url} className="product" alt="Shoes" />
          <div className="left_side_text">
            <h1 className="it">{name}</h1>
            <h1 className="it">{price}</h1>
          </div>
        </div>
        <div className="rightside">
          <form action="">
            <h1 style={{ fontSize: "150%" }}>CheckOut</h1>
            <h2>Information</h2>
            <p>Name</p>
            <input type="text" className="inputbox" name="name" required />
            <p>Email</p>
            <input
              type="text"
              className="inputbox"
              name="email"
              id="email"
              required
            />
          </form>
          <button
            className="bg-violet-900 h-12 w-full py-1 px-3 focus:outline-none hover:bg-violet-400  rounded-md text-lg mt-4 md:mt-3 mr-4 text-white"
            onClick={buyProduct}
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
