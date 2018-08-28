import styled from 'styled-components';
export const BannerContainer = styled.div`
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
