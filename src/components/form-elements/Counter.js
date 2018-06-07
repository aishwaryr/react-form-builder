import React, { Component } from "react";
// import { connect } from "react-redux";
import { FormGroup, Label, Input, Button } from "reactstrap";
import FontAwesome from "react-fontawesome";
// import { formHTMLElement } from "../util/elementIn";
// import { setFormData } from "../actionCreators";

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
      <Button className="btn btn-default" onClick={() => this.counterUpDown("down")} disabled={this.state.count < 1}>
        <FontAwesome name="minus" />
      </Button>
    );
    const addOneButton = (
      <Button className="btn btn-default" onClick={() => this.counterUpDown("up")}>
        <FontAwesome name="plus" />
      </Button>
    );
    return (
      <FormGroup>
        <Label for="{label.toLowerCase()}">{label}</Label>
        {minusOneButton}
        {this.state.count}
        {addOneButton}
      </FormGroup>
    );
  }
}

export default Textarea;
