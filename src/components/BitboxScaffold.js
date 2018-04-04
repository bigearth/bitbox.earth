import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class BitboxScaffold extends Component {
  componentDidMount() {
    document.title = "Scaffold - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="BitboxScaffold">
        <h2 className="content-head is-center"><i className="fas fa-shipping-fast" /> Bitbox Scaffold</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/gettingstarted">Docs</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/bitboxscaffold">scaffold</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <p>Create a $BCH app in under a minute in popular frameworks. Currently react, node, nextjs and angular are supported. Pass in a <code>--repo</code> flag to specify a git repo to use.</p>
            <p>Each new app comes with BITBOX bindings and a <code>bitbox.js</code> file for configuration.</p>
            <SyntaxHighlighter language='text' style={ocean}>{`
  Usage: scaffold [options]

  Scaffold out basic apps in major frameworks w/ BITBOX bindings

  Options:

    -f, --framework <framework>  The framework to use. Options include "react", "angular", "nextjs" and "node". Default: "react"
    -r, --repo <repo>            The github repository to use. Ex: https://github.com/bigearth/bitbox-scaffold-react.git
    -h, --help                   output usage information


    $  bitbox scaffold --framework node

    Scaffolding node app in current directory
    All done. ✅
    Now confirm you have your locally running BITBOX and run \`npm install && npm start\` 🚀
            `}</SyntaxHighlighter>
            <h3>More Info</h3>
            <ul>
              <li>
                <a href='https://github.com/bigearth/bitbox-scaffold-react'>https://github.com/bigearth/bitbox-scaffold-react</a>
              </li>
              <li>
                <a href='https://github.com/bigearth/bitbox-scaffold-node'>https://github.com/bigearth/bitbox-scaffold-node</a>
              </li>
              <li>
                <a href='https://github.com/bigearth/bitbox-scaffold-angular'>https://github.com/bigearth/bitbox-scaffold-angular</a>
              </li>
              <li>
                <a href='https://github.com/bigearth/bitbox-scaffold-nextjs'>https://github.com/bigearth/bitbox-scaffold-nextjs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BitboxScaffold;
