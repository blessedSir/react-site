import { Component } from "react";
import OurCoffeeHeader from "./OurCoffeeHeader/OurCoffeeHeader.jsx";
import AboutOurBeans from "./AboutOurBeans/AboutOurBeans.jsx";
import { PageSection } from "./styled.js";
import SearchBar from "./SearchBar/SearchBar.jsx";
import { Hr } from "./AboutOurBeans/styled.js";
import ProductsGrid from "./ProductsGrid/ProductsGrid.jsx";
import Footer from "../Footer/Footer.jsx";
import item from "../../assets/imgs/Coffee/AromisticoCoffee.jpg";

export default class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      filter: "All",
      itemsData: [
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
      ],
    };
  }

  onSearchChange = (value) => {
    this.setState({ searchTerm: value });
  };

  onFilterChange = (filter) => {
    this.setState({ filter: filter });
  };

  searchData = (searchTerm) => {
    return searchTerm
      ? this.state.itemsData.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : this.state.itemsData;
  };

  filteredData = (data, filter) => {
    switch (filter) {
      case "All":
        return data;

      case "Brazil":
        return data.filter((item) => item.country.includes("Brazil"));

      case "Kenya":
        return data.filter((item) => item.country.includes("Kenya"));

      case "Columbia":
        return data.filter((item) => item.country.includes("Columbia"));

      default:
        return data;
    }
  };

  render() {
    const { searchTerm, filter } = this.state;
    const visibleData = this.filteredData(this.searchData(searchTerm), filter);
    return (
      <>
        <OurCoffeeHeader
          currentPage={this.props.currentPage}
          anotherBanner={this.props.anotherBanner}
          header={this.props.header}
          changePageFromNav={this.props.changePageFromNav}
        />
        <PageSection>
          <AboutOurBeans
            anotherImg={this.props.anotherImg}
            anotherTitle={this.props.anotherTitle}
          />
          <Hr style={{ marginBottom: 60 }} />
          {this.props.search ? null : (
            <SearchBar
              onFilterChange={this.onFilterChange}
              onSearchChange={this.onSearchChange}
            />
          )}

          <ProductsGrid
            visibleData={visibleData}
            changePageFromCoffeeItem={this.props.changePageFromCoffeeItem}
          />
          <Footer changePageFromNav={this.props.changePageFromNav} />
        </PageSection>
      </>
    );
  }
}
