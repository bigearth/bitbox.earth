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
            <h3 id='decompileBuffer'><code>decompileBuffer</code></h3>
            <p>
            Decompile a Script buffer.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          scriptBuffer <code>Buffer</code>
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
    let decompiledScriptSig = BITBOX.Script.decompileBuffer(scriptSigBuffer);
    // [signature, pubkeybuffer]
    // get cash addr from decompiled scriptSig's pubkeybuffer
    BITBOX.HDNode.toCashAddress(BITBOX.ECPair.fromPublicKeyBuffer(decompiledScriptSig[1]));
    // bitcoincash:qqzdnxncgm3v247u5v0gqnglr2vpdhe0hu4wl0rmwt
    // get legacy addr from decompiled scriptSig's pubkeybuffer
    BITBOX.HDNode.toLegacyAddress(BITBOX.ECPair.fromPublicKeyBuffer(decompiledScriptSig[1]));
    // 1SeP7kmdWTwjFmWiRMpqtSkDpW39zrVLK

    // decompile P2PKH scriptSig buffer
    let scriptSigBuffer = Buffer.from("473044022018458971c2e73aec49b1b8848013a51f8e647c73f0ca5d38ab12ecaa0205acbb0220645e4bd59262152e59263f2b385e9af034e8a3edd5459ba616f2c4671331cfce012102d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b", 'hex');
    let decompiledScriptSig = BITBOX.Script.decompileBuffer(scriptSigBuffer);
    // [signature, pubkeybuffer]
    // get cash addr from decompiled scriptSig's pubkeybuffer
    BITBOX.HDNode.toCashAddress(BITBOX.ECPair.fromPublicKeyBuffer(decompiledScriptSig[1]));
    // bitcoincash:qzkej6g2zr9c9k83chyqh5pllzv6pkw62ckf2m82ks
    // get legacy addr from decompiled scriptSig's pubkeybuffer
    BITBOX.HDNode.toLegacyAddress(BITBOX.ECPair.fromPublicKeyBuffer(decompiledScriptSig[1]));
    // 1GpugKfjEycPRhk8A8ALPh1zAJmTQGdJPp
            `}</SyntaxHighlighter>

            <h3 id='decompileHex'><code>decompileHex</code></h3>
            <p>
            Decompile a Script hex.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          scriptHex <code>String</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          decompiledScript <code>Array</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // decompile scriptSig hex
    let scriptSigHex = "483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb";
    let decompiledScriptSig = BITBOX.Script.decompileHex(scriptSigHex);
    // [signature, pubkeybuffer]
    // get cash addr from decompiled scriptSig's pubkeybuffer
    BITBOX.HDNode.toCashAddress(BITBOX.ECPair.fromPublicKeyBuffer(decompiledScriptSig[1]));
    // bitcoincash:qqzdnxncgm3v247u5v0gqnglr2vpdhe0hu4wl0rmwt
    // get legacy addr from decompiled scriptSig's pubkeybuffer
    BITBOX.HDNode.toLegacyAddress(BITBOX.ECPair.fromPublicKeyBuffer(decompiledScriptSig[1]));
    // 1SeP7kmdWTwjFmWiRMpqtSkDpW39zrVLK

    // again
    let scriptSigHex = "473044022018458971c2e73aec49b1b8848013a51f8e647c73f0ca5d38ab12ecaa0205acbb0220645e4bd59262152e59263f2b385e9af034e8a3edd5459ba616f2c4671331cfce012102d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b";
    let decompiledScriptSig = BITBOX.Script.decompileHex(scriptSigHex);
    // [signature, pubkeybuffer]
    // get cash addr from decompiled scriptSig's pubkeybuffer
    BITBOX.HDNode.toCashAddress(BITBOX.ECPair.fromPublicKeyBuffer(decompiledScriptSig[1]));
    // bitcoincash:qzkej6g2zr9c9k83chyqh5pllzv6pkw62ckf2m82ks
    // get legacy addr from decompiled scriptSig's pubkeybuffer
    BITBOX.HDNode.toLegacyAddress(BITBOX.ECPair.fromPublicKeyBuffer(decompiledScriptSig[1]));
    // 1GpugKfjEycPRhk8A8ALPh1zAJmTQGdJPp
            `}</SyntaxHighlighter>

            <h3 id='compileBuffer'><code>compileBuffer</code></h3>
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
    // compile P2PKH scriptSig buffer
    let scriptSigHex = '483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb'
    let decompiledScriptSig = BITBOX.Script.decompileHex(scriptSigHex);
    BITBOX.Script.compileBuffer(decompiledScriptSig)
    // <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

    // compile P2PKH scriptPubKey buffer
    let scriptPubKeyHex = '76a91424e9c07804d0ee7e5bda934e0a3ae8710fc007dd88ac'
    let decompiledScriptSig = BITBOX.Script.decompileHex(scriptPubKeyHex);
    BITBOX.Script.compileBuffer(decompiledScriptSig)
    // <Buffer 76 a9 14 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd 88 ac>
            `}</SyntaxHighlighter>

            <h3 id='compileHex'><code>compileHex</code></h3>
            <p>
            Compile a Script to hex
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          scriptChunks <code>Array</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          hex <code>String</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // compile P2PKH scriptSig hex
    let scriptSigHex = '483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb'
    let decompiledScriptSig = BITBOX.Script.decompileHex(scriptSigHex);
    BITBOX.Script.compileHex(decompiledScriptSig)
    // 483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb

    // compile P2PKH scriptPubKey buffer
    let scriptPubKeyHex = '76a91424e9c07804d0ee7e5bda934e0a3ae8710fc007dd88ac'
    let decompiledScriptSig = BITBOX.Script.decompileHex(scriptPubKeyHex);
    BITBOX.Script.compileHex(decompiledScriptSig)
    // 76a91424e9c07804d0ee7e5bda934e0a3ae8710fc007dd88ac
            `}</SyntaxHighlighter>

            <h3 id='bufferToASM'><code>bufferToASM</code></h3>
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
    let scriptBuffer = Buffer.from("76a914bee4182d9fbc8931a728410a0cd3e0f340f2995a88ac", 'hex');
    BITBOX.Script.bufferToASM(scriptBuffer);
    // OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG

    let scriptBuffer = Buffer.from("76a9145fdffba08fa0289af38bc43239d5dc31879b432288ac", 'hex');
    BITBOX.Script.bufferToASM(scriptBuffer);
    // OP_DUP OP_HASH160 5fdffba08fa0289af38bc43239d5dc31879b4322 OP_EQUALVERIFY OP_CHECKSIG

    let scriptBuffer = Buffer.from("76a91414343842516b4af7d8bdb5f16195f9421898cf0f88ac", 'hex');
    BITBOX.Script.bufferToASM(scriptBuffer);
    // OP_DUP OP_HASH160 14343842516b4af7d8bdb5f16195f9421898cf0f OP_EQUALVERIFY OP_CHECKSIG

    let scriptBuffer = Buffer.from("76a914dd4eb9879eb4901d5a0fd0493f1d684eeae43a4688ac", 'hex');
    BITBOX.Script.bufferToASM(scriptBuffer);
    // OP_DUP OP_HASH160 dd4eb9879eb4901d5a0fd0493f1d684eeae43a46 OP_EQUALVERIFY OP_CHECKSIG

    let scriptBuffer = Buffer.from("76a914633039b5adf5e4723cb4d41276eac2fd43178e3e88ac", 'hex');
    BITBOX.Script.bufferToASM(scriptBuffer);
    // OP_DUP OP_HASH160 633039b5adf5e4723cb4d41276eac2fd43178e3e OP_EQUALVERIFY OP_CHECKSIG
            `}</SyntaxHighlighter>

            <h3 id='hexToASM'><code>hexToASM</code></h3>
            <p>
            Script hex to ASM.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hex <code>String</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          asm <code>String</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    let scriptHex = "76a914bee4182d9fbc8931a728410a0cd3e0f340f2995a88ac";
    BITBOX.Script.hexToASM(scriptHex);
    // OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG

    let scriptHex = "76a9145fdffba08fa0289af38bc43239d5dc31879b432288ac";
    BITBOX.Script.hexToASM(scriptHex);
    // OP_DUP OP_HASH160 5fdffba08fa0289af38bc43239d5dc31879b4322 OP_EQUALVERIFY OP_CHECKSIG

    let scriptHex = "76a91414343842516b4af7d8bdb5f16195f9421898cf0f88ac";
    BITBOX.Script.hexToASM(scriptHex);
    // OP_DUP OP_HASH160 14343842516b4af7d8bdb5f16195f9421898cf0f OP_EQUALVERIFY OP_CHECKSIG

    let scriptHex = "76a914dd4eb9879eb4901d5a0fd0493f1d684eeae43a4688ac";
    BITBOX.Script.hexToASM(scriptHex);
    // OP_DUP OP_HASH160 dd4eb9879eb4901d5a0fd0493f1d684eeae43a46 OP_EQUALVERIFY OP_CHECKSIG

    let scriptHex = "76a914633039b5adf5e4723cb4d41276eac2fd43178e3e88ac";
    BITBOX.Script.hexToASM(scriptHex);
    // OP_DUP OP_HASH160 633039b5adf5e4723cb4d41276eac2fd43178e3e OP_EQUALVERIFY OP_CHECKSIG
            `}</SyntaxHighlighter>

            <h3 id='bufferFromASM'><code>bufferFromASM</code></h3>
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
    let scriptSigASM = "3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601";
    BITBOX.Script.bufferFromASM(scriptSigASM);
    // <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

    // P2PKH scriptPubKey
    let scriptPubKeyASM = "OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG";
    BITBOX.Script.bufferFromASM(scriptPubKeyASM);
    // <Buffer 76 a9 14 be e4 18 2d 9f bc 89 31 a7 28 41 0a 0c d3 e0 f3 40 f2 99 5a 88 ac>
            `}</SyntaxHighlighter>

            <h3 id='hexFromASM'><code>hexFromASM</code></h3>
            <p>
            Script ASM to hex
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          asm <code>String</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           hex <code>String</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // P2PKH scriptSig
    let scriptSigASM = "3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601";
    BITBOX.Script.hexFromASM(scriptSigASM);
    // 483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601

    // P2PKH scriptPubKey
    let scriptPubKeyASM = "OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG";
    BITBOX.Script.hexFromASM(scriptPubKeyASM);
    // 76a914bee4182d9fbc8931a728410a0cd3e0f340f2995a88ac
            `}</SyntaxHighlighter>

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
          </div>
        </div>
      </div>
    );
  }
}

export default Script;
