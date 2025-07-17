import styled from "styled-components";
import bgHeader1 from "../../../assets/imgs/bg/bg-additional-headear_1.jpg";
import bgHeader2 from "../../../assets/imgs/bg/bg-additional-headear_2.jpg";

export const Header = styled.section`
  margin: 0 auto;
  max-width: 1440px;
  min-height: 260px;
  background: ${({ anotherBanner }) =>
    `url(${
      anotherBanner ? bgHeader2 : bgHeader1
    }) center center / cover no-repeat`};

  @media screen and (max-width: 1920px) {
    max-width: 1920px;
  }
`;

export const HeaderBlock = styled.div`
  max-width: 400px;
  max-height: 50px;
  margin: 60px auto;
  text-align: center;
  h1 {
    font-weight: 700;
    font-size: 40px;
    color: #fff;
  }
`;
