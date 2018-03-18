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
            <p>
           Utility for creating hash digests of data. Can be sha256 or ripemd160.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
              data  <code>string</code>:         data to be hashed
              </li>
              <li>
              algorithm <code>string</code>:     algorithm to use. default: 'sha256'
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            hex <code>string</code>     hex encoded hash of data
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // create sha256 hashes
  BITBOX.Crypto.createHash('EARTH', 'sha256')
  // bcfee25a8baf6808fce5ff4e63cf21c8d114853ca7eacdcc3c210d73c58dab66

  BITBOX.Crypto.createHash('Carlos Gabriel Cardona', 'sha256')
  // 3e3d496369a5e2314db74094a1cf0cae8e8cf3fefe1807e251df07c8822a9188

  BITBOX.Crypto.createHash('Be excellent to each other', 'sha256')
  //c88c5ae954dd4c3f46d125862fab06d0060ca4cccd523ba1c7d2df72e539868b

  // create ripemd160 hashes
  BITBOX.Crypto.createHash('EARTH', 'ripemd160')
  // ca700bba3bd37304b9bd923652245f598ece8afe

  BITBOX.Crypto.createHash('Carlos Gabriel Cardona', 'ripemd160')
  // 971de56ec9f68050532ace44ea5a1b6bffd758a3

  BITBOX.Crypto.createHash('Be excellent to each other', 'ripemd160')
  //1c9b1d50930927998af46f152681c4a9ed5bc9e4
            `}</SyntaxHighlighter>

            <h3 id='createSHA256Hash'><code>createSHA256Hash</code></h3>
            <p>
  Utility for creating sha256 hash digests of data
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
  data  <code>string</code>:          data to be hashed
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            hex <code>string</code>     hex encoded sha256 hash of data
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // create sha256 hashes
  BITBOX.Crypto.createHash('EARTH', 'sha256')
  // bcfee25a8baf6808fce5ff4e63cf21c8d114853ca7eacdcc3c210d73c58dab66

  BITBOX.Crypto.createHash('Carlos Gabriel Cardona', 'sha256')
  // 3e3d496369a5e2314db74094a1cf0cae8e8cf3fefe1807e251df07c8822a9188

  BITBOX.Crypto.createHash('Be excellent to each other', 'sha256')
  //c88c5ae954dd4c3f46d125862fab06d0060ca4cccd523ba1c7d2df72e539868b
            `}</SyntaxHighlighter>

            <h3 id='createRIPEMD160Hash'><code>createRIPEMD160Hash</code></h3>
            <p>
  Utility for creating ripemd160 hash digests of data
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
  data  <code>string</code>:          data to be hashed
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            hex <code>string</code>     hex encoded ripemd160 hash of data
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // create ripemd160 hashes
  BITBOX.Crypto.createHash('EARTH', 'ripemd160')
  // ca700bba3bd37304b9bd923652245f598ece8afe

  BITBOX.Crypto.createHash('Carlos Gabriel Cardona', 'ripemd160')
  // 971de56ec9f68050532ace44ea5a1b6bffd758a3

  BITBOX.Crypto.createHash('Be excellent to each other', 'ripemd160')
  //1c9b1d50930927998af46f152681c4a9ed5bc9e4
            `}</SyntaxHighlighter>

            <h3 id='randomBytes'><code>randomBytes</code></h3>
            <p>
  Generates cryptographically strong pseudo-random data. The size argument is a number indicating the number of bytes to generate.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
  numBytes<code>number</code>:          number of bytes to generate
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            hex <code>string</code>     hex encoded random bytes
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Crypto.randomBytes(16)
  // c3a2e455d71593ede73e7458bdbdcfb9

  BITBOX.Crypto.randomBytes(20)
  // e274dee5cca791bd65a9f9ba7c93743d0b4eaa36

  BITBOX.Crypto.randomBytes(24)
  // a28d025d44e3cc1ec3a9d42eb85b7ea8277845960d10a7e2

  BITBOX.Crypto.randomBytes(28)
  // 58ef1902f604bdc4179d7d9ddc8b0e7d7ef7834a0fade161942e10c5

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
