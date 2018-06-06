import React, { Component } from "react";
// import { connect } from "react-redux";
import { FormGroup, Label, Input } from "reactstrap";

// import { formHTMLElement } from "../util/elementIn";
// import { setFormData } from "../actionCreators";

class Checkbox extends Component {
  render() {
    const { label, placeholder, index } = this.props;
    return (
      <FormGroup>
        <Label for="exampleEmail">{label}</Label>
        <Input type="text" name={label.toLowerCase()} id={`input-${index}`} placeholder={placeholder} />
      </FormGroup>
    );
  }
}

export default Checkbox;
