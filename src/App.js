import React, { Component } from 'react';
import logo from './images/logo.png';
import tile from './images/tile.jpg';
import { injectGlobal } from 'styled-components';
import { BannerContainer } from './components/BannerContainer';
import { BannerImage } from './components/BannerImage';
import { BannerLink } from './components/BannerLink';
import { BannerText } from './components/BannerText';

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
