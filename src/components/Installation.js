import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Installation extends Component {
  componentDidMount() {
    document.title = "Installation - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Installation">
        <h2 id='crypto' className="content-head is-center"><i className="fas fa-wrench" /> Installation</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/gettingstarted">Docs</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/installation">Installation</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id="gui"><i className="fas fa-desktop" /> Dependencies</h3>
            <h4 id="nodejs"><i className="fab fa-node-js" /> NodeJS</h4>
            <p>NodeJS is a javascript runtime build on Chrome’s V8 engine. npm is the package manager for NodeJS.</p>
            <h5 id="macos"><i className="fab fa-apple" /> MacOS and <i className="fab fa-linux" /> Linux</h5>
            <p>For installing on Unix platorms use <a href='https://github.com/creationix/nvm'>nvm</a> the node version manager. Install <code>nvm</code> w/</p>
            <SyntaxHighlighter language='text' style={ocean}>{" curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash"}</SyntaxHighlighter>
            <p>Once you have nvm install NodeJS v9.4.0 w/</p>
            <SyntaxHighlighter language='text' style={ocean}>{" nvm install 9.4.0"}</SyntaxHighlighter>
            <p>This also installs npm v5.6.0.</p>
            <h5 id="windows"><i className="fab fa-windows" /> Windows</h5>
            <p>For installing on Windows use the official installer from <a href='https://nodejs.org/'>nodejs.org</a>. Install the one which says "Recommended for most users"</p>
            <h3 id="gui"><i className="fas fa-desktop" /> GUI</h3>
            <h4 id="apple"><i className="fab fa-apple" /> MacOS</h4>
            <p>Download the <a href='https://github.com/bigearth/bitbox-electron/releases/download/0.3.5/BITBOX-0.3.5.dmg'>app for MacOS</a>. You can verify the files haven&rsquo;t been tampered w/ by downloading them and running:</p>
            <SyntaxHighlighter language='text' style={ocean}>{" openssl sha -sha256 path/to/BITBOX-0.3.5.dmg"}</SyntaxHighlighter>
            <p>Verify the output matches the latest BITBOX release&rsquo;s <a href='https://github.com/bigearth/keys-n-hashes'>checksum</a>.</p>
            <h4 id="windows"><i className="fab fa-windows" /> Windows and <i className="fab fa-linux" /> Linux</h4>
            <p>There currently is no Windows installer but there is a <a href='https://github.com/bigearth/bitbox-electron/issues/8'>$50 bounty</a> paid in $BCH.</p>
            <h5>Clone the git repo</h5>
            <SyntaxHighlighter language='text' style={ocean}>{" git clone https://github.com/bigearth/bitbox-electron.git"}</SyntaxHighlighter>
            <h5>Install dependencies</h5>
            <SyntaxHighlighter language='text' style={ocean}>{" cd bitbox-electron && npm install"}</SyntaxHighlighter>
            <h5>Build app</h5>
            <SyntaxHighlighter language='text' style={ocean}>{" npm run build"}</SyntaxHighlighter>
            <h5>Launch app</h5>
            <SyntaxHighlighter language='text' style={ocean}>{" npm start"}</SyntaxHighlighter>
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
