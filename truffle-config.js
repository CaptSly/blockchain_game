const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "item vocal opinion shy neglect cheese spawn nut inflict pizza only suggest";

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/9013645911254d9a911327a6d61c2703")
      },
      network_id: 3
    }
  }
};