import { Component } from "react";
import { Header, HeaderBlock } from "./styled";
import Navigation from "../../Navigation/Navigation";

export default class OurCoffeeHeader extends Component {
  render() {
    return (
      <Header anotherBanner={this.props.anotherBanner}>
        <Navigation
          currentPage={this.props.currentPage}
          changePageFromNav={this.props.changePageFromNav}
        />
        <HeaderBlock>
          {this.props.header ? <h1>For your pleasure</h1> : <h1>Our Coffee</h1>}
        </HeaderBlock>
      </Header>
    );
  }
}
