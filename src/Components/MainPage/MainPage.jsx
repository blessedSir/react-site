import { Component } from "react";
import MainSection from "./MainSection/MainSection";
import About from "./About/About";
import OurBest from "./OurBest/OurBest";
import Footer from "../Footer/Footer";

class MainPage extends Component {
  render() {
    const { setPage, changePageFromNav } = this.props;
    
    return (
      <>
        <MainSection
          currentPage={this.props.currentPage}
          changePageFromNav={changePageFromNav}
          setPage={setPage}
        />
        <About />
        <OurBest
          changePageFromCoffeeItem={this.props.changePageFromCoffeeItem}
        />
        <Footer changePageFromNav={this.props.changePageFromNav} />
      </>
    );
  }
}

export default MainPage;
