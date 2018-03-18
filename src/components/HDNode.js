import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class HDNode extends Component {
  render() {
    return (
      <div className="HDNode">
        <h2 id='HDNode' className="content-head is-center"><i className="fab fa-btc" /> HDNode</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
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
          </div>
        </div>
      </div>
    );
  }
}

export default HDNode;
