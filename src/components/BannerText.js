import styled from 'styled-components';
export const BannerText = styled.p`
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
