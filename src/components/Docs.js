import React, { Component } from 'react';
import BitcoinCash from '../utilities/BitcoinCash';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
const codeString = `
Usage: bitbox [options] [command]


Options:

  -V, --version  output the version number
  -h, --help     output usage information


Commands:

  new [options]  The 'bitbox new' command creates a new BITBOX application w/ a
    directory structure and bitbox.js configuration file.

    Pass in command line arguments or optionally specify commonly used arguments in a .bitboxrc file in your home directory

  console        Run a console with Bitcoin Cash RPC commands available
`;

class Docs extends Component {
  render() {
    return (
      <div className="docs">
        <h2 className="content-head is-center">Docs</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h2 id='gettingStarted'>Gettings Started</h2>
            <h3 id="installation">Installation</h3>
            <p>Download the <a href='https://github.com/bigearth/bitbox-electron/releases/download/0.0.1/BITBOX-0.0.1.dmg'>app for MacOS</a>. Verify the <a href='https://github.com/bigearth/keys-n-hashes'>checksum</a>.</p>
            <p>Install from npm:</p>
            <SyntaxHighlighter language='text' style={ocean}>{"npm install bitbox-cli --global"}</SyntaxHighlighter>
            <h4>Requirements</h4>
            <ul>
              <li>
                NodeJS v9.4.x
              </li>
              <li>
                MacOS
              </li>
            </ul>
            <h3 id="commandLineBasics">Command line basics</h3>
            <p><code>bitbox-cli</code> comes w/ two commands to help accelerate your work flow.</p>
            <SyntaxHighlighter language='text' style={ocean}>{"bitbox new"}</SyntaxHighlighter>
            <SyntaxHighlighter language='text' style={ocean}>{"bitbox console"}</SyntaxHighlighter>
            <h3 id="bitboxNew"><code>bitbox new</code></h3>
            <p>BITBOX will generate a generic app w/ web bindings and default configuration.</p>
            <SyntaxHighlighter language='text' style={ocean}>{`
  $ bitbox new --title hellowEARTH
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
            <p>Launch a console w/ the entire Bitcoin Cash RPC availaboe via a built in <code>BITBOX</code> object.</p>
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
