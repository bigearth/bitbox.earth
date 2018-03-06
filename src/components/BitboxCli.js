import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

// TODO generatetoaddress
// getexcessiveblock
// setexcessiveblock
// estimatesmartfee
// estimatesmartpriority
// abandontransaction
class BitboxCli extends Component {
  render() {
    return (
      <div className="docs bitboxcli">
        <h2 className="content-head is-center">BitboxCli</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <p><code>bitbox-cli</code> is a Utility for creating great <a href='https://www.bitcoincash.org'>Bitcoin Cash</a> applications. If can be used from the command line or from within client/server apps. Any methods which make network requests return a <code>Promise</code> and any other methods return immediately.</p>
            <ul>
              <li>
                <a href='#bitcoinCash'>Bitcoin Cash</a>
              </li>
              <li>
                <a href='#crypto'>Crypto</a>
              </li>
              <li>
                <a href='#blockchain'>Blockchain</a>
              </li>
              <li>
                <a href='#control'>Control</a>
              </li>
              <li>
                <a href='#generating'>Generating</a>
              </li>
              <li>
                <a href='#mining'>Mining</a>
              </li>
              <li>
                <a href='#network'>Network</a>
              </li>
              <li>
                <a href='#rawtransactions'>Rawtransactions</a>
              </li>
              <li>
                <a href='#util'>Util</a>
              </li>
              <li>
                <a href='#wallet'>Wallet</a>
              </li>
            </ul>
            <h2 id='bitcoinCash' className="content-head is-center">Bitcoin Cash</h2>
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

            <h3 id='toLegacyAddress'><code>toLegacyAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Converting cashaddr to legacy address format

  Arguments:
  1. address        cashaddr address to be converted

  Result:
  "legacyAddress"    legacy base 58 check encoded address

  BITBOX.BitcoinCash.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
  // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN
            `}</SyntaxHighlighter>

            <h3 id='toCashAddress'><code>toCashAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Converting legacy to cashAddr address format

  Arguments:
  1. address        legacy address to be converted

  Result:
  "cashAddr"    cashAddr encoded address

  BITBOX.BitcoinCash.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
  // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
            `}</SyntaxHighlighter>

            <h3 id='isLegacyAddress'><code>isLegacyAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Detect if legacy base58check encoded address

  Arguments:
  1. address   address to determine

  Result:
  isLegacyAddress     boolean if is legacy address

  BITBOX.BitcoinCash.isLegacyAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
  // false
            `}</SyntaxHighlighter>

            <h3 id='isCashAddress'><code>isCashAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Detect if cashAddr encoded address

  Arguments:
  1. address   address to determine

  Result:
  isCashAddrAddress     boolean if is cashaddr address

  BITBOX.BitcoinCash.isCashAddrAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
  // true
            `}</SyntaxHighlighter>

            <h3 id='isMainnetAddress'><code>isMainnetAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Detect if mainnet address

  Arguments:
  1. address   address to determine

  Result:
  isMainnetAddress     boolean if is mainnet address

  BITBOX.BitcoinCash.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
  // true
            `}</SyntaxHighlighter>

            <h3 id='isTestnetAddress'><code>isTestnetAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Detect if testnet address

  Arguments:
  1. address   address to determine

  Result:
  isMainnetAddress     boolean if is testnet address

  BITBOX.BitcoinCash.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
  //false
            `}</SyntaxHighlighter>

            <h3 id='isP2PKHAddress'><code>isP2PKHAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Detect if p2pkh address

  Arguments:
  1. address   address to determine

  Result:
  isP2PKHAddress     boolean if is p2pkh address

  BITBOX.BitcoinCash.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
  // true
            `}</SyntaxHighlighter>

            <h3 id='isP2SHAddress'><code>isP2SHAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Detect if p2sh address

  Arguments:
  1. address   address to determine

  Result:
  isP2SHAddress     boolean if is p2sh address

  BITBOX.BitcoinCash.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
  // false
            `}</SyntaxHighlighter>

            <h3 id='detectAddressFormat'><code>detectAddressFormat</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Detect address format

  Arguments:
  1. address               address to determine format

  Result:
  "addressFormat"            string of address format

  BITBOX.BitcoinCash.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
  // cashaddr
            `}</SyntaxHighlighter>

            <h3 id='detectAddressNetwork'><code>detectAddressNetwork</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Detect address network

  Arguments:
  1. address               address to determine network

  Result:
  "addressNetwork"            string of address network

  BITBOX.BitcoinCash.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
  // mainnet
            `}</SyntaxHighlighter>

            <h3 id='detectAddressType'><code>detectAddressType</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Detect address network

  Arguments:
  1. address              address to determine network

  Result:
  "addressNetwork"        string of address network

  BITBOX.BitcoinCash.detectAddressType('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
  // p2pkh
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

            <h2 id='crypto' className="content-head is-center">Crypto</h2>
            <h3 id='createHash'><code>createHash</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Utility for creating hash digests of data. Can be sha256 or ripemd160.

  Arguments:
  1. data          data to be hashed
  2. algorithm       algorithm <string> default: 'sha256'

  Result:
  "hex"      hex encoded hash of data

  BITBOX.Crypto.createHash('EARTH', 'sha256')
  // bcfee25a8baf6808fce5ff4e63cf21c8d114853ca7eacdcc3c210d73c58dab66
            `}</SyntaxHighlighter>

            <h3 id='createSHA256Hash'><code>createSHA256Hash</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Utility for creating sha256 hash digests of data

  Arguments:
  1. data          data to be hashed

  Result:
  "hex"      hex encoded sha256 hash of data

  BITBOX.Crypto.createSHA256Hash('EARTH')
  // bcfee25a8baf6808fce5ff4e63cf21c8d114853ca7eacdcc3c210d73c58dab66
            `}</SyntaxHighlighter>

            <h3 id='createRIPEMD160Hash'><code>createRIPEMD160Hash</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Utility for creating ripemd160 hash digests of data

  Arguments:
  1. data          data to be hashed

  Result:
  "hex"      hex encoded ripemd160 hash of data

  BITBOX.Crypto.createRIPEMD160Hash('EARTH')
  // ca700bba3bd37304b9bd923652245f598ece8afe
            `}</SyntaxHighlighter>

            <h3 id='randomBytes'><code>randomBytes</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Generates cryptographically strong pseudo-random data. The size argument is a number indicating the number of bytes to generate.

  Arguments:
  1. data          data to be hashed

  Result:
  "hex"      hex encoded random bytes

  BITBOX.Crypto.randomBytes(32)
  // 6e1453357f6f99d19d2a6554f35eab65b6c27f6572e31d7f2faa696cac57759b
            `}</SyntaxHighlighter>


            <h2 id='blockchain' className="content-head is-center">Blockchain</h2>

            <h3 id='getbestblockhash'><code>getbestblockhash</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the hash of the best (tip) block in the longest blockchain.

  Result:
  "hex"      (string) the block hash hex encoded

  BITBOX.getbestblockhash()
            `}</SyntaxHighlighter>

            <h3 id='getblock'><code>getblock</code></h3>
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

  BITBOX.getblock("00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09")
            `}</SyntaxHighlighter>

            <h3 id='getblockchaininfo'><code>getblockchaininfo</code></h3>
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

  BITBOX.getblockchaininfo()
            `}</SyntaxHighlighter>

            <h3 id='getblockcount'><code>getblockcount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the number of blocks in the longest blockchain.

  Result:
  n    (numeric) The current block count

  BITBOX.getblockcount()
            `}</SyntaxHighlighter>

            <h3 id='getblockhash'><code>getblockhash</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns hash of block in best-block-chain at height provided.

  Arguments:
  1. height         (numeric, required) The height index

  Result:
  "hash"         (string) The block hash

  BITBOX.getblockhash(1000)
            `}</SyntaxHighlighter>

            <h3 id='getblockheader'><code>getblockheader</code></h3>
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

  BITBOX.getblockheader("00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09")
            `}</SyntaxHighlighter>

            <h3 id='getchaintips'><code>getchaintips</code></h3>
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

  BITBOX.getchaintips()
            `}</SyntaxHighlighter>

            <h3 id='getdifficulty'><code>getdifficulty</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the proof-of-work difficulty as a multiple of the minimum difficulty.

  Result:
  n.nnn       (numeric) the proof-of-work difficulty as a multiple of the minimum difficulty.

  BITBOX.getdifficulty()
            `}</SyntaxHighlighter>

            <h3 id='getmempoolancestors'><code>getmempoolancestors</code></h3>
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

  BITBOX.getmempoolancestors("mytxid")
            `}</SyntaxHighlighter>

            <h3 id='getmempooldescendants'><code>getmempooldescendants</code></h3>
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

  BITBOX.getmempooldescendants("mytxid")
            `}</SyntaxHighlighter>

            <h3 id='getmempoolentry'><code>getmempoolentry</code></h3>
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

  BITBOX.getmempoolentry("mytxid")
            `}</SyntaxHighlighter>

            <h3 id='getmempoolinfo'><code>getmempoolinfo</code></h3>
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

  BITBOX.getmempoolinfo()
            `}</SyntaxHighlighter>

            <h3 id='getrawmempool'><code>getrawmempool</code></h3>
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

  BITBOX.getrawmempool(true)
            `}</SyntaxHighlighter>

            <h3 id='gettxout'><code>gettxout</code></h3>
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

  BITBOX.gettxout("txid", 1)
            `}</SyntaxHighlighter>

            <h3 id='gettxoutproof'><code>gettxoutproof</code></h3>
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

  BITBOX.gettxoutproof(["txid1", "txid2"])
            `}</SyntaxHighlighter>

            <h3 id='gettxoutsetinfo'><code>gettxoutsetinfo</code></h3>
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

  BITBOX.gettxoutsetinfo()
            `}</SyntaxHighlighter>

            <h3 id='preciousblock'><code>preciousblock</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Treats a block as if it were received before others with the same work.

  A later preciousblock call can override the effect of an earlier one.

  The effects of preciousblock are not retained across restarts.

  Arguments:
  1. "blockhash"   (string, required) the hash of the block to mark as precious

  BITBOX.preciousblock("blockhash")
            `}</SyntaxHighlighter>

            <h3 id='pruneblockchain'><code>pruneblockchain</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Arguments:
  1. "height"       (numeric, required) The block height to prune up to. May be set to a discrete height, or a unix timestamp
                    to prune blocks whose block time is at least 2 hours older than the provided timestamp.

  Result:
  n    (numeric) Height of the last block pruned.

  BITBOX.pruneblockchain(1000)
            `}</SyntaxHighlighter>

            <h3 id='verifychain'><code>verifychain</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Verifies blockchain database.

  Arguments:
  1. checklevel   (numeric, optional, 0-4, default=3) How thorough the block verification is.
  2. nblocks      (numeric, optional, default=6, 0=all) The number of blocks to check.

  Result:
  true|false       (boolean) Verified or not

  BITBOX.verifychain()
            `}</SyntaxHighlighter>

            <h3 id='verifytxoutproof'><code>verifytxoutproof</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Verifies that a proof points to a transaction in a block, returning the transaction it commits to
  and throwing an RPC error if the block is not in our best chain

  Arguments:
  1. "proof"    (string, required) The hex-encoded proof generated by gettxoutproof

  Result:
  ["txid"]      (array, strings) The txid(s) which the proof commits to, or empty array if the proof is invalid

  BITBOX.verifytxoutproof("proof")
            `}</SyntaxHighlighter>


          <h2 id='control' className="content-head is-center">Control</h2>

            <h3 id='getinfo'><code>getinfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Returns an object containing various state info.

  Result:
  {
    "version": xxxxx,           (numeric) the server version
    "protocolversion": xxxxx,   (numeric) the protocol version
    "walletversion": xxxxx,     (numeric) the wallet version
    "balance": xxxxxxx,         (numeric) the total bitcoin balance of the wallet
    "blocks": xxxxxx,           (numeric) the current number of blocks processed in the server
    "timeoffset": xxxxx,        (numeric) the time offset
    "connections": xxxxx,       (numeric) the number of connections
    "proxy": "host:port",     (string, optional) the proxy used by the server
    "difficulty": xxxxxx,       (numeric) the current difficulty
    "testnet": true|false,      (boolean) if the server is using testnet or not
    "keypoololdest": xxxxxx,    (numeric) the timestamp (seconds since Unix epoch) of the oldest pre-generated key in the key pool
    "keypoolsize": xxxx,        (numeric) how many new keys are pre-generated
    "unlocked_until": ttt,      (numeric) the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
    "paytxfee": x.xxxx,         (numeric) the transaction fee set in BCH/kB
    "relayfee": x.xxxx,         (numeric) minimum relay fee for non-free transactions in BCH/kB
    "errors": "..."           (string) any error messages
  }

  BITBOX.getinfo()
            `}</SyntaxHighlighter>

            <h3 id='getmemoryinfo'><code>getmemoryinfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns an object containing information about memory usage.

  Result:
  {
    "locked": {               (json object) Information about locked memory manager
      "used": xxxxx,          (numeric) Number of bytes used
      "free": xxxxx,          (numeric) Number of bytes available in current arenas
      "total": xxxxxxx,       (numeric) Total number of bytes managed
      "locked": xxxxxx,       (numeric) Amount of bytes that succeeded locking. If this number is smaller than total, locking pages failed at some point and key data could be swapped to disk.
      "chunks_used": xxxxx,   (numeric) Number allocated chunks
      "chunks_free": xxxxx,   (numeric) Number unused chunks
    }
  }

  BITBOX.getmemoryinfo()
            `}</SyntaxHighlighter>

            <h3 id='help'><code>help</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  List all commands, or get help for a specified command.

  Arguments:
  1. "command"     (string, optional) The command to get help on

  Result:
  "text"     (string) The help text

  BITBOX.help('getblockhash')
            `}</SyntaxHighlighter>

            <h3 id='stop'><code>stop</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Stop Bitcoin server.

  BITBOX.stop()
            `}</SyntaxHighlighter>

          <h2 id='generating' className="content-head is-center">Generating</h2>

            <h3 id='generate'><code>generate</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Mine up to nblocks blocks immediately (before the RPC call returns)

  Arguments:
  1. nblocks      (numeric, required) How many blocks are generated immediately.
  2. maxtries     (numeric, optional) How many iterations to try (default = 1000000).

  Result:
  [ blockhashes ]     (array) hashes of blocks generated

  BITBOX.generate(11)
            `}</SyntaxHighlighter>

          <h2 id='mining' className="content-head is-center">Mining</h2>

            <h3 id='getblocktemplate'><code>getblocktemplate</code></h3>
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

  BITBOX.getblocktemplate()
            `}</SyntaxHighlighter>

            <h3 id='getmininginfo'><code>getmininginfo</code></h3>
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

  BITBOX.getmininginfo()
            `}</SyntaxHighlighter>

            <h3 id='getnetworkhashps'><code>getnetworkhashps</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the estimated network hashes per second based on the last n blocks.
  Pass in [blocks] to override # of blocks, -1 specifies since last difficulty change.
  Pass in [height] to estimate the network speed at the time when a certain block was found.

  Arguments:
  1. nblocks     (numeric, optional, default=120) The number of blocks, or -1 for blocks since last difficulty change.
  2. height      (numeric, optional, default=-1) To estimate at the time of the given height.

  Result:
  x             (numeric) Hashes per second estimated

  BITBOX.getnetworkhashps()
            `}</SyntaxHighlighter>

            <h3 id='prioritisetransaction'><code>prioritisetransaction</code></h3>
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

  BITBOX.prioritisetransaction("txid", 0.0, 10000)
            `}</SyntaxHighlighter>

            <h3 id='submitblock'><code>submitblock</code></h3>
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

  BITBOX.submitblock("mydata")
            `}</SyntaxHighlighter>

          <h2 id='network' className="content-head is-center">Network</h2>

            <h3 id='addnode'><code>addnode</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Attempts add or remove a node from the addnode list.
  Or try a connection to a node once.

  Arguments:
  1. "node"     (string, required) The node (see getpeerinfo for nodes)
  2. "command"  (string, required) 'add' to add a node to the list, 'remove' to remove a node from the list, 'onetry' to try a connection to the node once

  BITBOX.addnode("192.168.0.6:8333", "onetry")
            `}</SyntaxHighlighter>

            <h3 id='clearbanned'><code>clearbanned</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Clear all banned IPs.

  BITBOX.clearbanned()
            `}</SyntaxHighlighter>

            <h3 id='disconnectnode'><code>disconnectnode</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Immediately disconnects from the specified peer node.

  Strictly one out of 'address' and 'nodeid' can be provided to identify the node.

  To disconnect by nodeid, either set 'address' to the empty string, or call using the named 'nodeid' argument only.

  Arguments:
  1. "address"     (string, optional) The IP address/port of the node
  2. "nodeid"      (number, optional) The node ID (see getpeerinfo for node IDs)

  BITBOX.disconnectnode("192.168.0.6:8333")
            `}</SyntaxHighlighter>

            <h3 id='getaddednodeinfo'><code>getaddednodeinfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns information about the given added node, or all added nodes (note that onetry addnodes are not listed here)

  Arguments:
  1. "node"   (string, optional) If provided, return information about this specific node, otherwise all nodes are returned.

  Result:
  [
    {
      "addednode" : "192.168.0.201",   (string) The node ip address or name (as provided to addnode)
      "connected" : true|false,          (boolean) If connected
      "addresses" : [                    (list of objects) Only when connected = true
         {
           "address" : "192.168.0.201:8333",  (string) The bitcoin server IP and port we're connected to
           "connected" : "outbound"           (string) connection, inbound or outbound
         }
       ]
    }
    ,...
  ]

  BITBOX.getaddednodeinfo('192.168.0.201')
            `}</SyntaxHighlighter>

            <h3 id='getconnectioncount'><code>getconnectioncount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the number of connections to other nodes.

  Result:
  n          (numeric) The connection count

  BITBOX.getconnectioncount()
            `}</SyntaxHighlighter>

            <h3 id='getnettotals'><code>getnettotals</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns information about network traffic, including bytes in, bytes out, and current time.

  Result:
  {
    "totalbytesrecv": n,   (numeric) Total bytes received
    "totalbytessent": n,   (numeric) Total bytes sent
    "timemillis": t,       (numeric) Current UNIX time in milliseconds
    "uploadtarget":
    {
      "timeframe": n,                         (numeric) Length of the measuring timeframe in seconds
      "target": n,                            (numeric) Target in bytes
      "target_reached": true|false,           (boolean) True if target is reached
      "serve_historical_blocks": true|false,  (boolean) True if serving historical blocks
      "bytes_left_in_cycle": t,               (numeric) Bytes left in current time cycle
      "time_left_in_cycle": t                 (numeric) Seconds left in current time cycle
    }
  }

  BITBOX.getnettotals()
            `}</SyntaxHighlighter>

            <h3 id='getnetworkinfo'><code>getnetworkinfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns an object containing various state info regarding P2P networking.

  Result:
  {
    "version": xxxxx,                      (numeric) the server version
    "subversion": "/Satoshi:x.x.x/",     (string) the server subversion string
    "protocolversion": xxxxx,              (numeric) the protocol version
    "localservices": "xxxxxxxxxxxxxxxx", (string) the services we offer to the network
    "localrelay": true|false,              (bool) true if transaction relay is requested from peers
    "timeoffset": xxxxx,                   (numeric) the time offset
    "connections": xxxxx,                  (numeric) the number of connections
    "networkactive": true|false,           (bool) whether p2p networking is enabled
    "networks": [                          (array) information per network
    {
      "name": "xxx",                     (string) network (ipv4, ipv6 or onion)
      "limited": true|false,               (boolean) is the network limited using -onlynet?
      "reachable": true|false,             (boolean) is the network reachable?
      "proxy": "host:port"               (string) the proxy that is used for this network, or empty if none
      "proxy_randomize_credentials": true|false,  (string) Whether randomized credentials are used
    }
    ,...
    ],
    "relayfee": x.xxxxxxxx,                (numeric) minimum relay fee for non-free transactions in BCH/kB
    "incrementalfee": x.xxxxxxxx,          (numeric) minimum fee increment for mempool limiting or BIP 125 replacement in BCH/kB
    "localaddresses": [                    (array) list of local addresses
    {
      "address": "xxxx",                 (string) network address
      "port": xxx,                         (numeric) network port
      "score": xxx                         (numeric) relative score
    }
    ,...
    ]
    "warnings": "..."                    (string) any network warnings
  }

  BITBOX.getnetworkinfo()
            `}</SyntaxHighlighter>

            <h3 id='getpeerinfo'><code>getpeerinfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns data about each connected network node as a json array of objects.

  Result:
  [
    {
      "id": n,                   (numeric) Peer index
      "addr":"host:port",      (string) The ip address and port of the peer
      "addrlocal":"ip:port",   (string) local address
      "services":"xxxxxxxxxxxxxxxx",   (string) The services offered
      "relaytxes":true|false,    (boolean) Whether peer has asked us to relay transactions to it
      "lastsend": ttt,           (numeric) The time in seconds since epoch (Jan 1 1970 GMT) of the last send
      "lastrecv": ttt,           (numeric) The time in seconds since epoch (Jan 1 1970 GMT) of the last receive
      "bytessent": n,            (numeric) The total bytes sent
      "bytesrecv": n,            (numeric) The total bytes received
      "conntime": ttt,           (numeric) The connection time in seconds since epoch (Jan 1 1970 GMT)
      "timeoffset": ttt,         (numeric) The time offset in seconds
      "pingtime": n,             (numeric) ping time (if available)
      "minping": n,              (numeric) minimum observed ping time (if any at all)
      "pingwait": n,             (numeric) ping wait (if non-zero)
      "version": v,              (numeric) The peer version, such as 7001
      "subver": "/Satoshi:0.8.5/",  (string) The string version
      "inbound": true|false,     (boolean) Inbound (true) or Outbound (false)
      "addnode": true|false,     (boolean) Whether connection was due to addnode and is using an addnode slot
      "startingheight": n,       (numeric) The starting height (block) of the peer
      "banscore": n,             (numeric) The ban score
      "synced_headers": n,       (numeric) The last header we have in common with this peer
      "synced_blocks": n,        (numeric) The last block we have in common with this peer
      "inflight": [
         n,                        (numeric) The heights of blocks we're currently asking from this peer
         ...
      ],
      "whitelisted": true|false, (boolean) Whether the peer is whitelisted
      "bytessent_per_msg": {
         "addr": n,              (numeric) The total bytes sent aggregated by message type
         ...
      },
      "bytesrecv_per_msg": {
         "addr": n,              (numeric) The total bytes received aggregated by message type
         ...
      }
    }
    ,...
  ]

  BITBOX.getpeerinfo()
            `}</SyntaxHighlighter>

            <h3 id='listbanned'><code>listbanned</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  List all banned IPs/Subnets.

  BITBOX.listbanned()
            `}</SyntaxHighlighter>

            <h3 id='ping'><code>ping</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Requests that a ping be sent to all other nodes, to measure ping time.
  Results provided in getpeerinfo, pingtime and pingwait fields are decimal seconds.
  Ping command is handled in queue with all other commands, so it measures processing backlog, not just network ping.

  BITBOX.ping()
            `}</SyntaxHighlighter>

            <h3 id='setban'><code>setban</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Attempts add or remove a IP/Subnet from the banned list.

  Arguments:
  1. "subnet"       (string, required) The IP/Subnet (see getpeerinfo for nodes ip) with a optional netmask (default is /32 = single ip)
  2. "command"      (string, required) 'add' to add a IP/Subnet to the list, 'remove' to remove a IP/Subnet from the list
  3. "bantime"      (numeric, optional) time in seconds how long (or until when if [absolute] is set) the ip is banned (0 or empty means using the default time of 24h which can also be overwritten by the -bantime startup argument)
  4. "absolute"     (boolean, optional) If set, the bantime must be a absolute timestamp in seconds since epoch (Jan 1 1970 GMT)

  BITBOX.setban("192.168.0.6", "add", 86400)
            `}</SyntaxHighlighter>

            <h3 id='setnetworkactive'><code>setnetworkactive</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Disable/enable all p2p network activity.

  Arguments:
  1. "state"        (boolean, required) true to enable networking, false to disable

  BITBOX.setnetworkactive(true)
            `}</SyntaxHighlighter>

          <h2 id='rawtransactions' className="content-head is-center">Rawtransactions</h2>

            <h3 id='createrawtransaction'><code>createrawtransaction</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Create a transaction spending the given inputs and creating new outputs.
  Outputs can be addresses or data.
  Returns hex-encoded raw transaction.
  Note that the transaction's inputs are not signed, and
  it is not stored in the wallet or transmitted to the network.

  Arguments:
  1. "inputs"                (array, required) A json array of json objects
       [
         {
           "txid":"id",    (string, required) The transaction id
           "vout":n,         (numeric, required) The output number
           "sequence":n      (numeric, optional) The sequence number
         }
         ,...
       ]
  2. "outputs"               (object, required) a json object with outputs
      {
        "address": x.xxx,    (numeric or string, required) The key is the bitcoin address, the numeric value (can be string) is the BCH amount
        "data": "hex"      (string, required) The key is "data", the value is hex encoded data
        ,...
      }
  3. locktime                  (numeric, optional, default=0) Raw locktime. Non-0 value also locktime-activates inputs

  Result:
  "transaction"              (string) hex string of the transaction

  BITBOX.createrawtransaction([{"txid":"myid","vout":0}], {"address":0.01})
            `}</SyntaxHighlighter>

            <h3 id='decoderawtransaction'><code>decoderawtransaction</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Return a JSON object representing the serialized, hex-encoded transaction.

  Arguments:
  1. "hexstring"      (string, required) The transaction hex string

  Result:
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

  BITBOX.decoderawtransaction('01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000')
            `}</SyntaxHighlighter>

            <h3 id='decodescript'><code>decodescript</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Decode a hex-encoded script.

  Arguments:
  1. "hexstring"     (string) the hex encoded script

  Result:
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

  BITBOX.decodescript('4830450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed592012102e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16')
            `}</SyntaxHighlighter>

            <h3 id='fundrawtransaction'><code>fundrawtransaction</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Add inputs to a transaction until it has enough in value to meet its out value.
  This will not modify existing inputs, and will add at most one change output to the outputs.
  No existing outputs will be modified unless "subtractFeeFromOutputs" is specified.
  Note that inputs which were signed may need to be resigned after completion since in/outputs have been added.
  The inputs added will not be signed, use signrawtransaction for that.
  Note that all existing inputs must have their previous output transaction be in the wallet.
  Note that all inputs selected must be of standard form and P2SH scripts must be
  in the wallet using importaddress or addmultisigaddress (to calculate fees).
  You can see whether this is the case by checking the "solvable" field in the listunspent output.
  Only pay-to-pubkey, multisig, and P2SH versions thereof are currently supported for watch-only

  Arguments:
  1. "hexstring"           (string, required) The hex string of the raw transaction
  2. options                 (object, optional)
     {
       "changeAddress"          (string, optional, default pool address) The bitcoin address to receive the change
       "changePosition"         (numeric, optional, default random) The index of the change output
       "includeWatching"        (boolean, optional, default false) Also select inputs which are watch only
       "lockUnspents"           (boolean, optional, default false) Lock selected unspent outputs
       "reserveChangeKey"       (boolean, optional, default true) Reserves the change output key from the keypool
       "feeRate"                (numeric, optional, default not set: makes wallet determine the fee) Set a specific feerate (BCH per KB)
       "subtractFeeFromOutputs" (array, optional) A json array of integers.
                                The fee will be equally deducted from the amount of each specified output.
                                The outputs are specified by their zero-based index, before any change output is added.
                                Those recipients will receive less bitcoins than you enter in their corresponding amount field.
                                If no outputs are specified here, the sender pays the fee.
                                    [vout_index,...]
     }
                           for backward compatibility: passing in a true instead of an object will result in {"includeWatching":true}

  Result:
  {
    "hex":       "value", (string)  The resulting raw transaction (hex-encoded string)
    "fee":       n,         (numeric) Fee in BCH the resulting transaction pays
    "changepos": n          (numeric) The position of the added change output, or -1
  }

  BITBOX.fundrawtransaction([], {"myaddress":0.01})
            `}</SyntaxHighlighter>

            <h3 id='getrawtransaction'><code>getrawtransaction</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Return the raw transaction data.

  If verbose is 'true', returns an Object with information about 'txid'.
  If verbose is 'false' or omitted, returns a string that is serialized, hex-encoded data for 'txid'.

  Arguments:
  1. "txid"      (string, required) The transaction id
  2. verbose       (bool, optional, default=false) If false, return a string, otherwise return a json object

  Result (if verbose is not set or set to false):
  "data"      (string) The serialized, hex-encoded data for 'txid'

  Result (if verbose is set to true):
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

  BITBOX.getrawtransaction("mytxid", true)
            `}</SyntaxHighlighter>

            <h3 id='sendrawtransaction'><code>sendrawtransaction</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Submits raw transaction (serialized, hex-encoded) to local node and network.

  Also see createrawtransaction and signrawtransaction calls.

  Arguments:
  1. "hexstring"    (string, required) The hex string of the raw transaction)
  2. allowhighfees    (boolean, optional, default=false) Allow high fees

  Result:
  "hex"             (string) The transaction hash in hex

  BITBOX.sendrawtransaction("signedhex")
            `}</SyntaxHighlighter>

            <h3 id='signrawtransaction'><code>signrawtransaction</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Sign inputs for raw transaction (serialized, hex-encoded).
  The second optional argument (may be null) is an array of previous transaction outputs that
  this transaction depends on but may not yet be in the block chain.
  The third optional argument (may be null) is an array of base58-encoded private
  keys that, if given, will be the only keys used to sign the transaction.

  Arguments:
  1. "hexstring"     (string, required) The transaction hex string
  2. "prevtxs"       (string, optional) An json array of previous dependent transaction outputs
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
  3. "privkeys"     (string, optional) A json array of base58-encoded private keys for signing
      [                  (json array of strings, or 'null' if none provided)
        "privatekey"   (string) private key in base58-encoding
        ,...
      ]
  4. "sighashtype"     (string, optional, default=ALL) The signature hash type. Must be one of
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

  Result:
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

  BITBOX.signrawtransaction("myhex")
            `}</SyntaxHighlighter>

          <h2 id='util' className="content-head is-center">Util</h2>

            <h3 id='createMultisig'><code>createMultisig</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Creates a multi-signature address with n signature of m keys required.
  It returns a json object with the address and redeemScript.

  Arguments:
  1. nrequired      (numeric, required) The number of required signatures out of the n keys or addresses.
  2. "keys"       (string, required) A json array of keys which are bitcoin addresses or hex-encoded public keys
       [
         "key"    (string) bitcoin address or hex-encoded public key
         ,...
       ]

  Result:
  {
    "address":"multisigaddress",  (string) The value of the new multisig address.
    "redeemScript":"script"       (string) The string value of the hex-encoded redemption script.
  }

  BITBOX.Util.createMultisig(2, ["bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f", "1B4C53FAn3wd1AswXZxMfmeHxnky7CTvfZ"])
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // {
  //   address: '39cp79UgFriqYS5ZYZyhiXbnUfE4eUjZur',
  //   redeemScript: '52210261d3f136eea0a3f786389d85212fae01d7b4a3c7520af78b49f079471d847d3421027495999882ace5aa4fb3d920dd7571b1ed75bcbd5987ef289cb6f88629c4a09652ae'
  // }
            `}</SyntaxHighlighter>

            <h3 id='estimateFee'><code>estimateFee</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within nblocks blocks.

  Arguments:
  1. nblocks     (numeric, required)

  Result:
  n              (numeric) estimated fee-per-kilobyte

  A negative value is returned if not enough transactions and blocks
  have been observed to make an estimate.
  -1 is always returned for nblocks == 1 as it is impossible to calculate
  a fee that is high enough to get reliably included in the next block.

  BITBOX.Util.estimateFee(2)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // 0.00000002
            `}</SyntaxHighlighter>

            <h3 id='estimatePriority'><code>estimatePriority</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Estimates the approximate priority a zero-fee transaction needs to begin confirmation within nblocks blocks.

  Arguments:
  1. nblocks     (numeric, required)

  Result:
  n              (numeric) estimated priority

  A negative value is returned if not enough transactions and blocks
  have been observed to make an estimate.

  BITBOX.Util.estimatePriority(2)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // -1
            `}</SyntaxHighlighter>

            <h3 id='signMessageWithPrivKey'><code>signMessageWithPrivKey</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Sign a message with the private key of an address

  Arguments:
  1. "privkey"         (string, required) The private key to sign the message with.
  2. "message"         (string, required) The message to create a signature of.

  Result:
  "signature"          (string) The signature of the message encoded in base 64

  BITBOX.Util.signMessageWithPrivKey('KzkYKDZw9PveUu3mn4nR5LKYqmY1A6yHFdY8YqQvd7Z2BT3Ssu4Y', 'EARTH')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // H3XA3KtFEMhoSLdiOP6U0dFTJGnZV3MSSGro3GLKgpaVCQ/oot137oxmOomncvqbNiOIx+MJMWZkG7XkQcUp0Tg=
            `}</SyntaxHighlighter>

            <h3 id='validateAddress'><code>validateAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Return information about the given bitcoin address.

  Arguments:
  1. "address"     (string, required) The bitcoin address to validate

  Result:
  {
    "isvalid" : true|false,       (boolean) If the address is valid or not. If not, this is the only property returned.
    "address" : "address", (string) The bitcoin address validated
    "scriptPubKey" : "hex",       (string) The hex encoded scriptPubKey generated by the address
    "ismine" : true|false,        (boolean) If the address is yours or not
    "iswatchonly" : true|false,   (boolean) If the address is watchonly
    "isscript" : true|false,      (boolean) If the key is a script
    "pubkey" : "publickeyhex",    (string) The hex value of the raw public key
    "iscompressed" : true|false,  (boolean) If the address is compressed
    "account" : "account"         (string) DEPRECATED. The account associated with the address, "" is the default account
    "timestamp" : timestamp,        (number, optional) The creation time of the key if available in seconds since epoch (Jan 1 1970 GMT)
    "hdkeypath" : "keypath"       (string, optional) The HD keypath if the key is HD and available
    "hdmasterkeyid" : "<hash160>" (string, optional) The Hash160 of the HD master pubkey
  }

  BITBOX.Util.validateAddress("bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // { isvalid: true,
  // address: '17fshh33qUze2yifiJ2sXgijSMzJ2KNEwu',
  // scriptPubKey: '76a914492ae280d70af33acf0ae7cd329b961e65e9cbd888ac',
  // ismine: true,
  // iswatchonly: false,
  // isscript: false,
  // pubkey: '0312eeb9ae5f14c3cf43cece11134af860c2ef7d775060e3a578ceec888acada31',
  // iscompressed: true,
  // account: 'Test' }
            `}</SyntaxHighlighter>

            <h3 id='verifyMessage'><code>verifyMessage</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Verify a signed message

  Arguments:
  1. "address"         (string, required) The bitcoin address to use for the signature.
  2. "signature"       (string, required) The signature provided by the signer in base 64 encoding (see signmessage).
  3. "message"         (string, required) The message that was signed.

  Result:
  true|false   (boolean) If the signature is verified or not.

  BITBOX.Util.verifyMessage("bitcoincash:qrcxa4yqkkyulztkanlqf3jw88pgses63uhl0tqxs3", "IC1Rbp/1UoX/0Luk8O+ZqhB13E2G5qDn6G6T9e2k+4unJuf70qbiJpuHBhouz5nY4JHgrd/TXARZe+kS+Lu/11g=", "EARTH")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // true
            `}</SyntaxHighlighter>

          <h2 id='wallet' className="content-head is-center">Wallet</h2>

            <h3 id='addmultisigaddress'><code>addmultisigaddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Add a nrequired-to-sign multisignature address to the wallet.
  Each key is a Bitcoin address or hex-encoded public key.
  If 'account' is specified (DEPRECATED), assign address to that account.

  Arguments:
  1. nrequired        (numeric, required) The number of required signatures out of the n keys or addresses.
  2. "keys"         (string, required) A json array of bitcoin addresses or hex-encoded public keys
       [
         "address"  (string) bitcoin address or hex-encoded public key
         ...,
       ]
  3. "account"      (string, optional) DEPRECATED. An account to assign the addresses to.

  Result:
  "address"         (string) A bitcoin address associated with the keys.

  Example:
  Add a multisig address from 2 addresses

  BITBOX.addmultisigaddress(2, ["16sSauSf5pF2UkUwvKGq4qjNRzBZYqgEL5", "171sgjn4YtPu27adkKGrdDwzRTxnRkBfKV"])
            `}</SyntaxHighlighter>

            <h3 id='backupwallet'><code>backupwallet</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Safely copies current wallet file to destination, which can be a directory or a path with filename.

  Arguments:
  1. "destination"   (string) The destination directory or file

  BITBOX.backupwallet("./backup.dat")
            `}</SyntaxHighlighter>

            <h3 id='dumpprivkey'><code>dumpprivkey</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Reveals the private key corresponding to 'address'.
  Then the importprivkey can be used with this output

  Arguments:
  1. "address"   (string, required) The bitcoin address for the private key

  Result:
  "key"                (string) The private key

  BITBOX.dumpprivkey('bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y')
            `}</SyntaxHighlighter>

            <h3 id='dumpwallet'><code>dumpwallet</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Dumps all wallet keys in a human-readable format.

  Arguments:
  1. "filename"    (string, required) The filename

  BITBOX.dumpwallet('test')
            `}</SyntaxHighlighter>

            <h3 id='encryptwallet'><code>encryptwallet</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Encrypts the wallet with 'passphrase'. This is for first time encryption.
  After this, any calls that interact with private keys such as sending or signing
  will require the passphrase to be set prior the making these calls.
  Use the walletpassphrase call for this, and then walletlock call.
  If the wallet is already encrypted, use the walletpassphrasechange call.
  Note that this will shutdown the server.

  Arguments:
  1. "passphrase"    (string) The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long.

  BITBOX.encryptwallet("passphrase")
            `}</SyntaxHighlighter>

            <h3 id='getaccount'><code>getaccount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Returns the account associated with the given address.

  Arguments:
  1. "address"         (string, required) The bitcoin address for account lookup.

  Result:
  "accountname"        (string) the account address

  BITBOX.getaccount('bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y')
            `}</SyntaxHighlighter>

            <h3 id='getaccountaddress'><code>getaccountaddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Returns the current Bitcoin address for receiving payments to this account.

  Arguments:
  1. "account"       (string, required) The account name for the address. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.

  Result:
  "address"          (string) The account bitcoin address

  BITBOX.generate('myaccount')
            `}</SyntaxHighlighter>

            <h3 id='getaddressesbyaccount'><code>getaddressesbyaccount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Returns the list of addresses for the given account.

  Arguments:
  1. "account"        (string, required) The account name.

  Result:
  [                     (json array of string)
    "address"         (string) a bitcoin address associated with the given account
    ,...
  ]

  BITBOX.getaddressesbyaccount('foobar')
            `}</SyntaxHighlighter>

            <h3 id='getbalance'><code>getbalance</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  If account is not specified, returns the server's total available balance.
  If account is specified (DEPRECATED), returns the balance in the account.
  Note that the account "" is not the same as leaving the parameter out.
  The server total may be different to the balance in the default "" account.

  Arguments:
  1. "account"         (string, optional) DEPRECATED. The account string may be given as a
                       specific account name to find the balance associated with wallet keys in
                       a named account, or as the empty string ("") to find the balance
                       associated with wallet keys not in any named account, or as "*" to find
                       the balance associated with all wallet keys regardless of account.
                       When this option is specified, it calculates the balance in a different
                       way than when it is not specified, and which can count spends twice when
                       there are conflicting pending transactions temporarily resulting in low
                       or even negative balances.
                       In general, account balance calculation is not considered reliable and
                       has resulted in confusing outcomes, so it is recommended to avoid passing
                       this argument.
  2. minconf           (numeric, optional, default=1) Only include transactions confirmed at least this many times.
  3. include_watchonly (bool, optional, default=false) Also include balance in watch-only addresses (see 'importaddress')

  Result:
  amount              (numeric) The total amount in BCH received for this account.

  BITBOX.getbalance('*', 6)
            `}</SyntaxHighlighter>

            <h3 id='getnewaddress'><code>getnewaddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns a new Bitcoin address for receiving payments.
  If 'account' is specified (DEPRECATED), it is added to the address book
  so payments received with the address will be credited to 'account'.

  Arguments:
  1. "account"        (string, optional) DEPRECATED. The account name for the address to be linked to. If not provided, the default account "" is used. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.

  Result:
  "address"    (string) The new bitcoin address

  BITBOX.getnewaddress()
            `}</SyntaxHighlighter>

            <h3 id='getrawchangeaddress'><code>getrawchangeaddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns a new Bitcoin address, for receiving change.
  This is for use with raw transactions, NOT normal use.

  Result:
  "address"    (string) The address

  BITBOX.getrawchangeaddress()
            `}</SyntaxHighlighter>

            <h3 id='getreceivedbyaccount'><code>getreceivedbyaccount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.

  Arguments:
  1. "account"      (string, required) The selected account, may be the default account using "".
  2. minconf          (numeric, optional, default=1) Only include transactions confirmed at least this many times.

  Result:
  amount              (numeric) The total amount in BCH received for this account.

  BITBOX.getreceivedbyaccount("foobar", 6)
            `}</SyntaxHighlighter>

            <h3 id='getreceivedbyaddress'><code>getreceivedbyaddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the total amount received by the given address in transactions with at least minconf confirmations.

  Arguments:
  1. "address"         (string, required) The bitcoin address for transactions.
  2. minconf             (numeric, optional, default=1) Only include transactions confirmed at least this many times.

  Result:
  amount   (numeric) The total amount in BCH received at this address.

  BITBOX.getreceivedbyaddress("bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", 6)
            `}</SyntaxHighlighter>

            <h3 id='gettransaction'><code>gettransaction</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Get detailed information about in-wallet transaction <txid>

  Arguments:
  1. "txid"                  (string, required) The transaction id
  2. "include_watchonly"     (bool, optional, default=false) Whether to include watch-only addresses in balance calculation and details[]

  Result:
  {
    "amount" : x.xxx,        (numeric) The transaction amount in BCH
    "fee": x.xxx,            (numeric) The amount of the fee in BCH. This is negative and only available for the
                                'send' category of transactions.
    "confirmations" : n,     (numeric) The number of confirmations
    "blockhash" : "hash",  (string) The block hash
    "blockindex" : xx,       (numeric) The index of the transaction in the block that includes it
    "blocktime" : ttt,       (numeric) The time in seconds since epoch (1 Jan 1970 GMT)
    "txid" : "transactionid",   (string) The transaction id.
    "time" : ttt,            (numeric) The transaction time in seconds since epoch (1 Jan 1970 GMT)
    "timereceived" : ttt,    (numeric) The time received in seconds since epoch (1 Jan 1970 GMT)
    "bip125-replaceable": "yes|no|unknown",  (string) Whether this transaction could be replaced due to BIP125 (replace-by-fee);
                                                     may be unknown for unconfirmed transactions not in the mempool
    "details" : [
      {
        "account" : "accountname",      (string) DEPRECATED. The account name involved in the transaction, can be "" for the default account.
        "address" : "address",          (string) The bitcoin address involved in the transaction
        "category" : "send|receive",    (string) The category, either 'send' or 'receive'
        "amount" : x.xxx,                 (numeric) The amount in BCH
        "label" : "label",              (string) A comment for the address/transaction, if any
        "vout" : n,                       (numeric) the vout value
        "fee": x.xxx,                     (numeric) The amount of the fee in BCH. This is negative and only available for the
                                             'send' category of transactions.
        "abandoned": xxx                  (bool) 'true' if the transaction has been abandoned (inputs are respendable). Only available for the
                                             'send' category of transactions.
      }
      ,...
    ],
    "hex" : "data"         (string) Raw data for transaction
  }

  BITBOX.gettransaction("1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d")
            `}</SyntaxHighlighter>

            <h3 id='getunconfirmedbalance'><code>getunconfirmedbalance</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the server's total unconfirmed balance

  BITBOX.getunconfirmedbalance()
            `}</SyntaxHighlighter>

            <h3 id='getwalletinfo'><code>getwalletinfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns an object containing various wallet state info.

  Result:
  {
    "walletversion": xxxxx,       (numeric) the wallet version
    "balance": xxxxxxx,           (numeric) the total confirmed balance of the wallet in BCH
    "unconfirmed_balance": xxx,   (numeric) the total unconfirmed balance of the wallet in BCH
    "immature_balance": xxxxxx,   (numeric) the total immature balance of the wallet in BCH
    "txcount": xxxxxxx,           (numeric) the total number of transactions in the wallet
    "keypoololdest": xxxxxx,      (numeric) the timestamp (seconds since Unix epoch) of the oldest pre-generated key in the key pool
    "keypoolsize": xxxx,          (numeric) how many new keys are pre-generated
    "unlocked_until": ttt,        (numeric) the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
    "paytxfee": x.xxxx,           (numeric) the transaction fee configuration, set in BCH/kB
    "hdmasterkeyid": "<hash160>" (string) the Hash160 of the HD master pubkey
  }

  BITBOX.getwalletinfo()
            `}</SyntaxHighlighter>

            <h3 id='importaddress'><code>importaddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.

  Arguments:
  1. "script"           (string, required) The hex-encoded script (or address)
  2. "label"            (string, optional, default="") An optional label
  3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions
  4. p2sh                 (boolean, optional, default=false) Add the P2SH version of the script as well

  Note: This call can take minutes to complete if rescan is true.
  If you have the full public key, you should call importpubkey instead of this.

  Note: If you import a non-standard raw script in hex form, outputs sending to it will be treated
  as change, and not show up in many RPCs.

  BITBOX.importaddress("myscript", "testing", false)
            `}</SyntaxHighlighter>

            <h3 id='importmulti'><code>importmulti</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Import addresses/scripts (with private or public keys, redeem script (P2SH)), rescanning all addresses in one-shot-only (rescan can be disabled via options).

  Arguments:
  1. requests     (array, required) Data to be imported
    [     (array of json objects)
      {
        "scriptPubKey": "<script>" | { "address":"<address>" }, (string / json, required) Type of scriptPubKey (string for script, json for address)
        "timestamp": timestamp | "now"                        , (integer / string, required) Creation time of the key in seconds since epoch (Jan 1 1970 GMT),
                                                                or the string "now" to substitute the current synced blockchain time. The timestamp of the oldest
                                                                key will determine how far back blockchain rescans need to begin for missing wallet transactions.
                                                                "now" can be specified to bypass scanning, for keys which are known to never have been used, and
                                                                0 can be specified to scan the entire blockchain. Blocks up to 2 hours before the earliest key
                                                                creation time of all keys being imported by the importmulti call will be scanned.
        "redeemscript": "<script>"                            , (string, optional) Allowed only if the scriptPubKey is a P2SH address or a P2SH scriptPubKey
        "pubkeys": ["<pubKey>", ... ]                         , (array, optional) Array of strings giving pubkeys that must occur in the output or redeemscript
        "keys": ["<key>", ... ]                               , (array, optional) Array of strings giving private keys whose corresponding public keys must occur in the output or redeemscript
        "internal": <true>                                    , (boolean, optional, default: false) Stating whether matching outputs should be be treated as not incoming payments
        "watchonly": <true>                                   , (boolean, optional, default: false) Stating whether matching outputs should be considered watched even when they're not spendable, only allowed if keys are empty
        "label": <label>                                      , (string, optional, default: '') Label to assign to the address (aka account name, for now), only allowed with internal=false
      }
    ,...
    ]
  2. options                 (json, optional)
    {
       "rescan": <false>,         (boolean, optional, default: true) Stating if should rescan the blockchain after all imports
    }

  BITBOX.importmulti({ "scriptPubKey": { "address": "<my address>" }, "timestamp":1455191478 }, { "scriptPubKey": { "address": "<my 2nd address>" }, "label": "example 2", "timestamp": 1455191480 })
            `}</SyntaxHighlighter>

            <h3 id='importprivkey'><code>importprivkey</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Adds a private key (as returned by dumpprivkey) to your wallet.

  Arguments:
  1. "bitcoinprivkey"   (string, required) The private key (see dumpprivkey)
  2. "label"            (string, optional, default="") An optional label
  3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions

  Note: This call can take minutes to complete if rescan is true.

  BITBOX.importprivkey("mykey", "testing", false)
            `}</SyntaxHighlighter>

            <h3 id='importprunedfunds'><code>importprunedfunds</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Imports funds without rescan. Corresponding address or script must previously be included in wallet. Aimed towards pruned wallets. The end-user is responsible to import additional transactions that subsequently spend the imported outputs or rescan after the point in the blockchain the transaction is included.

  Arguments:
  1. "rawtransaction" (string, required) A raw transaction in hex funding an already-existing address in wallet
  2. "txoutproof"     (string, required) The hex output from gettxoutproof that contains the transaction

  BITBOX.importprunedfunds("rawtransaction", "txoutproof")
            `}</SyntaxHighlighter>

            <h3 id='importwallet'><code>importwallet</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Imports keys from a wallet dump file (see dumpwallet).

  Arguments:
  1. "filename"    (string, required) The wallet file

  BITBOX.importwallet("test")
            `}</SyntaxHighlighter>

            <h3 id='keypoolrefill'><code>keypoolrefill</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Fills the keypool.

  Arguments
  1. newsize     (numeric, optional, default=100) The new keypool size

  BITBOX.keypoolrefill()
            `}</SyntaxHighlighter>

            <h3 id='listaccounts'><code>listaccounts</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Returns Object that has account names as keys, account balances as values.

  Arguments:
  1. minconf             (numeric, optional, default=1) Only include transactions with at least this many confirmations
  2. include_watchonly   (bool, optional, default=false) Include balances in watch-only addresses (see 'importaddress')

  Result:
  {                      (json object where keys are account names, and values are numeric balances
    "account": x.xxx,  (numeric) The property name is the account name, and the value is the total balance for the account.
    ...
  }

  BITBOX.listaccounts(6)
            `}</SyntaxHighlighter>

            <h3 id='listaddressgroupings'><code>listaddressgroupings</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Lists groups of addresses which have had their common ownership
  made public by common use as inputs or as the resulting change
  in past transactions

  Result:
  [
    [
      [
        "address",            (string) The bitcoin address
        amount,                 (numeric) The amount in BCH
        "account"             (string, optional) DEPRECATED. The account
      ]
      ,...
    ]
    ,...
  ]

  BITBOX.listaddressgroupings()
            `}</SyntaxHighlighter>

            <h3 id='listlockunspent'><code>listlockunspent</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns list of temporarily unspendable outputs.
  See the lockunspent call to lock and unlock transactions for spending.

  Result:
  [
    {
      "txid" : "transactionid",     (string) The transaction id locked
      "vout" : n                      (numeric) The vout value
    }
    ,...
  ]

  BITBOX.listlockunspent()
            `}</SyntaxHighlighter>

            <h3 id='listreceivedbyaccount'><code>listreceivedbyaccount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. List balances by account.

  Arguments:
  1. minconf           (numeric, optional, default=1) The minimum number of confirmations before payments are included.
  2. include_empty     (bool, optional, default=false) Whether to include accounts that haven't received any payments.
  3. include_watchonly (bool, optional, default=false) Whether to include watch-only addresses (see 'importaddress').

  Result:
  [
    {
      "involvesWatchonly" : true,   (bool) Only returned if imported addresses were involved in transaction
      "account" : "accountname",  (string) The account name of the receiving account
      "amount" : x.xxx,             (numeric) The total amount received by addresses with this account
      "confirmations" : n,          (numeric) The number of confirmations of the most recent transaction included
      "label" : "label"           (string) A comment for the address/transaction, if any
    }
    ,...
  ]

  BITBOX.listreceivedbyaccount(6, true, true)
            `}</SyntaxHighlighter>

            <h3 id='listreceivedbyaddress'><code>listreceivedbyaddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  List balances by receiving address.

  Arguments:
  1. minconf           (numeric, optional, default=1) The minimum number of confirmations before payments are included.
  2. include_empty     (bool, optional, default=false) Whether to include addresses that haven't received any payments.
  3. include_watchonly (bool, optional, default=false) Whether to include watch-only addresses (see 'importaddress').

  Result:
  [
    {
      "involvesWatchonly" : true,        (bool) Only returned if imported addresses were involved in transaction
      "address" : "receivingaddress",  (string) The receiving address
      "account" : "accountname",       (string) DEPRECATED. The account of the receiving address. The default account is "".
      "amount" : x.xxx,                  (numeric) The total amount in BCH received by the address
      "confirmations" : n,               (numeric) The number of confirmations of the most recent transaction included
      "label" : "label",               (string) A comment for the address/transaction, if any
      "txids": [
         n,                                (numeric) The ids of transactions received with the address
         ...
      ]
    }
    ,...
  ]

  BITBOX.listreceivedbyaddress(6, true, true)
            `}</SyntaxHighlighter>

            <h3 id='listsinceblock'><code>listsinceblock</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Get all transactions in blocks since block [blockhash], or all transactions if omitted

  Arguments:
  1. "blockhash"            (string, optional) The block hash to list transactions since
  2. target_confirmations:    (numeric, optional) The confirmations required, must be 1 or more
  3. include_watchonly:       (bool, optional, default=false) Include transactions to watch-only addresses (see 'importaddress')
  Result:
  {
    "transactions": [
      "account":"accountname",       (string) DEPRECATED. The account name associated with the transaction. Will be "" for the default account.
      "address":"address",    (string) The bitcoin address of the transaction. Not present for move transactions (category = move).
      "category":"send|receive",     (string) The transaction category. 'send' has negative amounts, 'receive' has positive amounts.
      "amount": x.xxx,          (numeric) The amount in BCH. This is negative for the 'send' category, and for the 'move' category for moves
                                            outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds.
      "vout" : n,               (numeric) the vout value
      "fee": x.xxx,             (numeric) The amount of the fee in BCH. This is negative and only available for the 'send' category of transactions.
      "confirmations": n,       (numeric) The number of confirmations for the transaction. Available for 'send' and 'receive' category of transactions.
                                            When it's < 0, it means the transaction conflicted that many blocks ago.
      "blockhash": "hashvalue",     (string) The block hash containing the transaction. Available for 'send' and 'receive' category of transactions.
      "blockindex": n,          (numeric) The index of the transaction in the block that includes it. Available for 'send' and 'receive' category of transactions.
      "blocktime": xxx,         (numeric) The block time in seconds since epoch (1 Jan 1970 GMT).
      "txid": "transactionid",  (string) The transaction id. Available for 'send' and 'receive' category of transactions.
      "time": xxx,              (numeric) The transaction time in seconds since epoch (Jan 1 1970 GMT).
      "timereceived": xxx,      (numeric) The time received in seconds since epoch (Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions.
      "abandoned": xxx,         (bool) 'true' if the transaction has been abandoned (inputs are respendable). Only available for the 'send' category of transactions.
      "comment": "...",       (string) If a comment is associated with the transaction.
      "label" : "label"       (string) A comment for the address/transaction, if any
      "to": "...",            (string) If a comment to is associated with the transaction.
    ],
    "lastblock": "lastblockhash"     (string) The hash of the last block
  }

  BITBOX.listsinceblock("000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad", 6)
            `}</SyntaxHighlighter>

            <h3 id='listtransactions'><code>listtransactions</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.

  Arguments:
  1. "account"    (string, optional) DEPRECATED. The account name. Should be "*".
  2. count          (numeric, optional, default=10) The number of transactions to return
  3. skip           (numeric, optional, default=0) The number of transactions to skip
  4. include_watchonly (bool, optional, default=false) Include transactions to watch-only addresses (see 'importaddress')

  Result:
  [
    {
      "account":"accountname",       (string) DEPRECATED. The account name associated with the transaction.
                                                  It will be "" for the default account.
      "address":"address",    (string) The bitcoin address of the transaction. Not present for
                                                  move transactions (category = move).
      "category":"send|receive|move", (string) The transaction category. 'move' is a local (off blockchain)
                                                  transaction between accounts, and not associated with an address,
                                                  transaction id or block. 'send' and 'receive' transactions are
                                                  associated with an address, transaction id and block details
      "amount": x.xxx,          (numeric) The amount in BCH. This is negative for the 'send' category, and for the
                                           'move' category for moves outbound. It is positive for the 'receive' category,
                                           and for the 'move' category for inbound funds.
      "label": "label",       (string) A comment for the address/transaction, if any
      "vout": n,                (numeric) the vout value
      "fee": x.xxx,             (numeric) The amount of the fee in BCH. This is negative and only available for the
                                           'send' category of transactions.
      "confirmations": n,       (numeric) The number of confirmations for the transaction. Available for 'send' and
                                           'receive' category of transactions. Negative confirmations indicate the
                                           transaction conflicts with the block chain
      "trusted": xxx,           (bool) Whether we consider the outputs of this unconfirmed transaction safe to spend.
      "blockhash": "hashvalue", (string) The block hash containing the transaction. Available for 'send' and 'receive'
                                            category of transactions.
      "blockindex": n,          (numeric) The index of the transaction in the block that includes it. Available for 'send' and 'receive'
                                            category of transactions.
      "blocktime": xxx,         (numeric) The block time in seconds since epoch (1 Jan 1970 GMT).
      "txid": "transactionid", (string) The transaction id. Available for 'send' and 'receive' category of transactions.
      "time": xxx,              (numeric) The transaction time in seconds since epoch (midnight Jan 1 1970 GMT).
      "timereceived": xxx,      (numeric) The time received in seconds since epoch (midnight Jan 1 1970 GMT). Available
                                            for 'send' and 'receive' category of transactions.
      "comment": "...",       (string) If a comment is associated with the transaction.
      "otheraccount": "accountname",  (string) DEPRECATED. For the 'move' category of transactions, the account the funds came
                                            from (for receiving funds, positive amounts), or went to (for sending funds,
                                            negative amounts).
      "abandoned": xxx          (bool) 'true' if the transaction has been abandoned (inputs are respendable). Only available for the
                                           'send' category of transactions.
    }
  ]

  BITBOX.listtransactions("*", 20, 100)
            `}</SyntaxHighlighter>

            <h3 id='listunspent'><code>listunspent</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns array of unspent transaction outputs with between minconf and maxconf (inclusive) confirmations. Optionally filter to only include txouts paid to specified addresses.

  Arguments:
  1. minconf          (numeric, optional, default=1) The minimum confirmations to filter
  2. maxconf          (numeric, optional, default=9999999) The maximum confirmations to filter
  3. "addresses"    (string) A json array of bitcoin addresses to filter
      [
        "address"   (string) bitcoin address
        ,...
      ]
  4. include_unsafe (bool, optional, default=true) Include outputs that are not safe to spend
                    because they come from unconfirmed untrusted transactions or unconfirmed
                    replacement transactions (cases where we are less sure that a conflicting
                    transaction won't be mined).

  Result
  [                   (array of json object)
    {
      "txid" : "txid",          (string) the transaction id
      "vout" : n,               (numeric) the vout value
      "address" : "address",    (string) the bitcoin address
      "account" : "account",    (string) DEPRECATED. The associated account, or "" for the default account
      "scriptPubKey" : "key",   (string) the script key
      "amount" : x.xxx,         (numeric) the transaction output amount in BCH
      "confirmations" : n,      (numeric) The number of confirmations
      "redeemScript" : n        (string) The redeemScript if scriptPubKey is P2SH
      "spendable" : xxx,        (bool) Whether we have the private keys to spend this output
      "solvable" : xxx          (bool) Whether we know how to spend this output, ignoring the lack of keys
    }
    ,...
  ]

  BITBOX.listunspent(6, 9999999 ["1PGFqEzfmQch1gKD3ra4k18PNj3tTUUSqg", "1LtvqCaApEdUGFkpKMM4MstjcaL4dKg8SP"])
            `}</SyntaxHighlighter>

            <h3 id='lockunspent'><code>lockunspent</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Updates list of temporarily unspendable outputs.
  Temporarily lock (unlock=false) or unlock (unlock=true) specified transaction outputs.
  If no transaction outputs are specified when unlocking then all current locked transaction outputs are unlocked.
  A locked transaction output will not be chosen by automatic coin selection, when spending bitcoins.
  Locks are stored in memory only. Nodes start with zero locked outputs, and the locked output list
  is always cleared (by virtue of process exit) when a node stops or fails.
  Also see the listunspent call

  Arguments:
  1. unlock            (boolean, required) Whether to unlock (true) or lock (false) the specified transactions
  2. "transactions"  (string, optional) A json array of objects. Each object the txid (string) vout (numeric)
       [           (json array of json objects)
         {
           "txid":"id",    (string) The transaction id
           "vout": n         (numeric) The output number
         }
         ,...
       ]

  Result:
  true|false    (boolean) Whether the command was successful or not

  BITBOX.lockunspent(false, [{"txid":"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0","vout":1}])
            `}</SyntaxHighlighter>

            <h3 id='move'><code>move</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Move a specified amount from one account in your wallet to another.

  Arguments:
  1. "fromaccount"   (string, required) The name of the account to move funds from. May be the default account using "".
  2. "toaccount"     (string, required) The name of the account to move funds to. May be the default account using "".
  3. amount            (numeric) Quantity of BCH to move between accounts.
  4. (dummy)           (numeric, optional) Ignored. Remains for backward compatibility.
  5. "comment"       (string, optional) An optional comment, stored in the wallet only.

  Result:
  true|false           (boolean) true if successful.

  BITBOX.move("alice", "bob", 0.01, 6, "Hello EARTH")
            `}</SyntaxHighlighter>

            <h3 id='removeprunedfunds'><code>removeprunedfunds</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds. This will effect wallet balances.

  Arguments:
  1. "txid"           (string, required) The hex-encoded id of the transaction you are deleting

  BITBOX.removeprunedfunds('a8d0c0184dde994a09ec054286f1ce581bebf46446a512166eae7628734ea0a5')
            `}</SyntaxHighlighter>

            <h3 id='sendfrom'><code>sendfrom</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED (use sendtoaddress). Sent an amount from an account to a bitcoin address.

  Arguments:
  1. "fromaccount"       (string, required) The name of the account to send funds from. May be the default account using "".
                         Specifying an account does not influence coin selection, but it does associate the newly created
                         transaction with the account, so the account's balance computation and transaction history can reflect
                         the spend.
  2. "toaddress"         (string, required) The bitcoin address to send funds to.
  3. amount                (numeric or string, required) The amount in BCH (transaction fee is added on top).
  4. minconf               (numeric, optional, default=1) Only use funds with at least this many confirmations.
  5. "comment"           (string, optional) A comment used to store what the transaction is for.
                                       This is not part of the transaction, just kept in your wallet.
  6. "comment_to"        (string, optional) An optional comment to store the name of the person or organization
                                       to which you're sending the transaction. This is not part of the transaction,
                                       it is just kept in your wallet.

  Result:
  "txid"                 (string) The transaction id.

  BITBOX.sendfrom("me", "bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", 0.01, 6, "donation", "seans outpost"')
            `}</SyntaxHighlighter>

            <h3 id='sendmany'><code>sendmany</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Send multiple times. Amounts are double-precision floating point numbers.

  Arguments:
  1. "fromaccount"         (string, required) DEPRECATED. The account to send the funds from. Should be "" for the default account
  2. "amounts"             (string, required) A json object with addresses and amounts
      {
        "address":amount   (numeric or string) The bitcoin address is the key, the numeric amount (can be string) in BCH is the value
        ,...
      }
  3. minconf                 (numeric, optional, default=1) Only use the balance confirmed at least this many times.
  4. "comment"             (string, optional) A comment
  5. subtractfeefrom         (array, optional) A json array with addresses.
                             The fee will be equally deducted from the amount of each selected address.
                             Those recipients will receive less bitcoins than you enter in their corresponding amount field.
                             If no addresses are specified here, the sender pays the fee.
      [
        "address"          (string) Subtract fee from this address
        ,...
      ]

  Result:
  "txid"                   (string) The transaction id for the send. Only 1 transaction is created regardless of
                                      the number of addresses.

  BITBOX.sendmany("", {"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX":0.01,"1353tsE8YMTA4EuV7dgUXGjNFf9KpVvKHz":0.02}, 6, "testing")
            `}</SyntaxHighlighter>

            <h3 id='sendtoaddress'><code>sendtoaddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Send an amount to a given address.

  Arguments:
  1. "address"            (string, required) The bitcoin address to send to.
  2. "amount"             (numeric or string, required) The amount in BCH to send. eg 0.1
  3. "comment"            (string, optional) A comment used to store what the transaction is for.
                               This is not part of the transaction, just kept in your wallet.
  4. "comment_to"         (string, optional) A comment to store the name of the person or organization
                               to which you're sending the transaction. This is not part of the
                               transaction, just kept in your wallet.
  5. subtractfeefromamount  (boolean, optional, default=false) The fee will be deducted from the amount being sent.
                               The recipient will receive less bitcoins than you enter in the amount field.

  Result:
  "txid"                  (string) The transaction id.

  BITBOX.sendtoaddress("bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", 0.1, "donation", "seans outpost")
            `}</SyntaxHighlighter>

            <h3 id='setaccount'><code>setaccount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Sets the account associated with the given address.

  Arguments:
  1. "address"         (string, required) The bitcoin address to be associated with an account.
  2. "account"         (string, required) The account to assign the address to.

  BITBOX.setaccount("bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", "seans outpost")
            `}</SyntaxHighlighter>

            <h3 id='settxfee'><code>settxfee</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Set the transaction fee per kB. Overwrites the paytxfee parameter.

  Arguments:
  1. amount         (numeric or string, required) The transaction fee in BCH/kB

  Result
  true|false        (boolean) Returns true if successful

  BITBOX.settxfee(0.00001)
            `}</SyntaxHighlighter>

            <h3 id='signmessage'><code>signmessage</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Sign a message with the private key of an address

  Arguments:
  1. "address"         (string, required) The bitcoin address to use for the private key.
  2. "message"         (string, required) The message to create a signature of.

  Result:
  "signature"          (string) The signature of the message encoded in base 64

  BITBOX.signmessage("bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", "my message")
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default BitboxCli;
