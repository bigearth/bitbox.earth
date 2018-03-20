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

          <h3 id='fromXPub'><code>fromXPub</code></h3>
          <p>
          Generates an address for an extended public key (xpub)
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        xpub <code>string</code>:                 extended public key to be used
            </li>
            <li>
        path <code>string</code> <code>optional</code>:       derivation path of external change address. Default is <code>0/0</code>
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        changeAddress <code>string</code>:      cashaddr encoded change address
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
        // generate 5 external change addresses for xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA
        let xpub = 'xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA';
        for(let i = 0; i <= 4; i++) {
          BITBOX.BitcoinCash.Address.fromXPub(xpub, "0/" + i)
        }
        // bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh
        // bitcoincash:qrr2suh9yjsrkl2qp3p967uhfg6u0r6xxsn9h5vuvr
        // bitcoincash:qpkfg4kck99wksyss6nvaqtafeahfnyrpsj0ed372t
        // bitcoincash:qppgmuuwy07g0x39sx2z0x2u8e34tvfdxvy0c2jvx7
        // bitcoincash:qryj8x4s7vfsc864jm0xaak9qfe8qgk245y9ska57l

        // generate 5 external change addresses for xpub6DLXtM9JjvtUTm6TngeSXZdeKfFqA1sLYoFQMTTXYYbwDw55eTy7uhconrzw8mW1zzmpMBYpQLpBPzRdSn9Hxrse5TTnpdtcoeXahkC6bPd
        let xpub = 'xpub6DLXtM9JjvtUTm6TngeSXZdeKfFqA1sLYoFQMTTXYYbwDw55eTy7uhconrzw8mW1zzmpMBYpQLpBPzRdSn9Hxrse5TTnpdtcoeXahkC6bPd';
        for(let i = 0; i <= 4; i++) {
          BITBOX.BitcoinCash.Address.fromXPub(xpub, "0/" + i)
        }
        // bitcoincash:qpm05nr0fmxmyhlz0qermkad0zvsfsqu6ckv6e5tzr
        // bitcoincash:qre28yd5msvsenn9qj5fwm3k3u00dty4ac739zhw2k
        // bitcoincash:qp0utfskvcnsy2whkurk25x247jcdmexqyekzury66
        // bitcoincash:qqzjwx6zdvhkwalzvnaprwk73me9szqvgspgu6shst
        // bitcoincash:qzpcg6atgg36vrkwvklw9325nqzdcxd8c5dl5l6k79

        // generate 5 external change addresses for xpub6DLXtM9JjvtUV1i6tBdQ6RCwYHoUjzK2GL1BmXf4TW8QbFGWueMJrwRUsZntEUBfpqJACiid1PEPNbDVTRZxyGKp5k8KsHVg27nDR1Makdh
        let xpub = 'xpub6DLXtM9JjvtUV1i6tBdQ6RCwYHoUjzK2GL1BmXf4TW8QbFGWueMJrwRUsZntEUBfpqJACiid1PEPNbDVTRZxyGKp5k8KsHVg27nDR1Makdh';
        for(let i = 0; i <= 4; i++) {
          BITBOX.BitcoinCash.Address.fromXPub(xpub, "0/" + i)
        }
        // bitcoincash:qrykz97x24tgz9nq29yyqcc98nqj8k2n45jg57manf
        // bitcoincash:qp8e7rrajx3wscqr6zfu3mvnlkmt0s4dhqldpqscym
        // bitcoincash:qrw6fhr6nl5lh9srh9a9sr890r3zzsgt7sqh7tkyve
        // bitcoincash:qqj9ctz9sex3xjapgm8hv5dkpfmf7aalrs2z2jprm2
        // bitcoincash:qzytws9yvyqgsx3smfyy3yaq5xw9jt0xsy7kpnqpth

        // generate 5 external change addresses for xpub6DLXtM9JjvtUa9tPGP5kYXnGGeo3dnBuhUZP7QmE97hKxM1EizDgFZgVe8M5Nv49z5ytpAnwwNcc16wChnecpj3KyFPkufbi9uZaj5ALCGm
        let xpub = 'xpub6DLXtM9JjvtUa9tPGP5kYXnGGeo3dnBuhUZP7QmE97hKxM1EizDgFZgVe8M5Nv49z5ytpAnwwNcc16wChnecpj3KyFPkufbi9uZaj5ALCGm';
        for(let i = 0; i <= 4; i++) {
          BITBOX.BitcoinCash.Address.fromXPub(xpub, "0/" + i)
        }
        // bitcoincash:qp9e7kd6pgy7pek2vemfspm6vc544xzm2yjfezst3q
        // bitcoincash:qqt9g8ggmd5kxccvuye0nv7enj6syqqxyymnrhgkep
        // bitcoincash:qqr8qf8qj7yxgtaydkt5xp0lw4fnu56jmy7q5k9sat
        // bitcoincash:qzaf69rhsnzfjtg0ydw2qlqeyhpnsfzz4ghr5jkrzy
        // bitcoincash:qrwjhc0dujvjtrl0e0zc8tkhwxfvljvamc6e0kcj3w

        // generate 5 external change addresses for xpub6DLXtM9JjvtUkiaWLnfiSHjW51vspUW7GDmkML17w2qoEeGztYYSmotgXJpwmoNCc6QbdCXWySEWki7jURV46hmN6MXwem1aNo3gxhkjJPj
        let xpub = 'xpub6DLXtM9JjvtUkiaWLnfiSHjW51vspUW7GDmkML17w2qoEeGztYYSmotgXJpwmoNCc6QbdCXWySEWki7jURV46hmN6MXwem1aNo3gxhkjJPj';
        for(let i = 0; i <= 4; i++) {
          BITBOX.BitcoinCash.Address.fromXPub(xpub, "0/" + i)
        }
        // bitcoincash:qzrfwca03gzgwgxsjcxfphuckztc9squ9vmws99sr7
        // bitcoincash:qrr0ykn2xwy80hl0p7vnm44l5sc43x5245nlrfc74c
        // bitcoincash:qr3zlplv2w0t3s92twldjk432f45agls0qj35tyqtc
        // bitcoincash:qqxf90phz7ysrj53tymq6qvmquk0kd04wvjf6s83nv
        // bitcoincash:qrygumzwu7anzppyzcraa2tal3vlzc7p3smyh5cdth
          `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
