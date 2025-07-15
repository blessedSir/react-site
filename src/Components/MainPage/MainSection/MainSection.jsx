import { Component } from "react";
import Navigation from "../../Navigation/Navigation";
import logoBr from "../../../assets/icons/logo-br.svg";
import { Container } from "../../../StyledComponents/Styled";
import {
  Main,
  MainTitle,
  MainSubTitleText,
  MainButton,
} from "../MainPageStyled/MainPageStyled";

class MainSection extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Main>
          <MainTitle>Everything You Love About Coffee</MainTitle>
          <img src={logoBr} alt="Зерно кофе"></img>
          <MainTitle>We makes every day full of energy and taste</MainTitle>
          <MainSubTitleText>Want to try our beans?</MainSubTitleText>
          <MainButton>More</MainButton>
        </Main>
      </Container>
    );
  }
}

export default MainSection;
