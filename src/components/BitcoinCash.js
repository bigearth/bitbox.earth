import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import Address from './Address';
import Mnemonic from './Mnemonic';
import HDNode from './HDNode';

import {
  Route
} from 'react-router-dom';
import "../styles/docs.scss";

class BitcoinCash extends Component {
  render() {
    return (
      <div className="BitcoinCash">
        <h2 id='bitcoinCash' className="content-head is-center"><i className="fab fa-btc" /> Bitcoin Cash</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
          <Route path="/bitboxcli/bitcoincash/address" component={Address}/>
          <Route path="/bitboxcli/bitcoincash/mnemonic" component={Mnemonic}/>
          <Route path="/bitboxcli/bitcoincash/hdnode" component={HDNode}/>
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

          <h3 id='encodeBase58Check'><code>encodeBase58Check</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Encodes hex string as base58Check

        Arguments:
        1. bytes <string>                        hex encoded bytes to encode as base58check

        Result:
        base58check <string>                    base58check encoded string

        let hex = '0079bd35d306f648350818470c9f18903df6e06902a026f2a7';
        let bytes = Buffer.from(hex, 'hex');
        BITBOX.BitcoinCash.encodeBase58Check(bytes);
        // 1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar
          `}</SyntaxHighlighter>

          <h3 id='decodeBase58Check'><code>decodeBase58Check</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Decodes base58Check encoded string to hex

        Arguments:
        1. base58check <string>                 base58check encoded bytes to decode to hex

        Result:
        hex <string>                            hex encoded string

        let base58check = '1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar';
        BITBOX.BitcoinCash.decodeBase58Check(base58check);
        // 0079bd35d306f648350818470c9f18903df6e06902a026f2a7
          `}</SyntaxHighlighter>

          <h3 id='encodeBIP21'><code>encodeBIP21</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Encodes address and options as BIP21 uri

        Arguments:
        1. address <string>                 base58check or legacy encoded address
        2. options <object>                 options such as amount, label, message etc

        Result:
        bip21 <string>                      bip21 encoded uri

        let address = "bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s";
        let options = {
          amount: 1,
          label: "#BCHForEveryone"
        };

        BITBOX.BitcoinCash.encodeBIP21(address, options);
        // bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone
          `}</SyntaxHighlighter>

          <h3 id='decodeBIP21'><code>decodeBIP21</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        Decodes BIP21 uri

        Arguments:
        1. bip21 <string>                 bip21 encoded uri

        Result:
        results <object>                  decoded bip21 uri

        let bip21 = "bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone";

        BITBOX.BitcoinCash.decodeBIP21(bip21);
        // { address: 'qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s', options: { amount: 1, label: '#BCHForEveryone' } }
          `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default BitcoinCash;
