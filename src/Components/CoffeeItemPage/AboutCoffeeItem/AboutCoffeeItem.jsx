import { Component } from "react";
import {
  CoffeeItemContainer,
  CoffeeItemImg,
  CoffeeItemInfo,
  Title,
  CoffeItemHeader,
  CoffeItemBody,
} from "./AboutCoffeeItem.styled";
import img from "../../../assets/imgs/Coffee/Aromistico-item-page.jpg";
import logoBr from "../../../assets/icons/logo-br-black.svg";
export default class AboutCoffeeItem extends Component {
  render() {
    return (
      <CoffeeItemContainer>
        <CoffeeItemImg
          src={
            this.props.coffeeItem.title === "AROMISTICO Coffee 1 kg"
              ? img
              : this.props.coffeeItem.img
          }
          alt="Кофе"
        />
        <CoffeeItemInfo>
          <CoffeItemHeader>
            <Title>About it</Title>
            <img src={logoBr} alt="Логотип" />
          </CoffeItemHeader>
          <CoffeItemBody>
            <span>
              <strong>Name:</strong> {this.props.coffeeItem.title}
            </span>
            <span>
              <strong>Country</strong>:{" "}
              {this.props.coffeeItem.country
                ? this.props.coffeeItem.country
                : "Check with the seller"}
            </span>
            <span>
              <strong>Description</strong>: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </span>
            <strong>Price: {this.props.coffeeItem.price} </strong>
          </CoffeItemBody>
        </CoffeeItemInfo>
      </CoffeeItemContainer>
    );
  }
}
