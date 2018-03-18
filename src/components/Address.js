import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Address extends Component {
  render() {
    return (
      <div className="Address">
        <h2 id='Address' className="content-head is-center"><i className="fas fa-qrcode" /> Address</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
          <h3 id='toLegacyAddress'><code>toLegacyAddress</code></h3>
          <p>
    Converting cashaddr to legacy address format
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
    address <code>string</code>       cashaddr address to be converted
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    legacyAddress <code>string</code>    legacy base 58 check encoded address
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
    // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN
          `}</SyntaxHighlighter>

          <h3 id='toCashAddress'><code>toCashAddress</code></h3>
          <p>
    Converting legacy to cashAddress format
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
    address <code>string</code>       legacy address to be converted
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    cashAddress <code>string</code>      cashAddr encoded address
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
    // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
          `}</SyntaxHighlighter>

          <h3 id='isLegacyAddress'><code>isLegacyAddress</code></h3>
          <p>
    Detect if legacy base58check encoded address
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
    address <code>string</code>         address to determine
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    isLegacyAddress <code>boolean</code>   true/false if legacy address
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Address.isLegacyAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // false
          `}</SyntaxHighlighter>

          <h3 id='isCashAddress'><code>isCashAddress</code></h3>
          <p>
    Detect if cashAddr encoded address
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
    address <code>string</code>            address to determine
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    isCashAddress <code>boolean</code>    true/false if cashaddress
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Address.isCashAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // true
          `}</SyntaxHighlighter>

          <h3 id='isMainnetAddress'><code>isMainnetAddress</code></h3>
          <p>
    Detect if mainnet address
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
    address <code>string</code>            address to determine
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    isMainnetAddress <code>boolean</code>     true/false if mainnet address
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // true
          `}</SyntaxHighlighter>

          <h3 id='isTestnetAddress'><code>isTestnetAddress</code></h3>
          <p>
    Detect if testnet address
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
    addresss <code>string</code>            address to determine
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    isMainnetAddresss <code>boolean</code>     true/false if is testnet address
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Address.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    //false
          `}</SyntaxHighlighter>

          <h3 id='isP2PKHAddress'><code>isP2PKHAddress</code></h3>
          <p>
    Detect if p2pkh address
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
    address <code>string</code>          address to determine
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    isP2PKHAddress <code>boolean</code>     true/false if is p2pkh address
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Address.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // true
          `}</SyntaxHighlighter>

          <h3 id='isP2SHAddress'><code>isP2SHAddress</code></h3>
          <p>
    Detect if p2sh address
          </p>
          <h4>arguments</h4>
          <ol>
            <li>
    address <code>string</code>         address to determine
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    isP2SHAddress <code>boolean</code>     true/false if is p2sh address
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Address.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // false
          `}</SyntaxHighlighter>

          <h3 id='detectAddressFormat'><code>detectAddressFormat</code></h3>
          <p>
    Detect address format
          </p>
          <h4>arguments</h4>
          <ol>
            <li>
    address <code>string</code>               address to determine format
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    addressFormat <code>string</code>            address format
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Address.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // cashaddr
          `}</SyntaxHighlighter>

          <h3 id='detectAddressNetwork'><code>detectAddressNetwork</code></h3>
          <p>
    Detect address network
          </p>
          <h4>arguments</h4>
          <ol>
            <li>
    address <code>string</code>               address to determine network
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    addressNetwork <code>string</code>           address network
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Address.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // mainnet
          `}</SyntaxHighlighter>

          <h3 id='detectAddressType'><code>detectAddressType</code></h3>
          <p>
    Detect address network
          </p>
          <h4>arguments</h4>
          <ol>
            <li>
    address <code>string</code>            address to determine network
            </li>
          </ol>
          <h4>Result</h4>
          <p>
    addressNetwork <code>string</code>        address network
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Address.detectAddressType('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
    // p2pkh
          `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
