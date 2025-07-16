import { Component } from "react";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import OurCoffee from "./Components/OurCoffee/OurCoffee";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "main",
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
        this.setPage("main");
        break;
      case 2:
        this.setPage("coffee");
        break;

      default:
        this.setPage("main");
        break;
    }
  };

  render() {
    const { currentPage } = this.state;

    let pageComponent;

    switch (currentPage) {
      case "main":
        pageComponent = (
          <MainPage
            changePageFromNav={this.changePageFromNav}
            setPage={this.setPage}
          />
        );
        break;
      case "coffee":
        pageComponent = (
          <OurCoffee
            changePageFromNav={this.changePageFromNav}
            setPage={this.setPage}
          />
        );
        break;
      default:
        pageComponent = (
          <MainPage
            changePageFromNav={this.changePageFromNav}
            setPage={this.setPage}
          />
        );
    }

    return <>{pageComponent}</>;
  }
}

export default App;
