import React, { useState, getDay, Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";

class SalesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    };
  }

  // handleChange = (event) => {
  //   this.setState({
  //     firstName: event.target.value,
  //     lastName: event.target.value,
  //     email: event.target.value,
  //     phoneNumber: event.target.value,
  //   });
  // };

 changeHandler = (e) => {
   this.setState({ [e.target.name]: e.target.value });
 };

  handleSubmit = (event) => {
    const customers = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
    };

    Axios.post("http://localhost:8080/customers", customers)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        throw err;
      });

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });

  
      const leasedProducts = {
        productId : this.state.productId,
        productName : this.state.productName,
        price : this.state.price
      }


    Axios.get("http://localhost:8080/products", leasedProducts)
      .then((res) =>{
        console.log(res);
        console.log(res.data);
      })
    this.setState({
      pId : this.state.productId
    })
  };


  render() {
    return (
      <div className="container-fluid ml-1 mt-5">
        <h1 id="regKunde">Registrer ny kunde</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="field"
            type="text"
            placeholder="Fornavn"
            name="firstName"
            value={this.firstName}
            onChange={this.changeHandler}
          />
          <input
            className="field"
            type="text"
            placeholder="Etternavn"
            name="lastName"
            value={this.lastName}
            onChange={this.changeHandler}
          />
          <input
            className="field"
            type="text"
            placeholder="Email"
            name="email"
            value={this.email}
            onChange={this.changeHandler}
          />
          <input
            className="field"
            type="text"
            placeholder="Telefonnummer"
            name="phoneNumber"
            value={this.phoneNumber}
            onChange={this.changeHandler}
          />
          <input className="field" type="text" placeholder="Produkt id" />
          <button className="btns" type="submit">
            Add
          </button>
          <br /> <br />
          <h1 id="regKunde">Leietid</h1>
          {/* <DatePicker
            placeholderText="Fra dato"
            className="field2"
            todayButton="Fra dato"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            filterDate={isWeekday}
            showMonthDropdown
          ></DatePicker>
          <DatePicker
            placeholderText="Til dato"
            className="field2"
            todayButton="Til dato"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            filterDate={isWeekday}
            showMonthDropdown
          ></DatePicker> */}
          <br></br>
          <button className="btns">Submit</button>
        </form>
      </div>
    );
  }
}

export default SalesForm;
