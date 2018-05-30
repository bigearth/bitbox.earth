import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Util extends Component {
  componentDidMount() {
    document.title = "Util - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Util">
        <h2 id='util' className="content-head is-center"><i className="fas fa-cogs" /> Util</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/util">Util</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">

            <h3 id='validateAddress'><code>validateAddress</code></h3>
          <p>
  Return information about the given bitcoin address.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  address     (string, required): The bitcoin address to validate
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Util.validateAddress("bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f").then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  // { isvalid: true,
  // address: '17fshh33qUze2yifiJ2sXgijSMzJ2KNEwu',
  // scriptPubKey: '76a914492ae280d70af33acf0ae7cd329b961e65e9cbd888ac',
  // ismine: true,
  // iswatchonly: false,
  // isscript: false,
  // pubkey: '0312eeb9ae5f14c3cf43cece11134af860c2ef7d775060e3a578ceec888acada31',
  // iscompressed: true,
  // account: 'Test' }
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Util;
