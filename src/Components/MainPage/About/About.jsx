import { Component } from "react";
import { ContainerAbout } from "../../../StyledComponents/Styled";
import { AboutWrapper, AboutText } from "../MainPageStyled/MainPageStyled";
import logoBrBlack from "../../../assets/icons/logo-br-black.svg";

class About extends Component {
  render() {
    return (
      <ContainerAbout>
        <AboutWrapper>
          <h2>About Us</h2>
          <img src={logoBrBlack} alt="" />
          <AboutText>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
          </AboutText>
          <AboutText style={{ marginTop: "20px" }}>
            Now residence dashwoods she excellent you. Shade being under his bed
            her, Much read on as draw. Blessing for ignorant exercise any
            yourself unpacked. Pleasant horrible but confined day end marriage.
            Eagerness furniture set preserved far recommend. Did even but nor
            are most gave hope. Secure active living depend son repair day
            ladies now.
          </AboutText>
        </AboutWrapper>
      </ContainerAbout>
    );
  }
}
export default About;
