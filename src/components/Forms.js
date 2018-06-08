import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import fileDownload from "js-file-download";

import Canvas from "./Canvas";
import { fetchFormsListFromLocalStorage } from "../util/formActions";
import { setFormData } from "../actionCreators";

class Forms extends Component {
  state = { selectedForm: {}, formList: [] };
  selectForm = formName => {
    // console.log(formName);
    let selectedFormArray = this.state.formList.filter(form => Object.keys(form)[0] === formName);
    let selectedForm = selectedFormArray[0];
    this.setState({ selectedForm });
    this.props.setSelectedFormToStore(selectedForm[formName]);
  };
  deleteAllForms = () => {
    this.setState({ selectedForm: {}, formList: [] });
    localStorage.removeItem("forms");
  };
  download = () => {
    fileDownload(JSON.stringify(this.state.selectedForm), "form.json");
  };
  componentDidMount() {
    let formList = fetchFormsListFromLocalStorage();
    this.setState({ formList });
  }
  render() {
    let selectedForm = this.state.selectedForm;
    return (
      <div className="forms">
        <Container>
          <Row>
            <Link to="/">Go to FormBuilder</Link>
          </Row>
          <Row>
            <Col className="app-section">
              <p>Form List</p>
              <div>
                <Row>
                  <Col>
                    <Button color="danger" onClick={this.deleteAllForms}>
                      Delete All Forms
                    </Button>
                  </Col>
                </Row>
                <hr />
              </div>
              <ListGroup>
                <p className="text-lead">Select a Form below:</p>
                {this.state.formList.map((form, index) => (
                  <ListGroupItem key={index} onClick={e => this.selectForm(Object.keys(form)[0])}>
                    {Object.keys(form)[0]}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col className="app-section">
              <h3 className="text-center">Form Schema</h3>
              <pre>
                <code>{JSON.stringify(selectedForm, null, 2)}</code>
              </pre>
              <Button color="success" onClick={this.download}>
                Download Form
              </Button>
            </Col>
            <Col className="app-section">
              <Canvas />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSelectedFormToStore(formArray) {
    dispatch(setFormData(formArray));
  }
});

export default connect(null, mapDispatchToProps)(Forms);
