import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Conversion extends Component {
  render() {
    return (
      <div className="Conversion">
        <h2 id='convert' className="content-head is-center"><i className="fas fa-qrcode" /> Conversion</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <p>It&rsquo;s common to see your addresses in 1 of 3 formats&mdash;<a href='https://en.bitcoin.it/wiki/Base58Check_encoding'>legacy base58Check</a>, <a href='https://www.bitcoinabc.org/cashaddr'>cashaddr</a> or <a href='https://en.bitcoin.it/wiki/Wallet_import_format'>privateKeyWIF</a>. The first two are the public addresses which you share w/ people to send you $BCH and the last one is the private key that you never show anyone.</p>
            <p>Examples:</p>
            <ul>
              <li><strong>Legacy Base58Check</strong> 17eHboya3f9c78tyhAWE8ZLkV6DgoyzAVt</li>
              <li><strong>CashAddr</strong> bitcoincash:qpyduqy7xrnnlgmh4v9pn4308jr9cv4gxu72k7d9sn. Note the <strong>bitcoincash:</strong> prefix is optional. The same address could be qpyduqy7xrnnlgmh4v9pn4308jr9cv4gxu72k7d9sn.</li>
              <li><strong>Private Key WIF</strong> L2VtEQ2oAJyHgjbQEVfrKnGwdCQYDC82vDpa4VqU3vPuuHLRAY8i </li>
            </ul>
            <p>With BITBOX you can paste in any of those 3 formats to the conversion tool and it&rsquo;ll convert it to the other formats and create QR codes for easier copying. This is especially useful if someone wants you to send them $BCH and they give you a format that your wallet doesn&rsquo;t support or if you have a private key WIF and want to learn more details about it.</p>
            <img src='/assets/conversion.png' />
          </div>
        </div>
      </div>
    );
  }
}

export default Conversion;
