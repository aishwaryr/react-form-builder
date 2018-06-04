import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Sidebar extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <button className="btn btn-rimary">Input</button>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default Sidebar;
