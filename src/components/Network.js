import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Network extends Component {
  componentDidMount() {
    document.title = "Network - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Network">
        <h2 id='network' className="content-head is-center"><i className="fas fa-cloud" /> Network</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/network">Network</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='getConnectionCount'><code>getConnectionCount</code></h3>
          <p>
  Returns the number of connections to other nodes.
          </p>
          <h4>Result</h4>
          <ol>
            <li>
  n          (numeric): The connection count
            </li>
          </ol>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Network.getConnectionCount().then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  // 35
            `}</SyntaxHighlighter>

            <h3 id='getNetTotals'><code>getNetTotals</code></h3>
          <p>
  Returns information about network traffic, including bytes in, bytes out, and current time.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Network.getNetTotals().then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  // { totalbytesrecv: 413668219,
  // totalbytessent: 14308845058,
  // timemillis: 1525733247675,
  // uploadtarget:
  //  { timeframe: 86400,
  //    target: 0,
  //    target_reached: false,
  //    serve_historical_blocks: true,
  //    bytes_left_in_cycle: 0,
  //    time_left_in_cycle: 0 } }
            `}</SyntaxHighlighter>

            <h3 id='getNetworkInfo'><code>getNetworkInfo</code></h3>
          <p>
  Returns an object containing various state info regarding P2P networking.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Network.getNetworkInfo().then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  // { version: 170000,
  // subversion: '/Bitcoin ABC:0.17.0(EB32.0)/',
  // protocolversion: 70015,
  // localservices: '0000000000000025',
  // localrelay: true,
  // timeoffset: 0,
  // networkactive: true,
  // connections: 35,
  // networks:
  //  [ { name: 'ipv4',
  //      limited: false,
  //      reachable: true,
  //      proxy: '',
  //      proxy_randomize_credentials: false },
  //    { name: 'ipv6',
  //      limited: false,
  //      reachable: true,
  //      proxy: '',
  //      proxy_randomize_credentials: false },
  //    { name: 'onion',
  //      limited: true,
  //      reachable: false,
  //      proxy: '',
  //      proxy_randomize_credentials: false } ],
  // relayfee: 0.00001,
  // incrementalfee: 0.00001,
  // localaddresses: [ { address: '138.68.54.100', port: 8333, score: 12929 } ],
  // warnings: '' }
            `}</SyntaxHighlighter>

            <h3 id='getPeerInfo'><code>getPeerInfo</code></h3>
          <p>
  Returns data about each connected network node as a json array of objects.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Network.getPeerInfo().then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  // [{ id: 32388,
  //   addr: '173.249.34.172:54414',
  //   addrlocal: '138.68.54.100:8333',
  //   services: '0000000000000000',
  //   relaytxes: false,
  //   lastsend: 1525733286,
  //   lastrecv: 1525733287,
  //   bytessent: 338,
  //   bytesrecv: 210,
  //   conntime: 1525733285,
  //   timeoffset: 0,
  //   pingtime: 0.565894,
  //   minping: 0.565894,
  //   version: 70015,
  //   subver: '/cashnodes.io:0.0.1/',
  //   inbound: true,
  //   addnode: false,
  //   startingheight: 529235,
  //   banscore: 0,
  //   synced_headers: -1,
  //   synced_blocks: -1,
  //   inflight: [],
  //   whitelisted: false,
  //   bytessent_per_msg:
  //    { addr: 55,
  //      feefilter: 32,
  //      ping: 32,
  //      sendcmpct: 33,
  //      sendheaders: 24,
  //      verack: 24,
  //      version: 138 },
  //   bytesrecv_per_msg: { getaddr: 24, pong: 32, verack: 24, version: 130 } } ]
            `}</SyntaxHighlighter>

            <h3 id='ping'><code>ping</code></h3>
          <p>
  Requests that a ping be sent to all other nodes, to measure ping time.
  Results provided in getpeerinfo, pingtime and pingwait fields are decimal seconds.
  Ping command is handled in queue with all other commands, so it measures processing backlog, not just network ping.
          </p>
          <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Network.ping().then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  // null
            `}</SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

export default Network;
