import React, { Component } from 'react';

import GettingStarted from './GettingStarted';

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
        <h2 className="content-head is-center">Docs</h2>
        <div className="pure-g">
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-5">
            <ul>
              <li>
                <Link to="/docs/gettingstarted">Getting Started</Link>
              </li>
            </ul>
          </div>
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-4-5">
            <Route path="/docs/gettingstarted" component={GettingStarted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Docs;
