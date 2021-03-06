import React, { Component } from "react";
import { FormGroup, Label, Button } from "reactstrap";
import FontAwesome from "react-fontawesome";

class Textarea extends Component {
  state = {
    count: 0
  };

  counterUpDown = direction => {
    if (direction === "up") {
      this.setState(function(prevState, props) {
        return { count: prevState.count + 1 };
      });
    } else {
      this.setState(function(prevState, props) {
        return { count: prevState.count - 1 };
      });
    }
  };

  render() {
    const { label } = this.props;
    const minusOneButton = (
      <Button
        className="btn btn-default counterUpDown"
        onClick={() => this.counterUpDown("down")}
        disabled={this.state.count < 1}
      >
        <FontAwesome name="minus" />
      </Button>
    );
    const addOneButton = (
      <Button className="btn btn-default counterUpDown" onClick={() => this.counterUpDown("up")}>
        <FontAwesome name="plus" onClick={() => this.counterUpDown("up")} />
      </Button>
    );
    return (
      <FormGroup>
        <Label for="{label.toLowerCase()}">{label}</Label>
        {minusOneButton}
        <span className="counter">{this.state.count}</span>
        {addOneButton}
      </FormGroup>
    );
  }
}

export default Textarea;
