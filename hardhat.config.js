// require('@nomiclabs/hardhat-waffle')
// require('dotenv').config()

// module.exports = {
//   defaultNetwork: 'localhost',
//   networks: {
//     hardhat: {},
//     localhost: {
//       url: 'http://127.0.0.1:8545',
//     },
//   },
//   solidity: {
//     version: '0.8.17',
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   mocha: {
//     timeout: 40000,
//   },
// }
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const { ethers } = require("ethers");

const mnemonic = process.env.MNEMONIC;
const project_id = process.env.PROJECT_ID;

// Function to get wallet from mnemonic
function getWallets() {
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  return [wallet.privateKey];
}
module.exports = {
  solidity: "0.8.7", 
  networks: {
    // hardhat: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${project_id}`,
      accounts: getWallets()
    }
  },
};
