require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
//To hide details, we can either use a secret file or a .env file, 
//For the project ID, i used a .env file but for the accountkey i used a secret file

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [`0x${process.env.ACCOUNT_KEY}`]
    }, 
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [`0x${process.env.ACCOUNT_KEY}`]
    }
  },
  solidity: "0.8.4",
};
