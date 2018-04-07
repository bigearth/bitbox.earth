import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Script extends Component {
  componentDidMount() {
    document.title = "Script - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Script">
        <h2 id='Script' className="content-head is-center"><i className="fas fa-code" /> Script</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/Script">Script</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='opcodes'><code>opcodes</code></h3>
            <p>
            Script OP Codes
            </p>
            <h4>Result</h4>
            <p>
           opcodes <code>Object</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // list all op codes
  BITBOX.Script.opcodes;
  // { OP_FALSE: 0,
  //   OP_0: 0,
  //   OP_PUSHDATA1: 76,
  //   OP_PUSHDATA2: 77,
  //   OP_PUSHDATA4: 78,
  //   OP_1NEGATE: 79,
  //   OP_RESERVED: 80,
  //   OP_TRUE: 81,
  //   OP_1: 81,
  //   OP_2: 82,
  //   OP_3: 83,
  //   OP_4: 84,
  //   ...
  // }

  // get the op code for a word
  BITBOX.Script.opcodes.OP_SPLIT
  // 127
  BITBOX.Script.opcodes.OP_NUM2BIN
  // 128
  BITBOX.Script.opcodes.OP_BIN2NUM
  // 129
            `}</SyntaxHighlighter>

            <h3 id='compile'><code>compile</code></h3>
            <p>
            Compile a Script buffer
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          scriptChunks <code>Array</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // compile P2PKH scriptSig to buffer
  let scriptSig = [
    Buffer.from('3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601', 'hex'),
    Buffer.from('02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex')
  ]
  BITBOX.Script.compile(scriptSig);
  // <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

  // compile P2PKH scriptPubKey to buffer
  let scriptPubKey = [
    118,
    169,
    Buffer.from('24e9c07804d0ee7e5bda934e0a3ae8710fc007dd', 'hex'),
    136,
    172
  ];
  BITBOX.Script.compile(scriptPubKey);
  // <Buffer 76 a9 14 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd 88 ac>
            `}</SyntaxHighlighter>

            <h3 id='decompile'><code>decompile</code></h3>
            <p>
            Decompile a Script buffer.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          buffer <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          decompiledScript <code>Array</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // decompile P2PKH scriptSig buffer
  let scriptSigBuffer = Buffer.from("483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb", 'hex');
  BITBOX.Script.decompile(scriptSigBuffer);
  // [
  //   <Buffer 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 2b ... >,
  //   <Buffer 02 fb 72 1b 92 02 5e 77 5b 1b 84 77 4e 65 d5 68 d2 46 45 cb 63 32 75 f5 c2 6f 5c 31 01 b2 14 a8 fb>
  // ]

  // decompile P2PKH scriptPubKey buffer
  let scriptPubKeyBuffer = Buffer.from("76a91424e9c07804d0ee7e5bda934e0a3ae8710fc007dd88ac", 'hex');
  BITBOX.Script.decompile(scriptPubKeyBuffer);
  // [ 118,
  // 169,
  // <Buffer 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd>,
  // 136,
  // 172 ]
            `}</SyntaxHighlighter>

            <h3 id='toASM'><code>toASM</code></h3>
            <p>
            Script buffer to ASM.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          buffer <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          asm <code>String</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // P2PKH scriptSig
  let scriptSigBuffer = Buffer.from('483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex');
  BITBOX.Script.toASM(scriptSigBuffer);
  // 3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb

  // P2PKH scriptPubKey
  let scriptBuffer = Buffer.from("76a914bee4182d9fbc8931a728410a0cd3e0f340f2995a88ac", 'hex');
  BITBOX.Script.toASM(scriptBuffer);
  // OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG
            `}</SyntaxHighlighter>

            <h3 id='fromASM'><code>fromASM</code></h3>
            <p>
            Script ASM to buffer
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          asm <code>String</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // P2PKH scriptSig
  let scriptSigASM = "3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb";
  BITBOX.Script.fromASM(scriptSigASM);
  // <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

  // P2PKH scriptPubKey
  let scriptPubKeyASM = "OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG";
  BITBOX.Script.fromASM(scriptPubKeyASM);
  // <Buffer 76 a9 14 be e4 18 2d 9f bc 89 31 a7 28 41 0a 0c d3 e0 f3 40 f2 99 5a 88 ac>
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Script;
