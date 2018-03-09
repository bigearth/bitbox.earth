import React, { Component } from 'react';

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
                <Link to="/docs/gettingstarted"><i className="fas fa-home"></i> Getting Started</Link>
              </li>
              <li>
                <Link to="/docs/conversion"><i className="fas fa-qrcode"></i> Conversion</Link>
              </li>
              <li>
                <Link to="/docs/signandverify"><i className="far fa-check-circle"></i> Sign &amp; Verify</Link>
              </li>
              <li>
                <Link to="/docs/configuration"><i className="fas fa-cog"></i> Configuration</Link>
              </li>
            </ul>
          </div>
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-4-5 docsContent">
            <h2 className="content-head is-center">Docs</h2>
            <Route path="/docs/gettingstarted" component={GettingStarted}/>
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
