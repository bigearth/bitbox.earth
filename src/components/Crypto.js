import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Crypto extends Component {
  componentDidMount() {
    document.title = "Crypto - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Crypto">
        <h2 id='crypto' className="content-head is-center"><i className="fas fa-link" /> Crypto</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/crypto">Crypto</Link></li>
          </ul>
        </div>
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
  // 740f5b2c2b3a467512c05a96b61ca79ebf5bee6f34e1170093a5fa36af283c8c

  BITBOX.Crypto.createHash('Carlos Gabriel Cardona', 'sha256')
  // 8e830655c84f9fbd951373c967fee8060e7f00fbb6da5c2b9e7591afca02a45a

  BITBOX.Crypto.createHash('Be excellent to each other', 'sha256')
  //8861475d7a1634cb0c174f20f8c3025a5ce65b062be80ec0f93627edad741bb1

  // create ripemd160 hashes
  BITBOX.Crypto.createHash('EARTH', 'ripemd160')
  // 7629501f7dc77b2d6a20b38ac094b6a6d5588938

  BITBOX.Crypto.createHash('Carlos Gabriel Cardona', 'ripemd160')
  // 362be6ef6ed9fd89a1dcce9978e0d448bbc60517

  BITBOX.Crypto.createHash('Be excellent to each other', 'ripemd160')
  //24806a41ed63a6bc460494a728a6fd33b49eebe7
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
  // 740f5b2c2b3a467512c05a96b61ca79ebf5bee6f34e1170093a5fa36af283c8c

  BITBOX.Crypto.createHash('Carlos Gabriel Cardona', 'sha256')
  // 8e830655c84f9fbd951373c967fee8060e7f00fbb6da5c2b9e7591afca02a45a

  BITBOX.Crypto.createHash('Be excellent to each other', 'sha256')
  //8861475d7a1634cb0c174f20f8c3025a5ce65b062be80ec0f93627edad741bb1
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
  // 7629501f7dc77b2d6a20b38ac094b6a6d5588938

  BITBOX.Crypto.createHash('Carlos Gabriel Cardona', 'ripemd160')
  // 362be6ef6ed9fd89a1dcce9978e0d448bbc60517

  BITBOX.Crypto.createHash('Be excellent to each other', 'ripemd160')
  //24806a41ed63a6bc460494a728a6fd33b49eebe7
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
