import styled from "styled-components";

export const Nav = styled.nav`
  padding: 30px 149px 0 149px;
  margin-bottom: ${(props) => (props.$marginBottom ? "30px" : "0px")};

  @media screen and (max-width: 991px) {
    padding: 30px 119px 0 119px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 50px 0 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 30px 20px 0 20px;
  }
`;

export const HeaderUl = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: ${(props) => (props.$center ? "center" : "flex-start")};
  color: #fff;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
  line-height: 1;
  @media screen and (max-width: 425px) {
    gap: 10px;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: end;
  box-sizing: content-box;
  cursor: pointer;

  img {
    margin-right: 5px;
  }
`;

export const StyledLink = styled.a`
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => (props.$black ? "#000" : "#fff")};

  &:hover {
    border-bottom: 2px inset #ffdb3da4;
  }

  &:focus-visible {
    outline: 2px solid #ffdb3da4;
    padding: 4px;
    border-radius: 4px;
  }

  @media screen and (max-width: 325px) {
    font-size: 10px;
  }
`;
