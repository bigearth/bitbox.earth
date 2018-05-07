import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Transaction extends Component {
  componentDidMount() {
    document.title = "Transaction - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Transaction">
      <h2 id='Transaction' className="content-head is-center"><i className="fas fa-exchange-alt" /> Transaction</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/Transaction">Transaction</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='details'><code>details</code></h3>
            <p>
    Return details about a Transaction.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
    txid or txids <code>String | Array</code> required: Transaction id or url encoded array of transaction ids
              </li>
            </ol>
            <h4>Result</h4>
            <p>
    details <code>Object</code>: Details about Transaction
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // single txid
  BITBOX.Transaction.details('a85fa3d831ab6b0305e7ff88d2d4941e25a810d4461635df51490653822071a8') .then((result) => { console.log(result); }, (err) => { console.log(err); });

  // {
  //   "txid": "a85fa3d831ab6b0305e7ff88d2d4941e25a810d4461635df51490653822071a8",
  //   "version": 1,
  //   "locktime": 0,
  //   "vin": [
  //     {
  //       "coinbase": "04ffff001d029804",
  //       "sequence": 4294967295,
  //       "n": 0
  //     }
  //   ],
  //   "vout": [
  //     {
  //       "value": "50.00000000",
  //       "n": 0,
  //       "scriptPubKey": {
  //         "hex": "41047737b5d3036fcc149960d41ce31d47c5a47d3a843b23898d28a5e24d1482616860ba5bc61f060586c7ac2b0e7e3ec76e4763cf897d5b8b1110691832c9368f8cac",
  //         "asm": "047737b5d3036fcc149960d41ce31d47c5a47d3a843b23898d28a5e24d1482616860ba5bc61f060586c7ac2b0e7e3ec76e4763cf897d5b8b1110691832c9368f8c OP_CHECKSIG",
  //         "addresses": [
  //           "1QEHawPyyALtoDcXTpQsMNtQCoUswtWRJu"
  //         ],
  //         "type": "pubkeyhash"
  //       },
  //       "spentTxId": null,
  //       "spentIndex": null,
  //       "spentHeight": null
  //     }
  //   ],
  //   "blockhash": "000000001c6aeec19265e9cc3ded8ba5ef5e63fae7747f30bf9c02c7bc8883f0",
  //   "blockheight": 507,
  //   "confirmations": 528404,
  //   "time": 1231973656,
  //   "blocktime": 1231973656,
  //   "isCoinBase": true,
  //   "valueOut": 50,
  //   "size": 135
  // }

  // array of txids
  BITBOX.Transaction.details(["a85fa3d831ab6b0305e7ff88d2d4941e25a810d4461635df51490653822071a8", "113f1fe1c454a56436d4f93c7c6e315d1ed985d111299e9c2a3e2d3d1e9f177f"]).then((result) => { console.log(result); }, (err) => { console.log(err); });

  // [ { txid: 'a85fa3d831ab6b0305e7ff88d2d4941e25a810d4461635df51490653822071a8',
  //   version: 1,
  //   locktime: 0,
  //   vin: [ [Object] ],
  //   vout: [ [Object] ],
  //   blockhash: '000000001c6aeec19265e9cc3ded8ba5ef5e63fae7747f30bf9c02c7bc8883f0',
  //   blockheight: 507,
  //   confirmations: 528728,
  //   time: 1231973656,
  //   blocktime: 1231973656,
  //   isCoinBase: true,
  //   valueOut: 50,
  //   size: 135 },
  // { txid: '113f1fe1c454a56436d4f93c7c6e315d1ed985d111299e9c2a3e2d3d1e9f177f',
  //   version: 1,
  //   locktime: 0,
  //   vin: [ [Object], [Object] ],
  //   vout: [ [Object], [Object] ],
  //   blockhash: '000000000000000001da2a49a63fb7d0d0893ebcb892aee3fbbfa47c803f9cf0',
  //   blockheight: 418195,
  //   confirmations: 111040,
  //   time: 1467019582,
  //   blocktime: 1467019582,
  //   valueOut: 2.09965689,
  //   size: 372,
  //   valueIn: 2.0997689,
  //   fees: 0.00011201 } ]
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Transaction;
