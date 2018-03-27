import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class SignAndVerify extends Component {
  componentDidMount() {
    document.title = "Sign and Verify - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="SignAndVerify">
        <h2 id='convert' className="content-head is-center"><i className="far fa-check-circle" /> Sign &amp; Verify</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/gettingstarted">Docs</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/docs/signandverify">Sign &amp; Verify</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='sign'><i className="fas fa-pencil-alt" /> Sign</h3>
            <p>BITBOX enables you to cryptographically prove ownership of an address via signing messages. You can also verify that ownership of an address from another person.</p>
            <p>You can sign a message w/ any address in your BITBOX. It doesn't matter if it's in cashaddr or legacy encoding. Just paste the address into the address field and type the message that you want to sign. Then click the 'Sign' button and if you have entered a valid address that has keys in your BITBOX you&rsquo;ll see a signature appear.</p>
            <p>You can share this message, address and signature w/ anyone and they can verify that you are the owner of that address.</p>
            <img src='/assets/sign.png' />
            <h3 id='verify'><i className="far fa-check-circle" /> Verify</h3>
            <p> You can verify a message from any address on the Bitcoin Cash network. Just paste in the message, address and signature provided and click the 'Verify' button. If the address and signature are both valid format and the signature matches the message and the address you&rsquo;ll get a green "Valid message" response.</p>
            <img src='/assets/verify.png' />
            <p>If the address or signature are incorrectly formatted or the signature doesn't match the message and address you'll get an error message.</p>
            <img src='/assets/verify-fail.png' />
          </div>
        </div>
      </div>
    );
  }
}

export default SignAndVerify;
