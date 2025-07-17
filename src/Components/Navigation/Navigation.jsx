import { Component } from "react";
import { Nav, HeaderUl, Li, StyledLink } from "./Navigation.styled.js";
import logo from "../../assets/icons/logo.svg";
import logoBlack from "../../assets/icons/logo-black.svg";
import "./Navigation.styled.js";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  onClickA = (e, id) => {
    e.preventDefault();
    this.props.changePageFromNav(id);
  };

  render() {
    const navItems = [
      { id: 1, name: "Coffee house", img: true },
      { id: 2, name: "Our coffee" },
      { id: 3, name: "For your pleasure" },
    ];

    return (
      <>
        <Nav $marginBottom={this.props.$marginBottom}>
          <HeaderUl $center={this.props.$center}>
            {navItems.map((item) => {
              return (
                <Li $black={this.props.$black} key={item.id}>
                  {item.img ? (
                    <img
                      src={this.props.$black ? logoBlack : logo}
                      alt="Логотип компании"
                    ></img>
                  ) : null}
                  <StyledLink
                    currentPage={this.props.currentPage === item.name}
                    $black={this.props.$black}
                    onClick={(e) => this.onClickA(e, item.id)}
                  >
                    {item.name}
                  </StyledLink>
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
