import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";

class Checkbox extends Component {
  render() {
    const { label } = this.props;
    return (
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />
          {label}
        </Label>
      </FormGroup>
    );
  }
}

export default Checkbox;
