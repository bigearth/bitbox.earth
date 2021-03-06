import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Mining extends Component {
  componentDidMount() {
    document.title = "Mining - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Mining">
        <h2 id='mining' className="content-head is-center"><i className="fas fa-hdd" /> Mining</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/mining">Mining</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">

            <h3 id='getBlockTemplate'><code>getBlockTemplate</code></h3>
          <p>
  If the request parameters include a 'mode' key, that is used to explicitly select between the default 'template' request or a 'proposal'.
  It returns data needed to construct a block to work on.
  For full specification, see BIPs 22, 23, 9, and 145:
          </p>
          <ul>
            <li>
              <a href='https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki'>https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki</a>
            </li>
            <li>
              <a href='https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki'>https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki</a>
            </li>
            <li>
              <a href='https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#getblocktemplate_changes'>https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#getblocktemplate_changes</a>
            </li>
            <li>
              <a href='https://github.com/bitcoin/bips/blob/master/bip-0145.mediawiki'>https://github.com/bitcoin/bips/blob/master/bip-0145.mediawiki</a>
            </li>
          </ul>
          <h4>Arguments</h4>
          <ol>
            <li>
  template_request         (json object, optional): A json object in the following spec
            </li>
          </ol>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
       {
         "mode":"template"    (string, optional) This must be set to "template", "proposal" (see BIP 23), or omitted
         "capabilities":[     (array, optional) A list of strings
             "support"          (string) client side supported feature, 'longpoll', 'coinbasetxn', 'coinbasevalue', 'proposal', 'serverlist', 'workid'
             ,...
         ],
         "rules":[            (array, optional) A list of strings
             "support"          (string) client side supported softfork deployment
             ,...
         ]
       }
          `}</SyntaxHighlighter>
          <h4>Result</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
     {
       "version" : n,                    (numeric) The preferred block version
       "rules" : [ "rulename", ... ],    (array of strings) specific block rules that are to be enforced
       "vbavailable" : {                 (json object) set of pending, supported versionbit (BIP 9) softfork deployments
           "rulename" : bitnumber          (numeric) identifies the bit number as indicating acceptance and readiness for the named softfork rule
           ,...
       },
       "vbrequired" : n,                 (numeric) bit mask of versionbits the server requires set in submissions
       "previousblockhash" : "xxxx",     (string) The hash of current highest block
       "transactions" : [                (array) contents of non-coinbase transactions that should be included in the next block
           {
              "data" : "xxxx",             (string) transaction data encoded in hexadecimal (byte-for-byte)
              "txid" : "xxxx",             (string) transaction id encoded in little-endian hexadecimal
              "hash" : "xxxx",             (string) hash encoded in little-endian hexadecimal (including witness data)
              "depends" : [                (array) array of numbers
                  n                          (numeric) transactions before this one (by 1-based index in 'transactions' list) that must be present in the final block if this one is
                  ,...
              ],
              "fee": n,                    (numeric) difference in value between transaction inputs and outputs (in Satoshis); for coinbase transactions, this is a negative Number of the total collected block fees (ie, not including the block
     subsidy); if key is not present, fee is unknown and clients MUST NOT assume there isn't one
              "sigops" : n,                (numeric) total SigOps cost, as counted for purposes of block limits; if key is not present, sigop cost is unknown and clients MUST NOT assume it is zero
              "required" : true|false      (boolean) if provided and true, this transaction must be in the final block
           }
           ,...
       ],
       "coinbaseaux" : {                 (json object) data that should be included in the coinbase's scriptSig content
           "flags" : "xx"                  (string) key name is to be ignored, and value included in scriptSig
       },
       "coinbasevalue" : n,              (numeric) maximum allowable input to coinbase transaction, including the generation award and transaction fees (in Satoshis)
       "coinbasetxn" : { ... },          (json object) information for coinbase transaction
       "target" : "xxxx",                (string) The hash target
       "mintime" : xxx,                  (numeric) The minimum timestamp appropriate for next block time in seconds since epoch (Jan 1 1970 GMT)
       "mutable" : [                     (array of string) list of ways the block template may be changed
          "value"                          (string) A way the block template may be changed, e.g. 'time', 'transactions', 'prevblock'
          ,...
       ],
       "noncerange" : "00000000ffffffff",(string) A range of valid nonces
       "sigoplimit" : n,                 (numeric) limit of sigops in blocks
       "sizelimit" : n,                  (numeric) limit of block size
       "curtime" : ttt,                  (numeric) current timestamp in seconds since epoch (Jan 1 1970 GMT)
       "bits" : "xxxxxxxx",              (string) compressed target of next block
       "height" : n                      (numeric) The height of the next block
     }
          `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Mining.getBlockTemplate().then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getMiningInfo'><code>getMiningInfo</code></h3>
            <p>
  Returns a json object containing mining-related information.
            </p>
            <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "blocks": nnn,             (numeric) The current block
    "currentblocksize": nnn,   (numeric) The last block size
    "currentblocktx": nnn,     (numeric) The last block transaction
    "difficulty": xxx.xxxxx    (numeric) The current difficulty
    "errors": "..."            (string) Current errors
    "networkhashps": nnn,      (numeric) The network hashes per second
    "pooledtx": n              (numeric) The size of the mempool
    "chain": "xxxx",           (string) current network name as defined in BIP70 (main, test, regtest)
  }
            `}</SyntaxHighlighter>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Mining.getMiningInfo().then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getNetworkHashps'><code>getNetworkHashps</code></h3>
          <p>
  Returns the estimated network hashes per second based on the last n blocks.
  Pass in [blocks] to override # of blocks, -1 specifies since last difficulty change.
  Pass in [height] to estimate the network speed at the time when a certain block was found.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  nblocks     (numeric, optional, default=120): The number of blocks, or -1 for blocks since last difficulty change.
            </li>
            <li>
  height      (numeric, optional, default=-1): To estimate at the time of the given height.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  x             (numeric): Hashes per second estimated
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Mining.getNetworkHashps().then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='submitBlock'><code>submitBlock</code></h3>
          <p>
  Attempts to submit new block to network. The 'jsonparametersobject' parameter is currently ignored. See https://en.bitcoin.it/wiki/BIP_0022 for full specification.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  hexdata        (string, required): the hex-encoded block data to submit
            </li>
            <li>
  parameters     (string, optional): object of optional parameters
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    legacyAddress <code>string</code>    legacy base 58 check encoded address
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Mining.submitBlock(hexdata, parameters).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Mining;
