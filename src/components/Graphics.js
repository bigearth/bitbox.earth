import React, { Component } from 'react';
import moment from 'moment';
import {
  Link,
  withRouter
} from 'react-router-dom';
import Slider from 'react-slick';

import "../styles/Homepage.scss";

class Graphics extends Component {
  componentDidMount() {
    document.title = "Graphics - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className='Graphics'>
        <div className="splash-container">
          <div className="splash">
            <h1 className="splash-head">Promotional Graphics</h1>
            <p className="splash-subhead">
              These BITBOX logos and brand assets can be used for display in online services, press or other promotional purposes.
            </p>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content features">
            <h2 className="content-head is-center">Logo</h2>
            <h3 className="content-subhead is-center">Download the BITBOX logo in PNG and SVG</h3>

            <div className="pure-g">
              <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                <h4 className="">
                  BITBOX Logo Black
                </h4>
                <p>
                  <img alt="black small" className="pure-img-responsive" src='assets/cube-black-small.png' />
                </p>
                <p>
                  <a className="pure-button black" href='assets/cube-black-small.png'>Small (png)</a>
                </p>
                <p>
                  <a className="pure-button black" href='assets/cube-black-medium.png'>Medium (png)</a>
                </p>
                <p>
                  <a className="pure-button black" href='assets/cube-black-large.png'>Large (png)</a>
                </p>
                <p>
                  <a className="pure-button black" href='assets/cube-black.svg'>Vector (svg)</a>
                </p>
              </div>
              <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                <h4 className="">
                  BITBOX Logo Light Blue
                </h4>
                <p>
                  <img alt="blue small" className="pure-img-responsive" src='assets/cube-light-blue-small.png' />
                </p>
                <p>
                  <a className="pure-button lightBlue" href='assets/cube-light-blue-small.png'>Small (png)</a>
                </p>
                <p>
                  <a className="pure-button lightBlue" href='assets/cube-light-blue-medium.png'>Medium (png)</a>
                </p>
                <p>
                  <a className="pure-button lightBlue" href='assets/cube-light-blue-large.png'>Large (png)</a>
                </p>
                <p>
                  <a className="pure-button lightBlue" href='assets/cube-light-blue.svg'>Vector (svg)</a>
                </p>
              </div>
              <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                <h4 className="">
                  BITBOX Logo White
                </h4>
                <p>
                  <img alt="white small" className="logoWhite pure-img-responsive" src='assets/cube-white-small.png' />
                </p>
                <p>
                  <a className="pure-button white" href='assets/cube-white-small.png'>Small (png)</a>
                </p>
                <p>
                  <a className="pure-button white" href='assets/cube-white-medium.png'>Medium (png)</a>
                </p>
                <p>
                  <a className="pure-button white" href='assets/cube-white-large.png'>Large (png)</a>
                </p>
                <p>
                  <a className="pure-button white" href='assets/cube-white.svg'>Vector (svg)</a>
                </p>
              </div>
              <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                <h4 className="">
                  BITBOX Logo Dark Blue
                </h4>
                <p>
                  <img alt="dark blue small" className="pure-img-responsive" src='assets/cube-dark-blue-small.png' />
                </p>
                <p>
                  <a className="pure-button darkBlue" href='assets/cube-dark-blue-small.png'>Small (png)</a>
                </p>
                <p>
                  <a className="pure-button darkBlue" href='assets/cube-dark-blue-medium.png'>Medium (png)</a>
                </p>
                <p>
                  <a className="pure-button darkBlue" href='assets/cube-dark-blue-large.png'>Large (png)</a>
                </p>
                <p>
                  <a className="pure-button darkBlue" href='assets/cube-dark-blue.svg'>Vector (svg)</a>
                </p>
              </div>
            </div>
            <h2 className="content-head is-center">Visual Identity</h2>
            <h3 className="content-subhead is-center">BITBOX colors</h3>

            <div className="pure-g">
              <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                <h4 className="">
                  BITBOX Black
                </h4>
                <p>
                  Hex: <span className='black'>#000000</span>
                </p>
                <p>
                  RGB: <span className='black'>0 / 0 / 0</span>
                </p>
                <p>
                  CMYK: <span className='black'>0 / 0 / 0 / 100</span>
                </p>
                <h4 className="">
                  BITBOX White
                </h4>
                <p>
                  Hex: <span className=''>#ffffff</span>
                </p>
                <p>
                  RGB: <span className=''>255 / 255 / 255</span>
                </p>
                <p>
                  CMYK: <span className=''>0 / 0 / 0 / 0</span>
                </p>
              </div>
              <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                <h4 className="">
                  BITBOX Light Blue
                </h4>
                <p>
                  Hex: <span className='lightBlue'>#1f8dd6</span>
                </p>
                <p>
                  RGB: <span className='lightBlue'>31 / 141 / 214</span>
                </p>
                <p>
                  CMYK: <span className='lightBlue'>86 / 34 / 0 / 16</span>
                </p>
                <h4 className="">
                  BITBOX Dark Blue
                </h4>
                <p>
                  Hex: <span className='darkBlue'>#2d3e50</span>
                </p>
                <p>
                  RGB: <span className='darkBlue'>45 / 62 / 80</span>
                </p>
                <p>
                  CMYK: <span className='darkBlue'>44 / 22 / 0 / 69</span>
                </p>
              </div>
            </div>
          </div>
          <div className="footer l-box is-center">
            Created w/ ❤️ on EARTH by <a href='https://twitter.com/bitboxearth'>@bitboxearth</a>. Donations <strong>bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Graphics);
