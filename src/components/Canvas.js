import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import { connect } from "react-redux";
import { writeElementToCanvas } from "../util/elementOut";
// import Textarea from "./form-elements/Textarea";

class Canvas extends Component {
  state = {
    formData: []
  };

  componentWillReceiveProps() {
    console.log(this.props.formData);
    // this.setState({ formData: this.props.formData });
    // console.log(this.state);
  }

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDrop = ev => {
    // let id = ev.dataTransfer.getData("id");
    // console.log(id);
    console.log(ev);
    // console.log(id);
    // let tasks = this.state.tasks.filter((task) => {
    //   if (task.name == id) {
    //     task.category = cat;
    //   }
    //   return task;
    // });

    // this.setState({
    //   ...this.state,
    //   tasks
    // });
  };

  render() {
    // console.log(this.props.formData);
    let index = 0;
    let canvasSpace = this.props.formData.map(element => {
      element.index = index;
      index++;
      return writeElementToCanvas(element);
    });
    console.log(canvasSpace);
    return (
      <div onDragOver={e => this.onDragOver(e)} onDrop={e => this.onDrop(e)}>
        <h3 className="text-center">Canvas</h3>
        {canvasSpace}
      </div>
    );
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
