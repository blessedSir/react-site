import { Component } from "react";
import MainSection from "./MainSection/MainSection";
import About from "./About/About";
import OurBest from "./OurBest/OurBest";
import Footer from "../Footer/Footer";

class MainPage extends Component {
  render() {
    return (
      <>
        <MainSection />
        <About />
        <OurBest />
        <Footer />
      </>
    );
  }
}

export default MainPage;
