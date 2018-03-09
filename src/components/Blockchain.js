import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Blockchain extends Component {
  render() {
    return (
      <div className="Blockchain">
        <h2 id='blockchain' className="content-head is-center"><i className="fas fa-cubes" />Blockchain</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='getBestBlockHash'><code>getBestBlockHash</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the hash of the best (tip) block in the longest blockchain.

  Result:
  "hex"      (string) the block hash hex encoded

  BITBOX.Blockchain.getBestBlockHash()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getBlock'><code>getBlock</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'.
  If verbose is true, returns an Object with information about block <hash>.

  Arguments:
  1. "blockhash"          (string, required) The block hash
  2. verbose                (boolean, optional, default=true) true for a json object, false for the hex encoded data

  Result (for verbose = true):
  {
    "hash" : "hash",     (string) the block hash (same as provided)
    "confirmations" : n,   (numeric) The number of confirmations, or -1 if the block is not on the main chain
    "size" : n,            (numeric) The block size
    "height" : n,          (numeric) The block height or index
    "version" : n,         (numeric) The block version
    "versionHex" : "00000000", (string) The block version formatted in hexadecimal
    "merkleroot" : "xxxx", (string) The merkle root
    "tx" : [               (array of string) The transaction ids
       "transactionid"     (string) The transaction id
       ,...
    ],
    "time" : ttt,          (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)
    "mediantime" : ttt,    (numeric) The median block time in seconds since epoch (Jan 1 1970 GMT)
    "nonce" : n,           (numeric) The nonce
    "bits" : "1d00ffff", (string) The bits
    "difficulty" : x.xxx,  (numeric) The difficulty
    "chainwork" : "xxxx",  (string) Expected number of hashes required to produce the chain up to this block (in hex)
    "previousblockhash" : "hash",  (string) The hash of the previous block
    "nextblockhash" : "hash"       (string) The hash of the next block
  }

  Result (for verbose=false):
  "data"             (string) A string that is serialized, hex-encoded data for block 'hash'.

  BITBOX.Blockchain.getBlock("00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getBlockchainInfo'><code>getBlockchainInfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns an object containing various state info regarding blockchain processing.

  Result:
  {
    "chain": "xxxx",        (string) current network name as defined in BIP70 (main, test, regtest)
    "blocks": xxxxxx,         (numeric) the current number of blocks processed in the server
    "headers": xxxxxx,        (numeric) the current number of headers we have validated
    "bestblockhash": "...", (string) the hash of the currently best block
    "difficulty": xxxxxx,     (numeric) the current difficulty
    "mediantime": xxxxxx,     (numeric) median time for the current best block
    "verificationprogress": xxxx, (numeric) estimate of verification progress [0..1]
    "chainwork": "xxxx"     (string) total amount of work in active chain, in hexadecimal
    "pruned": xx,             (boolean) if the blocks are subject to pruning
    "pruneheight": xxxxxx,    (numeric) lowest-height complete block stored
    "softforks": [            (array) status of softforks in progress
       {
          "id": "xxxx",        (string) name of softfork
          "version": xx,         (numeric) block version
          "reject": {            (object) progress toward rejecting pre-softfork blocks
             "status": xx,       (boolean) true if threshold reached
          },
       }, ...
    ],
    "bip9_softforks": {          (object) status of BIP9 softforks in progress
       "xxxx" : {                (string) name of the softfork
          "status": "xxxx",    (string) one of "defined", "started", "locked_in", "active", "failed"
          "bit": xx,             (numeric) the bit (0-28) in the block version field used to signal this softfork (only for "started" status)
          "startTime": xx,       (numeric) the minimum median time past of a block at which the bit gains its meaning
          "timeout": xx,         (numeric) the median time past of a block at which the deployment is considered failed if not yet locked in
          "since": xx            (numeric) height of the first block to which the status applies
       }
    }
  }

  BITBOX.Blockchain.getBlockchainInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getBlockCount'><code>getBlockCount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the number of blocks in the longest blockchain.

  Result:
  n    (numeric) The current block count

  BITBOX.Blockchain.getBlockCount()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getBlockHash'><code>getBlockHash</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns hash of block in best-block-chain at height provided.

  Arguments:
  1. height         (numeric, required) The height index

  Result:
  "hash"         (string) The block hash

  BITBOX.Blockchain.getBlockHash(1000)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getBlockHeader'><code>getBlockHeader</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  If verbose is false, returns a string that is serialized, hex-encoded data for blockheader 'hash'.
  If verbose is true, returns an Object with information about blockheader <hash>.

  Arguments:
  1. "hash"          (string, required) The block hash
  2. verbose           (boolean, optional, default=true) true for a json object, false for the hex encoded data

  Result (for verbose = true):
  {
    "hash" : "hash",     (string) the block hash (same as provided)
    "confirmations" : n,   (numeric) The number of confirmations, or -1 if the block is not on the main chain
    "height" : n,          (numeric) The block height or index
    "version" : n,         (numeric) The block version
    "versionHex" : "00000000", (string) The block version formatted in hexadecimal
    "merkleroot" : "xxxx", (string) The merkle root
    "time" : ttt,          (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)
    "mediantime" : ttt,    (numeric) The median block time in seconds since epoch (Jan 1 1970 GMT)
    "nonce" : n,           (numeric) The nonce
    "bits" : "1d00ffff", (string) The bits
    "difficulty" : x.xxx,  (numeric) The difficulty
    "chainwork" : "0000...1f3"     (string) Expected number of hashes required to produce the current chain (in hex)
    "previousblockhash" : "hash",  (string) The hash of the previous block
    "nextblockhash" : "hash",      (string) The hash of the next block
  }

  Result (for verbose=false):
  "data"             (string) A string that is serialized, hex-encoded data for block 'hash'.

  BITBOX.Blockchain.getBlockHeader("00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getChainTips'><code>getChainTips</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Return information about all known tips in the block tree, including the main chain as well as orphaned branches.

  Result:
  [
    {
      "height": xxxx,         (numeric) height of the chain tip
      "hash": "xxxx",         (string) block hash of the tip
      "branchlen": 0          (numeric) zero for main chain
      "status": "active"      (string) "active" for the main chain
    },
    {
      "height": xxxx,
      "hash": "xxxx",
      "branchlen": 1          (numeric) length of branch connecting the tip to the main chain
      "status": "xxxx"        (string) status of the chain (active, valid-fork, valid-headers, headers-only, invalid)
    }
  ]
  Possible values for status:
  1.  "invalid"               This branch contains at least one invalid block
  2.  "headers-only"          Not all blocks for this branch are available, but the headers are valid
  3.  "valid-headers"         All blocks are available for this branch, but they were never fully validated
  4.  "valid-fork"            This branch is not part of the active chain, but is fully validated
  5.  "active"                This is the tip of the active main chain, which is certainly valid

  BITBOX.Blockchain.getChainTips()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getDifficulty'><code>getDifficulty</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the proof-of-work difficulty as a multiple of the minimum difficulty.

  Result:
  n.nnn       (numeric) the proof-of-work difficulty as a multiple of the minimum difficulty.

  BITBOX.Blockchain.getDifficulty()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getMempoolAncestors'><code>getMempoolAncestors</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  If txid is in the mempool, returns all in-mempool ancestors.

  Arguments:
  1. "txid"                 (string, required) The transaction id (must be in mempool)
  2. verbose                  (boolean, optional, default=false) True for a json object, false for array of transaction ids

  Result (for verbose=false):
  [                       (json array of strings)
    "transactionid"           (string) The transaction id of an in-mempool ancestor transaction
    ,...
  ]

  Result (for verbose=true):
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
          "transactionid",    (string) parent transaction id
         ... ]
    }, ...
  }

  BITBOX.Blockchain.getMempoolAncestors("mytxid")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getMempoolDescendants'><code>getMempoolDescendants</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  If txid is in the mempool, returns all in-mempool descendants.

  Arguments:
  1. "txid"                 (string, required) The transaction id (must be in mempool)
  2. verbose                  (boolean, optional, default=false) True for a json object, false for array of transaction ids

  Result (for verbose=false):
  [                       (json array of strings)
    "transactionid"           (string) The transaction id of an in-mempool descendant transaction
    ,...
  ]

  Result (for verbose=true):
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
          "transactionid",    (string) parent transaction id
         ... ]
    }, ...
  }

  BITBOX.Blockchain.getMempoolDescendants("mytxid")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getMempoolEntry'><code>getMempoolEntry</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns mempool data for given transaction

  Arguments:
  1. "txid"                   (string, required) The transaction id (must be in mempool)

  Result:
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
          "transactionid",    (string) parent transaction id
         ... ]
  }

  BITBOX.Blockchain.getMempoolEntry("mytxid")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getMempoolInfo'><code>getMempoolInfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`

  Returns details on the active state of the TX memory pool.

  Result:
  {
    "size": xxxxx,               (numeric) Current tx count
    "bytes": xxxxx,              (numeric) Transaction size.
    "usage": xxxxx,              (numeric) Total memory usage for the mempool
    "maxmempool": xxxxx,         (numeric) Maximum memory usage for the mempool
    "mempoolminfee": xxxxx       (numeric) Minimum fee for tx to be accepted
  }

  BITBOX.Blockchain.getMempoolInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getRawMempool'><code>getRawMempool</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns all transaction ids in memory pool as a json array of string transaction ids.

  Arguments:
  1. verbose (boolean, optional, default=false) True for a json object, false for array of transaction ids

  Result: (for verbose = false):
  [                     (json array of string)
    "transactionid"     (string) The transaction id
    ,...
  ]

  Result: (for verbose = true):
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
          "transactionid",    (string) parent transaction id
         ... ]
    }, ...
  }

  BITBOX.Blockchain.getRawMempool(true)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getTxOut'><code>getTxOut</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`

  Returns details about an unspent transaction output.

  Arguments:
  1. "txid"       (string, required) The transaction id
  2. n              (numeric, required) vout number
  3. include_mempool  (boolean, optional) Whether to include the mempool

  Result:
  {
    "bestblock" : "hash",    (string) the block hash
    "confirmations" : n,       (numeric) The number of confirmations
    "value" : x.xxx,           (numeric) The transaction value in BCH
    "scriptPubKey" : {         (json object)
       "asm" : "code",       (string)
       "hex" : "hex",        (string)
       "reqSigs" : n,          (numeric) Number of required signatures
       "type" : "pubkeyhash", (string) The type, eg pubkeyhash
       "addresses" : [          (array of string) array of bitcoin addresses
          "address"     (string) bitcoin address
          ,...
       ]
    },
    "coinbase" : true|false   (boolean) Coinbase or not
  }

  BITBOX.Blockchain.getTxOut("txid", 1)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getTxOutProof'><code>getTxOutProof</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns a hex-encoded proof that "txid" was included in a block.

  NOTE: By default this function only works sometimes. This is when there is an
  unspent output in the utxo for this transaction. To make it always work,
  you need to maintain a transaction index, using the -txindex command line option or
  specify the block in which the transaction is included manually (by blockhash).

  Arguments:
  1. "txids"       (string) A json array of txids to filter
      [
        "txid"     (string) A transaction hash
        ,...
      ]
  2. "blockhash"   (string, optional) If specified, looks for txid in the block with this hash

  Result:
  "data"           (string) A string that is a serialized, hex-encoded data for the proof.

  BITBOX.Blockchain.getTxOutProof(["txid1", "txid2"])
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getTxOutSetInfo'><code>getTxOutSetInfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns statistics about the unspent transaction output set.
  Note this call may take some time.

  Result:
  {
    "height":n,     (numeric) The current block height (index)
    "bestblock": "hex",   (string) the best block hash hex
    "transactions": n,      (numeric) The number of transactions
    "txouts": n,            (numeric) The number of output transactions
    "bogosize": n,          (numeric) A database-independent metric for UTXO set size
    "hash_serialized": "hash",   (string) The serialized hash
    "disk_size": n,         (numeric) The estimated size of the chainstate on disk
    "total_amount": x.xxx          (numeric) The total amount
  }

  BITBOX.Blockchain.getTxOutSetInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='preciousBlock'><code>preciousBlock</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Treats a block as if it were received before others with the same work.

  A later preciousblock call can override the effect of an earlier one.

  The effects of preciousblock are not retained across restarts.

  Arguments:
  1. "blockhash"   (string, required) the hash of the block to mark as precious

  BITBOX.Blockchain.preciousBlock("blockhash")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='pruneBlockchain'><code>pruneBlockchain</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Arguments:
  1. "height"       (numeric, required) The block height to prune up to. May be set to a discrete height, or a unix timestamp
                    to prune blocks whose block time is at least 2 hours older than the provided timestamp.

  Result:
  n    (numeric) Height of the last block pruned.

  BITBOX.Blockchain.pruneBlockchain(1000)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='verifyChain'><code>verifyChain</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Verifies blockchain database.

  Arguments:
  1. checklevel   (numeric, optional, 0-4, default=3) How thorough the block verification is.
  2. nblocks      (numeric, optional, default=6, 0=all) The number of blocks to check.

  Result:
  true|false       (boolean) Verified or not

  BITBOX.Blockchain.verifyChain()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='verifyTxOutProof'><code>verifyTxOutProof</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Verifies that a proof points to a transaction in a block, returning the transaction it commits to
  and throwing an RPC error if the block is not in our best chain

  Arguments:
  1. "proof"    (string, required) The hex-encoded proof generated by gettxoutproof

  Result:
  ["txid"]      (array, strings) The txid(s) which the proof commits to, or empty array if the proof is invalid

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
