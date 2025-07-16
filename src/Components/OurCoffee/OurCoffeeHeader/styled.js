import styled from "styled-components";
import bgHeader from "../../../assets/imgs/bg/bg-additional-headear_1.jpg";

export const Header = styled.section`
  margin: 0 auto;
  max-width: 1440px;
  min-height: 260px;
  background: url(${bgHeader}) center center / cover no-repeat;
`;

export const HeaderBlock = styled.div`
  max-width: 230px;
  max-height: 50px;
  margin: 60px auto;
  h1 {
    font-weight: 700;
    font-size: 40px;
    color: #fff;
  }
`;
