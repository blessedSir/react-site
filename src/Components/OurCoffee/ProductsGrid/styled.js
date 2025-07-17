import styled from "styled-components";

export const GridTemplate = styled.div`
  margin: 0 auto;
  max-width: 820px;
  max-height: 600px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 60px;
  column-gap: 70px;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    row-gap: 10px;
    column-gap: 20px;
  }

  @media screen and (max-width: 677px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    max-height: 810px;
  }

  @media screen and (max-width: 576px) {
    max-height: 810px;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    align-items: center;
    justify-items: center;
    max-height: 1620px;
  }
`;

export const OPPS = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 100%;
  max-height: 100%;
`;
