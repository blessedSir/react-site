import styled from "styled-components";
import bg from "../assets/imgs/bg/bg-main.jpg";
import bgSectionMain from "../assets/imgs/bg/bg-section-main.jpg";

export const Container = styled.section`
  max-width: 1440px;
  height: 640px;
  margin: 0 auto;
  background: url(${bg}) center center / cover no-repeat;

  @media screen and (max-width: 1920px) {
    max-width: 1920px;
  }
  @media screen and (max-width: 425px) {
    height: 450px;
  }
  @media screen and (max-width: 425px) {
    max-height: 400px;
  }
`;

export const ContainerAbout = styled(Container)`
  margin: 0 auto;
  background: #fff;
  text-align: center;
  height: 520px;
  h2 {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 24px;
    color: #000;
    @media screen and (max-width: 425px) {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
  img {
    margin-bottom: 41px;
    max-width: 209px;
    max-height: 29px;
    @media screen and (max-width: 425px) {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
  @media screen and (max-width: 425px) {
    min-height: 430px;
  }
`;

export const OurBestSection = styled(Container)`
  max-height: 495px;
  background: url(${bgSectionMain}) center center / cover no-repeat;
  margin: 0 auto;
  text-align: center;
  h2 {
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #000;
    margin-bottom: 49px;
  }

  @media screen and (max-width: 575px) {
    min-height: 650px;
  }
`;

export const FooterSection = styled(Container)`
  background: #fff;
  max-height: 150px;
  padding: 0;
`;

