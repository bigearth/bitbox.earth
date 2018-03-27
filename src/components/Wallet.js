import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Wallet extends Component {
  componentDidMount() {
    document.title = "Wallet - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Wallet">
        <h2 id='wallet' className="content-head is-center"><i className="fas fa-folder" /> Wallet</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/wallet">Wallet</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='addMultisigAddress'><code>addMultisigAddress</code></h3>
            <p>
  Add a nrequired-to-sign multisignature address to the wallet.
  Each key is a Bitcoin address or hex-encoded public key.
  If 'account' is specified (DEPRECATED), assign address to that account.
            </p>
            <h4>Arguments</h4>
            <h5>nrequired</h5>
            <p>
  (numeric, required) The number of required signatures out of the n keys or addresses.
            </p>
            <h5>keys</h5>
            <p>
(string, required) A json array of bitcoin addresses or hex-encoded public keys
            </p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
       [
         "address"  (string) bitcoin address or hex-encoded public key
         ...,
       ]
            `}</SyntaxHighlighter>
            <h5>account</h5>
            <p>
  (string, optional) DEPRECATED. An account to assign the addresses to.
            </p>
            <h4>Result</h4>
            <p>
  "address"         (string) A bitcoin address associated with the keys.
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.addMultisigAddress(2, ["16sSauSf5pF2UkUwvKGq4qjNRzBZYqgEL5", "171sgjn4YtPu27adkKGrdDwzRTxnRkBfKV"])
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='backupWallet'><code>backupWallet</code></h3>
          <p>
  Safely copies current wallet file to destination, which can be a directory or a path with filename.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  destination   (string): The destination directory or file
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.backupWallet("./backup.dat")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='dumpPrivkey'><code>dumpPrivkey</code></h3>
          <p>
  Reveals the private key corresponding to 'address'. Then the importprivkey can be used with this output
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  address   (string, required): The bitcoin address for the private key
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  key                (string): The private key
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.dumpPrivkey('bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='dumpWallet'><code>dumpWallet</code></h3>
          <p>
  Dumps all wallet keys in a human-readable format.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  filename    (string, required): The filename
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.dumpWallet('test')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='encryptWallet'><code>encryptWallet</code></h3>
          <p>
  Encrypts the wallet with 'passphrase'. This is for first time encryption.
  After this, any calls that interact with private keys such as sending or signing
  will require the passphrase to be set prior the making these calls.
  Use the walletpassphrase call for this, and then walletlock call.
  If the wallet is already encrypted, use the walletpassphrasechange call.
  Note that this will shutdown the server.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  passphrase   (string): The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long.
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.encryptWallet('passphrase')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getAccount'><code>getAccount</code></h3>
          <p>
  DEPRECATED. Returns the account associated with the given address.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  address         (string, required): The bitcoin address for account lookup.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  accountname        (string) the account address
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.getAccount('bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getAccountAddress'><code>getAccountAddress</code></h3>
          <p>
  DEPRECATED. Returns the current Bitcoin address for receiving payments to this account.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  account       (string, required): The account name for the address. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  address          (string) The account bitcoin address
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.getAccountAddress('myaccount')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getAddressesByAccount'><code>getAddressesByAccount</code></h3>
          <p>
  DEPRECATED. Returns the list of addresses for the given account.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  account        (string, required): The account name.
            </li>
          </ol>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  [                     (json array of string)
    "address"         (string) a bitcoin address associated with the given account
    ,...
  ]
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.getAddressesByAccount('foobar')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getBalance'><code>getBalance</code></h3>
          <p>
  If account is not specified, returns the server&rsquo;s total available balance.
  If account is specified (DEPRECATED), returns the balance in the account.
  Note that the account "" is not the same as leaving the parameter out.
  The server total may be different to the balance in the default "" account.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  account         (string, optional): DEPRECATED. The account string may be given as a
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
            </li>
            <li>
  minconf           (numeric, optional, default=1): Only include transactions confirmed at least this many times.
            </li>
            <li>
  include_watchonly (bool, optional, default=false): Also include balance in watch-only addresses (see 'importaddress')
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  amount              (numeric): The total amount in BCH received for this account.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.getBalance('*', 6)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getNewAddress'><code>getNewAddress</code></h3>
          <p>
  Returns a new Bitcoin address for receiving payments.
  If 'account' is specified (DEPRECATED), it is added to the address book
  so payments received with the address will be credited to 'account'.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  account        (string, optional): DEPRECATED. The account name for the address to be linked to. If not provided, the default account "" is used. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  address    (string): The new bitcoin address
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.getNewAddress()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getRawChangeAddress'><code>getRawChangeAddress</code></h3>
          <p>
  Returns a new Bitcoin address, for receiving change. This is for use with raw transactions, NOT normal use.
          </p>
          <h4>Result</h4>
          <p>
  address    (string) The address
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.getRawChangeAddress()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getReceivedByAccount'><code>getReceivedByAccount</code></h3>
          <p>
  DEPRECATED. Returns the total amount received by addresses with <code>account</code> in transactions with at least [minconf] confirmations.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  account      (string, required): The selected account, may be the default account using "".
            </li>
            <li>
  minconf          (numeric, optional, default=1): Only include transactions confirmed at least this many times.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  amount              (numeric): The total amount in BCH received for this account.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.getReceivedByAccount("foobar", 6)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getReceivedByAddress'><code>getReceivedByAddress</code></h3>
          <p>
  Returns the total amount received by the given address in transactions with at least minconf confirmations.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  address        (string, required): The bitcoin address for transactions.
            </li>
            <li>
  minconf             (numeric, optional, default=1): Only include transactions confirmed at least this many times.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  amount   (numeric): The total amount in BCH received at this address.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.getReceivedByAddress("bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", 6)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getTransaction'><code>getTransaction</code></h3>
          <p>
  Get detailed information about in-wallet transaction <code>txid</code>
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  txid                 (string, required): The transaction id
            </li>
            <li>
  include_watchonly     (bool, optional, default=false): Whether to include watch-only addresses in balance calculation and details[]
            </li>
          </ol>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.getTransaction("1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.getTransaction("1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getUnconfirmedBalance'><code>getUnconfirmedBalance</code></h3>
          <p>
  Returns the server&rsquo;s total unconfirmed balance
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`

  BITBOX.Wallet.getUnconfirmedBalance()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getWalletInfo'><code>getWalletInfo</code></h3>
          <p>
  Returns an object containing various wallet state info.
          </p>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
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
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.getWalletInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='importAddress'><code>importAddress</code></h3>
          <p>
  Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  script           (string, required): The hex-encoded script (or address)
            </li>
            <li>
  label            (string, optional, default=""): An optional label
            </li>
            <li>
  rescan               (boolean, optional, default=true): Rescan the wallet for transactions
            </li>
            <li>
  p2sh                 (boolean, optional, default=false): Add the P2SH version of the script as well
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
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
          <p>
  Import addresses/scripts (with private or public keys, redeem script (P2SH)), rescanning all addresses in one-shot-only (rescan can be disabled via options).
          </p>
          <h4>Arguments</h4>
          <h5>requests</h5>
          <p>(array, required) Data to be imported</p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
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
            `}</SyntaxHighlighter>
          <h5>options</h5>
          <p>(json, optional)</p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  2. options                 (json, optional)
    {
       "rescan": <false>,         (boolean, optional, default: true) Stating if should rescan the blockchain after all imports
    }
            `}</SyntaxHighlighter>
          <h4>Result</h4>
          <p>
    legacyAddress <code>string</code>    legacy base 58 check encoded address
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.importMulti({ "scriptPubKey": { "address": "<my address>" }, "timestamp":1455191478 }, { "scriptPubKey": { "address": "<my 2nd address>" }, "label": "example 2", "timestamp": 1455191480 })
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='importPrivkey'><code>importPrivkey</code></h3>
          <p>
  Adds a private key (as returned by dumpprivkey) to your wallet.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  bitcoinprivkey   (string, required): The private key (see dumpprivkey)
            </li>
            <li>
  label            (string, optional, default=""): An optional label
            </li>
            <li>
  rescan               (boolean, optional, default=true): Rescan the wallet for transactions
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Note: This call can take minutes to complete if rescan is true.

  BITBOX.Wallet.importPrivkey("mykey", "testing", false)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='importPrunedFunds'><code>importPrunedFunds</code></h3>
          <p>
  Imports funds without rescan. Corresponding address or script must previously be included in wallet. Aimed towards pruned wallets. The end-user is responsible to import additional transactions that subsequently spend the imported outputs or rescan after the point in the blockchain the transaction is included.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  rawtransaction (string, required): A raw transaction in hex funding an already-existing address in wallet
            </li>
            <li>
  txoutproof     (string, required): The hex output from gettxoutproof that contains the transaction
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.importPrunedFunds("rawtransaction", "txoutproof")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='importWallet'><code>importWallet</code></h3>
          <p>
  Imports keys from a wallet dump file (see dumpwallet).
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  filename    (string, required): The wallet file
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    legacyAddress <code>string</code>    legacy base 58 check encoded address
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.importWallet("test")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='keypoolRefill'><code>keypoolRefill</code></h3>
          <p>
  Fills the keypool.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  newsize     (numeric, optional, default=100): The new keypool size
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    legacyAddress <code>string</code>    legacy base 58 check encoded address
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.keypoolRefill()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listAccounts'><code>listAccounts</code></h3>
          <p>
  DEPRECATED. Returns Object that has account names as keys, account balances as values.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  minconf             (numeric, optional, default=1): Only include transactions with at least this many confirmations
            </li>
            <li>
  include_watchonly   (bool, optional, default=false): Include balances in watch-only addresses (see 'importaddress')
            </li>
          </ol>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {                      (json object where keys are account names, and values are numeric balances
    "account": x.xxx,  (numeric) The property name is the account name, and the value is the total balance for the account.
    ...
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.listAccounts(6)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listAddressGroupings'><code>listAddressGroupings</code></h3>
          <p>
  Lists groups of addresses which have had their common ownership
  made public by common use as inputs or as the resulting change
  in past transactions
          </p>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
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
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.listAddressGroupings()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listLockUnspent'><code>listLockUnspent</code></h3>
          <p>
  Returns list of temporarily unspendable outputs.
  See the lockunspent call to lock and unlock transactions for spending.
          </p>
          <h4>Arguments</h4>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  [
    {
      "txid" : "transactionid",     (string) The transaction id locked
      "vout" : n                      (numeric) The vout value
    }
    ,...
  ]
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.listLockUnspent()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listReceivedByAccount'><code>listReceivedByAccount</code></h3>
          <p>
  DEPRECATED. List balances by account.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  minconf           (numeric, optional, default=1): The minimum number of confirmations before payments are included.
            </li>
            <li>
  include_empty     (bool, optional, default=false): Whether to include accounts that haven&rsquo;t received any payments.
            </li>
            <li>
  include_watchonly (bool, optional, default=false): Whether to include watch-only addresses (see 'importaddress').
            </li>
          </ol>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
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
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.listReceivedByAccount(6, true, true)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listReceivedByAddress'><code>listReceivedByAddress</code></h3>
          <p>
  List balances by receiving address.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  minconf           (numeric, optional, default=1): The minimum number of confirmations before payments are included.
            </li>
            <li>
  include_empty     (bool, optional, default=false): Whether to include addresses that haven&rsquo;t received any payments.
            </li>
            <li>
  include_watchonly (bool, optional, default=false): Whether to include watch-only addresses (see 'importaddress').
            </li>
          </ol>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.listReceivedByAddress(6, true, true)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.listReceivedByAddress(6, true, true)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listSinceBlock'><code>listSinceBlock</code></h3>
          <p>
  Get all transactions in blocks since block [blockhash], or all transactions if omitted
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  blockhash            (string, optional): The block hash to list transactions since
            </li>
            <li>
  target_confirmations    (numeric, optional): The confirmations required, must be 1 or more
            </li>
            <li>
  include_watchonly       (bool, optional, default=false): Include transactions to watch-only addresses (see 'importaddress')
            </li>
          </ol>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
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
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.listSinceBlock("000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad", 6)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listTransactions'><code>listTransactions</code></h3>
          <p>
  Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  account    (string, optional): DEPRECATED. The account name. Should be "*".
            </li>
            <li>
  count          (numeric, optional, default=10): The number of transactions to return
            </li>
            <li>
  skip           (numeric, optional, default=0): The number of transactions to skip
            </li>
            <li>
  include_watchonly (bool, optional, default=false): Include transactions to watch-only addresses (see 'importaddress')
            </li>
          </ol>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
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
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.listTransactions("*", 20, 100)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listUnspent'><code>listUnspent</code></h3>
          <p>
  Returns array of unspent transaction outputs with between minconf and maxconf (inclusive) confirmations. Optionally filter to only include txouts paid to specified addresses.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  minconf          (numeric, optional, default=1) The minimum confirmations to filter
            </li>
            <li>
  maxconf          (numeric, optional, default=9999999) The maximum confirmations to filter
            </li>
            <li>
  addresses    (string) A json array of bitcoin addresses to filter
            </li>
            <li>
  include_unsafe (bool, optional, default=true) Include outputs that are not safe to spend
                    because they come from unconfirmed untrusted transactions or unconfirmed
                    replacement transactions (cases where we are less sure that a conflicting
                    transaction won&rsquo;t be mined).
            </li>
          </ol>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
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
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.listUnspent(6, 9999999 ["1PGFqEzfmQch1gKD3ra4k18PNj3tTUUSqg", "1LtvqCaApEdUGFkpKMM4MstjcaL4dKg8SP"])
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='lockUnspent'><code>lockUnspent</code></h3>
          <p>
  Updates list of temporarily unspendable outputs.
  Temporarily lock (unlock=false) or unlock (unlock=true) specified transaction outputs.
  If no transaction outputs are specified when unlocking then all current locked transaction outputs are unlocked.
  A locked transaction output will not be chosen by automatic coin selection, when spending bitcoins.
  Locks are stored in memory only. Nodes start with zero locked outputs, and the locked output list
  is always cleared (by virtue of process exit) when a node stops or fails.
  Also see the listunspent call
          </p>
          <h4>Arguments</h4>
          <h5>unlock</h5>
          <p>
  (boolean, required) Whether to unlock (true) or lock (false) the specified transactions
          </p>
          <h5>transactions</h5>
          <p>
  (string, optional) A json array of objects. Each object the txid (string) vout (numeric)
          </p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
       [           (json array of json objects)
         {
           "txid":"id",    (string) The transaction id
           "vout": n         (numeric) The output number
         }
         ,...
       ]
            `}</SyntaxHighlighter>
          <h4>Result</h4>
          <p>
  true|false    (boolean): Whether the command was successful or not
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.lockUnspent(false, [{"txid":"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0","vout":1}])
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='move'><code>move</code></h3>
          <p>
  DEPRECATED. Move a specified amount from one account in your wallet to another.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  fromaccount   (string, required): The name of the account to move funds from. May be the default account using "".
            </li>
            <li>
  toaccount     (string, required): The name of the account to move funds to. May be the default account using "".
            </li>
            <li>
  amount            (numeric): Quantity of BCH to move between accounts.
            </li>
            <li>
  (dummy)           (numeric, optional): Ignored. Remains for backward compatibility.
            </li>
            <li>
  comment       (string, optional): An optional comment, stored in the wallet only.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  true|false           (boolean) true if successful.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.move("alice", "bob", 0.01, 6, "Hello EARTH")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='removePrunedFunds'><code>removePrunedFunds</code></h3>
          <p>
  Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds. This will effect wallet balances.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  txid           (string, required): The hex-encoded id of the transaction you are deleting
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.removePrunedFunds('a8d0c0184dde994a09ec054286f1ce581bebf46446a512166eae7628734ea0a5')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='sendFrom'><code>sendFrom</code></h3>
          <p>
  DEPRECATED (use sendtoaddress). Sent an amount from an account to a bitcoin address.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  1. "fromaccount"       (string, required) The name of the account to send funds from. May be the default account using "".
                         Specifying an account does not influence coin selection, but it does associate the newly created
                         transaction with the account, so the account&rsquo;s balance computation and transaction history can reflect
                         the spend.
            </li>
            <li>
  2. "toaddress"         (string, required) The bitcoin address to send funds to.
            </li>
            <li>
  3. amount                (numeric or string, required) The amount in BCH (transaction fee is added on top).
            </li>
            <li>
  4. minconf               (numeric, optional, default=1) Only use funds with at least this many confirmations.
            </li>
            <li>
  5. "comment"           (string, optional) A comment used to store what the transaction is for.
                                       This is not part of the transaction, just kept in your wallet.
            </li>
            <li>
  6. "comment_to"        (string, optional) An optional comment to store the name of the person or organization
                                       to which you&rsquo;re sending the transaction. This is not part of the transaction,
                                       it is just kept in your wallet.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  txid                 (string): The transaction id.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.sendFrom("me", "bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", 0.01, 6, "donation", "seans outpost"')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='sendMany'><code>sendMany</code></h3>
          <p>
  Send multiple times. Amounts are double-precision floating point numbers.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  fromaccount         (string, required): DEPRECATED. The account to send the funds from. Should be "" for the default account
            </li>
            <li>
  amounts             (string, required): A json object with addresses and amounts
            </li>
            <li>
  minconf                 (numeric, optional, default=1): Only use the balance confirmed at least this many times.
            </li>
            <li>
  comment             (string, optional): A comment
            </li>
            <li>
  subtractfeefrom         (array, optional): A json array with addresses.
                             The fee will be equally deducted from the amount of each selected address.
                             Those recipients will receive less bitcoins than you enter in their corresponding amount field.
                             If no addresses are specified here, the sender pays the fee.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  txid                   (string) The transaction id for the send. Only 1 transaction is created regardless of
                                      the number of addresses.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.sendMany("", {"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX":0.01,"1353tsE8YMTA4EuV7dgUXGjNFf9KpVvKHz":0.02}, 6, "testing")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='sendToAddress'><code>sendToAddress</code></h3>
          <p>
  Send an amount to a given address.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  address            (string, required): The bitcoin address to send to.
            </li>
            <li>
  amount            (numeric or string, required): The amount in BCH to send. eg 0.1
            </li>
            <li>
  comment            (string, optional): A comment used to store what the transaction is for.
                               This is not part of the transaction, just kept in your wallet.
            </li>
            <li>
  comment_to         (string, optional): A comment to store the name of the person or organization
                               to which you&rsquo;re sending the transaction. This is not part of the
                               transaction, just kept in your wallet.
            </li>
            <li>
  subtractfeefromamount  (boolean, optional, default=false): The fee will be deducted from the amount being sent.
                               The recipient will receive less bitcoins than you enter in the amount field.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  txid                  (string) The transaction id.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.sendToAddress("bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", 0.1, "donation", "seans outpost")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='setAccount'><code>setAccount</code></h3>
          <p>
  DEPRECATED. Sets the account associated with the given address.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  address         (string, required): The bitcoin address to be associated with an account.
            </li>
            <li>
  account         (string, required): The account to assign the address to.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    legacyAddress <code>string</code>    legacy base 58 check encoded address
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.setAccount("bitcoincash:qqnw4m6red45wf0alqz8w2wzsqljzez87gjxquuw9y", "seans outpost")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='setTxFee'><code>setTxFee</code></h3>
          <p>
  Set the transaction fee per kB. Overwrites the paytxfee parameter.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  amount         (numeric or string, required): The transaction fee in BCH/kB
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  true|false        (boolean): Returns true if successful
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Wallet.setTxFee(0.00001)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='signMessage'><code>signMessage</code></h3>
          <p>
  Sign a message with the private key of an address
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  address         (string, required): The bitcoin address to use for the private key.
            </li>
            <li>
  message         (string, required): The message to create a signature of.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  signature          (string): The signature of the message encoded in base 64
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
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
