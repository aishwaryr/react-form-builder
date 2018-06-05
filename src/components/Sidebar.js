import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";

import { formHTMLElement } from "../helpers";
import { setFormData } from "../actionCreators";

class Sidebar extends Component {
  handleFormElement = element => {
    console.log(element);
    // console.log(formHTMLElement(element));
    formHTMLElement(element);
  };

  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <button className="btn btn-primary" onClick={() => this.handleFormElement("input")}>
            Input
          </button>
        </ListGroupItem>
        <ListGroupItem>
          <button className="btn btn-primary" onClick={() => this.handleFormElement("button")}>
            Button
          </button>
        </ListGroupItem>
        <ListGroupItem>
          <button className="btn btn-danger" onClick={this.props.deleteForm}>
            Delete Form
          </button>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteForm() {
    localStorage.removeItem("formData");
    dispatch(setFormData([]));
  }
});

export default connect(null, mapDispatchToProps)(Sidebar);
