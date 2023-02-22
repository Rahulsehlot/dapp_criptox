import { useState } from "react";
import Web3 from "web3";
import { setAlert, setGlobalState } from "../store";
import Store from "./abis/Store.json";

const { ethereum } = window;

const getContract = async () => {
  const web3 = window.web3;
  const networkId = await web3.eth.net.getId();

  const networkData = Store.networks[networkId];
  if (networkData) {
    const contract = new web3.eth.Contract(Store.abi, networkData.address);
    return contract;
  } else {
    window.alert("Store contract not deployed to detected network.");
  }
};

const payWithEthers = async (price, name) => {
  try {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    // toWei(number [, unit]) Converts any ether value value into wei. “wei” are the smallest ethere unit, and you should always make calculations in wei and convert only for display reasons.
    const amount = web3.utils.toWei(price.toString(), "ether");
    const purpose = `Sales of `;
    const contract = await getContract();
    const seller = 0xc1448fd1304cba6b951ac0cc5601f495fa7ea23e;
    console.log(contract);

    await contract.methods
      .payNow(seller, purpose)
      .send({ from: account, value: amount });
    return true;
  } catch (error) {
    alert(error.message, "red");
    console.log(error.message);
  }
};

const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    setGlobalState("connectedAccount", accounts[0]);
  } catch (error) {
    setAlert(JSON.stringify(error), "red");
  }
};

const loadWeb3 = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");

    window.web3 = new Web3(ethereum);
    await ethereum.enable();

    window.web3 = new Web3(window.web3.currentProvider);

    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setGlobalState("connectedAccount", accounts[0]);
  } catch (error) {
    alert("Please connect your metamask wallet!");
  }
};

export { loadWeb3, connectWallet, payWithEthers };
