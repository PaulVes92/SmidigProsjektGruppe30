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
      productId: "",
      productName: "",
      price: "",
      shoppingCartArray: [],
    };
  }

  getProduct = () => {
    console.log(this.state);
    Axios.get("http://localhost:8080/products")
      .then((res) => {
        console.log(res);
        //console.log(res.data);
        const shoppingCart = res.data;
        console.log(shoppingCart);
        this.filterProducts(shoppingCart);
      })
      .catch((err) => {
        throw err;
      });
  };

  filterProducts(shoppingCart) {
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].productId == this.state.productId) {
        this.setState({
          productId: shoppingCart[i].productId,
          productName: shoppingCart[i].productName,
          price: shoppingCart[i].price,
        });

        console.log(this.state.productId);
        console.log(this.state.productName);
        console.log(this.state.price);

        const newCartItemObject = {
          productId: this.state.productId,
          productName: this.state.productName,
          price: this.state.price,
        };

        console.log(newCartItemObject);

        const tempShoppingCart = this.state.shoppingCartArray;
        tempShoppingCart.push(newCartItemObject);

        this.setState({
          shoppingCartArray: tempShoppingCart,
        });

        console.log(this.state.shoppingCartArray);
        return shoppingCart[i];
      }
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
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
  };

  render() {
    return (
      <div className="container2">
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
          <br />
          <br />
          <input
            className="field"
            type="text"
            placeholder="Produkt id"
            name="productId"
            value={this.productId}
            onChange={this.changeHandler}
          />
          <button className="btns" type="button" onClick={this.getProduct}>
            Add
          </button>
          <div>
            {this.state.shoppingCartArray.map((shoppingCartArray, id) => (
              <ul key={shoppingCartArray._id}>
                <li>{shoppingCartArray.productId}</li>
                <li>{shoppingCartArray.productName}</li>
                <li>{shoppingCartArray.price}</li>
              </ul>
            ))}
          </div>
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
          <button className="btns" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SalesForm;
