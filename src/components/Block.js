import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Block extends Component {
  componentDidMount() {
    document.title = "Block - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Block">
      <h2 id='Block' className="content-head is-center"><i className="fas fa-cube" /> Block</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/Block">Block</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='details'><code>details</code></h3>
            <p>
    Return details about a Block.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
    hash  <code>String</code> required: block hash
              </li>
            </ol>
            <h4>Result</h4>
            <p>
    details <code>Object</code>: Details about Block
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Block.details('000000001c6aeec19265e9cc3ded8ba5ef5e63fae7747f30bf9c02c7bc8883f0')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });

  // {
  //   "hash": "000000001c6aeec19265e9cc3ded8ba5ef5e63fae7747f30bf9c02c7bc8883f0",
  //   "size": 216,
  //   "height": 507,
  //   "version": 1,
  //   "merkleroot": "a85fa3d831ab6b0305e7ff88d2d4941e25a810d4461635df51490653822071a8",
  //   "tx": [
  //     "a85fa3d831ab6b0305e7ff88d2d4941e25a810d4461635df51490653822071a8"
  //   ],
  //   "time": 1231973656,
  //   "nonce": 330467862,
  //   "bits": "1d00ffff",
  //   "difficulty": 1,
  //   "chainwork": "000000000000000000000000000000000000000000000000000001fc01fc01fc",
  //   "confirmations": 528404,
  //   "previousblockhash": "00000000a99525c043fd7e323414b60add43c254c44860094048f9c01e9a5fdd",
  //   "nextblockhash": "000000000d550f4161f2702165fdd782ec72ff9c541f864ebb8256b662b7e51a",
  //   "reward": 50,
  //   "isMainChain": true,
  //   "poolInfo": {}
  // }
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Block;
