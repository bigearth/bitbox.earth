import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

import BitcoinCash from './BitcoinCash';
import Crypto from './Crypto';
import TransactionBuilder from './TransactionBuilder';
import ECPair from './ECPair';
import Script from './Script';
import Blockchain from './Blockchain';
import Control from './Control';
import Generating from './Generating';
import Mining from './Mining';
import Network from './Network';
import RawTransactions from './RawTransactions';
import Util from './Util';
import Address from './Address';
import Mnemonic from './Mnemonic';
import HDNode from './HDNode';

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
        <div className="pure-g">
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-5 docsMenu">
            <ul>
              <li>
                <Link to="/bitboxcli/bitcoincash"><i className="fab fa-btc" /> Bitcoin Cash</Link>
              </li>
              <li>
                <Link to="/bitboxcli/transactionbuilder"><i className="fas fa-exchange-alt" /> Transaction Builder</Link>
              </li>
              <li>
                <Link to="/bitboxcli/mnemonic"><i className="fas fa-ellipsis-h" /> Mnemonic</Link>
              </li>
              <li>
                <Link to="/bitboxcli/address"><i className="fas fa-qrcode" /> Address</Link>
              </li>
              <li>
                <Link to="/bitboxcli/hdnode"><i className="fas fa-code-branch" /> HDNode</Link>
              </li>
              <li>
                <Link to="/bitboxcli/crypto"><i className="fas fa-link" /> Crypto</Link>
              </li>
              <li>
                <Link to="/bitboxcli/ecpair"><i className="fas fa-key" /> ECPair</Link>
              </li>
              <li>
                <Link to="/bitboxcli/script"><i className="fas fa-code" /> Script</Link>
              </li>
              <li>
                <Link to="/bitboxcli/blockchain"><i className="fas fa-cubes" /> Blockchain</Link>
              </li>
              <li>
                <Link to="/bitboxcli/control"><i className="fas fa-gamepad" /> Control</Link>
              </li>
              <li>
                <Link to="/bitboxcli/generating"><i className="fab fa-buromobelexperte" /> Generating</Link>
              </li>
              <li>
                <Link to="/bitboxcli/mining"><i className="fas fa-hdd" /> Mining</Link>
              </li>
              <li>
                <Link to="/bitboxcli/network"><i className="fas fa-cloud" /> Network</Link>
              </li>
              <li>
                <Link to="/bitboxcli/rawtransactions"><i className="fas fa-exchange-alt" /> RawTransactions</Link>
              </li>
              <li>
                <Link to="/bitboxcli/util"><i className="fas fa-cogs" /> Util</Link>
              </li>
            </ul>
          </div>
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-4-5 docsContent">
            <h1 className="content-head is-center">BitboxCli</h1>
            <p><code>bitbox-cli</code> is a Utility for creating great <a href='https://www.bitcoincash.org'>Bitcoin Cash</a> applications. If can be used from the command line or from within client/server apps. Any methods which make network requests return a <code>Promise</code> and any other methods return immediately.</p>
            <Route path="/bitboxcli/bitcoincash" component={BitcoinCash}/>
            <Route path="/bitboxcli/transactionbuilder" component={TransactionBuilder}/>
            <Route path="/bitboxcli/address" component={Address}/>
            <Route path="/bitboxcli/mnemonic" component={Mnemonic}/>
            <Route path="/bitboxcli/hdnode" component={HDNode}/>
            <Route path="/bitboxcli/crypto" component={Crypto}/>
            <Route path="/bitboxcli/ecpair" component={ECPair}/>
            <Route path="/bitboxcli/script" component={Script}/>
            <Route path="/bitboxcli/blockchain" component={Blockchain}/>
            <Route path="/bitboxcli/control" component={Control}/>
            <Route path="/bitboxcli/generating" component={Generating}/>
            <Route path="/bitboxcli/mining" component={Mining}/>
            <Route path="/bitboxcli/network" component={Network}/>
            <Route path="/bitboxcli/rawtransactions" component={RawTransactions}/>
            <Route path="/bitboxcli/util" component={Util}/>
          </div>
        </div>
      </div>
    );
  }
}

export default BitboxCli;
