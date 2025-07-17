import { Component } from "react";
import {
  SearchBarForm,
  LabelInput,
  LabelBtns,
  Btns,
  Input,
  Button,
} from "./styled";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      filter: "",
    };
  }

  onBtnClick = (e) => {
    this.setState({ filter: e.target.name });
    this.props.onFilterChange(e.target.name);
  };

  onInputChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onSearchChange(e.target.value);
  };

  render() {
    return (
      <SearchBarForm>
        <LabelInput>
          <label htmlFor="coffee">Looking for</label>
          <Input
            value={this.state.value}
            onChange={(e) => this.onInputChange(e)}
            type="text"
            placeholder="start typing here..."
          />
        </LabelInput>
        <LabelBtns>
          <label htmlFor="filter">Or filter</label>
          <Btns>
            <Button name={"All"} onClick={(e) => this.onBtnClick(e)}>
              All
            </Button>
            <Button name={"Brazil"} onClick={(e) => this.onBtnClick(e)}>
              Brazil
            </Button>
            <Button name={"Kenya"} onClick={(e) => this.onBtnClick(e)}>
              Kenya
            </Button>
            <Button name={"Columbia"} onClick={(e) => this.onBtnClick(e)}>
              Columbia
            </Button>
          </Btns>
        </LabelBtns>
      </SearchBarForm>
    );
  }
}
