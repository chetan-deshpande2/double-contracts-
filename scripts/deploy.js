const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    `Deploying Marketplace contract with the account: ${deployer.address}`
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Market = await ethers.getContractFactory("Market");

  const market = await upgrades.deployProxy(
    Market,
    [
      "0x3FeDDA998FF6fA5E1DB0eA440372cDd9cAA063b0",
      "0x3FeDDA998FF6fA5E1DB0eA440372cDd9cAA063b0",
    ],
    { initializer: "initialize", unsafeAllow: ["delegatecall"] }
  );

  await market.deployed();

  console.log("Marketplace deployed to address:", market.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
