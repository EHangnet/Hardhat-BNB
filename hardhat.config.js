require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",

  networks: {
    BSC: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [""],
    }
  },
  etherscan: {
    apiKey: "UX6FTV9J4ZACNEF1TEEUPWKZ6DW2J56CKX",
  },
};