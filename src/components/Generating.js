import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Generating extends Component {
  render() {
    return (
      <div className="Generating">
        <h2 id='generating' className="content-head is-center"><i className="fab fa-buromobelexperte" /> Generating</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='generate'><code>generate</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Mine up to nblocks blocks immediately (before the RPC call returns)

  Arguments:
  1. nblocks      (numeric, required) How many blocks are generated immediately.
  2. maxtries     (numeric, optional) How many iterations to try (default = 1000000).

  Result:
  [ blockhashes ]     (array) hashes of blocks generated

  BITBOX.Generating.generate(11)
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
