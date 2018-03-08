import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

import BitcoinCash from './BitcoinCash';
import Crypto from './Crypto';
import Blockchain from './Blockchain';
import Control from './Control';
import Generating from './Generating';
import Mining from './Mining';
import Network from './Network';
import RawTransactions from './RawTransactions';
import Util from './Util';
import Wallet from './Wallet';

import {
  Link
} from 'react-router-dom';

import {
  Route
} from 'react-router-dom';

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
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-5">
            <ul>
              <li>
                <Link to="/bitboxcli/bitcoincash">Bitcoin Cash</Link>
              </li>
              <li>
                <Link to="/bitboxcli/crypto">Crypto</Link>
              </li>
              <li>
                <Link to="/bitboxcli/blockchain">Blockchain</Link>
              </li>
              <li>
                <Link to="/bitboxcli/control">Control</Link>
              </li>
              <li>
                <Link to="/bitboxcli/generating">Generating</Link>
              </li>
              <li>
                <Link to="/bitboxcli/mining">Mining</Link>
              </li>
              <li>
                <Link to="/bitboxcli/network">Network</Link>
              </li>
              <li>
                <Link to="/bitboxcli/rawtransactions">Rawtransactions</Link>
              </li>
              <li>
                <Link to="/bitboxcli/util">Util</Link>
              </li>
              <li>
                <Link to="/bitboxcli/wallet">Wallet</Link>
              </li>
            </ul>
          </div>
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-4-5">
            <p><code>bitbox-cli</code> is a Utility for creating great <a href='https://www.bitcoincash.org'>Bitcoin Cash</a> applications. If can be used from the command line or from within client/server apps. Any methods which make network requests return a <code>Promise</code> and any other methods return immediately.</p>
            <Route path="/bitboxcli/bitcoincash" component={BitcoinCash}/>
            <Route path="/bitboxcli/crypto" component={Crypto}/>
            <Route path="/bitboxcli/blockchain" component={Blockchain}/>
            <Route path="/bitboxcli/control" component={Control}/>
            <Route path="/bitboxcli/generating" component={Generating}/>
            <Route path="/bitboxcli/mining" component={Mining}/>
            <Route path="/bitboxcli/network" component={Network}/>
            <Route path="/bitboxcli/rawtransactions" component={RawTransactions}/>
            <Route path="/bitboxcli/util" component={Util}/>
            <Route path="/bitboxcli/wallet" component={Wallet}/>
          </div>
        </div>
      </div>
    );
  }
}

export default BitboxCli;
