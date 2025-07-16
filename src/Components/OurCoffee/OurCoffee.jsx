import { Component } from "react";
import OurCoffeeHeader from "./OurCoffeeHeader/OurCoffeeHeader.jsx";
import AboutOurBeans from "./AboutOurBeans/AboutOurBeans.jsx";
import { PageSection } from "./styled.js";
import SearchBar from "./SearchBar/SearchBar.jsx";
import { Hr } from "./AboutOurBeans/styled.js";
import ProductsGrid from "./ProductsGrid/ProductsGrid.jsx";
import Footer from "../Footer/Footer.jsx";

export default class OurCoffee extends Component {
  render() {
    return (
      <>
        <OurCoffeeHeader changePageFromNav={this.props.changePageFromNav} />
        <PageSection>
          <AboutOurBeans />
          <Hr style={{ marginBottom: 60 }} />
          <SearchBar />
          <ProductsGrid />
          <Footer changePageFromNav={this.props.changePageFromNav} />
        </PageSection>
      </>
    );
  }
}
