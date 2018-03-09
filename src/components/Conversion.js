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
            <p>It&rsquo;s common to see your addresses in 1 of 3 formats&mdash;legacy base58Check, cashaddr or privateKeyWIF. The first two are the public addresses which you share w/ people to send you $BCH and the last one is the private key that you never show anyone.</p>
            <p>With BITBOX you can paste in any of those 3 formats to the conversion tool and it&rsquo;ll convert it to the other formats and create QR codes for easier copying. This is especially useful if someone wants you to send them $BCH and they give you a format that your wallet doesn&rsquo;t support or if you have a private key WIF and want to learn more details about it.</p>
            <img src='/assets/conversion.png' />
          </div>
        </div>
      </div>
    );
  }
}

export default Conversion;
