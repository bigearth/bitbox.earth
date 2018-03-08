import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Mining extends Component {
  render() {
    return (
      <div className="Mining">
        <h2 id='mining' className="content-head is-center">Mining</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">

            <h3 id='getBlockTemplate'><code>getBlockTemplate</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  If the request parameters include a 'mode' key, that is used to explicitly select between the default 'template' request or a 'proposal'.
  It returns data needed to construct a block to work on.
  For full specification, see BIPs 22, 23, 9, and 145:
      https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki
      https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki
      https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#getblocktemplate_changes
      https://github.com/bitcoin/bips/blob/master/bip-0145.mediawiki

  Arguments:
  1. template_request         (json object, optional) A json object in the following spec
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

       Result:
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

  BITBOX.Mining.getBlockTemplate()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getMiningInfo'><code>getMiningInfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns a json object containing mining-related information.
  Result:
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

  BITBOX.Mining.getMiningInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getNetworkHashps'><code>getNetworkHashps</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the estimated network hashes per second based on the last n blocks.
  Pass in [blocks] to override # of blocks, -1 specifies since last difficulty change.
  Pass in [height] to estimate the network speed at the time when a certain block was found.

  Arguments:
  1. nblocks     (numeric, optional, default=120) The number of blocks, or -1 for blocks since last difficulty change.
  2. height      (numeric, optional, default=-1) To estimate at the time of the given height.

  Result:
  x             (numeric) Hashes per second estimated

  BITBOX.Mining.getNetworkHashps()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='prioritiseTransaction'><code>prioritiseTransaction</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Accepts the transaction into mined blocks at a higher (or lower) priority

  Arguments:
  1. "txid"       (string, required) The transaction id.
  2. priority_delta (numeric, required) The priority to add or subtract.
                    The transaction selection algorithm considers the tx as it would have a higher priority.
                    (priority of a transaction is calculated: coinage * value_in_satoshis / txsize)
  3. fee_delta      (numeric, required) The fee value (in satoshis) to add (or subtract, if negative).
                    The fee is not actually paid, only the algorithm for selecting transactions into a block
                    considers the transaction as it would have paid a higher (or lower) fee.

  Result:
  true              (boolean) Returns true

  BITBOX.Mining.prioritiseTransaction("txid", 0.0, 10000)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='submitBlock'><code>submitBlock</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Attempts to submit new block to network.
  The 'jsonparametersobject' parameter is currently ignored.
  See https://en.bitcoin.it/wiki/BIP_0022 for full specification.

  Arguments
  1. "hexdata"        (string, required) the hex-encoded block data to submit
  2. "parameters"     (string, optional) object of optional parameters
      {
        "workid" : "id"    (string, optional) if the server provided a workid, it MUST be included with submissions
      }

  BITBOX.Mining.submitBlock("mydata")
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

export default Mining;
