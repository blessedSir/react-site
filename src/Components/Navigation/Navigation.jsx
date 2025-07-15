import { Component } from "react";
import styled from "styled-components";
import logo from "../../assets/icons/logo.svg";
import logoBlack from "../../assets/icons/logo-black.svg";
import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Nav = styled.nav`
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

    const HeaderUl = styled.ul`
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

    const Li = styled.li`
      display: flex;
      align-items: end;
      box-sizing: content-box;
      a {
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
      }
      img {
        margin-right: 5px;
      }
    `;

    const navItems = [
      { id: 1, name: "Coffee house", img: true },
      { id: 2, name: "Our coffee" },
      { id: 3, name: "For your pleasure" },
    ];
    return (
      <>
        <Nav $marginBottom={this.props.marginBottom}>
          <HeaderUl $center={this.props.center}>
            {navItems.map((item) => {
              return (
                <Li $black={this.props.black} key={item.id}>
                  {item.img ? (
                    <img
                      src={this.props.black ? logoBlack : logo}
                      alt="Логотип компании"
                    ></img>
                  ) : null}
                  <a href="#">{item.name}</a>
                </Li>
              );
            })}
          </HeaderUl>
        </Nav>
      </>
    );
  }
}

export default Navigation;
