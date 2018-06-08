import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

import { connect } from "react-redux";
import { writeElementToCanvas } from "../util/elementOut";
import { saveForm } from "../util/formActions";

class Canvas extends Component {
  state = {
    formData: []
  };

  componentWillReceiveProps() {
    console.log(this.props.formData);
  }

  onDragOver = ev => {
    ev.preventDefault();
  };

  saveForm = () => {
    saveForm();
  };

  render() {
    let index = 0;
    let canvasSpace = this.props.formData.map(element => {
      element.index = index;
      index++;
      return writeElementToCanvas(element);
    });
    // console.log(canvasSpace);
    let canvasButtons = null;
    if (this.props.showButton) {
      canvasButtons = (
        <div>
          <Row>
            <Col>
              <Button className="btn btn-warning" onClick={this.saveForm}>
                Save Form
              </Button>
            </Col>
          </Row>
          <hr />
        </div>
      );
    }
    return (
      <div onDragOver={e => this.onDragOver(e)} onDrop={e => this.onDrop(e)}>
        <h3 className="text-center">Canvas</h3>
        {canvasButtons}
        {canvasSpace}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const formData = state.formData ? state.formData : {};
  return { formData };
};

export default connect(mapStateToProps, null)(Canvas);
