import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { spacing } from "material-ui/styles";

class InputDetailsForm extends Component {
  state = {
    element: "dropdown",
    label: "",
    options: [],
    option: ""
  };

  handleChange = e => {
    let stateValue = e.target.name;
    this.setState({ [stateValue]: e.target.value });
  };

  handleOptionChange = e => {
    let option = e.target.value;
    this.setState({ option });
  };

  addOption = () => {
    let options = [...this.state.options];
    options.push(this.state.option);
    this.setState({ option: "" });
    this.setState({ options });
  };

  prepareStateObjectAndSubmitModal = () => {
    const { option, ...restOfState } = this.state;
    this.props.submitModal(restOfState);
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
        <p>Options: {this.state.options.map((option, index) => <span key={index}>{option}, </span>)} </p>
        <FormGroup>
          <Label for="exampleLabel">Enter an option</Label>
          <Input
            className="inline"
            type="text"
            name="option"
            id="exampleEmail"
            placeholder="Enter an option"
            value={this.state.option}
            onChange={this.handleOptionChange}
          />
          <Button className="inline" onClick={this.addOption}>
            Add
          </Button>
        </FormGroup>
        <Button onClick={this.prepareStateObjectAndSubmitModal}>Submit</Button>
      </Form>
    );
  }
}

export default InputDetailsForm;
