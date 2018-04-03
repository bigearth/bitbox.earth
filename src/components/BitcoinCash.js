import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import {
  Link
} from 'react-router-dom';
import {
  Route
} from 'react-router-dom';
import "../styles/docs.scss";

class BitcoinCash extends Component {
  componentDidMount() {
    document.title = "BitcoinCash - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="BitcoinCash">
        <h2 id='BitcoinCash' className="content-head is-center"><i className="fab fa-btc" /> BitcoinCash</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">BitcoinCash</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
          <h3 id='toSatoshi'><code>toSatoshi</code></h3>
          <p>
        Converting Bitcoin Cash units to satoshi units
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        bitcoinCash <code>number</code>:         unit to be converted
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        satoshi <code>number</code>:    bitcoinCash unit converted to satoshis
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    // convert 9 $BCH to satoshis
    BITBOX.BitcoinCash.toSatoshi(9)
    // 900000000

    // convert 1 $BCH to satoshis
    BITBOX.BitcoinCash.toSatoshi(1)
    // 100000000

    // convert 100 $BCH to satoshis
    BITBOX.BitcoinCash.toSatoshi(100)
    // 10000000000

    // convert 42 $BCH to satoshis
    BITBOX.BitcoinCash.toSatoshi(42)
    // 4200000000

    // convert 507 $BCH to satoshis
    BITBOX.BitcoinCash.toSatoshi(507)
    // 50700000000
          `}</SyntaxHighlighter>

          <h3 id='toBitcoinCash'><code>toBitcoinCash</code></h3>
          <p>
        Converting satoshi units to Bitcoin Cash units
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        satoshi <code>number</code>:         unit to be converted
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        bitcoinCash <code>number</code>:    satoshi unit converted to Bitcoin Cash
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    // convert 900000000 satoshis to $BCH
    BITBOX.BitcoinCash.toBitcoinCash(900000000)
    // 9

    // convert 100000000 satoshis to $BCH
    BITBOX.BitcoinCash.toBitcoinCash(100000000)
    // 1

    // convert 10000000000 satoshis to $BCH
    BITBOX.BitcoinCash.toBitcoinCash(10000000000)
    // 100

    // convert 4200000000 satoshis to $BCH
    BITBOX.BitcoinCash.toBitcoinCash(4200000000)
    // 42

    // convert 50700000000 satoshis to $BCH
    BITBOX.BitcoinCash.toBitcoinCash(50700000000)
    // 507
          `}</SyntaxHighlighter>

          <h3 id='signMessageWithPrivKey'><code>signMessageWithPrivKey</code></h3>
          <p>
        Sign message with private key
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        privateKeyWIF <code>string</code>:        private key in wallet import format
            </li>
            <li>
        message <code>string</code>:              message to sign
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        signature <code>string</code>:        cryptographic signature
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.signMessageWithPrivKey('KxtpRDUJDiutLaTV8Vuavhb6h7zq9YV9ZKA3dU79PCgYmNVmkkvS', "EARTH");
    // IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=
          `}</SyntaxHighlighter>

          <h3 id='verifyMessage'><code>verifyMessage</code></h3>
          <p>
        Verify message
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        address              public cashaddr or legacy address which signed the message
            </li>
            <li>
        signature            cryptographic signature
            </li>
            <li>
        message              message to verify
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        isVerified <code>boolean</code>: if message is verified or not
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.verifyMessage('bitcoincash:qp2zvw3zpk5xx43w4tve7mtekd9kaxwj4uenq9eupv', 'IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=', 'EARTH')
    // true
          `}</SyntaxHighlighter>

          <h3 id='encodeBase58Check'><code>encodeBase58Check</code></h3>
          <p>
        Encodes hex string as base58Check
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        hex <code>string</code>:                        hex encoded bytes to encode as base58check
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        base58check <code>string</code>:                    base58check encoded string
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    // encode 0079bd35d306f648350818470c9f18903df6e06902a026f2a7 as base58check
    let hex = '0079bd35d306f648350818470c9f18903df6e06902a026f2a7';
    BITBOX.BitcoinCash.encodeBase58Check(hex);
    // 1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar

    // encode 006da742680accf2282df5fade8e9b7a01a517e779289b52cc as base58check
    let hex = '006da742680accf2282df5fade8e9b7a01a517e779289b52cc';
    BITBOX.BitcoinCash.encodeBase58Check(hex);
    // 1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK

    // encode 00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672 as base58check
    let hex = '00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672';
    BITBOX.BitcoinCash.encodeBase58Check(hex);
    // 1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs

    // encode 00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5 as base58check
    let hex = '00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5';
    BITBOX.BitcoinCash.encodeBase58Check(hex);
    // 1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6

    // encode 00db04c2e6f104997cb04c956bf25da6078e559d303127f08b as base58check
    let hex = '00db04c2e6f104997cb04c956bf25da6078e559d303127f08b';
    BITBOX.BitcoinCash.encodeBase58Check(hex);
    // 1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg
          `}</SyntaxHighlighter>

          <h3 id='decodeBase58Check'><code>decodeBase58Check</code></h3>
          <p>
        Decodes base58Check encoded string to hex
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        base58check <code>string</code>:                base58check encoded string to decode to hex
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        hex <code>string</code>:                            hex encoded string
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    // decode 1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar to hex
    let base58check = '1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar';
    BITBOX.BitcoinCash.decodeBase58Check(base58check);
    // 0079bd35d306f648350818470c9f18903df6e06902a026f2a7

    // decode 1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK to hex
    let base58check = '1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK';
    BITBOX.BitcoinCash.decodeBase58Check(base58check);
    // 006da742680accf2282df5fade8e9b7a01a517e779289b52cc

    // decode 1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs to hex
    let base58check = '1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs';
    BITBOX.BitcoinCash.decodeBase58Check(base58check);
    // 00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672

    // decode 1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6 to hex
    let base58check = '1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6';
    BITBOX.BitcoinCash.decodeBase58Check(base58check);
    // 00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5

    // decode 1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg to hex
    let base58check = '1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg';
    BITBOX.BitcoinCash.decodeBase58Check(base58check);
    // 00db04c2e6f104997cb04c956bf25da6078e559d303127f08b
          `}</SyntaxHighlighter>

          <h3 id='encodeBIP21'><code>encodeBIP21</code></h3>
          <p>
        Encodes address and options as BIP21 uri
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        address <code>string</code>:                cashaddr (w/ or w/out prefix) or legacy base58check encoded address
            </li>
            <li>
        options <code>object</code>:                options such as amount, label, message etc
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        bip21 <code>string</code>:                    bip21 encoded uri
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    let address = "bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s";
    let options = {
      amount: 1,
      label: "#BCHForEveryone"
    };
    BITBOX.BitcoinCash.encodeBIP21(address, options);
    // bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone

    let address = "1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar";
    let options = {
      amount: 12.5,
      label: "coinbase donation",
      message: "and ya don't stop"
    };
    BITBOX.BitcoinCash.encodeBIP21(address, options);
    // bitcoincash:qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny?amount=12.5&label=coinbase%20donation&message=and%20ya%20don%27t%20stop

    let address = "qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03";
    let options = {
      amount: 42,
      label: "no prefix"
    };
    BITBOX.BitcoinCash.encodeBIP21(address, options);
    // bitcoincash:qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03?amount=42&label=no%20prefix
          `}</SyntaxHighlighter>

          <h3 id='decodeBIP21'><code>decodeBIP21</code></h3>
          <p>
        Decodes BIP21 uri
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        bip21 <code>string</code>:                 bip21 encoded uri
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        results <code>object</code>:                  decoded bip21 uri
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    let bip21 = "bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone";
    BITBOX.BitcoinCash.decodeBIP21(bip21);
    // { address: 'qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s', options: { amount: 1, label: '#BCHForEveryone' } }

    let bip21 = "bitcoincash:qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny?amount=12.5&label=coinbase%20donation&message=and%20ya%20don%27t%20stop";
    BITBOX.BitcoinCash.decodeBIP21(bip21);
    // { address: 'qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny',
    //   options:
    //    { amount: 12.5,
    //      label: 'coinbase donation',
    //      message: 'and ya don\'t stop'
    //    }
    // }

    let bip21 = 'bitcoincash:qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03?amount=42&label=no%20prefix';
    BITBOX.BitcoinCash.decodeBIP21(bip21);
    // { address: 'qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03', options: { amount: 42, label: 'no prefix' } }
          `}</SyntaxHighlighter>

          <h3 id='getByteCount'><code>getByteCount</code></h3>
          <p>
        Get byte count of transaction
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        inputs <code>object</code>:                 object w/ keys describing input types and counts. 'MULTISIG-P2SH' and 'P2PKH'. "MULTISIG-P2SH" also should include the required and total number of signatures. EX: "MULTISIG-P2SH:2-4"
            </li>
            <li>
        outputs <code>object</code>:                 object w/ keys describing output types and counts. 'P2SH' and 'P2PKH'

            </li>
          </ol>
          <h4>Result</h4>
          <p>
        byteCount <code>number</code>:                  number of bytes
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    // 1 P2PKH input
    let inputs = {
      P2PKH: 1
    };
    // 1 P2SH output
    let outputs = {
      P2SH: 1
    };
    BITBOX.BitcoinCash.getByteCount(inputs, outputs);
    // 190

    // 4 MULTISIG-P2SH 2-of-4 and 10 P2PKH inputs
    let inputs = {
      "MULTISIG-P2SH:2-4": 4,
      P2PKH: 10
    };
    // 23 P2PKH outputs
    let outputs = {
      P2PKH: 23
    };
    BITBOX.BitcoinCash.getByteCount(inputs, outputs);
    // 2750

    // 2 MULTISIG-P2SH 3-of-5 inputs
    let inputs = {
      "MULTISIG-P2SH:3-5": 2
    };
    // 2 P2PKH outputs
    let outputs = {
      P2PKH: 2
    };
    BITBOX.BitcoinCash.getByteCount(inputs, outputs);
    // 565

    // 111 P2PKH inputs
    let inputs = {
      "P2PKH": 111
    };
    // 2 P2PKH outputs
    let outputs = {
      P2PKH: 2
    };
    BITBOX.BitcoinCash.getByteCount(inputs, outputs);
    // 16506

    // 10 P2PKH and 1 MULTISIG-P2SH 1-of-2 input
    let inputs = {
      P2PKH: 10,
      "MULTISIG-P2SH:1-2":1
    };
    // 2 P2PKH and 1 P2SH outputs
    let outputs = {
      P2PKH: 2,
      P2SH: 1
    };
    BITBOX.BitcoinCash.getByteCount(inputs, outputs);
    // 1780
          `}</SyntaxHighlighter>

          <h3 id='byteToHexString'><code>byteToHexString</code></h3>
          <p>
        Turn typed array to hex encoded string
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        uint8Array <code>Uint8Array</code>:                typed array to be encoded as hex
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        hexString <code>string</code>:                  hex encoded string
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    let hexString =  "02b66ed5895f043a4bbf8abc60e7edd93aea6bbe03db324ffe2f5220fa3b1ad207";
    let byteArray = BITBOX.BitcoinCash.hexStringToByte(hexString);
    BITBOX.BitcoinCash.byteToHexString(byteArray);
    // 02b66ed5895f043a4bbf8abc60e7edd93aea6bbe03db324ffe2f5220fa3b1ad207

    let hexString = "a8b30eb2cc8b695dfce558a66e1fa1b382f4f3cb7e92b6f67f9dcf795a713748";
    let byteArray = BITBOX.BitcoinCash.hexStringToByte(hexString);
    BITBOX.BitcoinCash.byteToHexString(byteArray);
    // a8b30eb2cc8b695dfce558a66e1fa1b382f4f3cb7e92b6f67f9dcf795a713748

    let hexString = "76a91479d3297d1823149f4ec61df31d19f2fad5390c0288ac";
    let byteArray = BITBOX.BitcoinCash.hexStringToByte(hexString);
    BITBOX.BitcoinCash.byteToHexString(byteArray);
    // 76a91479d3297d1823149f4ec61df31d19f2fad5390c0288ac

    let hexString = "362be6ef6ed9fd89a1dcce9978e0d448bbc60517";
    let byteArray = BITBOX.BitcoinCash.hexStringToByte(hexString);
    BITBOX.BitcoinCash.byteToHexString(byteArray);
    // 362be6ef6ed9fd89a1dcce9978e0d448bbc60517

    let hexString = "740f5b2c2b3a467512c05a96b61ca79ebf5bee6f34e1170093a5fa36af283c8c";
    let byteArray = BITBOX.BitcoinCash.hexStringToByte(hexString);
    BITBOX.BitcoinCash.byteToHexString(byteArray);
    // 740f5b2c2b3a467512c05a96b61ca79ebf5bee6f34e1170093a5fa36af283c8c
          `}</SyntaxHighlighter>

          <h3 id='hexStringToByte'><code>hexStringToByte</code></h3>
          <p>
        Turn hex encoded string to byte array
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        hexString <code>string</code>:                hex encoded string
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        uint8Array <code>Uint8Array</code>:                  typed array
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    let hexString =  "02b66ed5895f043a4bbf8abc60e7edd93aea6bbe03db324ffe2f5220fa3b1ad207";
    let byteArray = BITBOX.BitcoinCash.hexStringToByte(hexString);
    // [ 2, 182, 110, 213, 137, 95, 4, 58, 75, 191, 138, 188, 96, 231, 237, 217, 58, 234, 107, 190, 3, 219, 50, 79, 254, 47, 82, 32, 250, 59, 26, 210, 7 ]

    let hexString = "a8b30eb2cc8b695dfce558a66e1fa1b382f4f3cb7e92b6f67f9dcf795a713748";
    let byteArray = BITBOX.BitcoinCash.hexStringToByte(hexString);
    // [ 168, 179, 14, 178, 204, 139, 105, 93, 252, 229, 88, 166, 110, 31, 161, 179, 130, 244, 243, 203, 126, 146, 182, 246, 127, 157, 207, 121, 90, 113, 55, 72 ]

    let hexString = "76a91479d3297d1823149f4ec61df31d19f2fad5390c0288ac";
    let byteArray = BITBOX.BitcoinCash.hexStringToByte(hexString);
    // [ 118, 169, 20, 121, 211, 41, 125, 24, 35, 20, 159, 78, 198, 29, 243, 29, 25, 242, 250, 213, 57, 12, 2, 136, 172 ]

    let hexString = "362be6ef6ed9fd89a1dcce9978e0d448bbc60517";
    let byteArray = BITBOX.BitcoinCash.hexStringToByte(hexString);
    // [ 54, 43, 230, 239, 110, 217, 253, 137, 161, 220, 206, 153, 120, 224, 212, 72, 187, 198, 5, 23 ]

    let hexString = "740f5b2c2b3a467512c05a96b61ca79ebf5bee6f34e1170093a5fa36af283c8c";
    let byteArray = BITBOX.BitcoinCash.hexStringToByte(hexString);
    // [ 116, 15, 91, 44, 43, 58, 70, 117, 18, 192, 90, 150, 182, 28, 167, 158, 191, 91, 238, 111, 52, 225, 23, 0, 147, 165, 250, 54, 175, 40, 60, 140 ]
          `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default BitcoinCash;
