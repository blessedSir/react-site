import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
  max-width: 958px;
  max-height: 355px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    max-width: 700px;
  }
  @media screen and (max-width: 575px) {
    flex-direction: column;
    max-height: 600px;
  }
`;

export const CoffeeItemImg = styled.img`
  max-width: 392px;
  max-height: 355px;
  box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.25);
  object-fit: cover;
  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const CoffeeItemInfo = styled.div`
  max-width: 418px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`;

export const CoffeItemHeader = styled.div`
  text-align: center;
  margin-bottom: 26px;
`;

export const CoffeItemBody = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 16px;
  max-width: 418px;
  max-height: 250px;

  span {
    font-weight: 400;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }

    strong {
      font-weight: 700;
      font-size: 14px;
      color: #000;
      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    gap: 12px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
  color: #000;
  margin-bottom: 21px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
