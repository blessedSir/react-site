import { Component } from "react";
import { Header, HeaderBlock } from "./styled";
import Navigation from "../../Navigation/Navigation";

export default class OurCoffeeHeader extends Component {
  render() {
    return (
      <Header>
        <Navigation changePageFromNav={this.props.changePageFromNav} />
        <HeaderBlock>
          <h1>Our Coffee</h1>
        </HeaderBlock>
      </Header>
    );
  }
}
