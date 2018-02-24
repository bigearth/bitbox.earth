import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Docs extends Component {
  render() {
    return (
      <div className="docs">
        <h2 className="content-head is-center">Docs</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h2 id='gettingStarted'>Gettings Started</h2>
            <p>BITBOX is a suite of tools to SUPERCHARGE your $BCH workflow. It consists of a one click Bitcoin Cash blockchain which you can configure in any way you want and a command line utility for scripting and generating app scaffolds.</p>
            <h3 id="installation">Installation</h3>
            <p>Download the <a href='https://github.com/bigearth/bitbox-electron/releases/download/0.1.1/BITBOX-0.1.11.dmg'>app for MacOS</a>. You can verify the files haven&rsquo;t been tampered w/ by downloading them and running</p>
            <SyntaxHighlighter language='text' style={ocean}>{" openssl sha -sha256 path/to/BITBOX.major.minor.patch.dmg"}</SyntaxHighlighter>
            <p>Verify the output matches the latest BITBOX release&rsquo;s <a href='https://github.com/bigearth/keys-n-hashes'>checksum</a>.</p>
            <h4 id="windows">Windows</h4>
            <p>There currently is no Windows build but there is a <a href='https://github.com/bigearth/bitbox-electron/issues/8'>$50 bounty</a> paid in $BCH.</p>
            <h3 id="guiBasics">BITBOX basics</h3>
            <h4 id='wallet'>Wallet</h4>
            <p>Each time you fire up BITBOX it&rsquo;ll generate 10 new BCH addresses from a randomly generated mnemonic. BITBOX is <a href='https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki'>BIP44 compliant</a> which means that mnemonics created on BITBOX are valid on Trezor and other BIP44 compliant wallets. You can also use mnemonics created on Trezor etc and import keys in to BITBOX. Remember that BITBOX is a development tool so don&rsquo;t use any mnemonics which contain any actual coins.</p>
            <p>BIP44 compliant wallets have a specific derivation path:</p>
            <SyntaxHighlighter language='text' style={ocean}>{" m / purpose' / coin_type' / account' / change / address_index"}</SyntaxHighlighter>
            <p>BITBOX uses the following derivation path where <code>44&rsquo;</code> is the <code>purpose</code> to show that this wallet is BIP44 compliant. <code>145&rsquo;</code> is the coin code for $BCH. <code>n&rsquo;</code> is for the index of the respective account. BITBOX creates 10 accounts by default so <code>n</code> is <code>1&ndash;10</code>.</p>
            <SyntaxHighlighter language='text' style={ocean}>{" m / 44' / 145' / n' / 0 / 0"}</SyntaxHighlighter>
            <p>For each account BITBOX derives the private key in <a href='https://bitcoin.org/en/glossary/wallet-import-format'>Wallet Import Format (WIF)</a> and public address in <a href='https://en.bitcoin.it/wiki/Base58Check_encoding'>legacy base58check</a> and <a href='https://www.bitcoinabc.org/cashaddr'>cashaddr</a> encoding for the first external change address. It also derives the <a href='https://bitcoin.org/en/glossary/extended-key'>xpriv and xpub extended keys</a> for the account.</p>
            <p>You can toggle between seeing the public address and the privatekey(WIF) as well as the xpriv and xpub extended keys by clicking the blue button w/ the key icon on the right side of the screen. The button and the keys will turn orange to let you know that these keys shouldn&rsquo;t be left visible.</p>
            <img src='assets/screenshot.png' />
            <h4 id='convert'>Conversion</h4>
            <p>It&rsquo;s common to see your addresses in 1 of 3 formats&mdash;legacy base58Check, cashaddr or privateKeyWIF. The first two are the public addresses which you share w/ people to send you $BCH and the last one is the private key that you never show anyone.</p>
            <p>With BITBOX you can paste in any of those 3 formats to the conversion tool and it&rsquo;ll convert it to the other formats and create QR codes for easier copying. This is especially useful if someone wants you to send them $BCH and they give you a format that your wallet doesn&rsquo;t support or if you have a private key WIF and want to learn more details about it.</p>
            <img src='assets/conversion.png' />
            <h4 id='signAndVerify'>Sign &amp; Verify</h4>
            <h5 id='sign'>Sign</h5>
            <p>BITBOX enables you to cryptographically prove ownership of an address via signing messages. You can also verify that ownership of an address from another person.</p>
            <p>You can sign a message w/ any address in your BITBOX. It doesn't matter if it's in cashaddr or legacy encoding. Just paste the address into the address field and type the message that you want to sign. Then click the 'Sign' button and if you have entered a valid address that has keys in your BITBOX you&rsquo;ll see a signature appear.</p>
            <p>You can share this message, address and signature w/ anyone and they can verify that you are the owner of that address.</p>
            <img src='assets/sign.png' />
            <h5 id='verify'>Verify</h5>
            <p> You can verify a message from any address on the Bitcoin Cash network. Just paste in the message, address and signature provided and click the 'Verify' button. If the address and signature are both valid format and the signature matches the message and the address you&rsquo;ll get a green "Valid message" response.</p>
            <img src='assets/verify.png' />
            <p>If the address or signature are incorrectly formatted or the signature doesn't match the message and address you'll get an error message.</p>
            <img src='assets/verify-fail.png' />
            <h4 id='config'>Configuration</h4>
            <p>You can restart your BITBOX, change how many addresses are generated, increase/decrease the amount of entropy used when generating a mnemonic, use a custom mnemonic/HD path and toggle cashaddr/base58 on the config screen which is available if you click on the cog icon.</p>
            <p>Adding a password let&rsquo;s you explore all 2<sup>512</sup> potential $BCH master seeds.</p>
            <h5 id='entropy'>Autogenerated mnemonic length</h5>
            <p>BITBOX can autogenerate different length mnemonics based on the amount of entropy you select. The more entropy the longer the mnemonic.</p>
            <ul>
              <li>16 bytes / 128 bits === 12 words</li>
              <li>20 bytes / 160 bits === 15 words</li>
              <li>24 bytes / 192 bits === 18 words</li>
              <li>28 bytes / 224 bits === 21 words</li>
              <li>32 bytes / 256 bits === 24 words</li>
            </ul>
            <img src='assets/configuration.png' />
            <h3 id="commandLineBasics">Command line basics</h3>
            <p>Install from npm:</p>
            <SyntaxHighlighter language='text' style={ocean}>{" npm install bitbox-cli --global"}</SyntaxHighlighter>
            <h4 id='requirements'>Requirements</h4>
            <ul>
              <li>
                NodeJS v9.4.x
              </li>
              <li>
                MacOS
              </li>
            </ul>
            <p><code>bitbox-cli</code> comes w/ two commands to help accelerate your work flow.</p>
            <SyntaxHighlighter language='text' style={ocean}>{" bitbox new"}</SyntaxHighlighter>
            <SyntaxHighlighter language='text' style={ocean}>{" bitbox console"}</SyntaxHighlighter>
            <h3 id="bitboxNew"><code>bitbox new</code></h3>
            <p>BITBOX will generate a generic app w/ web bindings and default configuration.</p>
            <SyntaxHighlighter language='text' style={ocean}>{`
  $ bitbox new --title helloEARTH
  Creating helloEARTH/ directory
  Creating src/ directory: ./helloEARTH/src
  Creating test/ directory: ./helloEARTH/tests
  Creating bitbox.js configuration file
  All done. ✅
  Go get em! Remember--with great power comes great responsibility. 🚀
            `}</SyntaxHighlighter>
            <p>This creates a directory named whatever you passed in as the <code>--title</code> flag. If you don&rsquo;t psas in a <code>--title</code> flag the name BITBOX will be used.</p>
            <p>In that new directory will be created a <code>bitbox.js</code> file, a <code>src/</code> directory w/ skeleton react web app and a <code>tests/</code> directory for your tests.</p>
            <h4 id="bitboxJS">bitbox.js</h4>
            <p>Your <code>bitbox.js</code> file will contain the default settings to connect to your local running BITBOX.</p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  exports.config = {
    networks: {
      development: {
        protocol: "http",
        host: "localhost",
        port: 8332
      }
    }
  };
            `}</SyntaxHighlighter>
            <h4 id="customNew">Customize your build</h4>
            <p>By default your <code>bitbox.js</code> will connect over <code>http://localhost:8332</code> but you can change this by passing in any or all of the following flags: <code>--protocol</code>, <code>--host</code> and/or <code>--port</code></p>
            <p>You can also set these values in a <code>.bitboxrc</code> file in your home directory for regularly used values.</p>
            <h4 id="bitboxrc"><code>.bitboxrc</code></h4>
            <SyntaxHighlighter language='text' style={ocean}>{`
  ; bitbox config comment

  [new]
  protocol = http
  host = localhost
  port = 8332
            `}</SyntaxHighlighter>
            <h3 id="bitboxConsole"><code>bitbox console</code></h3>
            <p>Launch a console w/ the entire Bitcoin Cash RPC available via a built in <code>BITBOX</code> object.</p>
            <SyntaxHighlighter language='text' style={ocean}>{`
  $ bitbox console
  ⚡️  BITBOX ⚡️ BITBOX.
  BITBOX.abandonTransaction      BITBOX.addmultisigaddress      BITBOX.addnode                 BITBOX.addwitnessaddress       BITBOX.backupWallet            BITBOX.bumpfee                 BITBOX.clearbanned
  BITBOX.createmultisig          BITBOX.createrawtransaction    BITBOX.decoderawtransaction    BITBOX.decodescript            BITBOX.disconnectnode          BITBOX.dumpprivkey             BITBOX.dumpwallet
  BITBOX.encryptwallet           BITBOX.estimatefee             BITBOX.estimatepriority        BITBOX.fundrawtransaction      BITBOX.generate                BITBOX.generatetoaddress       BITBOX.getaccount
  BITBOX.getaccountaddress       BITBOX.getaddednodeinfo        BITBOX.getaddressesbyaccount   BITBOX.getbalance              BITBOX.getbestblockhash        BITBOX.getblock                BITBOX.getblockchaininfo
  BITBOX.getblockcount           BITBOX.getblockhash            BITBOX.getblockheader          BITBOX.getblocktemplate        BITBOX.getchaintips            BITBOX.getconnectioncount      BITBOX.getdifficulty
  BITBOX.getgenerate             BITBOX.gethashespersec         BITBOX.getinfo                 BITBOX.getmemoryinfo           BITBOX.getmempoolancestors     BITBOX.getmempooldescendants   BITBOX.getmempoolentry
  BITBOX.getmempoolinfo          BITBOX.getmininginfo           BITBOX.getnettotals            BITBOX.getnetworkhashps        BITBOX.getnetworkinfo          BITBOX.getnewaddress           BITBOX.getpeerinfo
  BITBOX.getrawchangeaddress     BITBOX.getrawmempool           BITBOX.getrawtransaction       BITBOX.getreceivedbyaccount    BITBOX.getreceivedbyaddress    BITBOX.gettransaction          BITBOX.gettxout
  BITBOX.gettxoutproof           BITBOX.gettxoutsetinfo         BITBOX.getunconfirmedbalance   BITBOX.getwalletinfo           BITBOX.getwork                 BITBOX.help                    BITBOX.importaddress
  BITBOX.importmulti             BITBOX.importprivkey           BITBOX.importprunedfunds       BITBOX.importwallet            BITBOX.keypoolrefill           BITBOX.listaccounts            BITBOX.listaddressgroupings
  BITBOX.listbanned              BITBOX.listlockunspent         BITBOX.listreceivedbyaccount   BITBOX.listreceivedbyaddress   BITBOX.listsinceblock          BITBOX.listtransactions        BITBOX.listunspent
  BITBOX.lockunspent             BITBOX.move                    BITBOX.pingRpc                 BITBOX.preciousblock           BITBOX.prioritisetransaction   BITBOX.pruneblockchain         BITBOX.removeprunedfunds
  BITBOX.sendfrom                BITBOX.sendmany                BITBOX.sendrawtransaction      BITBOX.sendtoaddress           BITBOX.setaccount              BITBOX.setban                  BITBOX.setgenerate
  BITBOX.setnetworkactive        BITBOX.settxfee                BITBOX.signmessage             BITBOX.signmessagewithprivkey  BITBOX.signrawtransaction      BITBOX.stop                    BITBOX.submitblock
  BITBOX.validateaddress         BITBOX.verifychain             BITBOX.verifymessage           BITBOX.verifytxoutproof        BITBOX.walletlock              BITBOX.walletpassphrase        BITBOX.walletpassphrasechange
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Docs;
