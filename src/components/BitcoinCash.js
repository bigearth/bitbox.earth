import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';

import {
  Route
} from 'react-router-dom';
import "../styles/docs.scss";

class BitcoinCash extends Component {
  render() {
    return (
      <div className="BitcoinCash">
        <h2 id='BitcoinCash' className="content-head is-center"><i className="fab fa-btc" /> BitcoinCash</h2>
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

          <h3 id='fromWIF'><code>fromWIF</code></h3>
          <p>
        Create Master Private Key
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        privateKeyWIF <code>string</code>:   Create keypair from private key in wallet import format (WIF)
            </li>
            <li>
        network <code>string</code>         optional network. default: 'bitcoin'
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        ECPair:                 ECPair
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
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
          </div>
        </div>
      </div>
    );
  }
}

export default BitcoinCash;
