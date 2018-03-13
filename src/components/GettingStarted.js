import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class GettingStarted extends Component {
  render() {
    return (
      <div className="GettingStarted">
        <h2 id='crypto' className="content-head is-center"><i className="fas fa-home" /> Getting Started</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <p>BITBOX is a suite of tools to SUPERCHARGE your $BCH workflow. It consists of a one click Bitcoin Cash blockchain, command line utility and javascript API which let you accelerate how quickly you can create an amazing app.</p>
            <p>With BITBOX you get:</p>

            <h3><i className="fa fa-cube" /> Instant Blockchain</h3>
            <p>Your own Bitcoin Cash blockchain to configure however you choose. This blockchain is created from scratch each time you start BITBOX. It doesn&rsquo;t connect to the real network and only consists of transactions and blocks which you create locally so it&rsquo;s quick and responsive. Execute commands from the command line and client/server.</p>

            <h3><i className="fa fa-eye" /> Visual Mnemonic & HD Path</h3>
            <p>Generate any number of <a href='https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki'>BIP 44</a> accounts. Toggle their addresses between cashaddr/base58 as well as mainnet/testnet. Easily view the private key in wallet import format (WIF) and extended public (<code>xpub</code>) and private (<code>xpriv</code>) keys. Vary the amount of entropy from 16 bytes up to 32 bytes creating shorter/longer mnemonics. Set a custom mnemonic and/or HD Derivation Path. Optionally use a password.</p>

            <h3><i className="fa fa-keyboard" /> Full framework</h3>
            <p>Create new $BCH apps in react, angular and node w/ <code>bitbox scaffold</code>. Create a blank app w/ <code>bitbox new</code>. Test your code against a local blockchain or remote full running node. Dozens of utility methods to accelerate how quickly you can create your app.</p>

            <h3><i className="fas fa-folder" /> Paper wallet generator</h3>
            <p>Creating paper wallets is as easy as <code>bitbox paper</code>. Set encoding to legacy or cashaddr. See the mnemonic and derivation path. Generate the mnemonic in 8 langugages including: english, chinese (simplified & traditional), french, italian, japanese, korean and spanish.</p>

            <h3><i className="fas fa-code" /> Entire Bitcoin Cash RPC</h3>
            <p>Accepts incoming requests for 100% of the Bitcoin Cash JSON RPC.</p>

            <h3><i className="fas fa-terminal" /> Built in console</h3>
            <p><code>bitbox console</code> opens a repl w/ the entire <Link to="/bitboxcli/bitcoincash">BITBOX</Link> api available. Ex: <code>BitcoinCash</code>, <code>Crypto</code>, <code>Blockchain</code>, <code>Control</code>, <code>Generating</code>, <code>Mining</code>, <code>Network</code>, <code>RawTransactions</code>, <code>Util</code> and <code>Wallet</code>.</p>
          </div>
        </div>

      </div>
    );
  }
}

export default GettingStarted;
