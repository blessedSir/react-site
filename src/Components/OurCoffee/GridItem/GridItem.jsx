import { Component } from "react";
import {
  GridItemContainer,
  GridItemImg,
  GridItemTitle,
  GridItemCounry,
  GridItemPrice,
} from "./styled";
export default class GridItem extends Component {
  render() {
    return (
      <GridItemContainer>
        <GridItemImg src={this.props.img} alt="" />
        <GridItemTitle>{this.props.title}</GridItemTitle>
        <GridItemCounry>{this.props.country}</GridItemCounry>
        <GridItemPrice>{this.props.price}</GridItemPrice>
      </GridItemContainer>
    );
  }
}
