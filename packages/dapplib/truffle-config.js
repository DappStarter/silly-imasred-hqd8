require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture story repeat magic hour grace canoe army gas'; 
let testAccounts = [
"0x038d02e7e47511b6abe3efa260869cc6f092dd06f3c4e4284a2a12fd34d358ac",
"0x407748f0eb5e5a4ad4c8e7361d6ce0b46da58555165a755b753e79b3a917cb97",
"0xb6f0b9816c0124101532ed3dc23e9e361b89dbabcbac17cac00ec1f3722c5637",
"0x5fa0e3b4b08e9bb3c6dd0cc1f467588199a501231134d941c9cc756a503a5f47",
"0xb05120c3aaaa99e983420203efe60b1061031279c85ccc26d552e1fd767456eb",
"0x5a071facbf6f9fc8b796443c4707b7bf574ab09a418d08d9590803dc77090cc8",
"0xcf59a65002363e0d9a8c1ce45c18d6c3f4cc8684d13c2452116d4c59473d5dad",
"0xa3764c8eb944cec5a224ce65ccbcfb3b26348fdb7902e6e005e769657b86b195",
"0xf635f787c19a81b926e3c63e34e87d63d532367f0a9a34861d1138f35df61f8f",
"0xad2779468f483e2b9ce537802357ef49ad4bb7206eb645197c4f153114c3b4ab"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


