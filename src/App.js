// react imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';

// custom components
import BitboxCli from './components/BitboxCli';
import Docs from './components/Docs';
import Homepage from './components/Homepage';
import Graphics from './components/Graphics';

// css
import './styles/app.scss';

class App extends Component {

  handlePathMatch(path) {
    if(path === '/' || path === '/blocks' || path === '/transactions' || path === '/logs' || path === '/configuration/accounts-and-keys') {
      return true;
    } else {
      return false;
    }
  }

  render() {

    const pathMatch = (match, location) => {
      if (!match) {
        return false
      }
      return this.handlePathMatch(match.path);
    }

    const DocsPage = (props) => {
      return (
        <Docs
        />
      );
    };

    const BitboxCliPage = (props) => {
      return (
        <BitboxCli
        />
      );
    };

    const GraphicsPage = (props) => {
      return (
        <Graphics
        />
      );
    };

    return (
      <Router>
        <div>
          <div className="header">
            <div className="home-menu main-menu pure-menu pure-menu-horizontal pure-menu-fixed">
              <Link className="pure-menu-heading header-logo" to="/">
                <img src={'/assets/logo.png'} /> <br />BitBox
              </Link>

              <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <NavLink
                    isActive={pathMatch}
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/docs/gettingstarted">
                    <i className="fas fa-book"></i> Docs
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    isActive={pathMatch}
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/bitboxcli/address">
                    <i className="fa fa-code"></i> bitbox-cli
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <a
                    className="pure-menu-link"
                    href="https://bigearth.github.io/bitblog/">
                    <i className="fas fa-keyboard"></i> Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Switch>
            <Route path="/docs" component={DocsPage}/>
            <Route path="/bitboxcli" component={BitboxCliPage}/>
            <Route path="/graphics" component={GraphicsPage}/>
            <Route exact path="/" component={Homepage}/>
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
