import styled from "styled-components";

export const About = styled.div`
  margin: 0 auto;
  max-width: 697px;
  max-height: 358px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;

  @media screen and (max-width: 576px) {
    max-width: 450px;
    max-height: 250px;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    gap: 10px;
    max-height: max-content;
    margin-bottom: 20px;
  }
`;

export const TopImg = styled.img`
  max-width: 272px;
  max-height: 355px;
  box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 576px) {
    max-width: 200px;
    max-height: 250px;
  }
  @media screen and (max-width: 425px) {
    max-width: 300px;
  }
`;

export const AboutText = styled.div`
  width: 346px;
  height: 333px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 425px) {
    height: 100%;
    justify-content: space-between;
  }
`;

export const H2 = styled.h2`
  font-weight: 400;
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: 29px;
  margin-bottom: 26px;
  @media screen and (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  max-width: 348px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #000;
  @media screen and (max-width: 576px) {
    font-size: 9px;
  }
`;

export const TextAdd = styled(Text)`
  margin: 0;
`;

export const Hr = styled.div`
  margin: 0 auto;
  width: 240px;
  height: 1px;
  background: black;
`;
