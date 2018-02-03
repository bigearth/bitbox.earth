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
import Faq from './components/Faq';
import Docs from './components/Docs';
import Homepage from './components/Homepage';

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

    const FAQPage = (props) => {
      return (
        <Faq
        />
      );
    };

    return (
      <Router>
        <div>
          <div className="header">
            <div className="home-menu main-menu pure-menu pure-menu-horizontal pure-menu-fixed">
              <Link className="pure-menu-heading header-logo" to="/">
                <img src={'assets/logo.png'} /> <br />BitBox
              </Link>

              <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <NavLink
                    isActive={pathMatch}
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/docs">
                    <i className="fas fa-book"></i> Docs
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    isActive={pathMatch}
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/faq">
                    <i className="fas fa-question-circle"></i> FAQ
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Switch>
            <Route path="/docs" component={DocsPage}/>
            <Route path="/faq" component={FAQPage}/>
            <Route exact path="/" component={Homepage}/>
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
