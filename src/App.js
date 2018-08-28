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

const BannerImage = styled.div`
  position: relative;
  max-width: 500px;

  > img {
    width: 100%;
  }
`;

const BannerLink = styled.a`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  text-decoration: none;
  height: calc(100% / 3);
  width: 100%;

  img {
    margin: 15px;
    height: calc(100% - 30px);
  }

  p {
    color: #ffffff;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
  }
`;

class App extends Component {
  render() {
    return (
      <BannerContainer>
        <BannerImage>
          <img src={tile} alt="tile" />
          <BannerLink>
            <img src={logo} alt="logo" />
            <p>Home and Away</p>
          </BannerLink>
        </BannerImage>
      </BannerContainer>
    );
  }
}

export default App;
