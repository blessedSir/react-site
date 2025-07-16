import styled from "styled-components";

export const GridItemContainer = styled.div`
  max-width: 220px;
  max-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 20px;
`;

export const GridItemImg = styled.img`
  max-width: 167px;
  max-height: 115px;
`;

export const GridItemTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #000;
`;

export const GridItemCounry = styled.span`
  font-weight: 400;
  font-size: 14px;
  align-self: flex-end;
  color: #000;
`;

export const GridItemPrice = styled.span`
  font-weight: 700;
  font-size: 14px;
  align-self: flex-end;
  color: #000;
`;
