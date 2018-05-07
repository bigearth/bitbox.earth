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

            <h3 id='createMultisig'><code>createMultisig</code></h3>
            <p>
  Creates a multi-signature address with n signature of m keys required. It returns a json object with the address and redeemScript.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            nrequired (numeric, required) The number of required signatures out of the n keys or addresses.
              </li>
              <li>
            keys (string, required) A json array of keys which are bitcoin addresses or hex-encoded public keys
              </li>
            </ol>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Util.createMultisig(2, ["bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f", "1B4C53FAn3wd1AswXZxMfmeHxnky7CTvfZ"]).then((result) => { console.log(result); }, (err) => { console.log(err); });

  // {
  //   address: '39cp79UgFriqYS5ZYZyhiXbnUfE4eUjZur',
  //   redeemScript: '52210261d3f136eea0a3f786389d85212fae01d7b4a3c7520af78b49f079471d847d3421027495999882ace5aa4fb3d920dd7571b1ed75bcbd5987ef289cb6f88629c4a09652ae'
  // }
            `}</SyntaxHighlighter>

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
  BITBOX.Util.validateAddress("bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f").then((result) => { console.log(result); }, (err) => { console.log(err); });

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
