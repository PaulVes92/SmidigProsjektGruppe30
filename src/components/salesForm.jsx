import React, { Component } from "react";
import DatePicker from "react-date-picker";

class SalesForm extends Component {
  state = {
    fromDate: new Date(),
    toDate: new Date(),
  };

  onChange = (fromDate, toDate) => this.setState({ fromDate, toDate });

  render() {
    return (
      <div>
        <form>
          <label>Fornavn</label>
          <input type="text" placeholder="" />
          <label>Etternavn</label>
          <input type="text" placeholder="" />
          <label>Email</label>
          <input type="text" placeholder="" />
          <label>Telefonnummer</label>
          <input type="text" placeholder="" />
          <DatePicker
            onChange={this.onChange}
            value={this.state.fromDate}
          ></DatePicker>
          <DatePicker
            onChange={this.onChange}
            value={this.state.toDate}
          ></DatePicker>
        </form>
      </div>
    );
  }
}

export default SalesForm;
