import React, { Component } from "react";
import { FormGroup, Label } from "reactstrap";
import DatePicker from "react-datepicker";
import moment from "moment";

class Datepicker extends Component {
  state = {
    startDate: moment()
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <FormGroup>
        <Label for="date">Pick Date</Label>
        <DatePicker
          className="form-control"
          dateFormat="DD/MM/YYYY"
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </FormGroup>
    );
  }
}

export default Datepicker;
