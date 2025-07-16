import styled from "styled-components";

export const SearchBarForm = styled.div`
  max-width: 697px;
  max-height: 31px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  @media screen and (max-width: 576px) {
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }

  @media screen and (max-width: 677px) {
    max-width: 600px;
    max-height: 65px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const LabelInput = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #000;
  display: flex;
  gap: 19px;
  align-items: center;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  border: none;
  text-align: center;
  height: 30px;
`;

export const LabelBtns = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #000;
  display: flex;
  gap: 35px;
  align-items: center;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    width: 290px;
    padding: 10px;
  }
`;

export const Btns = styled.div`
  display: flex;
  gap: 5px;
  @media screen and (max-width: 576px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  border-radius: 4px 0 0 4px;
  width: 75px;
  height: 30px;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  border: none;

  &:active {
    box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.25);
    transition: all 0.1s ease;
  }

  @media screen and (max-width: 576px) {
    width: 60px;
  }
`;
