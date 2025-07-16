import { Component } from "react";
import { GridTemplate } from "./styled";
import GridItem from "../GridItem/GridItem";
import item from "../../../assets/imgs/Coffee/AromisticoCoffee.jpg";

export default class ProductsGrid extends Component {
  render() {
    const itemsData = [
      {
        id: 1,
        img: item,
        title: "AROMISTICO Coffee 1 kg",
        country: "Brazil",
        price: "6.99$",
      },
      {
        id: 2,
        img: item,
        title: "AROMISTICO Coffee 1 kg",
        country: "Kenya",
        price: "6.99$",
      },
      {
        id: 3,
        img: item,
        title: "AROMISTICO Coffee 1 kg",
        country: "Columbia",
        price: "6.99$",
      },
      {
        id: 4,
        img: item,
        title: "AROMISTICO Coffee 1 kg",
        country: "Brazil",
        price: "6.99$",
      },
      {
        id: 5,
        img: item,
        title: "AROMISTICO Coffee 1 kg",
        country: "Brazil",
        price: "6.99$",
      },
      {
        id: 6,
        img: item,
        title: "AROMISTICO Coffee 1 kg",
        country: "Brazil",
        price: "6.99$",
      },
    ];
    return (
      <GridTemplate>
        {itemsData.map((item) => {
          const { id, img, title, country, price } = item;
          return (
            <GridItem
              key={id}
              img={img}
              title={title}
              country={country}
              price={price}
            />
          );
        })}
      </GridTemplate>
    );
  }
}
