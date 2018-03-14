import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Installation extends Component {
  render() {
    return (
      <div className="Installation">
        <h2 id='crypto' className="content-head is-center"><i className="fas fa-wrench" /> Installation</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id="gui"><i className="fas fa-desktop" /> GUI</h3>
            <h4 id="apple"><i className="fab fa-apple" /> MacOS</h4>
            <p>Download the <a href='https://github.com/bigearth/bitbox-electron/releases/download/0.3.4/BITBOX-0.3.4.dmg'>app for MacOS</a>. You can verify the files haven&rsquo;t been tampered w/ by downloading them and running:</p>
            <SyntaxHighlighter language='text' style={ocean}>{" openssl sha -sha256 path/to/BITBOX-0.3.4.dmg"}</SyntaxHighlighter>
            <p>Verify the output matches the latest BITBOX release&rsquo;s <a href='https://github.com/bigearth/keys-n-hashes'>checksum</a>.</p>
            <h4 id="windows"><i className="fab fa-windows" /> Windows</h4>
            <p>There currently is no Windows build but there is a <a href='https://github.com/bigearth/bitbox-electron/issues/8'>$50 bounty</a> paid in $BCH.</p>
            <h3 id="commandline"><i className="fas fa-terminal" /> Command Line</h3>
            <p>To use commands like <code>new</code>, <code>scaffold</code> and <code>console</code>:</p>
            <SyntaxHighlighter language='text' style={ocean}>{" npm install bitbox-cli --global"}</SyntaxHighlighter>
            <p>To use inside a command line script or client/server app:</p>
            <SyntaxHighlighter language='text' style={ocean}>{" npm install bitbox-cli --save"}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Installation;
