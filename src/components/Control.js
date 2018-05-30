import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Control extends Component {
  componentDidMount() {
    document.title = "Control - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Control">
        <h2 id='control' className="content-head is-center"><i className="fas fa-gamepad" /> Control</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/control">Control</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='getInfo'><code>getInfo</code></h3>
          <p>
  Returns an object containing various state info.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Control.getInfo().then((result) => { console.log(result); }, (err) => { console.log(err); });

  // { version: 170000,
  // protocolversion: 70015,
  // blocks: 529235,
  // timeoffset: 0,
  // connections: 35,
  // proxy: '',
  // difficulty: 702784497476.8376,
  // testnet: false,
  // paytxfee: 0,
  // relayfee: 0.00001,
  // errors: '' }
            `}</SyntaxHighlighter>

            <h3 id='getMemoryInfo'><code>getMemoryInfo</code></h3>
          <p>
  Returns an object containing information about memory usage.
          </p>
          <h4>Result</h4>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Control.getMemoryInfo().then((result) => { console.log(result); }, (err) => { console.log(err); });

  // { locked:
  //  { used: 0,
  //    free: 65536,
  //    total: 65536,
  //    locked: 65536,
  //    chunks_used: 0,
  //    chunks_free: 1 } }
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
