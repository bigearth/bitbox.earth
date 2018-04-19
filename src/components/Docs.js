import React, { Component } from 'react';

import Installation from './Installation';
import GettingStarted from './GettingStarted';
import Conversion from './Conversion';
import SignAndVerify from './SignAndVerify';
import Configuration from './Configuration';
import BitboxNew from './BitboxNew';
import BitboxConsole from './BitboxConsole';
import BitboxScaffold from './BitboxScaffold';
import BitboxPaper from './BitboxPaper';
import BitboxProxy from './BitboxProxy';

import {
  Link
} from 'react-router-dom';

import {
  Route
} from 'react-router-dom';

class Docs extends Component {
  componentDidMount() {
    document.title = "Docs - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="docs">
        <div className="pure-g">
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-5 docsMenu">
            <ul>
              <li>
                <Link to="/docs/gettingstarted"><i className="fas fa-home" /> Getting Started</Link>
              </li>
              <li>
                <Link to="/docs/installation"><i className="fas fa-wrench" /> Installation</Link>
              </li>
              <li>
                <Link to="/docs/conversion"><i className="fas fa-qrcode" /> Conversion</Link>
              </li>
              <li>
                <Link to="/docs/signandverify"><i className="far fa-check-circle" /> Sign &amp; Verify</Link>
              </li>
              <li>
                <Link to="/docs/configuration"><i className="fas fa-cog" /> Configuration</Link>
              </li>
              <li>
                <Link to="/docs/bitboxnew"><i className="fas fa-plus" /> <code>new</code></Link>
              </li>
              <li>
                <Link to="/docs/bitboxscaffold"><i className="fas fa-shipping-fast" /> <code>scaffold</code></Link>
              </li>
              <li>
                <Link to="/docs/bitboxconsole"><i className="fas fa-terminal" /> <code>console</code></Link>
              </li>
              <li>
                <Link to="/docs/bitboxpaper"><i className="fas fa-folder" /> <code>paper</code></Link>
              </li>
              <li>
                <Link to="/docs/bitboxproxy"><i className="fas fa-cloud-upload-alt" /> <code>proxy</code></Link>
              </li>
            </ul>
          </div>
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-4-5 docsContent">
            <h1 className="content-head is-center">Docs</h1>
            <Route path="/docs/gettingstarted" component={GettingStarted}/>
            <Route path="/docs/installation" component={Installation}/>
            <Route path="/docs/conversion" component={Conversion}/>
            <Route path="/docs/signandverify" component={SignAndVerify}/>
            <Route path="/docs/configuration" component={Configuration}/>
            <Route path="/docs/bitboxnew" component={BitboxNew}/>
            <Route path="/docs/bitboxscaffold" component={BitboxScaffold}/>
            <Route path="/docs/bitboxconsole" component={BitboxConsole}/>
            <Route path="/docs/bitboxpaper" component={BitboxPaper}/>
            <Route path="/docs/bitboxproxy" component={BitboxProxy}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Docs;
