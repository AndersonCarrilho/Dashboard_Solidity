require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const ALCHEMY_API_KEY_1 = process.env.ALCHEMY_API_KEY_1;
const ALCHEMY_API_KEY_2 = process.env.ALCHEMY_API_KEY_2;
const ALCHEMY_API_KEY_3 = process.env.ALCHEMY_API_KEY_3;
const ALCHEMY_API_KEY_4 = process.env.ALCHEMY_API_KEY_4;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY_1}`,
      },
      mining: {
        auto: true,
        interval: 0
      }
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY_1}`,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
    sepolia: {
      url: `https://eth-sepolia.alchemyapi.io/v2/${ALCHEMY_API_KEY_2}`,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
    fantom: {
      url: `https://fantom-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY_3}`,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
    bnb: {
      url: "https://bsc-dataseed1.binance.org:443",
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
    polygon: {
      url: `https://polygon-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY_4}`,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};