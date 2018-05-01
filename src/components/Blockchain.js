import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Blockchain extends Component {
  componentDidMount() {
    document.title = "Blockchain - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Blockchain">
        <h2 id='blockchain' className="content-head is-center"><i className="fas fa-cubes" /> Blockchain</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/blockchain">Blockchain</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='getBestBlockHash'><code>getBestBlockHash</code></h3>
            <p>
  Returns the hash of the best (tip) block in the longest blockchain.
            </p>
            <h4>Result</h4>
            <p>
  hex      <code>string</code>: the block hash hex encoded
            </p>
            <h4>Examples</h4>

            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getBestBlockHash()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // 241decef88889efac8e6ce428a8ac696fdde5972eceed97e1fb58d6106af31d5
            `}</SyntaxHighlighter>

            <h3 id='getBlock'><code>getBlock</code></h3>
            <p>
  If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <code>hash</code>.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
  blockhash          (string, required) The block hash
              </li>
              <li>
  verbose                (boolean, optional, default=true) true for a json object, false for the hex encoded data
              </li>
            </ol>
            <h4>Result</h4>
            <p>
  Result (for verbose = true):
            </p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "hash" : "hash",     <code>string</code> the block hash (same as provided)
    "confirmations" : n,   (numeric) The number of confirmations, or -1 if the block is not on the main chain
    "size" : n,            (numeric) The block size
    "height" : n,          (numeric) The block height or index
    "version" : n,         (numeric) The block version
    "versionHex" : "00000000", <code>string</code> The block version formatted in hexadecimal
    "merkleroot" : "xxxx", <code>string</code> The merkle root
    "tx" : [               (array of string) The transaction ids
       "transactionid"     <code>string</code> The transaction id
       ,...
    ],
    "time" : ttt,          (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)
    "mediantime" : ttt,    (numeric) The median block time in seconds since epoch (Jan 1 1970 GMT)
    "nonce" : n,           (numeric) The nonce
    "bits" : "1d00ffff", <code>string</code> The bits
    "difficulty" : x.xxx,  (numeric) The difficulty
    "chainwork" : "xxxx",  <code>string</code> Expected number of hashes required to produce the chain up to this block (in hex)
    "previousblockhash" : "hash",  <code>string</code> The hash of the previous block
    "nextblockhash" : "hash"       <code>string</code> The hash of the next block
  }
            `}</SyntaxHighlighter>
            <p>
  Result (for verbose=false):
            </p>
            <p>
  data             <code>string</code>: A string that is serialized, hex-encoded data for block 'hash'.
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getBlock("00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getBlockchainInfo'><code>getBlockchainInfo</code></h3>
          <p>
  Returns an object containing various state info regarding blockchain processing.
          </p>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "chain": "xxxx",        <code>string</code> current network name as defined in BIP70 (main, test, regtest)
    "blocks": xxxxxx,         (numeric) the current number of blocks processed in the server
    "headers": xxxxxx,        (numeric) the current number of headers we have validated
    "bestblockhash": "...", <code>string</code> the hash of the currently best block
    "difficulty": xxxxxx,     (numeric) the current difficulty
    "mediantime": xxxxxx,     (numeric) median time for the current best block
    "verificationprogress": xxxx, (numeric) estimate of verification progress [0..1]
    "chainwork": "xxxx"     <code>string</code> total amount of work in active chain, in hexadecimal
    "pruned": xx,             (boolean) if the blocks are subject to pruning
    "pruneheight": xxxxxx,    (numeric) lowest-height complete block stored
    "softforks": [            (array) status of softforks in progress
       {
          "id": "xxxx",        <code>string</code> name of softfork
          "version": xx,         (numeric) block version
          "reject": {            (object) progress toward rejecting pre-softfork blocks
             "status": xx,       (boolean) true if threshold reached
          },
       }, ...
    ],
    "bip9_softforks": {          (object) status of BIP9 softforks in progress
       "xxxx" : {                <code>string</code> name of the softfork
          "status": "xxxx",    <code>string</code> one of "defined", "started", "locked_in", "active", "failed"
          "bit": xx,             (numeric) the bit (0-28) in the block version field used to signal this softfork (only for "started" status)
          "startTime": xx,       (numeric) the minimum median time past of a block at which the bit gains its meaning
          "timeout": xx,         (numeric) the median time past of a block at which the deployment is considered failed if not yet locked in
          "since": xx            (numeric) height of the first block to which the status applies
       }
    }
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getBlockchainInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getBlockCount'><code>getBlockCount</code></h3>
          <p>
  Returns the number of blocks in the longest blockchain.
          </p>
          <h4>Result</h4>
          <p>
  n    (numeric) The current block count
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getBlockCount()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // 6
            `}</SyntaxHighlighter>

            <h3 id='getBlockHash'><code>getBlockHash</code></h3>
            <p>
  Returns hash of block in best-block-chain at height provided.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  height         (numeric, required) The height index
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  hash        <code>string</code> The block hash
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getBlockHash(0)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
            `}</SyntaxHighlighter>

            <h3 id='getBlockHeader'><code>getBlockHeader</code></h3>
          <p>
  If verbose is false, returns a string that is serialized, hex-encoded data for blockheader 'hash'.
  If verbose is true, returns an Object with information about blockheader <code>hash</code>.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  hash          (string, required) The block hash
            </li>
            <li>
  verbose           (boolean, optional, default=true) true for a json object, false for the hex encoded data
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  Result (for verbose = true):
          </p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "hash" : "hash",     <code>string</code> the block hash (same as provided)
    "confirmations" : n,   (numeric) The number of confirmations, or -1 if the block is not on the main chain
    "height" : n,          (numeric) The block height or index
    "version" : n,         (numeric) The block version
    "versionHex" : "00000000", <code>string</code> The block version formatted in hexadecimal
    "merkleroot" : "xxxx", <code>string</code> The merkle root
    "time" : ttt,          (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)
    "mediantime" : ttt,    (numeric) The median block time in seconds since epoch (Jan 1 1970 GMT)
    "nonce" : n,           (numeric) The nonce
    "bits" : "1d00ffff", <code>string</code> The bits
    "difficulty" : x.xxx,  (numeric) The difficulty
    "chainwork" : "0000...1f3"     <code>string</code> Expected number of hashes required to produce the current chain (in hex)
    "previousblockhash" : "hash",  <code>string</code> The hash of the previous block
    "nextblockhash" : "hash",      <code>string</code> The hash of the next block
  }
            `}</SyntaxHighlighter>
          <p>
  Result (for verbose=false):
          </p>
          <p>
  data             <code>string</code> A string that is serialized, hex-encoded data for block 'hash'.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getBlockHeader("00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getChainTips'><code>getChainTips</code></h3>
          <p>
  Return information about all known tips in the block tree, including the main chain as well as orphaned branches.
          </p>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  [
    {
      "height": xxxx,         (numeric) height of the chain tip
      "hash": "xxxx",         <code>string</code> block hash of the tip
      "branchlen": 0          (numeric) zero for main chain
      "status": "active"      <code>string</code> "active" for the main chain
    },
    {
      "height": xxxx,
      "hash": "xxxx",
      "branchlen": 1          (numeric) length of branch connecting the tip to the main chain
      "status": "xxxx"        <code>string</code> status of the chain (active, valid-fork, valid-headers, headers-only, invalid)
    }
  ]
  Possible values for status:
  1.  "invalid"               This branch contains at least one invalid block
  2.  "headers-only"          Not all blocks for this branch are available, but the headers are valid
  3.  "valid-headers"         All blocks are available for this branch, but they were never fully validated
  4.  "valid-fork"            This branch is not part of the active chain, but is fully validated
  5.  "active"                This is the tip of the active main chain, which is certainly valid
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getChainTips()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getDifficulty'><code>getDifficulty</code></h3>
          <p>
  Returns the proof-of-work difficulty as a multiple of the minimum difficulty.
          </p>
          <h4>Result</h4>
          <p>
  n.nnn       (numeric): the proof-of-work difficulty as a multiple of the minimum difficulty.
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getDifficulty()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getMempoolAncestors'><code>getMempoolAncestors</code></h3>
          <p>
  If txid is in the mempool, returns all in-mempool ancestors.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  txid                 (string, required): The transaction id (must be in mempool)
            </li>
            <li>
  verbose                  (boolean, optional, default=false): True for a json object, false for array of transaction ids
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  Result (for verbose=false):
          </p>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
  [                       (json array of strings)
    "transactionid"           <code>string</code> The transaction id of an in-mempool ancestor transaction
    ,...
  ]
            `}</SyntaxHighlighter>
          <p>
  Result (for verbose=true):
          </p>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
  {                           (json object)
    "transactionid" : {       (json object)
      "size" : n,             (numeric) transaction size.
      "fee" : n,              (numeric) transaction fee in BCH
      "modifiedfee" : n,      (numeric) transaction fee with fee deltas used for mining priority
      "time" : n,             (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT
      "height" : n,           (numeric) block height when transaction entered pool
      "startingpriority" : n, (numeric) DEPRECATED. Priority when transaction entered pool
      "currentpriority" : n,  (numeric) DEPRECATED. Transaction priority now
      "descendantcount" : n,  (numeric) number of in-mempool descendant transactions (including this one)
      "descendantsize" : n,   (numeric) virtual transaction size of in-mempool descendants (including this one)
      "descendantfees" : n,   (numeric) modified fees (see above) of in-mempool descendants (including this one)
      "ancestorcount" : n,    (numeric) number of in-mempool ancestor transactions (including this one)
      "ancestorsize" : n,     (numeric) virtual transaction size of in-mempool ancestors (including this one)
      "ancestorfees" : n,     (numeric) modified fees (see above) of in-mempool ancestors (including this one)
      "depends" : [           (array) unconfirmed transactions used as inputs for this transaction
          "transactionid",    <code>string</code> parent transaction id
         ... ]
    }, ...
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getMempoolAncestors("mytxid")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getMempoolDescendants'><code>getMempoolDescendants</code></h3>
          <p>
  If txid is in the mempool, returns all in-mempool descendants.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  txid                 (string, required): The transaction id (must be in mempool)
            </li>
            <li>
  verbose                  (boolean, optional, default=false): True for a json object, false for array of transaction ids
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  Result (for verbose=false):
          </p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  [                       (json array of strings)
    "transactionid"           <code>string</code> The transaction id of an in-mempool descendant transaction
    ,...
  ]
            `}</SyntaxHighlighter>
          <p>
  Result (for verbose=true):
          </p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {                           (json object)
    "transactionid" : {       (json object)
      "size" : n,             (numeric) transaction size.
      "fee" : n,              (numeric) transaction fee in BCH
      "modifiedfee" : n,      (numeric) transaction fee with fee deltas used for mining priority
      "time" : n,             (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT
      "height" : n,           (numeric) block height when transaction entered pool
      "startingpriority" : n, (numeric) DEPRECATED. Priority when transaction entered pool
      "currentpriority" : n,  (numeric) DEPRECATED. Transaction priority now
      "descendantcount" : n,  (numeric) number of in-mempool descendant transactions (including this one)
      "descendantsize" : n,   (numeric) virtual transaction size of in-mempool descendants (including this one)
      "descendantfees" : n,   (numeric) modified fees (see above) of in-mempool descendants (including this one)
      "ancestorcount" : n,    (numeric) number of in-mempool ancestor transactions (including this one)
      "ancestorsize" : n,     (numeric) virtual transaction size of in-mempool ancestors (including this one)
      "ancestorfees" : n,     (numeric) modified fees (see above) of in-mempool ancestors (including this one)
      "depends" : [           (array) unconfirmed transactions used as inputs for this transaction
          "transactionid",    <code>string</code> parent transaction id
         ... ]
    }, ...
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getMempoolDescendants("mytxid")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getMempoolEntry'><code>getMempoolEntry</code></h3>
          <p>
  Returns mempool data for given transaction
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  txid                   (string, required): The transaction id (must be in mempool)
            </li>
          </ol>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {                           (json object)
      "size" : n,             (numeric) transaction size.
      "fee" : n,              (numeric) transaction fee in BCH
      "modifiedfee" : n,      (numeric) transaction fee with fee deltas used for mining priority
      "time" : n,             (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT
      "height" : n,           (numeric) block height when transaction entered pool
      "startingpriority" : n, (numeric) DEPRECATED. Priority when transaction entered pool
      "currentpriority" : n,  (numeric) DEPRECATED. Transaction priority now
      "descendantcount" : n,  (numeric) number of in-mempool descendant transactions (including this one)
      "descendantsize" : n,   (numeric) virtual transaction size of in-mempool descendants (including this one)
      "descendantfees" : n,   (numeric) modified fees (see above) of in-mempool descendants (including this one)
      "ancestorcount" : n,    (numeric) number of in-mempool ancestor transactions (including this one)
      "ancestorsize" : n,     (numeric) virtual transaction size of in-mempool ancestors (including this one)
      "ancestorfees" : n,     (numeric) modified fees (see above) of in-mempool ancestors (including this one)
      "depends" : [           (array) unconfirmed transactions used as inputs for this transaction
          "transactionid",    <code>string</code> parent transaction id
         ... ]
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getMempoolEntry("mytxid")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getMempoolInfo'><code>getMempoolInfo</code></h3>
          <p>
  Returns details on the active state of the TX memory pool.
          </p>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "size": xxxxx,               (numeric) Current tx count
    "bytes": xxxxx,              (numeric) Transaction size.
    "usage": xxxxx,              (numeric) Total memory usage for the mempool
    "maxmempool": xxxxx,         (numeric) Maximum memory usage for the mempool
    "mempoolminfee": xxxxx       (numeric) Minimum fee for tx to be accepted
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getMempoolInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getRawMempool'><code>getRawMempool</code></h3>
          <p>
  Returns all transaction ids in memory pool as a json array of string transaction ids.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  verbose (boolean, optional, default=false): True for a json object, false for array of transaction ids
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  Result: (for verbose = false):
          </p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  [                     (json array of string)
    "transactionid"     <code>string</code> The transaction id
    ,...
  ]
            `}</SyntaxHighlighter>
          <p>
  Result: (for verbose = true):
          </p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {                           (json object)
    "transactionid" : {       (json object)
      "size" : n,             (numeric) transaction size.
      "fee" : n,              (numeric) transaction fee in BCH
      "modifiedfee" : n,      (numeric) transaction fee with fee deltas used for mining priority
      "time" : n,             (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT
      "height" : n,           (numeric) block height when transaction entered pool
      "startingpriority" : n, (numeric) DEPRECATED. Priority when transaction entered pool
      "currentpriority" : n,  (numeric) DEPRECATED. Transaction priority now
      "descendantcount" : n,  (numeric) number of in-mempool descendant transactions (including this one)
      "descendantsize" : n,   (numeric) virtual transaction size of in-mempool descendants (including this one)
      "descendantfees" : n,   (numeric) modified fees (see above) of in-mempool descendants (including this one)
      "ancestorcount" : n,    (numeric) number of in-mempool ancestor transactions (including this one)
      "ancestorsize" : n,     (numeric) virtual transaction size of in-mempool ancestors (including this one)
      "ancestorfees" : n,     (numeric) modified fees (see above) of in-mempool ancestors (including this one)
      "depends" : [           (array) unconfirmed transactions used as inputs for this transaction
          "transactionid",    <code>string</code> parent transaction id
         ... ]
    }, ...
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getRawMempool(true)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getTxOut'><code>getTxOut</code></h3>
          <p>
  Returns details about an unspent transaction output.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  txid       (string, required): The transaction id
            </li>
            <li>
  n              (numeric, required): vout number
            </li>
            <li>
  include_mempool  (boolean, optional): Whether to include the mempool
            </li>
          </ol>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "bestblock" : "hash",    <code>string</code> the block hash
    "confirmations" : n,       (numeric) The number of confirmations
    "value" : x.xxx,           (numeric) The transaction value in BCH
    "scriptPubKey" : {         (json object)
       "asm" : "code",       <code>string</code>
       "hex" : "hex",        <code>string</code>
       "reqSigs" : n,          (numeric) Number of required signatures
       "type" : "pubkeyhash", <code>string</code> The type, eg pubkeyhash
       "addresses" : [          (array of string) array of bitcoin addresses
          "address"     <code>string</code> bitcoin address
          ,...
       ]
    },
    "coinbase" : true|false   (boolean) Coinbase or not
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getTxOut("txid", 1)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getTxOutProof'><code>getTxOutProof</code></h3>
          <p>
  Returns a hex-encoded proof that "txid" was included in a block.
          </p>
          <p>
  NOTE: By default this function only works sometimes. This is when there is an
  unspent output in the utxo for this transaction. To make it always work,
  you need to maintain a transaction index, using the -txindex command line option or
  specify the block in which the transaction is included manually (by blockhash).
          </p>
          <h4>Arguments</h4>
          <ol>
            <li> txids       <code>string</code> A json array of txids to filter [ "txid"     <code>string</code> A transaction hash ,... ]
            </li>
            <li>
  blockhash   (string, optional) If specified, looks for txid in the block with this hash
            </li>
            <li>
  data           <code>string</code>: A string that is a serialized, hex-encoded data for the proof.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    legacyAddress <code>string</code>    legacy base 58 check encoded address
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getTxOutProof(["txid1", "txid2"])
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getTxOutSetInfo'><code>getTxOutSetInfo</code></h3>
          <p>
  Returns statistics about the unspent transaction output set.
  Note this call may take some time.
          </p>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "height":n,     (numeric) The current block height (index)
    "bestblock": "hex",   <code>string</code> the best block hash hex
    "transactions": n,      (numeric) The number of transactions
    "txouts": n,            (numeric) The number of output transactions
    "bogosize": n,          (numeric) A database-independent metric for UTXO set size
    "hash_serialized": "hash",   <code>string</code> The serialized hash
    "disk_size": n,         (numeric) The estimated size of the chainstate on disk
    "total_amount": x.xxx          (numeric) The total amount
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.getTxOutSetInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='preciousBlock'><code>preciousBlock</code></h3>
          <p>
  Treats a block as if it were received before others with the same work.

  A later preciousblock call can override the effect of an earlier one.

  The effects of preciousblock are not retained across restarts.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  blockhash   (string, required): the hash of the block to mark as precious
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.preciousBlock("blockhash")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='pruneBlockchain'><code>pruneBlockchain</code></h3>
          <h4>Arguments</h4>
          <ol>
            <li>
  height       (numeric, required): The block height to prune up to. May be set to a discrete height, or a unix timestamp to prune blocks whose block time is at least 2 hours older than the provided timestamp.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  n    (numeric): Height of the last block pruned.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.pruneBlockchain(1000)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='verifyChain'><code>verifyChain</code></h3>
          <p>
  Verifies blockchain database.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  checklevel   (numeric, optional, 0-4, default=3): How thorough the block verification is.
            </li>
            <li>
  nblocks      (numeric, optional, default=6, 0=all): The number of blocks to check.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  true|false       (boolean): Verified or not
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.verifyChain()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='verifyTxOutProof'><code>verifyTxOutProof</code></h3>
          <p>
  Verifies that a proof points to a transaction in a block, returning the transaction it commits to
  and throwing an RPC error if the block is not in our best chain
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  proof    (string, required): The hex-encoded proof generated by gettxoutproof
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  ["txid"]      (array, strings): The txid(s) which the proof commits to, or empty array if the proof is invalid
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Blockchain.verifyTxOutProof("proof")
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

export default Blockchain;
