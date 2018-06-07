import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";

import { setFormData } from "../actionCreators";
// import Dropdown from "./form-elements/Dropdown";

class Sidebar extends Component {
  onDragStart = (ev, element) => {
    ev.dataTransfer.setData("element", element);
  };

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem>
            <button className="btn btn-primary" draggable onDragStart={e => this.onDragStart(e, "input")}>
              Input
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <button className="btn btn-primary" draggable onDragStart={e => this.onDragStart(e, "checkbox")}>
              Checkbox
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <button className="btn btn-primary" draggable onDragStart={e => this.onDragStart(e, "counter")}>
              Counter
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <button className="btn btn-primary" draggable onDragStart={e => this.onDragStart(e, "dropdown")}>
              Dropdown
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <button className="btn btn-danger" onClick={this.props.deleteForm}>
              Delete Form
            </button>
          </ListGroupItem>
        </ListGroup>
      </div>
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
