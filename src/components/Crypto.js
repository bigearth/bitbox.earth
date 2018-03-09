import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Crypto extends Component {
  render() {
    return (
      <div className="Crypto">
        <h2 id='crypto' className="content-head is-center"><i className="fas fa-link" /> Crypto</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='createHash'><code>createHash</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Utility for creating hash digests of data. Can be sha256 or ripemd160.

  Arguments:
  1. data          data to be hashed
  2. algorithm       algorithm <string> default: 'sha256'

  Result:
  "hex"      hex encoded hash of data

  BITBOX.Crypto.createHash('EARTH', 'sha256')
  // bcfee25a8baf6808fce5ff4e63cf21c8d114853ca7eacdcc3c210d73c58dab66
            `}</SyntaxHighlighter>

            <h3 id='createSHA256Hash'><code>createSHA256Hash</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Utility for creating sha256 hash digests of data

  Arguments:
  1. data          data to be hashed

  Result:
  "hex"      hex encoded sha256 hash of data

  BITBOX.Crypto.createSHA256Hash('EARTH')
  // bcfee25a8baf6808fce5ff4e63cf21c8d114853ca7eacdcc3c210d73c58dab66
            `}</SyntaxHighlighter>

            <h3 id='createRIPEMD160Hash'><code>createRIPEMD160Hash</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Utility for creating ripemd160 hash digests of data

  Arguments:
  1. data          data to be hashed

  Result:
  "hex"      hex encoded ripemd160 hash of data

  BITBOX.Crypto.createRIPEMD160Hash('EARTH')
  // ca700bba3bd37304b9bd923652245f598ece8afe
            `}</SyntaxHighlighter>

            <h3 id='randomBytes'><code>randomBytes</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Generates cryptographically strong pseudo-random data. The size argument is a number indicating the number of bytes to generate.

  Arguments:
  1. data          data to be hashed

  Result:
  "hex"      hex encoded random bytes

  BITBOX.Crypto.randomBytes(32)
  // 6e1453357f6f99d19d2a6554f35eab65b6c27f6572e31d7f2faa696cac57759b
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Crypto;
