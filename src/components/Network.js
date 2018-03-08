import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Network extends Component {
  render() {
    return (
      <div className="Network">
        <h2 id='network' className="content-head is-center">Network</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='addNode'><code>addNode</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Attempts add or remove a node from the addnode list.
  Or try a connection to a node once.

  Arguments:
  1. "node"     (string, required) The node (see getpeerinfo for nodes)
  2. "command"  (string, required) 'add' to add a node to the list, 'remove' to remove a node from the list, 'onetry' to try a connection to the node once

  BITBOX.Network.addNode("192.168.0.6:8333", "onetry")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='clearBanned'><code>clearBanned</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Clear all banned IPs.

  BITBOX.Network.clearBanned()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='disconnectNode'><code>disconnectNode</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Immediately disconnects from the specified peer node.

  Strictly one out of 'address' and 'nodeid' can be provided to identify the node.

  To disconnect by nodeid, either set 'address' to the empty string, or call using the named 'nodeid' argument only.

  Arguments:
  1. "address"     (string, optional) The IP address/port of the node
  2. "nodeid"      (number, optional) The node ID (see getpeerinfo for node IDs)

  BITBOX.Network.disconnectNode("192.168.0.6:8333")
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getAddedNodeInfo'><code>getAddedNodeInfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns information about the given added node, or all added nodes (note that onetry addnodes are not listed here)

  Arguments:
  1. "node"   (string, optional) If provided, return information about this specific node, otherwise all nodes are returned.

  Result:
  [
    {
      "addednode" : "192.168.0.201",   (string) The node ip address or name (as provided to addnode)
      "connected" : true|false,          (boolean) If connected
      "addresses" : [                    (list of objects) Only when connected = true
         {
           "address" : "192.168.0.201:8333",  (string) The bitcoin server IP and port we're connected to
           "connected" : "outbound"           (string) connection, inbound or outbound
         }
       ]
    }
    ,...
  ]

  BITBOX.Network.getAddedNodeInfo('192.168.0.201')
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getConnectionCount'><code>getConnectionCount</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns the number of connections to other nodes.

  Result:
  n          (numeric) The connection count

  BITBOX.Network.getConnectionCount()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getNetTotals'><code>getNetTotals</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns information about network traffic, including bytes in, bytes out, and current time.

  Result:
  {
    "totalbytesrecv": n,   (numeric) Total bytes received
    "totalbytessent": n,   (numeric) Total bytes sent
    "timemillis": t,       (numeric) Current UNIX time in milliseconds
    "uploadtarget":
    {
      "timeframe": n,                         (numeric) Length of the measuring timeframe in seconds
      "target": n,                            (numeric) Target in bytes
      "target_reached": true|false,           (boolean) True if target is reached
      "serve_historical_blocks": true|false,  (boolean) True if serving historical blocks
      "bytes_left_in_cycle": t,               (numeric) Bytes left in current time cycle
      "time_left_in_cycle": t                 (numeric) Seconds left in current time cycle
    }
  }

  BITBOX.Network.getNetTotals()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getNetworkInfo'><code>getNetworkInfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns an object containing various state info regarding P2P networking.

  Result:
  {
    "version": xxxxx,                      (numeric) the server version
    "subversion": "/Satoshi:x.x.x/",     (string) the server subversion string
    "protocolversion": xxxxx,              (numeric) the protocol version
    "localservices": "xxxxxxxxxxxxxxxx", (string) the services we offer to the network
    "localrelay": true|false,              (bool) true if transaction relay is requested from peers
    "timeoffset": xxxxx,                   (numeric) the time offset
    "connections": xxxxx,                  (numeric) the number of connections
    "networkactive": true|false,           (bool) whether p2p networking is enabled
    "networks": [                          (array) information per network
    {
      "name": "xxx",                     (string) network (ipv4, ipv6 or onion)
      "limited": true|false,               (boolean) is the network limited using -onlynet?
      "reachable": true|false,             (boolean) is the network reachable?
      "proxy": "host:port"               (string) the proxy that is used for this network, or empty if none
      "proxy_randomize_credentials": true|false,  (string) Whether randomized credentials are used
    }
    ,...
    ],
    "relayfee": x.xxxxxxxx,                (numeric) minimum relay fee for non-free transactions in BCH/kB
    "incrementalfee": x.xxxxxxxx,          (numeric) minimum fee increment for mempool limiting or BIP 125 replacement in BCH/kB
    "localaddresses": [                    (array) list of local addresses
    {
      "address": "xxxx",                 (string) network address
      "port": xxx,                         (numeric) network port
      "score": xxx                         (numeric) relative score
    }
    ,...
    ]
    "warnings": "..."                    (string) any network warnings
  }

  BITBOX.Network.getNetworkInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='getPeerInfo'><code>getPeerInfo</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Returns data about each connected network node as a json array of objects.

  Result:
  [
    {
      "id": n,                   (numeric) Peer index
      "addr":"host:port",      (string) The ip address and port of the peer
      "addrlocal":"ip:port",   (string) local address
      "services":"xxxxxxxxxxxxxxxx",   (string) The services offered
      "relaytxes":true|false,    (boolean) Whether peer has asked us to relay transactions to it
      "lastsend": ttt,           (numeric) The time in seconds since epoch (Jan 1 1970 GMT) of the last send
      "lastrecv": ttt,           (numeric) The time in seconds since epoch (Jan 1 1970 GMT) of the last receive
      "bytessent": n,            (numeric) The total bytes sent
      "bytesrecv": n,            (numeric) The total bytes received
      "conntime": ttt,           (numeric) The connection time in seconds since epoch (Jan 1 1970 GMT)
      "timeoffset": ttt,         (numeric) The time offset in seconds
      "pingtime": n,             (numeric) ping time (if available)
      "minping": n,              (numeric) minimum observed ping time (if any at all)
      "pingwait": n,             (numeric) ping wait (if non-zero)
      "version": v,              (numeric) The peer version, such as 7001
      "subver": "/Satoshi:0.8.5/",  (string) The string version
      "inbound": true|false,     (boolean) Inbound (true) or Outbound (false)
      "addnode": true|false,     (boolean) Whether connection was due to addnode and is using an addnode slot
      "startingheight": n,       (numeric) The starting height (block) of the peer
      "banscore": n,             (numeric) The ban score
      "synced_headers": n,       (numeric) The last header we have in common with this peer
      "synced_blocks": n,        (numeric) The last block we have in common with this peer
      "inflight": [
         n,                        (numeric) The heights of blocks we're currently asking from this peer
         ...
      ],
      "whitelisted": true|false, (boolean) Whether the peer is whitelisted
      "bytessent_per_msg": {
         "addr": n,              (numeric) The total bytes sent aggregated by message type
         ...
      },
      "bytesrecv_per_msg": {
         "addr": n,              (numeric) The total bytes received aggregated by message type
         ...
      }
    }
    ,...
  ]

  BITBOX.Network.getPeerInfo()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='listBanned'><code>listBanned</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  List all banned IPs/Subnets.

  BITBOX.Network.listBanned()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='ping'><code>ping</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Requests that a ping be sent to all other nodes, to measure ping time.
  Results provided in getpeerinfo, pingtime and pingwait fields are decimal seconds.
  Ping command is handled in queue with all other commands, so it measures processing backlog, not just network ping.

  BITBOX.Network.ping()
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='setBan'><code>setBan</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Attempts add or remove a IP/Subnet from the banned list.

  Arguments:
  1. "subnet"       (string, required) The IP/Subnet (see getpeerinfo for nodes ip) with a optional netmask (default is /32 = single ip)
  2. "command"      (string, required) 'add' to add a IP/Subnet to the list, 'remove' to remove a IP/Subnet from the list
  3. "bantime"      (numeric, optional) time in seconds how long (or until when if [absolute] is set) the ip is banned (0 or empty means using the default time of 24h which can also be overwritten by the -bantime startup argument)
  4. "absolute"     (boolean, optional) If set, the bantime must be a absolute timestamp in seconds since epoch (Jan 1 1970 GMT)

  BITBOX.Network.setBan("192.168.0.6", "add", 8640)
  .then((result) => {
    console.log(result);
  }, (err) => { console.log(err);
  });
            `}</SyntaxHighlighter>

            <h3 id='setNetworkActive'><code>setNetworkActive</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  Disable/enable all p2p network activity.

  Arguments:
  1. "state"        (boolean, required) true to enable networking, false to disable

  BITBOX.Network.setNetworkActive(true)
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

export default Network;
