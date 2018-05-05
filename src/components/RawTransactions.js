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

            <h3 id='createRawTransaction'><code>createRawTransaction</code></h3>
            <p>
  Create a transaction spending the given inputs and creating new outputs.
  Outputs can be addresses or data.
  Returns hex-encoded raw transaction.
  Note that the transaction&rsquo;s inputs are not signed, and
  it is not stored in the wallet or transmitted to the network.
            </p>
            <h4>Arguments</h4>
            <h5>inputs</h5>
            <p>
  (array, required): A json array of json objects
            </p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
[ { "txid":"id",    (string, required) The transaction id "vout":n,         (numeric, required) The output number "sequence":n      (numeric, optional) The sequence number } ,... ]
            `}</SyntaxHighlighter>
            <h5>outputs</h5>
              <p>
                 (object, required): a json object with outputs
              </p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
              { "address": x.xxx,    (numeric or string, required) The key is the bitcoin address, the numeric value (can be string) is the BCH amount "data": "hex"      (string, required) The key is "data", the value is hex encoded data ,... }
            `}</SyntaxHighlighter>
            <h5>locktime</h5>
              <p>
                (numeric, optional, default=0): Raw locktime. Non-0 value also locktime-activates inputs
              </p>
            <h4>Result</h4>
            <p>
  transaction              (string): hex string of the transaction
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.RawTransactions.createRawTransaction([{"txid":"myid","vout":0}], {"address":0.01})
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

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
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "txid" : "id",        (string) The transaction id
    "hash" : "id",        (string) The transaction hash (differs from txid for witness transactions)
    "size" : n,             (numeric) The transaction size
    "version" : n,          (numeric) The version
    "locktime" : ttt,       (numeric) The lock time
    "vin" : [               (array of json objects)
       {
         "txid": "id",    (string) The transaction id
         "vout": n,         (numeric) The output number
         "scriptSig": {     (json object) The script
           "asm": "asm",  (string) asm
           "hex": "hex"   (string) hex
         },
         "sequence": n     (numeric) The script sequence number
       }
       ,...
    ],
    "vout" : [             (array of json objects)
       {
         "value" : x.xxx,            (numeric) The value in BCH
         "n" : n,                    (numeric) index
         "scriptPubKey" : {          (json object)
           "asm" : "asm",          (string) the asm
           "hex" : "hex",          (string) the hex
           "reqSigs" : n,            (numeric) The required sigs
           "type" : "pubkeyhash",  (string) The type, eg 'pubkeyhash'
           "addresses" : [           (json array of string)
             "12tvKAXCxZjSmdNbao16dKXC8tRWfcF5oc"   (string) bitcoin address
             ,...
           ]
         }
       }
       ,...
    ],
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.RawTransactions.decodeRawTransaction('01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
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
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "asm":"asm",   (string) Script public key
    "hex":"hex",   (string) hex encoded public key
    "type":"type", (string) The output type
    "reqSigs": n,    (numeric) The required signatures
    "addresses": [   (json array of string)
       "address"     (string) bitcoin address
       ,...
    ],
    "p2sh","address" (string) address of P2SH script wrapping this redeem script (not returned if the script is already a P2SH).
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.RawTransactions.decodeScript('4830450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed592012102e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
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
          <h4>Result</h4>
          <p>
  Result (if verbose is not set or set to false):
          </p>
          <p>
  data      (string): The serialized, hex-encoded data for 'txid'
          </p>
          <p>
  Result (if verbose is set to true):
          </p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "hex" : "data",       (string) The serialized, hex-encoded data for 'txid'
    "txid" : "id",        (string) The transaction id (same as provided)
    "hash" : "id",        (string) The transaction hash (differs from txid for witness transactions)
    "size" : n,             (numeric) The serialized transaction size
    "version" : n,          (numeric) The version
    "locktime" : ttt,       (numeric) The lock time
    "vin" : [               (array of json objects)
       {
         "txid": "id",    (string) The transaction id
         "vout": n,         (numeric)
         "scriptSig": {     (json object) The script
           "asm": "asm",  (string) asm
           "hex": "hex"   (string) hex
         },
         "sequence": n      (numeric) The script sequence number
       }
       ,...
    ],
    "vout" : [              (array of json objects)
       {
         "value" : x.xxx,            (numeric) The value in BCH
         "n" : n,                    (numeric) index
         "scriptPubKey" : {          (json object)
           "asm" : "asm",          (string) the asm
           "hex" : "hex",          (string) the hex
           "reqSigs" : n,            (numeric) The required sigs
           "type" : "pubkeyhash",  (string) The type, eg 'pubkeyhash'
           "addresses" : [           (json array of string)
             "address"        (string) bitcoin address
             ,...
           ]
         }
       }
       ,...
    ],
    "blockhash" : "hash",   (string) the block hash
    "confirmations" : n,      (numeric) The confirmations
    "time" : ttt,             (numeric) The transaction time in seconds since epoch (Jan 1 1970 GMT)
    "blocktime" : ttt         (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.RawTransactions.getRawTransaction("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
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
  BITBOX.RawTransactions.sendRawTransaction("signedhex")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='signRawTransaction'><code>signRawTransaction</code></h3>
          <p>
  Sign inputs for raw transaction (serialized, hex-encoded).
  The second optional argument (may be null) is an array of previous transaction outputs that
  this transaction depends on but may not yet be in the block chain.
  The third optional argument (may be null) is an array of base58-encoded private
  keys that, if given, will be the only keys used to sign the transaction.
          </p>
          <h4>Arguments</h4>
          <h5>hexstring</h5>
          <p>(string, required) The transaction hex string</p>
          <h5>prevtxs</h5>
          <p>(string, optional) An json array of previous dependent transaction outputs</p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
       [               (json array of json objects, or 'null' if none provided)
         {
           "txid":"id",             (string, required) The transaction id
           "vout":n,                  (numeric, required) The output number
           "scriptPubKey": "hex",   (string, required) script key
           "redeemScript": "hex",   (string, required for P2SH or P2WSH) redeem script
           "amount": value            (numeric, required) The amount spent
         }
         ,...
      ]
            `}</SyntaxHighlighter>
          <h5>privkeys</h5>
          <p>(string, optional) A json array of base58-encoded private keys for signing</p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
      [                  (json array of strings, or 'null' if none provided)
        "privatekey"   (string) private key in base58-encoding
        ,...
      ]
            `}</SyntaxHighlighter>
          <h5>sighashtype</h5>
          <p>(string, optional, default=ALL) The signature hash type. Must be one of</p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
         "ALL"
         "NONE"
         "SINGLE"
         "ALL|ANYONECANPAY"
         "NONE|ANYONECANPAY"
         "SINGLE|ANYONECANPAY"
         "ALL|FORKID"
         "NONE|FORKID"
         "SINGLE|FORKID"
         "ALL|FORKID|ANYONECANPAY"
         "NONE|FORKID|ANYONECANPAY"
         "SINGLE|FORKID|ANYONECANPAY"
            `}</SyntaxHighlighter>
          <h5>
          </h5>
          <p>
          </p>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "hex" : "value",           (string) The hex-encoded raw transaction with signature(s)
    "complete" : true|false,   (boolean) If the transaction has a complete set of signatures
    "errors" : [                 (json array of objects) Script verification errors (if there are any)
      {
        "txid" : "hash",           (string) The hash of the referenced, previous transaction
        "vout" : n,                (numeric) The index of the output to spent and used as input
        "scriptSig" : "hex",       (string) The hex-encoded signature script
        "sequence" : n,            (numeric) Script sequence number
        "error" : "text"           (string) Verification or signing error related to the input
      }
      ,...
    ]
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.RawTransactions.signRawTransaction("myhex")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default RawTransactions;
