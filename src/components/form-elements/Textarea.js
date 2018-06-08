import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";

class Textarea extends Component {
  render() {
    const { label, placeholder, index } = this.props;
    return (
      <FormGroup>
        <Label for={label.toLowerCase()}>{label}</Label>
        <Input type="text" name={label.toLowerCase()} id={`input-${index}`} placeholder={placeholder} />
      </FormGroup>
    );
  }
}

export default Textarea;
