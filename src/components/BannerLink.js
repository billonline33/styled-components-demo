import styled from 'styled-components';
export const BannerLink = styled.a`
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
