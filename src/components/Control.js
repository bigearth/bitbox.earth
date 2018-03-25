import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Control extends Component {
  componentDidMount() {
    document.title = "Control - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Control">
        <h2 id='control' className="content-head is-center"><i className="fas fa-gamepad" /> Control</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='getInfo'><code>getInfo</code></h3>
          <p>
  DEPRECATED. Returns an object containing various state info.
          </p>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "version": xxxxx,           (numeric) the server version
    "protocolversion": xxxxx,   (numeric) the protocol version
    "walletversion": xxxxx,     (numeric) the wallet version
    "balance": xxxxxxx,         (numeric) the total bitcoin balance of the wallet
    "blocks": xxxxxx,           (numeric) the current number of blocks processed in the server
    "timeoffset": xxxxx,        (numeric) the time offset
    "connections": xxxxx,       (numeric) the number of connections
    "proxy": "host:port",     (string, optional) the proxy used by the server
    "difficulty": xxxxxx,       (numeric) the current difficulty
    "testnet": true|false,      (boolean) if the server is using testnet or not
    "keypoololdest": xxxxxx,    (numeric) the timestamp (seconds since Unix epoch) of the oldest pre-generated key in the key pool
    "keypoolsize": xxxx,        (numeric) how many new keys are pre-generated
    "unlocked_until": ttt,      (numeric) the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
    "paytxfee": x.xxxx,         (numeric) the transaction fee set in BCH/kB
    "relayfee": x.xxxx,         (numeric) minimum relay fee for non-free transactions in BCH/kB
    "errors": "..."           (string) any error messages
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Control.getInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getMemoryInfo'><code>getMemoryInfo</code></h3>
          <p>
  Returns an object containing information about memory usage.
          </p>
          <h4>Result</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  {
    "locked": {               (json object) Information about locked memory manager
      "used": xxxxx,          (numeric) Number of bytes used
      "free": xxxxx,          (numeric) Number of bytes available in current arenas
      "total": xxxxxxx,       (numeric) Total number of bytes managed
      "locked": xxxxxx,       (numeric) Amount of bytes that succeeded locking. If this number is smaller than total, locking pages failed at some point and key data could be swapped to disk.
      "chunks_used": xxxxx,   (numeric) Number allocated chunks
      "chunks_free": xxxxx,   (numeric) Number unused chunks
    }
  }
            `}</SyntaxHighlighter>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Control.getMemoryInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='help'><code>help</code></h3>
          <p>
  List all commands, or get help for a specified command.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
  command     (string, optional): The command to get help on
            </li>
          </ol>
          <h4>Result</h4>
          <p>
  text     (string): The help text
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Control.help()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='stop'><code>stop</code></h3>
          <p>
  Stop Bitcoin server.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Control.stop()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
