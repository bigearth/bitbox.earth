import React, { Component } from 'react';

import Installation from './Installation';
import GettingStarted from './GettingStarted';
import Conversion from './Conversion';
import SignAndVerify from './SignAndVerify';
import Configuration from './Configuration';

import {
  Link
} from 'react-router-dom';

import {
  Route
} from 'react-router-dom';

class Docs extends Component {
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
            </ul>
          </div>
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-4-5 docsContent">
            <h1 className="content-head is-center">Docs</h1>
            <Route path="/docs/gettingstarted" component={GettingStarted}/>
            <Route path="/docs/installation" component={Installation}/>
            <Route path="/docs/conversion" component={Conversion}/>
            <Route path="/docs/signandverify" component={SignAndVerify}/>
            <Route path="/docs/configuration" component={Configuration}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Docs;
