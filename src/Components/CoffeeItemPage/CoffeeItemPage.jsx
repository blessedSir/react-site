import { Component } from "react";
import OurCoffeeHeader from "../OurCoffee/OurCoffeeHeader/OurCoffeeHeader";
import { PageSection } from "./CoffeeItemPage.styled";
import Footer from "../Footer/Footer";
import AboutCoffeeItem from "./AboutCoffeeItem/AboutCoffeeItem";

export default class CoffeeItemPage extends Component {
  render() {
    

    return (
      <>
        <OurCoffeeHeader
          currentPage={this.props.currentPage}
          changePageFromNav={this.props.changePageFromNav}
        />
        <PageSection>
          <AboutCoffeeItem coffeeItem={this.props.coffeeItem} />
          <Footer changePageFromNav={this.props.changePageFromNav} />
        </PageSection>
      </>
    );
  }
}
