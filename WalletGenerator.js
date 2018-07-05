const ethers = require('ethers');

let money = [];
let counter = 1;

function crateWallet() {
    return ethers.Wallet.createRandom();
}

async function connectToEthereum() {
    console.log("Start");

    let providers = ethers.providers;
    let provider = providers.getDefaultProvider('mainnet');

    while (true) {
        counter++;
        let wallet = crateWallet();
        let balance = await provider.getBalance(wallet.address);
        if (balance.toString() !== "0") {
            money.push(wallet);
            console.log("Cash Found");
            console.log(balance);
            console.log(wallet);
        }
        if (counter % 1000 === 1) {
            console.log("Damn, " + (counter - 1) + " wallets was searched");
        }
    }
}

connectToEthereum();




