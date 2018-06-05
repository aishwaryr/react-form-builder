import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import { connect } from "react-redux";

class Canvas extends Component {
  render() {
    console.log(this.props);
    let canvasSpace;
    return <div>{canvasSpace}</div>;
  }
}

const mapStateToProps = state => {
  const formData = state.formData ? state.formData : {};
  return { formData };
};

// const mapDispatchToProps = dispatch => ({
//   loadProducts() {
//     dispatch(fetchProductsFromDB());
//   }
// });

export default connect(mapStateToProps, null)(Canvas);
