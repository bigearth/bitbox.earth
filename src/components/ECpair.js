import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class ECPair extends Component {
  componentDidMount() {
    document.title = "ECPair - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="ECPair">
        <h2 id='ECPair' className="content-head is-center"><i className="fas fa-key" /> ECPair</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/ECPair">ECPair</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='fromWIF'><code>fromWIF</code></h3>
            <p>
            Generates an ECPair from a private key in wallet import format.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          wif <code>string</code>:                private key in wallet import format (WIF)
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          ecpair <code>string</code>:      ECPair
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // mainnet WIF
    let wif = 'L4vmKsStbQaCvaKPnCzdRArZgdAxTqVx8vjMGLW5nHtWdRguiRi1';
    let ecpair = BITBOX.ECPair.fromWIF(wif);

    // get cashaddr
    BITBOX.HDNode.toCashAddress(ecpair)
    // bitcoincash:qrlwe36jtawauv24jnvjdcdcja5tapvvm5m3rnksz7

    // get legacy addr
    BITBOX.HDNode.toLegacyAddress(ecpair)
    // 1QEvHPehayiuPnggPFsGYTmpZSPAnJpDG8

    // mainnet WIF again
    let wif = 'Kwpd21tPMtWy24WKmBuLc295fw63C2if16fzb3k6wyB8yTeABAAg'
    let ecpair = BITBOX.ECPair.fromWIF(wif)

    BITBOX.HDNode.toCashAddress(ecpair)
    // bitcoincash:qznln6jzydykmlvrzcwhu63s6ce8lh227vfnydhnsx

    BITBOX.HDNode.toLegacyAddress(ecpair)
    // 1GKBESUjcyBPLDMuHTdBvnypB9DVETFnL1
            `}</SyntaxHighlighter>

            <h3 id='fromPublicKeyBuffer'><code>fromPublicKeyBuffer</code></h3>
            <p>
            Generates an ECPair from a public key buffer.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          pubkeyBuffer <code>string</code>:                 public key buffer
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          ecpair <code>string</code>:      ECPair
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create ECPair from pubkeyBuffer
    let pubkeyBuffer = Buffer.from("02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb", 'hex');
    let ecpair = BITBOX.ECPair.fromPublicKeyBuffer(pubkeyBuffer);

    // get legacy address
    BITBOX.HDNode.toLegacyAddress(ecpair)
    // 1SeP7kmdWTwjFmWiRMpqtSkDpW39zrVLK

    // get cash address
    BITBOX.HDNode.toCashAddress(ecpair)
    // bitcoincash:qqzdnxncgm3v247u5v0gqnglr2vpdhe0hu4wl0rmwt

    // again create ECPair from pubkeyBuffer
    let pubkeyBuffer = Buffer.from("02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b", 'hex');
    let ecpair = BITBOX.ECPair.fromPublicKeyBuffer(pubkeyBuffer);

    // get legacy address
    BITBOX.HDNode.toLegacyAddress(ecpair)
    // 1GpugKfjEycPRhk8A8ALPh1zAJmTQGdJPp

    // get cash address
    BITBOX.HDNode.toCashAddress(ecpair)
    // bitcoincash:qzkej6g2zr9c9k83chyqh5pllzv6pkw62ckf2m82ks
            `}</SyntaxHighlighter>

            <h3 id='fromPublicKeyHex'><code>fromPublicKeyHex</code></h3>
            <p>
            Generates an ECPair from a public key encoded as hex.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          pubkeyHex <code>string</code>:                 public key encoded as hex
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          ecpair <code>string</code>:      ECPair
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create ECPair from pubkeyHex
    let pubkeyHex = "02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb";
    let ecpair = BITBOX.ECPair.fromPublicKeyHex(pubkeyHex);

    // get legacy address
    BITBOX.HDNode.toLegacyAddress(ecpair)
    // 1SeP7kmdWTwjFmWiRMpqtSkDpW39zrVLK

    // get cash address
    BITBOX.HDNode.toCashAddress(ecpair)
    // bitcoincash:qqzdnxncgm3v247u5v0gqnglr2vpdhe0hu4wl0rmwt

    // again create ECPair from pubkeyHex
    let pubkeyHex = "02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b";
    let ecpair = BITBOX.ECPair.fromPublicKeyBuffer(pubkeyHex);

    // get legacy address
    BITBOX.HDNode.toLegacyAddress(ecpair)
    // 1GpugKfjEycPRhk8A8ALPh1zAJmTQGdJPp

    // get cash address
    BITBOX.HDNode.toCashAddress(ecpair)
    // bitcoincash:qzkej6g2zr9c9k83chyqh5pllzv6pkw62ckf2m82ks
            `}</SyntaxHighlighter>

            <h3 id='toPublicKeyBuffer'><code>toPublicKeyBuffer</code></h3>
            <p>
            Get the public key of an ECPair as a buffer.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          ecpair <code>string</code>:                 ECPair
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          pubkeyBuffer <code>string</code>:       public key of an ECPair as a buffer
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create ecpair from hex encoded public key
    let ecpair = BITBOX.ECPair.fromPublicKeyHex('02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b');
    // create public key buffer
    BITBOX.ECPair.toPublicKeyBuffer(ecpair);
    // <Buffer 02 d3 05 77 2e 08 73 fb a6 c1 c7 ff 35 3c e3 74 23 33 16 eb 58 20 ac d7 ff 3d 7d 9b 82 d5 14 12 6b>

    // again create ECPair from pubkeyHex
    let ecpair = BITBOX.ECPair.fromPublicKeyHex('02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb');
    // create public key buffer
    BITBOX.ECPair.toPublicKeyBuffer(ecpair);
    // <Buffer 02 fb 72 1b 92 02 5e 77 5b 1b 84 77 4e 65 d5 68 d2 46 45 cb 63 32 75 f5 c2 6f 5c 31 01 b2 14 a8 fb>
            `}</SyntaxHighlighter>

            <h3 id='toPublicKeyHex'><code>toPublicKeyHex</code></h3>
            <p>
            Get the public key of an ECPair encoded as hex.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          ecpair <code>string</code>:                 ECPair
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          pubkeyBuffer <code>string</code>:       public key of an ECPair encoded as hex
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create ecpair from hex encoded public key
    let ecpair = BITBOX.ECPair.fromPublicKeyHex('02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b');
    // create public key buffer
    BITBOX.ECPair.toPublicKeyHex(ecpair);
    // 02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b

    // again create ECPair from pubkeyHex
    let ecpair = BITBOX.ECPair.fromPublicKeyHex('02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb');
    // create public key buffer
    BITBOX.ECPair.toPublicKeyHex(ecpair);
    // 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb
            `}</SyntaxHighlighter>

            <h3 id='toLegacyAddress'><code>toLegacyAddress</code></h3>
            <p>
          Get legacy address of ECPair
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          ecpair: ECPair
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            legacyAddress <code>string</code>:     legacy base58check encoded address of an ECPair
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // private key in wallet import format
    let wif = 'L5GPEGxCmojgzFoBLUUqT2GegLGqobiYhTZzfLtpkLTfTb9E9NRn';
    // ecpair from wif
    let ecpair = BITBOX.ECPair.fromWIF(wif);
    // to legacy address
    BITBOX.ECPair.toLegacyAddress(ecpair);
    // 1DgxdA5bbMcCNWg3yB2MgKqFazV92BXgxK

    // private key in wallet import format
    let wif = 'Kxq2EzVbDwjquUt5zyCFED5FRt99RZKEKVDJWTQcpSDoLAWMqLer';
    // ecpair from wif
    let ecpair = BITBOX.ECPair.fromWIF(wif);
    // to legacy address
    BITBOX.ECPair.toLegacyAddress(ecpair);
    // 13sYpK2KkfrKkAVPoYrBm7dHxhfWNfseyF
            `}</SyntaxHighlighter>

            <h3 id='toCashAddress'><code>toCashAddress</code></h3>
            <p>
          Get cash address of ECPair
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          ecpair: ECPair
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            cashAddress <code>string</code>:     cashaddr encoded address of an ECPair
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // private key in wallet import format
    let wif = 'L5GPEGxCmojgzFoBLUUqT2GegLGqobiYhTZzfLtpkLTfTb9E9NRn';
    // ecpair from wif
    let ecpair = BITBOX.ECPair.fromWIF(wif);
    // to legacy address
    let address = BITBOX.ECPair.toCashAddress(ecpair);
    // bitcoincash:qz9nq206kteyv2t7trhdr4vzzkej60kqtytn7sxkxm

    // private key in wallet import format
    let wif = 'Kxq2EzVbDwjquUt5zyCFED5FRt99RZKEKVDJWTQcpSDoLAWMqLer';
    // ecpair from wif
    let ecpair = BITBOX.ECPair.fromWIF(wif);
    // to legacy address
    BITBOX.ECPair.toCashAddress(ecpair);
    // bitcoincash:qq0hlxa22ek7kcxew3wy7cpf6fdfm9jq4vms2xs3r4
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default ECPair;
