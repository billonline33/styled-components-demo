import React, { Component } from 'react';
import logo from './images/logo.png';
import tile from './images/tile.jpg';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-container">
          <div className="banner-image">
            <img src={tile} alt="tile" />
            <a href="#" className="banner-link">
              <img src={logo} alt="logo" />
              <p>Home and Away</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
