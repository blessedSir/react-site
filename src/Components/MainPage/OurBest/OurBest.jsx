import { Component } from "react";
import { OurBestSection } from "../../../StyledComponents/Styled";
import {
  OurBestItemsForm,
  OurBestWraper,
  OurBestItems,
} from "../MainPageStyled/MainPageStyled";
import SolimoCoffeeBeans from "../../../assets/imgs/Coffee/SolimoCoffeeBeans.jpg";
import PrestoCoffeeBeans from "../../../assets/imgs/Coffee/PrestoCoffeeBeans.jpg";
import AromisticoCoffee from "../../../assets/imgs/Coffee/AromisticoCoffee.jpg";

export default class OurBest extends Component {
  render() {
    const ourBestItems = [
      {
        id: 1,
        img: SolimoCoffeeBeans,
        title: "Solimo Coffee Beans 2kg",
        price: "10.73$",
        alt: "Упаковка кофе",
      },
      {
        id: 2,
        img: PrestoCoffeeBeans,
        title: "Presto Coffee Beans 1kg",
        price: "15.89$",
        alt: "Упаковка кофе",
      },
      {
        id: 3,
        img: AromisticoCoffee,
        title: "AROMISTICO Coffee 1kg ",
        price: "6.99$",
        alt: "Упаковка кофе",
      },
    ];
    return (
      <OurBestSection>
        <OurBestWraper>
          <h2>Our Best</h2>
          <OurBestItemsForm>
            {ourBestItems.map((item) => {
              return (
                <OurBestItems tabIndex={"0"} key={item.id}>
                  <img src={item.img} alt={item.alt} />
                  <span>{item.title}</span>
                  <p>{item.price}</p>
                </OurBestItems>
              );
            })}
          </OurBestItemsForm>
        </OurBestWraper>
      </OurBestSection>
    );
  }
}
