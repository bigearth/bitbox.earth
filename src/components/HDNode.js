import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class HDNode extends Component {
  componentDidMount() {
    document.title = "HDNode - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      // getCashAddress
      // nextChainAddress
      <div className="HDNode">
        <h2 id='HDNode' className="content-head is-center"><i className="fas fa-code-branch" /> HDNode</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/hdnode">HDNode</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='fromSeedBuffer'><code>fromSeedBuffer</code></h3>
            <p>
          Create HDNode from Seed Buffer
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          rootSeed <code>Buffer</code>   root seed buffer
              </li>
              <li>
          network <code>string</code>    optional network. default: 'bitcoin'
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          HDNode                 HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
            `}</SyntaxHighlighter>

            <h3 id='fromSeedHex'><code>fromSeedHex</code></h3>
            <p>
          Create HDNode from Seed Hex
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          rootSeed <code>string</code>:   root seed hex
              </li>
              <li>
          network <code>string</code>:    optional network. default: 'bitcoin'
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          HDNode                 HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // generate entropy
    let mnemonic =  BITBOX.Mnemonic.generateMnemonic(128)
    // create seed hex from mnemonic
    let seedHex = BITBOX.Mnemonic.mnemonicToSeedHex(mnemonic);
    // create HDNode from seed hex
    let hdNode = BITBOX.HDNode.fromSeedHex(seedHex)

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed hex from mnemonic
    let seedHex = BITBOX.Mnemonic.mnemonicToSeedHex(mnemonic);
    // create HDNode from seed hex
    let hdNode = BITBOX.HDNode.fromSeedHex(seedHex)
            `}</SyntaxHighlighter>

            <h3 id='derive'><code>derive</code></h3>
            <p>
          Derive non hardened child HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          num <code>number</code>: number of child node. Ex: 0
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          HDNode                 HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // derive unhardened child HDNode
    let childNode = hdNode.derive(0);
            `}</SyntaxHighlighter>

            <h3 id='deriveHardened'><code>deriveHardened</code></h3>
            <p>
          Derive hardened child HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          num <code>number</code>: number of child node. Ex: 0
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          HDNode                 HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // derive hardened child HDNode
    let childNode = hdNode.deriveHardened(0);
            `}</SyntaxHighlighter>

            <h3 id='derivePath'><code>derivePath</code></h3>
            <p>
          Derive child HDNode from path
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          path <code>string</code>: path of child hd node. Ex: "m/44'/145'/0'"
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          HDNode                 HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // derive hardened child HDNode
    let childNode = hdNode.derivePath("m/44'/145'/0'");
            `}</SyntaxHighlighter>

            <h3 id='toLegacyAddress'><code>toLegacyAddress</code></h3>
            <p>
          Get legacy address of HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            legacyAddress <code>string</code>:     legacy base58check encoded address of HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to legacy address
    let address = BITBOX.HDNode.toLegacyAddress(hdNode);
    // 14apxtw2LDQmXWsS5k4JEhG93Jzjswhvma

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to cash address
    let address = BITBOX.HDNode.toLegacyAddress(hdNode);
    // 14mVsq3H5Ep2Jb6AqoKsmY1BFHKCBGPDLi
            `}</SyntaxHighlighter>

            <h3 id='toCashAddress'><code>toCashAddress</code></h3>
            <p>
          Get cash address of HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            cashAddress <code>string</code>:     cashaddr encoded address of HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to cash address
    let address = BITBOX.HDNode.toCashAddress(hdNode);
    // bitcoincash:qqrz6kqw6nvhwgwrt4g7fggepvewtkr7nukkeqf4rw

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to cash address
    let address = BITBOX.HDNode.toCashAddress(hdNode);
    // bitcoincash:qq549jxsjv66kw0smdju4es2axnk7hhe9cquhjg4gt
            `}</SyntaxHighlighter>

            <h3 id='toWIF'><code>toWIF</code></h3>
            <p>
          Get private key in wallet import format (WIF) of HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            privateKeyWIF <code>string</code>:     private key in wallet import format (WIF) of HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to WIF
    let privateKeyWIF = BITBOX.HDNode.toWIF(hdNode);
    // L5E8QjFnLukp8BuF4uu9gmvvSrbafioURGdBve5tA3Eq5ptzbMCJ

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to WIF
    let privateKeyWIF = BITBOX.HDNode.toWIF(hdNode);
    // KwobPFhv3AuXc3ps6YtWfMVRpLBDBA7jnJddurfELTyTNcFhZYpJ
            `}</SyntaxHighlighter>

            <h3 id='toXPub'><code>toXPub</code></h3>
            <p>
            Get extended public key of HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            xpub <code>string</code>:     extended public key of HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to extended public key
    let xpub = BITBOX.HDNode.toXPub(hdNode);
    // xpub661MyMwAqRbcG4CnhNYoK1r1TKLwQQ1UdC3LHoWFK61rsnzh7Hx35qQ9Z53ucYcE5WvA7GEDXhqqKjSY2e6Y8n7WNVLYHpXCuuX945VPuYn

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to extended public key
    let xpub = BITBOX.HDNode.toXPub(hdNode);
    // xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ
            `}</SyntaxHighlighter>

            <h3 id='toXPriv'><code>toXPriv</code></h3>
            <p>
            Get extended private key of HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            xpriv <code>string</code>:     extended private key of HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to extended private key
    let xpriv = BITBOX.HDNode.toXPriv(hdNode);
    // xprv9s21ZrQH143K2eMCcbT4qwwRhw6qZaPaEDWB792bnrxQZPoP2JUk4kfEx9eeV1uGTAWAfCqYr4wDWo52qALiukizKwQzvEyNR1fWZJi97Kv

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to extended private key
    let xpriv = BITBOX.HDNode.toXPriv(hdNode);
    // xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v
            `}</SyntaxHighlighter>

            <h3 id='toPublicKeyBuffer'><code>toPublicKeyBuffer</code></h3>
            <p>
            Get the public key of an HDNode as a buffer
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            publicKeyBuffer <code>string</code>:     public key of HDNode as a buffer
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create root seed encoded in hex from mnemonic
    let rootSeedHex = BITBOX.Mnemonic.mnemonicToSeedHex(mnemonic);
    // create HDNode from root seed hex
    let hdNode = BITBOX.HDNode.fromSeedHex(rootSeedHex);
    // create public key buffer from HDNode
    let publicKeyBuffer = BITBOX.HDNode.toPublicKeyBuffer(hdNode);
    // <Buffer 03 3e 39 d6 ed 07 31 54 63 70 e2 e9 20 6d 31 dd d9 80 b5 39 5a ea d5 9b 3a 53 49 99 99 1a 20 4c 59>

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // create public key buffer from HDNode
    let publicKeyBuffer = BITBOX.HDNode.toPublicKeyBuffer(hdNode);
    // <Buffer 02 87 0e 84 f6 88 75 0e f7 e9 57 51 57 5c 04 51 e2 c0 e8 bb 9c 75 fc 01 f2 af 3d 5b 7f cd f0 f8 6d>
            `}</SyntaxHighlighter>

            <h3 id='toPublicKeyHex'><code>toPublicKeyHex</code></h3>
            <p>
            Get the public key of an HDNode encoded as hex
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            publicKeyHex <code>string</code>:     public key of an HDNode encoded as hex
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create root seed encoded in hex from mnemonic
    let rootSeedHex = BITBOX.Mnemonic.mnemonicToSeedHex(mnemonic);
    // create HDNode from root seed hex
    let hdNode = BITBOX.HDNode.fromSeedHex(rootSeedHex);
    // create public key buffer from HDNode
    let publicKeyHex = BITBOX.HDNode.toPublicKeyHex(hdNode);
    // 03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // create public key buffer from HDNode
    let publicKeyHex = BITBOX.HDNode.toPublicKeyHex(hdNode);
    // 03a8cf3ca53852260b74a0d32f2372a9f86e7cda7cec6b19a469f32c812bfc606e
            `}</SyntaxHighlighter>

            <h3 id='toIdentifier'><code>toIdentifier</code></h3>
            <p>
            hash160 of Node&rsquo;s public key. The same value you would see in a scriptPubKey.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdnode <code>HDNode</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            identifier <code>string</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // mainnet
    let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
    let node = BITBOX.HDNode.fromXPub(xpub);
    let identifier = BITBOX.HDNode.toIdentifier(node);
    // <Buffer cd d4 84 1d 2e 96 bf bf f7 9c d1 f4 a6 75 22 1c 7f 67 88 9c>
    // the same as if we hash160ed it's publicKey
    let publicKeyBuffer = BITBOX.HDNode.toPublicKeyBuffer(node);
    let hash160 = BITBOX.Crypto.hash160(publicKeyBuffer);
    // <Buffer cd d4 84 1d 2e 96 bf bf f7 9c d1 f4 a6 75 22 1c 7f 67 88 9c>

    // testnet
    let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
    let node = BITBOX.HDNode.fromXPub(xpub);
    let identifier = BITBOX.HDNode.toIdentifier(node);
    // <Buffer e1 8e 20 e3 f8 f1 c0 53 e6 1f 9e 3a 58 8e 71 f5 0b 8d 2d c4>
    // the same as if we hash160ed it's publicKey
    let publicKeyBuffer = BITBOX.HDNode.toPublicKeyBuffer(node);
    let hash160 = BITBOX.Crypto.hash160(publicKeyBuffer);
    // <Buffer e1 8e 20 e3 f8 f1 c0 53 e6 1f 9e 3a 58 8e 71 f5 0b 8d 2d c4>
            `}</SyntaxHighlighter>

            <h3 id='fromXPriv'><code>fromXPriv</code></h3>
            <p>
            Generate HDNode from extended private key
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            xpriv: extended private key
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            hdNode <code>HDNode</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create hdNode from xpriv
    let hdNode = BITBOX.HDNode.fromXPriv('xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v');

    // again
    let hdNode = BITBOX.HDNode.fromXPriv('xprv9s21ZrQH143K2eMCcbT4qwwRhw6qZaPaEDWB792bnrxQZPoP2JUk4kfEx9eeV1uGTAWAfCqYr4wDWo52qALiukizKwQzvEyNR1fWZJi97Kv');
            `}</SyntaxHighlighter>

            <h3 id='fromXPub'><code>fromXPub</code></h3>
            <p>
            Generate HDNode from extended public key
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            xpub: extended public key
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            hdNode <code>HDNode</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create hdNode from xpub
    let hdNode = BITBOX.HDNode.fromXPub('xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ');

    // again
    let hdNode = BITBOX.HDNode.fromXPub('xpub661MyMwAqRbcG4CnhNYoK1r1TKLwQQ1UdC3LHoWFK61rsnzh7Hx35qQ9Z53ucYcE5WvA7GEDXhqqKjSY2e6Y8n7WNVLYHpXCuuX945VPuYn');
            `}</SyntaxHighlighter>

            <h3 id='isPublic'><code>isPublic</code></h3>
            <p>
          Check if an HDNode can only derive public keys and children
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdnode <code>HDNode</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            isPublic <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // mainnet xpub
    let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
    let node = BITBOX.HDNode.fromXPub(xpub);
    BITBOX.HDNode.isPublic(node);
    // true

    // mainnet xpriv
    let xpriv = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
    let node = BITBOX.HDNode.fromXPriv(xpriv);
    BITBOX.HDNode.isPublic(node);
    // false

    // testnet xpub
    let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
    let node = BITBOX.HDNode.fromXPub(xpub);
    BITBOX.HDNode.isPublic(node);
    // true

    // testnet xpriv
    let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
    let node = BITBOX.HDNode.fromXPriv(xpriv);
    BITBOX.HDNode.isPublic(node);
    // false
            `}</SyntaxHighlighter>

            <h3 id='isPrivate'><code>isPrivate</code></h3>
            <p>
          Check if an HDNode can derive both public and private keys and children
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdnode <code>HDNode</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            isPrivate <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // mainnet xpub
    let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
    let node = BITBOX.HDNode.fromXPub(xpub);
    BITBOX.HDNode.isPrivate(node);
    // false

    // mainnet xpriv
    let xpriv = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
    let node = BITBOX.HDNode.fromXPriv(xpriv);
    BITBOX.HDNode.isPrivate(node);
    // true

    // testnet xpub
    let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
    let node = BITBOX.HDNode.fromXPub(xpub);
    BITBOX.HDNode.isPrivate(node);
    // false

    // testnet xpriv
    let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
    let node = BITBOX.HDNode.fromXPriv(xpriv);
    BITBOX.HDNode.isPrivate(node);
    // true
            `}</SyntaxHighlighter>

            <h3 id='createAccount'><code>createAccount</code></h3>
            <p>
            Create <a href='https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#the-default-wallet-layout'>BIP32</a> account. Has `getChainAddress` and `nextChainAddress` helper methods.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            hdNodes: Array of HDNodes
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            account
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create root seed buffer
    let rootSeedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create master hd node
    let masterHDNode = BITBOX.HDNode.fromSeedBuffer(rootSeedBuffer);
    // derive child node
    let childNode = masterHDNode.derivePath("m/44'/145'/0'/0");
    // create account
    let account = BITBOX.HDNode.createAccount([childNode]);
            `}</SyntaxHighlighter>

            <h3 id='getChainAddress'><code>getChainAddress</code></h3>
            <p>
            Returns the latest address from account
            </p>
            <h4>Result</h4>
            <p>
            address
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create root seed buffer
    let rootSeedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create master hd node
    let masterHDNode = BITBOX.HDNode.fromSeedBuffer(rootSeedBuffer);
    // derive child node
    let childNode = masterHDNode.derivePath("m/44'/145'/0'/0");
    // create account
    let account = BITBOX.HDNode.createAccount([childNode]);
    account.getChainAddress(0)
    // 1EsibxXqzxzcor7eS34dSGrZp1kb3nQFFr
            `}</SyntaxHighlighter>

            <h3 id='nextChainAddress'><code>nextChainAddress</code></h3>
            <p>
            Moves the most recent address forward for account
            </p>
            <h4>Result</h4>
            <p>
            address
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create root seed buffer
    let rootSeedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create master hd node
    let masterHDNode = BITBOX.HDNode.fromSeedBuffer(rootSeedBuffer);
    // derive child node
    let childNode = masterHDNode.derivePath("m/44'/145'/0'/0");
    // create account
    let account = BITBOX.HDNode.createAccount([childNode]);
    account.getChainAddress(0)
    // 1EsibxXqzxzcor7eS34dSGrZp1kb3nQFFr
    account.nextChainAddress(0)
    account.getChainAddress(0)
    // 1JBApcAMD3riimPxABg2pNvwLumP9DEpxD
            `}</SyntaxHighlighter>

            <h3 id='signHex'><code>signHex</code></h3>
            <p>
          Sign 32 byte hash encoded as hex
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdnode <code>HDNode</code>
              </li>
              <li>
          hex <code>string</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            signature <code>Object</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // mainnet xpriv
    let xpriv = 'xprv9z2uWrGjbYPxc728rvtMi4jt4SudRiSfYn6Tdif5XN17pJ1NTbHoHK6JePkPLY1NHXLaQcA6sWudpZDm7DwKhbsGQieAp9wx46Wbio4iXg9';
    // hdnode from xpriv
    let hdnode = BITBOX.HDNode.fromXPriv(xpriv);
    // 32 byte hex
    let hex = BITBOX.Crypto.sha256('EARTH');
    // sign
    BITBOX.HDNode.signHex(hdnode, hex);

    // testnet xpriv
    let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
    // hdnode from xpriv
    let hdnode = BITBOX.HDNode.fromXPriv(xpriv);
    // 32 byte hex
    let hex = BITBOX.Crypto.sha256('EARTH');
    // sign
    BITBOX.HDNode.signHex(hdnode, hex);
            `}</SyntaxHighlighter>

            <h3 id='signBuffer'><code>signBuffer</code></h3>
            <p>
          Sign 32 byte hash encoded as a buffer
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdnode <code>HDNode</code>
              </li>
              <li>
          buffer <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            signature <code>Object</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // mainnet xpriv
    let xpriv = 'xprv9z2uWrGjbYPxc728rvtMi4jt4SudRiSfYn6Tdif5XN17pJ1NTbHoHK6JePkPLY1NHXLaQcA6sWudpZDm7DwKhbsGQieAp9wx46Wbio4iXg9';
    // hdnode from xpriv
    let hdnode = BITBOX.HDNode.fromXPriv(xpriv);
    // 32 byte buffer
    let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
    // sign
    BITBOX.HDNode.signBuffer(hdnode, buf);

    // testnet xpriv
    let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
    // hdnode from xpriv
    let hdnode = BITBOX.HDNode.fromXPriv(xpriv);
    // 32 byte buffer
    let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
    // sign
    BITBOX.HDNode.signBuffer(hdnode, buf);
            `}</SyntaxHighlighter>

            <h3 id='verifyHex'><code>verifyHex</code></h3>
            <p>
          Verify signed 32 byte hash encoded as hex
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdnode <code>HDNode</code>
              </li>
              <li>
          hex <code>String</code>
              </li>
              <li>
          signature <code>Object</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            verified <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // mainnet xprivs
    let xpriv1 = 'xprv9ys4cvcoU8RoqvzxGj886r4Ey3w1WfVNYH8sMnVPVzyQtaPPM6Q8pHm3D9WPWvEupGEgcJ1xLaGaZDcvKfoAurE2AzHRRRup5FuHzDr8n15';
    let xpriv2 = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
    // hdnodes from xprivs
    let hdnode1 = BITBOX.HDNode.fromXPriv(xpriv1);
    let hdnode2 = BITBOX.HDNode.fromXPriv(xpriv2);
    // 32 byte hex
    let hex = BITBOX.Crypto.sha256('EARTH');
    // sign
    let signature = BITBOX.HDNode.signHex(hdnode1, hex);
    // verify
    BITBOX.HDNode.verifyHex(hdnode1, hex, signature);
    // true
    BITBOX.HDNode.verifyHex(hdnode2, hex, signature);
    // false

    // testnet xprivs
    let xpriv1 = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
    let xpriv2 = 'tprv8ggxJ8SG5EdqiM6Dn63QwHScQ7HS5hXqUMxSD1NEbDyPw6VtoUMFZBAohpTMsPz9cYbpHELmA4Zm79NKRvEvFdhWRX2bSmu7V7PiNb364nv';
    // hdnodes from xprivs
    let hdnode1 = BITBOX.HDNode.fromXPriv(xpriv1);
    let hdnode2 = BITBOX.HDNode.fromXPriv(xpriv2);
    // 32 byte hex
    let hex = BITBOX.Crypto.sha256('EARTH');
    // sign
    let signature = BITBOX.HDNode.signHex(hdnode1, hex);
    // verify
    BITBOX.HDNode.verifyHex(hdnode1, hex, signature);
    // true
    BITBOX.HDNode.verifyHex(hdnode2, hex, signature);
    // false
            `}</SyntaxHighlighter>

            <h3 id='verifyBuffer'><code>verifyBuffer</code></h3>
            <p>
          Verify signed 32 byte hash encoded as a buffer
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdnode <code>HDNode</code>
              </li>
              <li>
          buffer <code>Buffer</code>
              </li>
              <li>
          signature <code>Object</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            verified <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // mainnet xprivs
    let xpriv1 = 'xprv9ys4cvcoU8RoqvzxGj886r4Ey3w1WfVNYH8sMnVPVzyQtaPPM6Q8pHm3D9WPWvEupGEgcJ1xLaGaZDcvKfoAurE2AzHRRRup5FuHzDr8n15';
    let xpriv2 = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
    // hdnodes from xprivs
    let hdnode1 = BITBOX.HDNode.fromXPriv(xpriv1);
    let hdnode2 = BITBOX.HDNode.fromXPriv(xpriv2);
    // 32 byte buffer
    let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
    // sign
    let signature = BITBOX.HDNode.signBuffer(hdnode1, buf);
    // verify
    BITBOX.HDNode.verifyBuffer(hdnode1, buf, signature);
    // true
    BITBOX.HDNode.verifyBuffer(hdnode2, buf, signature);
    // false

    // testnet xprivs
    let xpriv1 = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
    let xpriv2 = 'tprv8ggxJ8SG5EdqiM6Dn63QwHScQ7HS5hXqUMxSD1NEbDyPw6VtoUMFZBAohpTMsPz9cYbpHELmA4Zm79NKRvEvFdhWRX2bSmu7V7PiNb364nv';
    // hdnodes from xprivs
    let hdnode1 = BITBOX.HDNode.fromXPriv(xpriv1);
    let hdnode2 = BITBOX.HDNode.fromXPriv(xpriv2);
    // 32 byte buffer
    let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
    // sign
    let signature = BITBOX.ECPair.signBuffer(hdnode1, buf);
    // verify
    BITBOX.HDNode.verifyBuffer(hdnode1, buf, signature);
    // true
    BITBOX.HDNode.verifyBuffer(hdnode2, buf, signature);
    // false
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default HDNode;
