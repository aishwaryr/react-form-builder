import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Sidebar from "./Sidebar";
import Canvas from "./Canvas";

class App extends Component {
  render() {
    return (
      <div className="form-builder">
        <Container>
          <Row>
            <Col className="app-section">
              <Sidebar />
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

export default App;
