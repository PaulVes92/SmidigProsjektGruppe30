import React, { useState, getDay, Component } from "react";
import Axios from "axios";
import Calendar from "./datePicker";

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
      rentedDate: Date,
      returnDate: Date,
      shoppingCartArray: [],
      pricesArray: [],
      total: 0,
    };
  }

  getProduct = () => {
    console.log(this.state);
    Axios.get("http://localhost:8080/products")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const shoppingCart = res.data;
        //console.log(shoppingCart);
        this.filterProducts(shoppingCart);
        console.log(this.state.shoppingCartArray);
        this.priceTotal();
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

        // console.log(this.state.productId);
        // console.log(this.state.productName);
        // console.log(this.state.price);

        const newCartItemObject = {
          productId: this.state.productId,
          productName: this.state.productName,
          price: this.state.price,
        };

        // console.log(newCartItemObject);

        const tempShoppingCart = this.state.shoppingCartArray;
        tempShoppingCart.push(newCartItemObject);

        this.setState({
          shoppingCartArray: tempShoppingCart,
        });
        return shoppingCart[i];
      }
    }
  }

  priceTotal = () => {
    for (var i = 0; i < this.state.shoppingCartArray.length; i++) {
      console.log("added item price:");
      console.log(this.state.shoppingCartArray[i].price);
      this.state.pricesArray[i] = this.state.shoppingCartArray[i].price;
      this.forceUpdate();
    }
    var sum = this.state.pricesArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    console.log("sum:");
    console.log(sum);

    this.setState({
      total: sum,
    });
    console.log("this.state.total:");
    console.log(this.state.total);
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitShoppingCart = () => {
    for (var i = 0; i < this.state.shoppingCartArray.length; i++) {
      const rntProduct = {
        productId: this.state.shoppingCartArray[i].productId,
        productName: this.state.shoppingCartArray[i].productName,
        price: this.state.shoppingCartArray[i].price,
        lastName: this.state.lastName,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        rentedDate: this.state.rentedDate,
        returnDate: this.state.returnDate,
      };

      Axios.post("http://localhost:8080/rents", rntProduct)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  handleSubmit = () => {
    const customers = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
    };
    this.submitShoppingCart();
    // const rntProduct = {
    //   productId: this.state.productId,
    //   productName: this.state.productName,
    //   lastName: this.state.lastName,
    //   email: this.state.email,
    //   phoneNumber: this.state.phoneNumber,
    //   rentedDate: this.state.rentedDate,
    //   returnDate: this.state.returnDate,
    // };

    // Axios.post("http://localhost:8080/rents", rntProduct)
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     throw err;
    //   });

    Axios.post("http://localhost:8080/customers", customers)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        throw err;
      });

    this.setState({
      productId: "",
      productName: "",
      price: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      rentedDate: Date,
      returnDate: Date,
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
          <input
            className="field"
            type="text"
            placeholder="Produkt id"
            name="productId"
            value={this.productId}
            onChange={this.changeHandler}
          />
          <button className="btns" type="button" onClick={this.getProduct}>
            Legg til
          </button>
          <div>
            {this.state.shoppingCartArray.map((shoppingCartArray, id) => (
              <ul key={shoppingCartArray._id}>
                <li>
                  PRODUKT ID: {shoppingCartArray.productId} <br />
                  PRODUKT NAVN: {shoppingCartArray.productName} <br />
                  PRIS: {shoppingCartArray.price} kr
                  <br />
                </li>
              </ul>
            ))}
            <h3>Totalpris: {this.state.total} kr</h3>
          </div>
          <br /> <br />
          <h1 id="regKunde">Leietid</h1>
          <div className="field2">
            <Calendar />
          </div>
          <br></br>
          <button className="btns" type="submit">
            Lei ut :)
          </button>
        </form>
      </div>
    );
  }
}

export default SalesForm;
