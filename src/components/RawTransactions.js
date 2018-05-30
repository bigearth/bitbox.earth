import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class RawTransactions extends Component {
  componentDidMount() {
    document.title = "RawTransactions - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="RawTransactions">
        <h2 id='rawtransactions' className="content-head is-center"><i className="fas fa-exchange-alt" /> Rawtransactions</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/rawtransactions">RawTransactions</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='decodeRawTransaction'><code>decodeRawTransaction</code></h3>
            <p>
  Return a JSON object representing the serialized, hex-encoded transaction.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  hexstring      (string, required): The transaction hex string
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.RawTransactions.decodeRawTransaction('01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000').then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  // { txid: 'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
  // hash: 'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
  // size: 191,
  // version: 1,
  // locktime: 0,
  // vin:
  //  [ { txid: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
  //      vout: 0,
  //      scriptSig: [Object],
  //      sequence: 4294967295 } ],
  // vout: [ { value: 12.5, n: 0, scriptPubKey: [Object] } ] }
            `}</SyntaxHighlighter>

            <h3 id='decodeScript'><code>decodeScript</code></h3>
          <p>
  Decode a hex-encoded script.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  hexstring     (string): the hex encoded script
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.RawTransactions.decodeScript('4830450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed592012102e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16').then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  // { asm: '30450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed59201 02e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16',
  // type: 'nonstandard',
  // p2sh: 'bitcoincash:pqwndulzwft8dlmqrteqyc9hf823xr3lcc7ypt74ts' }
            `}</SyntaxHighlighter>

            <h3 id='getRawTransaction'><code>getRawTransaction</code></h3>
          <p>
  Return the raw transaction data. If verbose is 'true', returns an Object with information about 'txid'. If verbose is 'false' or omitted, returns a string that is serialized, hex-encoded data for 'txid'.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  txid      (string, required): The transaction id
            </li>
            <li>
  verbose       (bool, optional, default=false): If false, return a string, otherwise return a json object
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.RawTransactions.getRawTransaction("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098").then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  // 01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000
            `}</SyntaxHighlighter>

            <h3 id='sendRawTransaction'><code>sendRawTransaction</code></h3>
          <p>
  Submits raw transaction (serialized, hex-encoded) to local node and network. Also see createrawtransaction and signrawtransaction calls.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  hexstring    <code>string</code> required: The hex string of the raw transaction
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  hex             (string): The transaction hash in hex
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.RawTransactions.sendRawTransaction("01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000").then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  // 0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default RawTransactions;
