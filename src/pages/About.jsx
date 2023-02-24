import React from "react";
import a1 from "../images/about.jpeg";

const About = () => {
  return (
    <>
      <div className="container h-[38rem] w-auto p-5 flex">
        <div className="container w-1/2 p-2 ml-2">
          <h1 className="text-3xl text-violet-900 font-bold p-0.5">ABOUT US</h1>
          <p className=" text-xl font-normal text-gray-600">
            Criftoz is an Indian online non-fungible token marketplace
            headquartered in Bnaglore City. The company was founded by Rahul
            Jain, Rohit Kumar and Milton Mendonsa in 2023. Criftoz offers a
          </p>
          <p className=" text-xl font-normal text-gray-600">
            Our NFT website, where we are dedicated to bringing you the most
            innovative and exciting NFT projects in the blockchain world. Our
            platform offers a unique opportunity for collectors
          </p>
          <p className=" text-xl font-normal text-gray-600">
            Our mission is to provide a seamless and user-friendly experience
            for everyone interested in the world of NFTs. We believe that NFTs
            are the future of digital ownership and have the potential to
            revolutionize the way we buy, sell, and trade assets. Our platform
            features a curated selection of NFT projects from the most talented
            creators and artists from around the world. Whether you're
            interested in collecting digital art, music, or gaming assets,
            you'll find something that suits your tastes and preferences. We
            also offer a secure and easy-to-use marketplace where you can buy
            and sell NFTs with ease. Our platform is designed with the latest
            blockchain technology to ensure that all transactions are
            transparent, secure, and immutable.
          </p>
        </div>
        <div className="container w-1/2 mr-10 mt-10">
          <img src={a1} alt="about" className="h-[32rem]" />
        </div>
      </div>
    </>
  );
};

export default About;
