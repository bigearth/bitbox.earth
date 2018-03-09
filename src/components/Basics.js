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
        <h2 id='crypto' className="content-head is-center">Installation</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id="guiBasics">BITBOX basics</h3>
            <p>You can toggle between seeing the public address and the privatekey(WIF) as well as the xpriv and xpub extended keys by clicking the blue button w/ the key icon on the right side of the screen.</p>
            <img src='/assets/screenshot1.png' />
            <h3 id="commandLineBasics">Command line basics</h3>
            <p>Install from npm:</p>
            <SyntaxHighlighter language='text' style={ocean}>{" npm install bitbox-cli --global"}</SyntaxHighlighter>
            <h4 id='requirements'>Requirements</h4>
            <ul>
              <li>
                NodeJS v9.4.x
              </li>
              <li>
                MacOS
              </li>
            </ul>
            <p><code>bitbox-cli</code> comes w/ two commands to help accelerate your work flow.</p>
            <SyntaxHighlighter language='text' style={ocean}>{" bitbox new"}</SyntaxHighlighter>
            <SyntaxHighlighter language='text' style={ocean}>{" bitbox console"}</SyntaxHighlighter>
            <h3 id="bitboxNew"><code>bitbox new</code></h3>
            <p>BITBOX will generate a generic app w/ web bindings and default configuration.</p>
            <SyntaxHighlighter language='text' style={ocean}>{`
  $ bitbox new --title helloEARTH
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
            <p>Launch a console w/ the entire Bitcoin Cash RPC available as well as dozens of helper methods via a built in <code>BITBOX</code> object. <Link to="/bitboxcli">Full list of commands</Link>.</p>
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

export default Installation;
