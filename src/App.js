import React, { Component } from 'react';
import logo from './images/logo.png';
import tile from './images/tile.jpg';
import styled, { injectGlobal } from 'styled-components';

const BannerContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  background-color: #000000;
  margin: 0 auto;
  padding: 50px;
  height: 100vh;
  width: 1200px;

  @media (min-width: 481px) and (max-width: 1199px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 480px;
  }
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
`;

const BannerText = styled.p`
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: bold;

  /* Portrait tablets and medium desktops */
  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 28px;
  }

  /* Portrait tablets and small desktops */
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 26px;
  }

  /* Landscape phones and portrait tablets */
  @media (max-width: 767px) {
    font-size: 24px;
  }

  /* Landscape phones and smaller */
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  p {
    margin: 0;
    padding: 0;
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
            <BannerText>Home and Away</BannerText>
          </BannerLink>
        </BannerImage>
      </BannerContainer>
    );
  }
}

export default App;
