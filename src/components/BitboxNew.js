import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class BitboxNew extends Component {
  componentDidMount() {
    document.title = "New - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="BitboxNew">
        <h2 id='bitboxNew' className="content-head is-center"><i className="fas fa-plus" /> Bitbox New</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/gettingstarted">Docs</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/bitboxnew">new</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <p>BITBOX will generate a new app w/ empty <code>src/</code> and <code>test/</code> directories and a <code>bitbox.js</code> configured to connect to your local BITBOX. It accepts several flags to configure your new project or optionally specify commonly used arguments in a .bitboxrc file in your home directory.</p>
            <SyntaxHighlighter language='text' style={ocean}>{`
  Usage: new [options] <name>

  Options:

    -s, --scaffold <scaffold>        The framework to use. Options include react, angular, nextjs and node. (Default: react)
    -r, --scaffold-repo <repo>       The github repository to use. Ex: https://github.com/bigearth/bitbox-scaffold-react.git
    -e, --environment <environment>  environment of running BITBOX instance. Ex: production, staging. Default: development
    -r, --protocol <protocol>        protocol of running BITBOX instance. Default: http
    -o, --host <host>                host of running BITBOX instance. Default: localhost
    -p, --port <port>                port of running BITBOX instance. Default: 8332
    -u, --username <username>        Bitcoin Cash JSON RPC username
    -a, --password <passwore>        Bitcoin Cash JSON RPC password
    -h, --help                       output usage information

  $ bitbox new helloEARTH
  $ bitbox new helloEARTH --scaffold react
            `}</SyntaxHighlighter>
            <h3 id="bitboxJS">bitbox.js</h3>
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
            <h3 id="customNew">Customize your build</h3>
            <p>By default your <code>bitbox.js</code> will connect over <code>http://localhost:8332</code> but you can change this by passing in any or all of the following flags: <code>--protocol</code>, <code>--host</code> and/or <code>--port</code></p>
            <p>You can also set these values in a <code>.bitboxrc</code> file in your home directory for regularly used values.</p>
            <h3 id="bitboxrc"><code>.bitboxrc</code></h3>
            <SyntaxHighlighter language='text' style={ocean}>{`
  ; bitbox config comment

  [new]
  protocol = http
  host = localhost
  port = 8332
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default BitboxNew;
