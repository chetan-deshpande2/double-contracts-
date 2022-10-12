const { ethers, s, upgrades } = require("hardhat");

const ownersAddress = "0x35B22c72cA15ca5dC83A58A10Df0605C88aEC61a";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Market = await ethers.getContractFactory("Market");

  const v1contracts = await upgrades.deployProxy(
    Market,
    [
      "0x35b22c72ca15ca5dc83a58a10df0605c88aec61a",
      "0x35b22c72ca15ca5dc83a58a10df0605c88aec61a",
    ],
    { initializer: "Initialize", unsafeAllow: ["delegatecall"] }
  );
  const market = await Market.deploy();

  console.log("Market address:", market.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
