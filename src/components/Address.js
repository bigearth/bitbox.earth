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
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Converting cashaddr to legacy address format

    Arguments:
    1. address <string>       cashaddr address to be converted

    Result:
    legacyAddress <string>    legacy base 58 check encoded address

    BITBOX.BitcoinCash.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
    // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN
          `}</SyntaxHighlighter>

          <h3 id='toCashAddress'><code>toCashAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Converting legacy to cashAddress format

    Arguments:
    1. address <string>       legacy address to be converted

    Result:
    cashAddress <string>      cashAddr encoded address

    BITBOX.BitcoinCash.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
    // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
          `}</SyntaxHighlighter>

          <h3 id='isLegacyAddress'><code>isLegacyAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Detect if legacy base58check encoded address

    Arguments:
    1. address <string>         address to determine

    Result:
    isLegacyAddress <boolean>   true/false if legacy address

    BITBOX.BitcoinCash.Address.isLegacyAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // false
          `}</SyntaxHighlighter>

          <h3 id='isCashAddress'><code>isCashAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Detect if cashAddr encoded address

    Arguments:
    1. address <string>            address to determine

    Result:
    isCashAddress <boolean>    true/false if cashaddress

    BITBOX.BitcoinCash.Address.isCashAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // true
          `}</SyntaxHighlighter>

          <h3 id='isMainnetAddress'><code>isMainnetAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Detect if mainnet address

    Arguments:
    1. address <string>            address to determine

    Result:
    isMainnetAddress <boolean>     true/false if mainnet address

    BITBOX.BitcoinCash.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // true
          `}</SyntaxHighlighter>

          <h3 id='isTestnetAddress'><code>isTestnetAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Detect if testnet address

    Arguments:
    1. addresss <string>            address to determine

    Result:
    isMainnetAddresss <boolean>     true/false if is testnet address

    BITBOX.BitcoinCash.Address.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    //false
          `}</SyntaxHighlighter>

          <h3 id='isP2PKHAddress'><code>isP2PKHAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Detect if p2pkh address

    Arguments:
    1. address <string>          address to determine

    Result:
    isP2PKHAddress <boolean>     true/false if is p2pkh address

    BITBOX.BitcoinCash.Address.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // true
          `}</SyntaxHighlighter>

          <h3 id='isP2SHAddress'><code>isP2SHAddress</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Detect if p2sh address

    Arguments:
    1. address <string>         address to determine

    Result:
    isP2SHAddress <boolean>     true/false if is p2sh address

    BITBOX.BitcoinCash.Address.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // false
          `}</SyntaxHighlighter>

          <h3 id='detectAddressFormat'><code>detectAddressFormat</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Detect address format

    Arguments:
    1. address <string>               address to determine format

    Result:
    addressFormat <string>            address format

    BITBOX.BitcoinCash.Address.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // cashaddr
          `}</SyntaxHighlighter>

          <h3 id='detectAddressNetwork'><code>detectAddressNetwork</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Detect address network

    Arguments:
    1. address <string>               address to determine network

    Result:
    addressNetwork <string>           address network

    BITBOX.BitcoinCash.Address.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
    // mainnet
          `}</SyntaxHighlighter>

          <h3 id='detectAddressType'><code>detectAddressType</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Detect address network

    Arguments:
    1. address <string>            address to determine network

    Result:
    addressNetwork <string>        address network

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
