import { Component } from "react";
import { FooterSection } from "../../StyledComponents/Styled";
import { FooterWrapper } from "../MainPage/MainPageStyled/MainPageStyled";
import logoBrBlack from "../../assets/icons/logo-br-black.svg";
import Navigation from "../Navigation/Navigation";
export default class Footer extends Component {
  render() {
    return (
      <FooterSection>
        <FooterWrapper>
          <Navigation
            changePageFromNav={this.props.changePageFromNav}
            $black={true}
            $center={true}
            $marginBottom={true}
          />
          <img
            src={logoBrBlack}
            alt="Логотип"
            style={{ marginBottom: "20px" }}
          />
        </FooterWrapper>
      </FooterSection>
    );
  }
}
