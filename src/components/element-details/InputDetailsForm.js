import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class InputDetailsForm extends Component {
  state = {
    element: "input",
    label: "",
    placeholder: ""
  };

  handleChange = e => {
    let stateValue = e.target.name;
    this.setState({ [stateValue]: e.target.value });
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleLabel">Label</Label>
          <Input
            type="text"
            name="label"
            id="exampleEmail"
            placeholder="Enter label"
            value={this.state.label}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePlaceholder">Placeholder</Label>
          <Input
            type="text"
            name="placeholder"
            id="exampleEmail"
            placeholder="Enter placeholder"
            value={this.state.placeholder}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button
          onClick={e => {
            this.props.submitModal(this.state);
          }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default InputDetailsForm;
