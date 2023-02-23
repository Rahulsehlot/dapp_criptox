const hre = require("hardhat");

async function main() {
  // Get the contract
  const buysProduct = await hre.ethers.getContractFactory("Store");
  const buysproduct = await buysProduct.deploy();
  // await buysProduct.deployed();
  console.log("Deployede to" + buysproduct.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
