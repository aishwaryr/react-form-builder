import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Sidebar extends Component {
  onDragStart = (ev, element) => {
    ev.dataTransfer.setData("element", element);
  };

  render() {
    return (
      <div>
        <h3 className="text-center">UI Widgets</h3>
        <h6>Drag & Drop elements on the canvas to build a form</h6>
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
            <button className="btn btn-primary" draggable onDragStart={e => this.onDragStart(e, "datepicker")}>
              Datepicker
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <button className="btn btn-danger" onClick={this.props.deleteForm}>
              Reset Form
            </button>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default Sidebar;
