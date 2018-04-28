import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class BitboxProxy extends Component {
componentDidMount() {
  document.title = "Proxy - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
}

  render() {
    return (
      <div className="BitboxProxy">
        <h2 className="content-head is-center"><i className="fas fa-cloud-upload-alt" /> Bitbox Proxy</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/gettingstarted">Docs</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/bitboxproxy">proxy</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
           <h3>Local proxy</h3>
            <p><code>bitboind</code> doesnt&rsquo;t support CORS so this runs a small local proxy you can <code>POST</code> to in order to avoid errors.</p>
            <SyntaxHighlighter language='text' style={ocean}>{`
  Usage: proxy [options]

  localhost proxy for POSTing to full BCH node


  Options:
  -h, --help  output usage information

  $ bitbox proxy
  CORS Proxy running at: http://localhost:1337
           `}</SyntaxHighlighter>
            <p><strong>note</strong> you need to pass a <code>corsproxy: 'local'</code> argument to <code>bitbox-cli</code>&rsquo;s constructor.</p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let BITBOX = new BITBOXCli({
    protocol: 'http',
    host: 'ip.of.node',
    port: 8332,
    username: 'username',
    password: 'password',
    corsproxy: 'local'
  });
           `}</SyntaxHighlighter>
           <h3>Remote proxy</h3>
           <p>BITBOX also runs a remote proxy for BCH apps. <a href='https://proxy.bitbox.earth/'>proxy.bitbox.earth</a> is a remote proxy just for this purpose.</p>
           <p>It&rsquo;s limited to 50 requests per 3 minutes. Please reach out to BITBOX if you have a BCH app and you need more requests reach out to BITBOX.</p>
            <p><strong>note</strong> you need to pass a <code>corsproxy: 'remote'</code> argument to <code>bitbox-cli</code>&rsquo;s constructor.</p>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let BITBOX = new BITBOXCli({
    protocol: 'http',
    host: 'ip.of.node',
    port: 8332,
    username: 'username',
    password: 'password',
    corsproxy: 'remote'
  });
           `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default BitboxProxy;
