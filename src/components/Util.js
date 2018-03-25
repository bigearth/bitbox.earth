import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Util extends Component {
  componentDidMount() {
    document.title = "Util - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Util">
        <h2 id='util' className="content-head is-center"><i className="fas fa-cogs" /> Util</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">

            <h3 id='createMultisig'><code>createMultisig</code></h3>
            <p>
  Creates a multi-signature address with n signature of m keys required. It returns a json object with the address and redeemScript.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            nrequired (numeric, required) The number of required signatures out of the n keys or addresses.
              </li>
              <li>
            keys (string, required) A json array of keys which are bitcoin addresses or hex-encoded public keys
              </li>
            </ol>
            <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "address":"multisigaddress",  (string) The value of the new multisig address.
    "redeemScript":"script"       (string) The string value of the hex-encoded redemption script.
  }
            `}</SyntaxHighlighter>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Util.createMultisig(2, ["bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f", "1B4C53FAn3wd1AswXZxMfmeHxnky7CTvfZ"])
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // {
  //   address: '39cp79UgFriqYS5ZYZyhiXbnUfE4eUjZur',
  //   redeemScript: '52210261d3f136eea0a3f786389d85212fae01d7b4a3c7520af78b49f079471d847d3421027495999882ace5aa4fb3d920dd7571b1ed75bcbd5987ef289cb6f88629c4a09652ae'
  // }
            `}</SyntaxHighlighter>

            <h3 id='estimateFee'><code>estimateFee</code></h3>
            <p>
  Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within nblocks blocks.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
  nblocks     (numeric, required)
              </li>
            </ol>
            <h4>Result</h4>
            <p>
  n              (numeric): estimated fee-per-kilobyte
            </p>
            <p>
  A negative value is returned if not enough transactions and blocks
  have been observed to make an estimate.
  -1 is always returned for nblocks == 1 as it is impossible to calculate
  a fee that is high enough to get reliably included in the next block.
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Util.estimateFee(2)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // 0.00000002
            `}</SyntaxHighlighter>

            <h3 id='estimatePriority'><code>estimatePriority</code></h3>
            <p>
  DEPRECATED. Estimates the approximate priority a zero-fee transaction needs to begin confirmation within nblocks blocks.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
  nblocks     (numeric, required)
              </li>
            </ol>
            <h4>Result</h4>
            <p>
  n              (numeric) estimated priority
            </p>
            <p>
  A negative value is returned if not enough transactions and blocks have been observed to make an estimate.
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Util.estimatePriority(2)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // -1
            `}</SyntaxHighlighter>

            <h3 id='signMessageWithPrivKey'><code>signMessageWithPrivKey</code></h3>
          <p>
  Sign a message with the private key of an address
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  privkey         (string, required): The private key to sign the message with.
            </li>
            <li>
  message         (string, required): The message to create a signature of.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  signature          (string): The signature of the message encoded in base 64
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Util.signMessageWithPrivKey('KzkYKDZw9PveUu3mn4nR5LKYqmY1A6yHFdY8YqQvd7Z2BT3Ssu4Y', 'EARTH')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // H3XA3KtFEMhoSLdiOP6U0dFTJGnZV3MSSGro3GLKgpaVCQ/oot137oxmOomncvqbNiOIx+MJMWZkG7XkQcUp0Tg=
            `}</SyntaxHighlighter>

            <h3 id='validateAddress'><code>validateAddress</code></h3>
          <p>
  Return information about the given bitcoin address.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  address     (string, required): The bitcoin address to validate
            </li>
          </ol>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "isvalid" : true|false,       (boolean) If the address is valid or not. If not, this is the only property returned.
    "address" : "address", (string) The bitcoin address validated
    "scriptPubKey" : "hex",       (string) The hex encoded scriptPubKey generated by the address
    "ismine" : true|false,        (boolean) If the address is yours or not
    "iswatchonly" : true|false,   (boolean) If the address is watchonly
    "isscript" : true|false,      (boolean) If the key is a script
    "pubkey" : "publickeyhex",    (string) The hex value of the raw public key
    "iscompressed" : true|false,  (boolean) If the address is compressed
    "account" : "account"         (string) DEPRECATED. The account associated with the address, "" is the default account
    "timestamp" : timestamp,        (number, optional) The creation time of the key if available in seconds since epoch (Jan 1 1970 GMT)
    "hdkeypath" : "keypath"       (string, optional) The HD keypath if the key is HD and available
    "hdmasterkeyid" : "<hash160>" (string, optional) The Hash160 of the HD master pubkey
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Util.validateAddress("bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // { isvalid: true,
  // address: '17fshh33qUze2yifiJ2sXgijSMzJ2KNEwu',
  // scriptPubKey: '76a914492ae280d70af33acf0ae7cd329b961e65e9cbd888ac',
  // ismine: true,
  // iswatchonly: false,
  // isscript: false,
  // pubkey: '0312eeb9ae5f14c3cf43cece11134af860c2ef7d775060e3a578ceec888acada31',
  // iscompressed: true,
  // account: 'Test' }
            `}</SyntaxHighlighter>

            <h3 id='verifyMessage'><code>verifyMessage</code></h3>
          <p>
  Verify a signed message
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  address         (string, required): The bitcoin address to use for the signature.
            </li>
            <li>
  signature       (string, required): The signature provided by the signer in base 64 encoding (see signmessage).
            </li>
            <li>
  message         (string, required): The message that was signed.
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  true|false   (boolean): If the signature is verified or not.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Util.verifyMessage("bitcoincash:qrcxa4yqkkyulztkanlqf3jw88pgses63uhl0tqxs3", "IC1Rbp/1UoX/0Luk8O+ZqhB13E2G5qDn6G6T9e2k+4unJuf70qbiJpuHBhouz5nY4JHgrd/TXARZe+kS+Lu/11g=", "EARTH")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
  // true
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Util;
