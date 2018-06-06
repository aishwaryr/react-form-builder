import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Modal from "react-responsive-modal";
// import { connect } from "react-redux";

import { formHTMLElement } from "../util/elementIn";
// import { setFormData } from "../actionCreators";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import InputDetailsForm from "./element-details/InputDetailsForm";

class FormBuilder extends Component {
  state = {
    open: false,
    chosenElement: ""
  };

  onOpenModal = element => {
    this.setState({ open: true, chosenElement: element });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  onDragOver = ev => {
    ev.preventDefault();
  };

  onDrop = ev => {
    let element = ev.dataTransfer.getData("element");
    console.log(element);
    this.onOpenModal(element);
  };

  submitModal = elementDetails => {
    console.log(elementDetails);
    this.onCloseModal();
    formHTMLElement(elementDetails);
  };
  render() {
    let modalForm;
    if (this.state.chosenElement === "input") {
      modalForm = <InputDetailsForm submitModal={this.submitModal} />;
    }
    return (
      <div className="form-builder">
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          {modalForm}
        </Modal>
        <Container>
          <Row>
            <Col className="app-section">
              <Sidebar />
            </Col>
            <Col className="app-section" onDragOver={e => this.onDragOver(e)} onDrop={e => this.onDrop(e)}>
              <Canvas />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   deleteForm() {
//     localStorage.removeItem("formData");
//     dispatch(setFormData([]));
//   }
// });

// export default connect(null, mapDispatchToProps)(FormBuilder);
export default FormBuilder;
