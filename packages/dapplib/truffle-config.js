require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remind prosper install desert flock stove'; 
let testAccounts = [
"0x2a3d480ff51024f2d8f4b99da56f38604e89167e9fd62cf3b5d2151cb80be7de",
"0x413bf11c96f37c2302a78cafa6abd7cc04d1fd8e0678c3f4a638f312506a4d10",
"0x75a3694f49bfa141f7d1472685e3fec296f7b70e69572ce9c8ddecc7efb692e2",
"0x5af9670efaf2a09662c3216044eedc7dc80919063327b039932f286a0b425b0c",
"0x35f156749341be8ad28de38bae5a886e0748f5b15eee3dd381c846cc1216e847",
"0x1fa2bac86f44af6c3f0ab49e1df2e837ca5e5cc8083e335ede46dc67393db7af",
"0x69959079342e57666ed110da655b3202cbf72624ba12010222d724b8c0b6fa99",
"0x2ae7caad232fe86c4108bf052462573b89373fac73ca99b7139daf0640479a4c",
"0xb28ae0385b372d8b377c42b099a7e3dcfb800a6a16aa61637bad42059b0a4437",
"0x42e4cfc7a5a80b465d0b61c91c8498154a8d2f11a0563cf1e56f9b5ee46bd42e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

