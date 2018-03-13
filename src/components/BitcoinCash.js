import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class BitcoinCash extends Component {
  render() {
    return (
      <div className="BitcoinCash">
        <h2 id='bitcoinCash' className="content-head is-center"><i className="fab fa-btc" /> Bitcoin Cash</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
          <h3 id='toSatoshi'><code>toSatoshi</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Converting Bitcoin Cash units to satoshi units

        Arguments:
        1. bitcoinCash         unit to be converted

        Result:
        satoshi    bitcoinCash unit converted to satoshis

        BITBOX.BitcoinCash.toSatoshi(9)
        // 900000000
          `}</SyntaxHighlighter>

          <h3 id='toBitcoinCash'><code>toBitcoinCash</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Converting satoshi units to Bitcoin Cash units

        Arguments:
        1. satoshi         unit to be converted

        Result:
        bitcoinCash    satoshi unit converted to Bitcoin Cash

        BITBOX.BitcoinCash.toBitcoinCash(900000000)
        // 9
          `}</SyntaxHighlighter>

          <h3 id='toLegacyAddress'><code>toLegacyAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Converting cashaddr to legacy address format

        Arguments:
        1. address        cashaddr address to be converted

        Result:
        "legacyAddress"    legacy base 58 check encoded address

        BITBOX.BitcoinCash.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
        // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN
          `}</SyntaxHighlighter>

          <h3 id='toCashAddress'><code>toCashAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Converting legacy to cashAddr address format

        Arguments:
        1. address        legacy address to be converted

        Result:
        "cashAddr"    cashAddr encoded address

        BITBOX.BitcoinCash.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
        // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
          `}</SyntaxHighlighter>

          <h3 id='isLegacyAddress'><code>isLegacyAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Detect if legacy base58check encoded address

        Arguments:
        1. address   address to determine

        Result:
        isLegacyAddress     boolean if is legacy address

        BITBOX.BitcoinCash.isLegacyAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
        // false
          `}</SyntaxHighlighter>

          <h3 id='isCashAddress'><code>isCashAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Detect if cashAddr encoded address

        Arguments:
        1. address   address to determine

        Result:
        isCashAddrAddress     boolean if is cashaddr address

        BITBOX.BitcoinCash.isCashAddrAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
        // true
          `}</SyntaxHighlighter>

          <h3 id='isMainnetAddress'><code>isMainnetAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Detect if mainnet address

        Arguments:
        1. address   address to determine

        Result:
        isMainnetAddress     boolean if is mainnet address

        BITBOX.BitcoinCash.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
        // true
          `}</SyntaxHighlighter>

          <h3 id='isTestnetAddress'><code>isTestnetAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Detect if testnet address

        Arguments:
        1. address   address to determine

        Result:
        isMainnetAddress     boolean if is testnet address

        BITBOX.BitcoinCash.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
        //false
          `}</SyntaxHighlighter>

          <h3 id='isP2PKHAddress'><code>isP2PKHAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Detect if p2pkh address

        Arguments:
        1. address   address to determine

        Result:
        isP2PKHAddress     boolean if is p2pkh address

        BITBOX.BitcoinCash.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
        // true
          `}</SyntaxHighlighter>

          <h3 id='isP2SHAddress'><code>isP2SHAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Detect if p2sh address

        Arguments:
        1. address   address to determine

        Result:
        isP2SHAddress     boolean if is p2sh address

        BITBOX.BitcoinCash.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
        // false
          `}</SyntaxHighlighter>

          <h3 id='detectAddressFormat'><code>detectAddressFormat</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Detect address format

        Arguments:
        1. address               address to determine format

        Result:
        "addressFormat"            string of address format

        BITBOX.BitcoinCash.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
        // cashaddr
          `}</SyntaxHighlighter>

          <h3 id='detectAddressNetwork'><code>detectAddressNetwork</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Detect address network

        Arguments:
        1. address               address to determine network

        Result:
        "addressNetwork"            string of address network

        BITBOX.BitcoinCash.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
        // mainnet
          `}</SyntaxHighlighter>

          <h3 id='detectAddressType'><code>detectAddressType</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Detect address network

        Arguments:
        1. address              address to determine network

        Result:
        "addressNetwork"        string of address network

        BITBOX.BitcoinCash.detectAddressType('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
        // p2pkh
          `}</SyntaxHighlighter>

          <h3 id='signMessageWithPrivKey'><code>signMessageWithPrivKey</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Sign message with private key

        Arguments:
        1. privateKeyWIF        private key in wallet import format
        2. message              message to sign

        Result:
        "signature"        cryptographic signature

        BITBOX.BitcoinCash.signMessageWithPrivKey('KxtpRDUJDiutLaTV8Vuavhb6h7zq9YV9ZKA3dU79PCgYmNVmkkvS', "EARTH");
        // IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=
          `}</SyntaxHighlighter>

          <h3 id='verifyMessage'><code>verifyMessage</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Verify message

        Arguments:
        1. address              public cashaddr or legacy address which signed the message
        2. signature            cryptographic signature
        2. message              message to verify

        Result:
        "isVerified"            boolean if message is verified or not

        BITBOX.BitcoinCash.verifyMessage('bitcoincash:qp2zvw3zpk5xx43w4tve7mtekd9kaxwj4uenq9eupv', 'IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=', 'EARTH')
        // true
          `}</SyntaxHighlighter>

          <h3 id='mnemonicWordLists'><code>mnemonicWordLists</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Return mnemonic word lists

        Result:
        wordlists <object>      an object with wordlists in the following languages english (default), japanese, chinese simplified, chinese traditional, french, italian, japanese, korean, spanish

        BITBOX.BitcoinCash.mnemonicWordLists();
        // {
        //   EN: [],
        //   JA: [],
        //   chinese_simplified: [],
        //   chinese_traditional: [],
        //   english: [],
        //   french: [],
        //   italian: [],
        //   japanese: [],
        //   korean: [],
        //   spanish: []
        // }
          `}</SyntaxHighlighter>

          <h3 id='generateMnemonic'><code>generateMnemonic</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Generate entropy

        Arguments:
        1. randomBits <number>   number of random bits of entropy to use. The more bits the longer the mnemonic.
        Entropy (bits)	Mnemonic length (words)
        128             12

        160             15

        192             18

        224             21

        256             24
        2. mnemonic word list <array>

        Result:
        mnemonic <string>      a random mnemonic

        BITBOX.BitcoinCash.generateMnemonic(128);
        // boil lonely casino manage habit where total glory muffin name limit mansion
          `}</SyntaxHighlighter>

          <h3 id='entropyToMnemonic'><code>entropyToMnemonic</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Create mnemonic from entropy

        Arguments:
        1. randomBytes <string>   string of hex encoded random entropy. This entropy can be generated w/ BITBOX.Crypto.randomBytes.
        2. mnemonic word list <array>

        Result:
        mnemonic <string>      a random mnemonic

        BITBOX.BitcoinCash.entropyToMnemonic('f379da02cc426e6e26430d25e6cc372dfd0a1a2e4a33ac4dc6ae6d56017f642d')
        // vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property
          `}</SyntaxHighlighter>

          <h3 id='mnemonicToEntropy'><code>mnemonicToEntropy</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Turn mnemonic to entropy

        Arguments:
        1. mnemonic <string>   a menmonic to turn to entropy.
        2. mnemonic word list <array>

        Result:
        entropy <string>       hex encoded entropy

        BITBOX.BitcoinCash.mnemonicToEntropy('boil lonely casino manage habit where total glory muffin name limit mansion');
        // 1910748dc37683f4b9731c91325a07c3
          `}</SyntaxHighlighter>

          <h3 id='validateMnemonic'><code>validateMnemonic</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Validate mnemonic

        Arguments:
        1. mnemonic <string>   mnemonic phrase
        2. mnemonic word list <array>

        Result:
        valid <boolean>        If the mnemonic is valid

        BITBOX.BitcoinCash.validateMnemonic('boil lonely casino manage habit where total glory muffin name limit mansion')
        // true
          `}</SyntaxHighlighter>

          <h3 id='mnemonicToSeedHex'><code>mnemonicToSeedHex</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Create root seed from mnemonic

        Arguments:
        1. mnemonic <string>   mnemonic phrase

        Result:
        seedHex <string>       seed hex encoded

        BITBOX.BitcoinCash.mnemonicToSeedHex('boil lonely casino manage habit where total glory muffin name limit mansion', '');
        // e906236ab5ebec8fbff9948807a6f5d2aa6f35e8bcbcda99e22f9048323cdc0755b781782ee1cce40007bcf900593ed2667e6e9800d734fa46a8f7f51ec74818
          `}</SyntaxHighlighter>

          <h3 id='mnemonicToSeed'><code>mnemonicToSeed</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Create root seed from mnemonic

        Arguments:
        1. mnemonic <string>   mnemonic phrase

        Result:
        rootSeed               rootSeed

        BITBOX.BitcoinCash.mnemonicToSeed('enable stem left method one submit coach bid inspire cluster armed bracket')
        // <Buffer 0a fa b7 46 8f 0c df 79 0f 0e 44 37 45 0c 33 c3 c8 27 17 42 75 d6 13 02 c3 55 de ef 2e 69 57 e4 f5 dd 55 b6 a8 73 78 6d b8 09 36 75 af 4f 6b 2c 52 63 ... >
          `}</SyntaxHighlighter>

          <h3 id='fromSeedBuffer'><code>fromSeedBuffer</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Create Master Private Key

        Arguments:
        1. rootSeed <Buffer>   root seed buffer
        2. network <string>    optional network. default: 'bitcoin'

        Result:
        HDNode                 HDNode

        BITBOX.BitcoinCash.fromSeedBuffer(rootSeed);
        // HDNode {
        //   keyPair:
        //    ECPair {
        //      d:
        //       BigInteger {
        //         '0': 16165580,
        //         '1': 1698946,
        //         '2': 60730916,
        //         '3': 61153040,
        //         '4': 43535631,
        //         '5': 50362316,
        //         '6': 59565996,
        //         '7': 31216958,
        //         '8': 59585223,
        //         '9': 2863301,
        //         '10': 0,
        //         t: 10,
        //         s: 0 },
        //      compressed: true,
        //      network:
        //       { messagePrefix: 'Bitcoin Signed Message:',
        //         bech32: 'bc',
        //         bip32: [Object],
        //         pubKeyHash: 0,
        //         scriptHash: 5,
        //         wif: 128 } },
        //   chainCode: <Buffer 9e c5 3c 10 2c 6a ea b0 ff 1c d3 1e b4 1b b8 20 f9 dc 7a 32 08 fc 5a 18 ca 5f db ef 09 ea 4c f7>,
        //   depth: 0,
        //   index: 0,
        //   parentFingerprint: 0 }
          `}</SyntaxHighlighter>

          <h3 id='fromWIF'><code>fromWIF</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Create Master Private Key

        Arguments:
        1. privateKeyWIF <string>   Create keypair from private key in wallet import format (WIF)
        2. network <string>         optional network. default: 'bitcoin'

        Result:
        ECPair                 ECPair

        BITBOX.BitcoinCash.fromWIF('KxYoF3rr34fxUtGwfeASBrz6AWLjJCMG5wniooriX8NvHucsTDFz')
        // ECPair {
        //   d:
        //    BigInteger {
        //      '0': 22234870,
        //      '1': 51704986,
        //      '2': 65514685,
        //      '3': 58120869,
        //      '4': 9188204,
        //      '5': 19136219,
        //      '6': 39908188,
        //      '7': 58691735,
        //      '8': 30573386,
        //      '9': 649733,
        //      t: 10,
        //      s: 0 },
        //   compressed: true,
        //   network:
        //    { messagePrefix: 'Bitcoin Signed Message:',
        //      bech32: 'bc',
        //      bip32: { public: 76067358, private: 76066276 },
        //      pubKeyHash: 0,
        //      scriptHash: 5,
        //      wif: 128 } }
          `}</SyntaxHighlighter>

          <h3 id='createHDWallet'><code>createHDWallet</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Create BIP 44 HD Wallet

        Arguments:
        1. configuration    configuration object

        Result:
        [rootSeed, masterPrivateKey, mnemonic, config.HDPath, accounts]

        BITBOX.BitcoinCash.createHDWallet({
        autogenerateHDMnemonic: true,
        autogenerateHDPath: true,
        displayCashaddr: true,
        displayTestnet: false,
        usePassword: false,
        entropy: 16,
        network: 'bitcoin',
        mnemonic: '',
        totalAccounts: 10,
        HDPath: {
        masterKey: "m",
        purpose: "44'",
        coinCode: "145'",
        account: "0'",
        change: "0",
        address_index: "0"
        },
        password: ''
        })
        // [ <Buffer 56 83 45 7c 58 10 af 8a 28 ce e0 c4 15 05 b4 0a 87 51 4b f6 da 2c bd d2 a8 f9 93 34 cb 05 10 60 6a 9a 27 44 05 d9 36 41 2b c2 81 0f 48 43 d8 b5 5b 57 ... >,
        //   HDNode {
        //     keyPair:
        //      ECPair {
        //        d: [BigInteger],
        //        compressed: true,
        //        network: [Object],
        //        __Q: [Point] },
        //     chainCode: <Buffer 57 44 7f da ea e9 03 c8 51 eb 79 da 58 25 58 da fa ef ac 70 1b 5c af af 2b ce d6 05 a5 33 07 94>,
        //     depth: 0,
        //     index: 0,
        //     parentFingerprint: 0 },
        //   'spin find accuse essay valley wedding heavy occur second weekend cruel library',
        //   { masterKey: 'm',
        //     purpose: '44\'',
        //     coinCode: '145\'',
        //     account: '0\'',
        //     change: '0',
        //     address_index: '0' },
        //   [ { title: '',
        //       privateKeyWIF: 'L26K2D4KMtD4iRCYoDeAEjJjsicGL38kzMaNEHEenT62broxazWf',
        //       xpriv: 'xprv9yVkfirgBMhE7EYfKTeSNJXe5XrZ3mSCjPEdLHSizG4cDQJSd5ACVP4zSK5cj9pcL6oE59Ranhdi1LThXDvZ6MExiF4jSC2HnFkC2sXFUS4',
        //       xpub: 'xpub6CV75EPa1jFXKid8RVBSjSUNdZh3TEA46cAE8frLYbbb6CdbAcUT3BPUHbsVd5f2fRfG7ZeqxwsUmfkbLLX39qZ9UFP6m1p8LX5VFT3sZfx',
        //       index: 0 },
        //     { title: '',
        //       privateKeyWIF: 'L15A5qSXxwXVsZJH8ZRWxQkxQjCbyMpLoKRQPv7sR8kJTNbPPQQV',
        //       xpriv: 'xprv9yVkfirgBMhE7vLYY3vTgNaKFJSzikdXQSBT2iLnZi8pr8BnNHDhCwZcRZWcW2xoawCEZT7KvyFEHkA2d9DztZaiPvwNXfFpDizRgpng6cK',
        //       xpub: 'xpub6CV75EPa1jFXLQR1e5TU3WX3oLHV8DMNmf73q6kQ83foivWvupXwkjt6GseFSWPRzfgPNqkfkwpVutgdsdwCbxBAGZiWoH32MCXdhmvYPKa',
        //       index: 1 },
        //     { title: '',
        //       privateKeyWIF: 'L1WWMkN2QeiJVnd7WCCD6zZfeBaqnAtCVkVRY5MDbdNfEkpSNsXB',
        //       xpriv: 'xprv9yVkfirgBMhEBnw2bdBztx5CzL4pKA3aj5RrvZsfvwXD8tqiDfCpKU5w8jHwqnifnFp4svRRQk65wqMWRuVA7QQpFYVExygYT3j5svWSczn',
        //       xpub: 'xpub6CV75EPa1jFXQH1Vhej1G61wYMuJicmS6JMTixHHVH4C1hArmCX4sGQQyzKsQ6vSRkzkGsELcphb6QgcTF4kaj3Le4PWx6r6jaVdzY6FYW1',
        //       index: 2 },
        //     { title: '',
        //       privateKeyWIF: 'Kz8YiPgsadTu8hPWAVroCRAPH5Zqyc4DZHAAPMstBiJEd3ixzwSF',
        //       xpriv: 'xprv9yVkfirgBMhEDcsTLyDEdkDG1eZRyQUtcvoRJcE1Awe1cLGpHXFdMaf28UKjiSDHuHGK1vFGnwCh6QxRhDnh9gJip5H7aRXzVcLcXGMPEjS',
        //       xpub: 'xpub6CV75EPa1jFXS6wvSzkEzt9zZgPvNsCjz9j26zdcjHAzV8bxq4ZsuNyVynLK8Rr1UGch5X4hDNMZ7XiLRXbYx3ASfDEUoUaeRW3vuUyqrn7',
        //       index: 3 },
        //     { title: '',
        //       privateKeyWIF: 'L4cUDGpdkT9YoVJg4FnHdZrScLmFesYRNoMXhDew6ZnLN54Nz8pk',
        //       xpriv: 'xprv9yVkfirgBMhEHBN1ekKDeADuFjbhsT3JhienJKJNtQG65umrgGmyCMHUeQ5MckBvHJBoWk4arPgwnNpPohNFGT35x3FfWf1wQCVmTrmKW58',
        //       xpub: 'xpub6CV75EPa1jFXVfSUkmrE1JAdomSCGumA4waP6hhzSjo4xi71Dp6Dk9bxVgRtokGRB74MNzmUZkWBhV2fr7V1JA15YXKr5Lk4X4MkBdcABQb',
        //       index: 4 },
        //     { title: '',
        //       privateKeyWIF: 'KxuQ2B4YrTT6yCCi5za4eoYSsBeLdzzDVDiFHfGgSQNBzJ6wB9T7',
        //       xpriv: 'xprv9yVkfirgBMhEJ66Hj7Tz9ekkB2FtmS4Quqedbui4sGur9gk4UR1wYqkgagfVWL2WVBzgNSVqxKGnpKAbxawo1AWFRiTrR7DZZ2uawqzUcki',
        //       xpub: 'xpub6CV75EPa1jFXWaAkq8zzWnhUj46PAtnGH4aEQJ7gRcSq2V5D1xLC6e5ARyd2mmshGXMqZfFDmdQt6mtbDeUdYVDB1q2UNcHLXJGaC5GyPom',
        //       index: 5 },
        //     { title: '',
        //       privateKeyWIF: 'L4qWFHSzueF47Lzv64yY2fTv1VT1uzzNfVJa4TBmHBvQQ1a3Useh',
        //       xpriv: 'xprv9yVkfirgBMhEMyAUVkf21ARXXt1hJe7Hj174CRV7FZFFJRbYGo4WwYJ4fHLgpj1UrZwV2MSp2RgMPMzpSMKPbGYo6UHF1SuMuib6gKLJFLU',
        //       xpub: 'xpub6CV75EPa1jFXaTEwbnC2NJNG5urBi6q96E2ezotiotnEBDvgpLNmVLcYWYfxheRBStYabwEM4ihg3nJdtFsSFe7rqqcJdqpHspv8dWyQ72F',
        //       index: 6 },
        //     { title: '',
        //       privateKeyWIF: 'L5i4NHeUNqKygxsALbF7gLV2rgT2QnkKUwtBQhzx2NKWPhTx75Up',
        //       xpriv: 'xprv9yVkfirgBMhEPcY3Dd7JkL5wsoz1bx7C4h9poxet7v3Xjkgu2m9Q3rPhXHUBfRtzkzNd19jccmciNNbpCtDKHU7Kd6bjoTFkfftGMzZdJpG',
        //       xpub: 'xpub6CV75EPa1jFXc6cWKeeK7U2gRqpW1Qq3Rv5RcM4VgFaWcZ23aJTebeiBNXda4cjSSMykMnnr9VtrXzDab48LDFt84WaXfRAJJVXNqwfuwKm',
        //       index: 7 },
        //     { title: '',
        //       privateKeyWIF: 'L44unYGMdMv2XxY7FNqqsmQZSegrJsPgc1zBRjPakWsviVf5QGne',
        //       xpriv: 'xprv9yVkfirgBMhETYcXmDAuKTEX7rJhDPthVZoSgbbUTbLAM8SuisKcvE45oxXGUZnNeRpFwdCdW4euTqiiS5Pt8h9AzmW6a9mCFWrbn8XCBSX',
        //       xpub: 'xpub6CV75EPa1jFXg2gzsEhugbBFft9BcrcYrnj3Uz161vs9Dvn4GQdsU2NZfDjb4mQdwUNzY4mYUYSCKxQeavEKgBpTfQJ1HGRUa3TUgN6rDKe',
        //       index: 8 },
        //     { title: '',
        //       privateKeyWIF: 'L2pc9nbifadeKgb6KcMkPhnQY48dwy9GqMxsgQ5evEXXhr3hma1J',
        //       xpriv: 'xprv9yVkfirgBMhEUTbLKjA22tp3BKtyENaQKuTTbga3JREdkEG8fL25MVpceE116mWeYRDNFSmXbgtXseVGVw2w5h3vhGd26gsEgJRrswpbAJL',
        //       xpub: 'xpub6CV75EPa1jFXgwfoRkh2Q2kmjMjTdqJFh8P4Q4yerkmcd2bHCsLKuJ96VTGWipc58bKkK5aYNiEwVs5gMbFbncmXg18j5cAjZBpJkjsTSTS',
        //       index: 9 } ] ]
          `}</SyntaxHighlighter>

          <h3 id='fromXPub'><code>fromXPub</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Generates an external change address for an extended public key (xpub)

        Arguments:
        1. xpub <string>                 extended public key to be used
        2. index <number> optional       index of external change address. Default is 0

        Result:
        changeAddress <string>      cashaddr encoded change address

        for(let i = 0; i <= 4; i++) {
        BITBOX.BitcoinCash.fromXPub("xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA", i)
        }
        // bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh
        // bitcoincash:qrr2suh9yjsrkl2qp3p967uhfg6u0r6xxsn9h5vuvr
        // bitcoincash:qpkfg4kck99wksyss6nvaqtafeahfnyrpsj0ed372t
        // bitcoincash:qppgmuuwy07g0x39sx2z0x2u8e34tvfdxvy0c2jvx7
        // bitcoincash:qryj8x4s7vfsc864jm0xaak9qfe8qgk245y9ska57l
          `}</SyntaxHighlighter>

          <h3 id='keypairsFromMnemonic'><code>keypairsFromMnemonic</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Returns an array of privateKeyWIF/publicAddress pairs. It generates the addresses as the nth external change address of the first account from that mnemonic w/ this derivation path: m/44'/145'/0'/0/n

        Arguments:
        1. mnemonic <string>                        mnemonic to use
        2. numberOfKeypairs <number> optional       number of keypairs to return. Default is 1

        Result:
        keypairs <array>                            array of privateKeyWIF/publicAddress pairs

        // First create a mnemonic from 32 bytes of random entropy
        let mnemonic = BITBOX.BitcoinCash.entropyToMnemonic(32);
        // symptom owner ridge follow buffalo choose stem depend million jar lemon claw color credit remove model pudding slot fiber west heavy ranch bird wet

        // Then call keypairsFromMnemonic and pass in your mnemonic and how many keypairs you'd like
        BITBOX.BitcoinCash.keypairsFromMnemonic(mnemonic, 5))
        // it returns the following array.

        [ { privateKeyWIF: 'Kz6b1TszeUGaypUpRCnfD2L17bQSW93o4j3VMpvT5e5BqaF9XkyP',
        address: 'bitcoincash:qp8a4vzfk9kstwsl4ud4ym3z2tckdf7a4gfwkxvtfq' },
        { privateKeyWIF: 'L5ZHQ2BdTQaTq2A8HNsdkHYKPLsfrHgvJyrVxHFFZyN9K3fmeoiG',
        address: 'bitcoincash:qq5nxh27up6hcm0nn36lxtu7n8a7l6jsj52s8dvtex' },
        { privateKeyWIF: 'KwyY3Z7STwbxnmQXe1vVmXhT8Y3W1BJQpRgteRhTWCyvvdro2j33',
        address: 'bitcoincash:qzj9n9jmnmyeqfdc5k65kxta3c7ch0g3wudeyjeg3y' },
        { privateKeyWIF: 'KxMG2mjL8DZQCaoXz8aFw5XYqguKiDHBb16JwDQMGa7ga7kfy9cE',
        address: 'bitcoincash:qrhj0lesz6sn7l4hc5arh5tt8k583ahdaun6mcdjx8' },
        { privateKeyWIF: 'Kz3qqJ8GFSSbDrBqtV7mfhBoDPkSmMKtp7Yk62psDgmRjyU8id8J',
        address: 'bitcoincash:qp8xjllc75c2hgrpjy3f6kegtfqgmn72dqs0y20anv' } ]
          `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default BitcoinCash;
