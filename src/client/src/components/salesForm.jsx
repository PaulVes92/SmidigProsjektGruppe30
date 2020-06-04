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

<<<<<<< HEAD
 changeHandler = (e) => {
   this.setState({ [e.target.name]: e.target.value });
 };
=======
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
>>>>>>> 3faec96e3ad057befec202343980422033c0145e

  handleSubmit = () => {
    const customers = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
    };

    const rntProduct = {
      productId: this.state.productId,
      productName: this.state.productName,
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

<<<<<<< HEAD

=======
>>>>>>> 3faec96e3ad057befec202343980422033c0145e
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
            Legg til
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
          <Calendar className="field2" />
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
