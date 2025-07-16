import { Component } from "react";
import aboutImg from "../../../assets/imgs/SectionsImg/girls_with_coffee.jpg";
import logoBlack from "../../../assets/icons/logo-br-black.svg";
import { About, AboutText, Text, TopImg, H2, Logo, TextAdd } from "./styled";
export default class AboutOurBeans extends Component {
  render() {
    return (
      <>
        <About>
          <TopImg src={aboutImg} />
          <AboutText>
            <H2>About our beans</H2>
            <Logo src={logoBlack} />
            <Text>
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
            </Text>
            <TextAdd>
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions
            </TextAdd>
            <TextAdd>
              As greatly removed calling pleased improve an. Last ask him cold
              feel met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face
            </TextAdd>
          </AboutText>
        </About>
      </>
    );
  }
}
