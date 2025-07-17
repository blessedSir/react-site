import { Component } from "react";
import { GridTemplate, OPPS } from "./styled";
import GridItem from "../GridItem/GridItem";

export default class ProductsGrid extends Component {
  render() {
    return (
      <>
        {this.props.visibleData.length === 0 ? (
          <>
            <OPPS>OOPS!</OPPS>
            <OPPS>We dont have coffee like that.</OPPS>
          </>
        ) : (
          <GridTemplate>
            {this.props.visibleData.map((item) => {
              const { id, img, title, country, price } = item;
              return (
                <GridItem
                  onClick={() =>
                    this.props.changePageFromCoffeeItem(
                      country,
                      price,
                      img,
                      title
                    )
                  }
                  key={id}
                  img={img}
                  title={title}
                  country={country}
                  price={price}
                />
              );
            })}
          </GridTemplate>
        )}
      </>
    );
  }
}
