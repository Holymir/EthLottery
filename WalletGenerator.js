const ethers = require('ethers');

let counter = 1;


async function goGoEthLuck() {
    console.log("Start");

    let providers = ethers.providers;
    let provider = providers.getDefaultProvider('mainnet');

    while (true) {
        counter++;
        let wallet = ethers.Wallet.createRandom();
        let balance = await provider.getBalance(wallet.address);

        if (balance.toString() !== "0") {
            console.log("Cash Found: - " + balance.toString());
            console.log(wallet);
        }
        if (counter % 10000 === 1) {
            console.log("Damn, " + (counter - 1) + " wallets was searched");
        }
    }
}

goGoEthLuck();




