import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class BitboxConsole extends Component {
  componentDidMount() {
    document.title = "Console - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="BitboxConsole">
        <h2 className="content-head is-center"><i className="fas fa-terminal" /> Bitbox Console</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/gettingstarted">Docs</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/bitboxconsole">console</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <p>Launch a console w/ the entire Bitcoin Cash RPC available as well as dozens of helper methods via a built in <code>BITBOX</code> object. <Link to="/bitboxcli/bitcoincash">Full list of commands</Link>. Pass in an <code>--environment</code> flag to connect to environments defined in <code>bitbox.js</code> or <code>~/.bitboxrc</code> files. By default <code>console</code> will connect to your <code>development</code> environment.</p>
            <SyntaxHighlighter language='text' style={ocean}>{`
  $ bitbox console --environment production
  > BITBOX.
  BITBOX.Address                 BITBOX.BitboxHTTP              BITBOX.BitcoinCash             BITBOX.Blockchain              BITBOX.Control                 BITBOX.Crypto                  BITBOX.ECPair
  BITBOX.Generating              BITBOX.HDNode                  BITBOX.Mining                  BITBOX.Mnemonic                BITBOX.Network                 BITBOX.RawTransactions         BITBOX.Script
  BITBOX.Transaction             BITBOX.Util                    BITBOX.Wallet                  BITBOX.config
            `}</SyntaxHighlighter>
            <p>Quickly test your ideas</p>
            <SyntaxHighlighter language='text' style={ocean}>{`
  > BITBOX.BitcoinCash.toSatoshi(9)
  // 900000000

  > BITBOX.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
  // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

  // create mnemonic
  > let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
  // create seed buffer from mnemonic
  > let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
  // create HDNode from seed buffer
  > let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
  // derive hardened child HDNode
  > let childNode = hdNode.derivePath("m/44'/145'/0'");
  > BITBOX.HDNode.toXPriv(childNode)
  // xprv9yHczLBaxwHo85o8mJVHSu1ghxEWM2QZcrvWFvHWXgkqfuqNz6EDNxv4wAPTBwX7nkrnBTPgdCZi7qyQAF72MF4KTq9UzzygDhvBajpwScs
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default BitboxConsole;
