import React, { Component } from "react";
// import { connect } from "react-redux";
import { FormGroup, Label, Input } from "reactstrap";

// import { formHTMLElement } from "../util/elementIn";
// import { setFormData } from "../actionCreators";

class Dropdown extends Component {
  render() {
    const { label, options } = this.props;
    return (
      <FormGroup>
        <Label for="exampleSelect">{label}</Label>
        <Input type="select" name="select" id="exampleSelect">
          {options.map(x => <option key={x}>{x}</option>)}
        </Input>
      </FormGroup>
    );
  }
}

export default Dropdown;
