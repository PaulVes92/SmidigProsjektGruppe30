import React, { useState, getDay, Component } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

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
      rentedDate: new Date(""),
      returnDate: new Date(""),
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
      rentedDate: new Date(),
      returnDate: new Date(),
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
                  PRIS: {shoppingCartArray.price}
                  <br />
                </li>
              </ul>
            ))}
          </div>
          <br /> <br />
          <h1 id="regKunde">Leietid</h1>
          <input
            className="ml-3"
            type="date"
            value={this.rentedDate}
            name="rentedDate"
            onChange={this.changeHandler}
          />
          <input
            className="ml-3"
            type="date"
            value={this.returnDate}
            name="returnDate"
            onChange={this.changeHandler}
          />
          {/* <div className="field2">
            <Calendar value={this.state.returnDate} />
          </div> */}
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
