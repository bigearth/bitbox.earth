import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class TransactionBuilder extends Component {
  componentDidMount() {
    document.title = "TransactionBuilder - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="TransactionBuilder">
        <h2 id='TransactionBuilder' className="content-head is-center"><i className="fas fa-exchange-alt" /> TransactionBuilder</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/TransactionBuilder">TransactionBuilder</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='constructor'><code>constructor</code></h3>
            <p>
            Create new Transaction Builder.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          network <code>string</code>:                network. Defaults to "bitcoincash"
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          TransactionBuilder <code>TransactionBuilder</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // instance of transaction builder
    let transactionBuilder = new BITBOX.TransactionBuilder('bitcoincash');
            `}</SyntaxHighlighter>

            <h3 id='addInput'><code>addInput</code></h3>
            <p>
            Add input to transaction
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          txid <code>string</code>:               txid of vin
              </li>
              <li>
          index <code>number</code>:              index of vin
              </li>
              <li>
          keyPair <code>ecpair</code>:                ECPair of HDNode
              </li>
            </ol>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    let mnemonic = 'crystal tell okay cheese salon strike enroll math robust ignore oven peace';
    // root seed buffer
    let rootSeedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // master HDNode
    let masterHDNode = BITBOX.HDNode.fromSeedBuffer(rootSeedBuffer, 'bitcoincash');
    // node of address which is going to spend utxo
    let bip44BCHAccount0 = masterHDNode.derivePath("m/44'/145'/0'/0/0");
    // keypair
    let keyPair = bip44BCHAccount0.keyPair;
    // instance of transaction builder
    let transactionBuilder = new BITBOX.TransactionBuilder('bitcoincash');
    // txid of vin
    let txid = 'f7890915febe580920df2681d2bac0909ae89bd0cc1d3ed763e5eeba7f337f0e';
    // add input with txid and index of vin
    transactionBuilder.addInput(txid, 0, keyPair);
            `}</SyntaxHighlighter>

            <h3 id='addOutput'><code>addOutput</code></h3>
            <p>
            Add output to transaction
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          address <code>string</code>:               legacy or cashaddr address
              </li>
              <li>
          sendAmount <code>number</code>:                amount to send in satoshis
              </li>
            </ol>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // get byte count to calculate fee. paying 1 sat/byte
    let byteCount = BITBOX.BitcoinCash.getByteCount({ P2PKH: 1 }, { P2PKH: 1 });
    // original amount of satoshis in vin
    let originalAmount = 14438;
    // amount to send to receiver. It's the original amount - 1 sat/byte for tx size
    let sendAmount = originalAmount - byteCount;
    // add output w/ address and amount to send
    transactionBuilder.addOutput('bitcoincash:qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw', sendAmount);
            `}</SyntaxHighlighter>

            <h3 id='sign'><code>sign</code></h3>
            <p>
            Sign transaction
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          vin <code>number</code>:               vin to sign
              </li>
              <li>
          originalAmount <code>number</code>:     amount of satoshis at that vin
              </li>
            </ol>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // original amount of satoshis in vin
    let originalAmount = 14438;
    // sign w/ HDNode
    transactionBuilder.sign(0, originalAmount);
            `}</SyntaxHighlighter>

            <h3 id='build'><code>build</code></h3>
            <p>
            Build transaction
            </p>
            <h4>Result</h4>
            <p>
          Transaction <code>Object</code>:      Transaction
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // build tx
    let tx = transactionBuilder.build();
            `}</SyntaxHighlighter>

            <h3 id='toHex'><code>toHex</code></h3>
            <p>
            Return raw hex of transaction ready to be sent to the $BCH network
            </p>
            <h4>Result</h4>
            <p>
          rawHex <code>string</code>:      hex encoded raw transaction ready to be sent to the $BCH network
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // output rawhex
    let hex = tx.toHex();
    // 02000000010e7f337fbaeee563d73e1dccd09be89a90c0bad28126df200958befe150989f7000000006b48304502210085b8eb33f3981315bbe39c6810d0311c6cb39504914300ecd952cab8353222e202200ec95797c06ba8c9b15d59ab80e63300cb2371f67b3969d0b502d0fed733fbed4121025c85a571619e60fed412de0356b4e28f4f3670ab0c2b899dfe60e69aaa6cd4c0ffffffff01a6370000000000001976a91479d3297d1823149f4ec61df31d19f2fad5390c0288ac00000000
    // sendRawTransaction to running BCH node
    BITBOX.RawTransactions.sendRawTransaction(hex).then((result) => { console.log(result); }, (err) => { console.log(err); });
    // dfe54ec45c6fa2fa85b76d113de85b169d36902eaf6700f1cca21eed1392814b
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionBuilder;
