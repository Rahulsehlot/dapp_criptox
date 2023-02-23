const hre = require("hardhat");

// Get the wallet palance
async function getBalance(address) {
  const balanceBigInit = await hre.waffle.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInit);
}

// Price the wallet balance
async function printBalance(addresses) {
  let idx = 0;
  for (const address of addresses) {
    console.log(`address ${idx} balance`, await getBalance(address));
  }
}

async function main() {
  //  Get accounts
  const [owner, buyer] = await hre.ethers.getSigners();

  // Get the contract
  const buysProduct = await hre.ethers.getContractFactory("Store");
  const buysproduct = await buysProduct.deploy();
  // await buysProduct.deployed();
  console.log("Deployede to" + buysproduct.address);

  const addresses = [owner.address, buyer.address, buysproduct.address];
  console.log("Done");
  await printBalance(addresses);

  const price = { value: hre.ethers.utils.parseEther("2") };
  await buysproduct.connect(buyer).buysProduct("Name", price);
  await buysproduct.connect(buyer).buysProduct("Name", price);
  await buysproduct.connect(buyer).buysProduct("Name", price);

  //
  console.log("bought product");
  await printBalance(addresses);

  await buysproduct.connect(owner).withdrawTips();
  console.log("Withdraw Money");
  await printBalance(addresses);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
