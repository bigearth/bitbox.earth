import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Generating extends Component {
  componentDidMount() {
    document.title = "Generating - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Generating">
        <h2 id='generating' className="content-head is-center"><i className="fab fa-buromobelexperte" /> Generating</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/generating">Generating</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='generate'><code>generate</code></h3>
          <p>
  Mine up to nblocks blocks immediately (before the RPC call returns)
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  nblocks      (numeric, required): How many blocks are generated immediately.
            </li>
            <li>
  maxtries     (numeric, optional): How many iterations to try (default = 1000000).
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  [ blockhashes ]     (array): hashes of blocks generated
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Generating.generate(11)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='generateToAddress'><code>generateToAddress</code></h3>
          <p>
  Mine blocks immediately to a specified address (before the RPC call returns)
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  nblocks      (numeric, required): How many blocks are generated immediately.
            </li>
            <li>
  address     (string, required): The address to send the newly generated bitcoin to.
            </li>
            <li>
  maxtries     (numeric, optional): How many iterations to try (default = 1000000).
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  [ blockhashes ]     (array): hashes of blocks generated
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Generating.generateToAddress(11, 'bitcoincash:qzhhrxcdlxdsw3xuw8nz3c4476fdz69uq5gewr0lxg')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Generating;
