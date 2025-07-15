import styled from "styled-components";

export const Main = styled.div`
  max-width: 670px;
  max-height: 258px;
  margin: 111px 385px 201px 385px;
  img {
    display: block;
    margin: 0 auto;
  }

  @media screen and (max-width: 1920px) {
    margin: 111px auto;
  }
  @media screen and (max-width: 425px) {
    margin: 50px;
  }
`;
export const MainTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  color: #fff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const MainSubTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-top: 35px;
  margin-bottom: 20px;
  @media screen and (max-width: 991px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1920px) {
    margin-top: 15px;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
export const MainSubTitleText = styled(MainSubTitle)`
  margin-top: 0;
  margin-bottom: 18px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
export const MainButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 120px;
  height: 30px;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  text-align: center;
  background: transparent;
  border: 1px solid white;
  border-radius: 3px;

  &:hover {
    box-shadow: 2px 2px 22px 2px rgba(255, 255, 255, 0.26) inset;
    transition: all 0.3s ease;
  }
  &:active {
    box-shadow: 0.1px 0.1px 22px 0.1px rgba(255, 248, 154, 0.671) inset;
    transition: all 0.3s ease;
  }
  &:focus {
    outline: 2px solid #ffdb3da4;
    border-radius: 3px;
    transition: all 0.3s ease;
  }
`;

export const AboutWrapper = styled.div`
  padding-top: 80px;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }
`;

export const AboutText = styled.div`
  padding: 10px;
  margin: 0 auto;
  max-width: 600px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #000;
  @media screen and (max-width: 425px) {
    font-size: 11px;
  }
`;

export const OurBestWraper = styled.div`
  margin: 0 auto;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }
`;

export const OurBestItemsForm = styled.div`
  padding: 10px;
  max-width: 802px;
  display: flex;
  gap: 71px;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 449px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 425px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const OurBestItems = styled.div`
  background: rgba(255, 255, 255, 0.65);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 220px;
  height: auto;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 22px 2px rgba(255, 255, 255, 0.26) inset;
    transition: all 0.3s ease;
  }
  &:active {
    box-shadow: 0.1px 0.1px 22px 0.1px rgba(255, 248, 154, 0.671) inset;
    transition: all 0.3s ease;
  }
  &:focus-visible {
    outline: 2px solid #ffdb3da4;
    transform: scale(110%);
    box-shadow: 1px 3px 3px 3px #ffdb3da4;
    transition: all 0.3s ease;
  }

  img {
    width: 100%;
    height: auto;
    max-height: 120px;
    margin-bottom: 14px;
    object-fit: contain;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #000;
    margin-bottom: 10px;
  }

  p {
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    color: #000;
    align-self: end;
    padding: 0 10px;
  }

  &:hover {
    transform: scale(110%);
    box-shadow: 1px 3px 3px 3px #ffdb3da4;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 425px) {
    width: 45%;
    max-width: none;
    max-height: none;
    padding: 8px;

    img {
      min-height: 80px;
      margin-bottom: 8px;
    }

    span {
      font-size: 12px;
      margin-bottom: 6px;
    }

    p {
      font-size: 12px;
      padding: 0 6px;
    }
  }
`;

export const FooterWrapper = styled.div`
  min-width: 355px;
  max-height: 99px;
  margin: 0 auto;

  img {
    display: block;
    margin: 0 auto;
  }

  @media screen and (max-width: 325px) {
    min-width: 255px;
  }
`;
