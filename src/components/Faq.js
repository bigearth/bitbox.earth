import React, { Component } from 'react';
import BitcoinCash from '../utilities/BitcoinCash';
import "../styles/faq.scss";

class Faq extends Component {
  render() {
    return (
      <div className="faq">
        <h2 className="content-head is-center">Faq</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h2>Can I verify the authenticity of these files before running them?</h2>
            <p>Yes you can find signatures and checksum hashes on <a href='https://github.com/bigearth/keys-n-hashes'>github</a>.</p>
            <h2>What?</h2>
            <h3>BITBOX</h3>
            <p>
              It&rsquo;s a 1 click Bitcoin Cash blockchain for devs to test their apps against before deploying to the real network. It consists of a web GUI and a command line tool.
            </p>
            <h3>Web GUI</h3>
            <p>
              The web GUI lets you spin up as many BCH addresses as you want w/ an auto generated or custom mnemonic and derivation path. You can also toggle showing the address in cashaddr or old school format
            </p>
            <p>
              On the wallets page you can toggle each address between the public key and private key in WIF.
            </p>
            <h3>Command line</h3>
            <p>
              There is also a command line component: <a href='https://www.npmjs.com/package/bitbox-cli'><code>bitcoin-cli</code></a>.
            </p>
            <p>
              <code>bitbox init --title helloworld</code> stubs out a directory structure w/ a bitbox.js file that has localhost:8332 settings to connect to your local running BITBOX.
            </p>
            <p>
              <code>bitbox console</code> has a custom node REPL w/ the entire BCH RPC on a BitcoinCash object.
            </p>
            <h2>Why?</h2>
            <p>
              The goal of this project is to improve the BCH developer experience and accelerate how quickly devs can bring BCH apps to market.
            </p>
            <p>
              This is in a very early stage so feel free to reach out to me w/ bug reports or feature requests. To the moon! 🎩🚀🌕
            </p>
            <h2>Where?</h2>
            <p>
              All of this code is open source under MIT and available:
            </p>
            <ul>
              <li>
                <a href='https://github.com/bigearth/bitbox-electron'>https://github.com/bigearth/bitbox-electron</a>
              </li>
              <li>
                <a href='https://github.com/bigearth/bitbox-cli'>https://github.com/bigearth/bitbox-cli</a>
              </li>
              <li>
                <a href='https://github.com/bigearth/bitbox.earth'>https://github.com/bigearth/bitbox.earth</a>
              </li>
            </ul>
            <h2>Who?</h2>
            <p>Created w/ ❤️ on EARTH by <a href='https://twitter.com/cgcardona'>Gabriel Cardona</a></p>
            <h2>Donations</h2>
            <p>
              Bitcoin Cash accepted at: <strong>1C79j1XBq5t4J8P3asSLCCXp2xBogSX57c</strong> or <strong>{BitcoinCash.toCashAddress('1C79j1XBq5t4J8P3asSLCCXp2xBogSX57c')}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
