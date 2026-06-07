require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_RPC_URL || "",
      accounts: process.env.ROPSTEN_PRIVATE_KEY ? [process.env.ROPSTEN_PRIVATE_KEY] : [],
    },
  },
};