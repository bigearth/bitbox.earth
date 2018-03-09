import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class BitboxConsole extends Component {
  render() {
    return (
      <div className="BitboxConsole">
        <h2 className="content-head is-center">Bitbox Console</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id="bitboxConsole"><code>bitbox console</code></h3>
            <p>Launch a console w/ the entire Bitcoin Cash RPC available as well as dozens of helper methods via a built in <code>BITBOX</code> object. <Link to="/bitboxcli/bitcoincash">Full list of commands</Link>.</p>
            <SyntaxHighlighter language='text' style={ocean}>{`
  $ bitbox console
  ⚡️  BITBOX ⚡️ BITBOX.

  BITBOX.BitboxHTTP              BITBOX.BitcoinCash             BITBOX.Blockchain              BITBOX.Control                 BITBOX.Crypto                  BITBOX.Generating              BITBOX.Mining
  BITBOX.Network                 BITBOX.RawTransactions         BITBOX.Util                    BITBOX.Wallet                  BITBOX.config
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default BitboxConsole;
