import { Component } from "react";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import OurCoffee from "./Components/OurCoffee/OurCoffee";
import CoffeeItemPage from "./Components/CoffeeItemPage/CoffeeItemPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Coffee house",
      coffeeItem: {
        country: "",
        price: "",
        img: "",
        title: "",
      },
    };
  }

  setPage = (pagename) => {
    this.setState({ currentPage: pagename }, () => {
      window.scrollTo(0, 0);
    });
  };

  changePageFromNav = (id) => {
    switch (id) {
      case 1:
        this.setPage("Coffee house");
        break;
      case 2:
        this.setPage("Our coffee");
        break;
      case 3:
        this.setPage("For your pleasure");
        break;

      default:
        this.setPage("main");
        break;
    }
  };

  changePageFromCoffeeItem = (country, price, img, title) => {
    this.setState({ coffeeItem: { country, price, img, title } });
    this.setPage("coffeeItem");
  };

  render() {
    const { currentPage } = this.state;

    let pageComponent;

    switch (currentPage) {
      case "Coffee house":
        pageComponent = (
          <MainPage
            currentPage={this.state.currentPage}
            changePageFromCoffeeItem={this.changePageFromCoffeeItem}
            changePageFromNav={this.changePageFromNav}
            setPage={this.setPage}
          />
        );
        break;

      case "Our coffee":
        pageComponent = (
          <OurCoffee
            currentPage={this.state.currentPage}
            changePageFromCoffeeItem={this.changePageFromCoffeeItem}
            changePageFromNav={this.changePageFromNav}
          />
        );
        break;

      case "coffeeItem":
        pageComponent = (
          <CoffeeItemPage
            currentPage={this.props.currentPage}
            coffeeItem={this.state.coffeeItem}
            changePageFromNav={this.changePageFromNav}
          />
        );
        break;

      case "For your pleasure":
        pageComponent = (
          <OurCoffee
            currentPage={this.state.currentPage}
            header={true}
            anotherTitle={true}
            anotherImg={true}
            search={true}
            anotherBanner={true}
            changePageFromCoffeeItem={this.changePageFromCoffeeItem}
            changePageFromNav={this.changePageFromNav}
          />
        );
        break;

      default:
        pageComponent = (
          <MainPage
            $currentPage={this.state.currentPage}
            changePageFromCoffeeItem={this.changePageFromCoffeeItem}
            changePageFromNav={this.changePageFromNav}
            setPage={this.setPage}
          />
        );
    }

    return <>{pageComponent}</>;
  }
}

export default App;
