import React, { Component } from 'react';
import logo from './images/logo.png';
import tile from './images/tile.jpg';
import './css/style.css';
import styled from 'styled-components';

const BannerContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  background-color: #000000;
  margin: 0 auto;
  padding: 50px;
  height: 100vh;
  width: 1200px;
`;

class App extends Component {
  render() {
    return (
      <BannerContainer>
        <div className="banner-image">
          <img src={tile} alt="tile" />
          <a className="banner-link">
            <img src={logo} alt="logo" />
            <p>Home and Away</p>
          </a>
        </div>
      </BannerContainer>
    );
  }
}

export default App;
