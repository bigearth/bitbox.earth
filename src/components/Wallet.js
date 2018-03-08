import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Wallet extends Component {
  render() {
    return (
      <div className="Wallet">
        <h2 id='wallet' className="content-head is-center">Wallet</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='addMultisigAddress'><code>addMultisigAddress</code></h3>
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

  BITBOX.Wallet.addMultisigAddress(2, ["16sSauSf5pF2UkUwvKGq4qjNRzBZYqgEL5", "171sgjn4YtPu27adkKGrdDwzRTxnRkBfKV"])
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='backupWallet'><code>backupWallet</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Safely copies current wallet file to destination, which can be a directory or a path with filename.

  Arguments:
  1. "destination"   (string) The destination directory or file

  BITBOX.Wallet.backupWallet("./backup.dat")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='dumpPrivkey'><code>dumpPrivkey</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Reveals the private key corresponding to 'address'.
  Then the importprivkey can be used with this output

  Arguments:
  1. "address"   (string, required) The bitcoin address for the private key

  Result:
  "key"                (string) The private key

  BITBOX.Wallet.dumpPrivkey('bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='dumpWallet'><code>dumpWallet</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Dumps all wallet keys in a human-readable format.

  Arguments:
  1. "filename"    (string, required) The filename

  BITBOX.Wallet.dumpWallet('test')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='encryptWallet'><code>encryptWallet</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Encrypts the wallet with 'passphrase'. This is for first time encryption.
  After this, any calls that interact with private keys such as sending or signing
  will require the passphrase to be set prior the making these calls.
  Use the walletpassphrase call for this, and then walletlock call.
  If the wallet is already encrypted, use the walletpassphrasechange call.
  Note that this will shutdown the server.

  Arguments:
  1. "passphrase"    (string) The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long.

  BITBOX.Wallet.encryptWallet('passphrase')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getAccount'><code>getAccount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Returns the account associated with the given address.

  Arguments:
  1. "address"         (string, required) The bitcoin address for account lookup.

  Result:
  "accountname"        (string) the account address

  BITBOX.Wallet.getAccount('bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getAccountAddress'><code>getAccountAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Returns the current Bitcoin address for receiving payments to this account.

  Arguments:
  1. "account"       (string, required) The account name for the address. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.

  Result:
  "address"          (string) The account bitcoin address

  BITBOX.Wallet.getAccountAddress('myaccount')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getAddressesByAccount'><code>getAddressesByAccount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Returns the list of addresses for the given account.

  Arguments:
  1. "account"        (string, required) The account name.

  Result:
  [                     (json array of string)
    "address"         (string) a bitcoin address associated with the given account
    ,...
  ]

  BITBOX.Wallet.getAddressesByAccount('foobar')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getBalance'><code>getBalance</code></h3>
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

  BITBOX.Wallet.getBalance('*', 6)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getNewAddress'><code>getNewAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns a new Bitcoin address for receiving payments.
  If 'account' is specified (DEPRECATED), it is added to the address book
  so payments received with the address will be credited to 'account'.

  Arguments:
  1. "account"        (string, optional) DEPRECATED. The account name for the address to be linked to. If not provided, the default account "" is used. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.

  Result:
  "address"    (string) The new bitcoin address

  BITBOX.Wallet.getNewAddress()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getRawChangeAddress'><code>getRawChangeAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns a new Bitcoin address, for receiving change.
  This is for use with raw transactions, NOT normal use.

  Result:
  "address"    (string) The address

  BITBOX.Wallet.getRawChangeAddress()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getReceivedByAccount'><code>getReceivedByAccount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.

  Arguments:
  1. "account"      (string, required) The selected account, may be the default account using "".
  2. minconf          (numeric, optional, default=1) Only include transactions confirmed at least this many times.

  Result:
  amount              (numeric) The total amount in BCH received for this account.

  BITBOX.Wallet.getReceivedByAccount("foobar", 6)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getReceivedByAddress'><code>getReceivedByAddress</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the total amount received by the given address in transactions with at least minconf confirmations.

  Arguments:
  1. "address"         (string, required) The bitcoin address for transactions.
  2. minconf             (numeric, optional, default=1) Only include transactions confirmed at least this many times.

  Result:
  amount   (numeric) The total amount in BCH received at this address.

  BITBOX.Wallet.getReceivedByAddress("bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", 6)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getTransaction'><code>getTransaction</code></h3>
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

  BITBOX.Wallet.getTransaction("1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getUnconfirmedBalance'><code>getUnconfirmedBalance</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the server's total unconfirmed balance

  BITBOX.Wallet.getUnconfirmedBalance()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getWalletInfo'><code>getWalletInfo</code></h3>
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

  BITBOX.Wallet.getWalletInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='importAddress'><code>importAddress</code></h3>
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

  BITBOX.Wallet.importAddress("myscript", "testing", false)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='importMulti'><code>importMulti</code></h3>
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

  BITBOX.Wallet.importMulti({ "scriptPubKey": { "address": "<my address>" }, "timestamp":1455191478 }, { "scriptPubKey": { "address": "<my 2nd address>" }, "label": "example 2", "timestamp": 1455191480 })
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='importPrivkey'><code>importPrivkey</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Adds a private key (as returned by dumpprivkey) to your wallet.

  Arguments:
  1. "bitcoinprivkey"   (string, required) The private key (see dumpprivkey)
  2. "label"            (string, optional, default="") An optional label
  3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions

  Note: This call can take minutes to complete if rescan is true.

  BITBOX.Wallet.importPrivkey("mykey", "testing", false)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='importPrunedFunds'><code>importPrunedFunds</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Imports funds without rescan. Corresponding address or script must previously be included in wallet. Aimed towards pruned wallets. The end-user is responsible to import additional transactions that subsequently spend the imported outputs or rescan after the point in the blockchain the transaction is included.

  Arguments:
  1. "rawtransaction" (string, required) A raw transaction in hex funding an already-existing address in wallet
  2. "txoutproof"     (string, required) The hex output from gettxoutproof that contains the transaction

  BITBOX.Wallet.importPrunedFunds("rawtransaction", "txoutproof")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='importWallet'><code>importWallet</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Imports keys from a wallet dump file (see dumpwallet).

  Arguments:
  1. "filename"    (string, required) The wallet file

  BITBOX.Wallet.importWallet("test")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='keypoolRefill'><code>keypoolRefill</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Fills the keypool.

  Arguments
  1. newsize     (numeric, optional, default=100) The new keypool size

  BITBOX.Wallet.keypoolRefill()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listAccounts'><code>listAccounts</code></h3>
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

  BITBOX.Wallet.listAccounts(6)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listAddressGroupings'><code>listAddressGroupings</code></h3>
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

  BITBOX.Wallet.listAddressGroupings()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listLockUnspent'><code>listLockUnspent</code></h3>
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

  BITBOX.Wallet.listLockUnspent()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listReceivedByAccount'><code>listReceivedByAccount</code></h3>
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

  BITBOX.Wallet.listReceivedByAccount(6, true, true)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listReceivedByAddress'><code>listReceivedByAddress</code></h3>
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

  BITBOX.Wallet.listReceivedByAddress(6, true, true)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listSinceBlock'><code>listSinceBlock</code></h3>
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

  BITBOX.Wallet.listSinceBlock("000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad", 6)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listTransactions'><code>listTransactions</code></h3>
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

  BITBOX.Wallet.listTransactions("*", 20, 100)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listUnspent'><code>listUnspent</code></h3>
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

  BITBOX.Wallet.listUnspent(6, 9999999 ["1PGFqEzfmQch1gKD3ra4k18PNj3tTUUSqg", "1LtvqCaApEdUGFkpKMM4MstjcaL4dKg8SP"])
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='lockUnspent'><code>lockUnspent</code></h3>
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

  BITBOX.Wallet.lockUnspent(false, [{"txid":"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0","vout":1}])
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
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

  BITBOX.Wallet.move("alice", "bob", 0.01, 6, "Hello EARTH")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='removePrunedFunds'><code>removePrunedFunds</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds. This will effect wallet balances.

  Arguments:
  1. "txid"           (string, required) The hex-encoded id of the transaction you are deleting

  BITBOX.Wallet.removePrunedFunds('a8d0c0184dde994a09ec054286f1ce581bebf46446a512166eae7628734ea0a5')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='sendFrom'><code>sendFrom</code></h3>
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

  BITBOX.Wallet.sendFrom("me", "bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", 0.01, 6, "donation", "seans outpost"')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='sendMany'><code>sendMany</code></h3>
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

  BITBOX.Wallet.sendMany("", {"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX":0.01,"1353tsE8YMTA4EuV7dgUXGjNFf9KpVvKHz":0.02}, 6, "testing")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='sendToAddress'><code>sendToAddress</code></h3>
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

  BITBOX.Wallet.sendToAddress("bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", 0.1, "donation", "seans outpost")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='setAccount'><code>setAccount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  DEPRECATED. Sets the account associated with the given address.

  Arguments:
  1. "address"         (string, required) The bitcoin address to be associated with an account.
  2. "account"         (string, required) The account to assign the address to.

  BITBOX.Wallet.setAccount("bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", "seans outpost")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='setTxFee'><code>setTxFee</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Set the transaction fee per kB. Overwrites the paytxfee parameter.

  Arguments:
  1. amount         (numeric or string, required) The transaction fee in BCH/kB

  Result
  true|false        (boolean) Returns true if successful

  BITBOX.Wallet.setTxFee(0.00001)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='signMessage'><code>signMessage</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Sign a message with the private key of an address

  Arguments:
  1. "address"         (string, required) The bitcoin address to use for the private key.
  2. "message"         (string, required) The message to create a signature of.

  Result:
  "signature"          (string) The signature of the message encoded in base 64

  BITBOX.Wallet.signMessage("bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", "my message")
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

export default Wallet;
