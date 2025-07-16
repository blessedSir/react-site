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
  render() {
    return (
      <SearchBarForm>
        <LabelInput>
          <label htmlFor="coffee">Lokking for</label>
          <Input type="text" placeholder="start typing here..." />
        </LabelInput>
        <LabelBtns>
          <label htmlFor="filter">Or filter</label>
          <Btns>
            <Button>Brazil</Button>
            <Button>Kenya</Button>
            <Button>Columbia</Button>
          </Btns>
        </LabelBtns>
      </SearchBarForm>
    );
  }
}
