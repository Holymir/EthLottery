const ethers = require('ethers');
const log = require('log-to-file');

async function goGoEthLuck() {
    console.log("Start");

    let providers = ethers.providers;
    let provider = providers.getDefaultProvider('mainnet');

    while (true) {
        try {
            let wallet = ethers.Wallet.createRandom();
            let balance = await provider.getBalance(wallet.address);

            if (balance.toString() !== "0") {
                log("Cash Found: - " + balance.toString());
                log(wallet.address);
                log(wallet.privateKey);
                console.log("Check it! ;)");
            }
        } catch (e) {
            log(e);
            goGoEthLuck();
        }
    }
}

goGoEthLuck();




