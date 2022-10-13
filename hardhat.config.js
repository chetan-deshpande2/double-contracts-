require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require("solidity-coverage");
require("hardhat-contract-sizer");
require("hardhat-gas-reporter");
require("dotenv").config();

const { PRIVATE_KEY1, POLYGON_API_KEY, POLYGON_RPC_URL } = process.env;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(process.env.POLYGON_RPC_URL);
  }
});

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    currency: "ETH",
    gasPrice: 21,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  plugins: ["solidity-coverage"],

  networks: {
    hardhat: {},

    matic: {
      url: POLYGON_RPC_URL,
      accounts: [PRIVATE_KEY1],
    },
  },
  etherscan: {
    apiKey: POLYGON_API_KEY,
  },
};
