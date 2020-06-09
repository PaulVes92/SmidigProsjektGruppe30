import React, { Component } from "react";
import axios from "axios";

class AddProduct extends Component {
  state = {
    productId: "",
    productName: "",
    price: "",
    comment: "",
    category: "",
    size: "",
    status: "",
    phoneNumber: "",
    customerData: [],
    customerId: "",
    id: "",
  };

  componentDidMount = () => {
    console.log(this.state);
    axios
      .get("http://localhost:8080/customers/")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({
          customerData: res.data,
        });
      })
      .catch((err) => {
        throw err;
      });

    axios
      .get("http://localhost:8080/products/")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({
          productData: res.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  deleteProduct = () => {
    console.log(this.state.productData);
    for (var i = 0; i < this.state.productData.length; i++) {
      if (this.state.productData[i].productId == this.state.productId) {
        const productId = this.state.productData[i]._id;

        axios
          .delete(`http://localhost:8080/products/${productId}`)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            alert("Slettet produkt!");
          })
          .catch((err) => {
            alert("Det er ingen produkter med denne ID'en");
            throw err;
          });
      }
    }
  };

  deleteCustomer = () => {
    console.log(this.state.customerData);
    for (var i = 0; i < this.state.customerData.length; i++) {
      console.log("this.state.customerData[i].phoneNumber");
      console.log(this.state.customerData[i].phoneNumber);
      if (this.state.customerData[i].phoneNumber == this.state.phoneNumber) {
        const customerId = this.state.customerData[i]._id;

        axios
          .delete(`http://localhost:8080/customers/${customerId}`)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            alert("Kunde slettet!");
          })
          .catch((err) => {
            alert("Ingen kunder med dette nummeret");
            throw err;
          });
      }
    }
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const products = {
      productId: this.state.productId,
      productName: this.state.productName,
      price: this.state.price,
      comment: this.state.comment,
      category: this.state.category,
      size: this.state.size,
      status: this.state.status,
    };
    axios
      .post("http://localhost:8080/products", products)
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
      comment: "",
      category: "",
      size: "",
      status: "",
    });
  };
  render() {
    return (
      <div>
        <h2 id="headerAddProd">Registrer nytt produkt</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            id="inputField"
            type="text"
            placeholder="Produkt ID"
            name="productId"
            value={this.productId}
            onChange={this.changeHandler}
          />
          <input
            id="inputField"
            type="text"
            placeholder="Produkt Navn"
            name="productName"
            value={this.productName}
            onChange={this.changeHandler}
          />
          <input
            id="inputField"
            type="text"
            placeholder="Pris"
            name="price"
            value={this.price}
            onChange={this.changeHandler}
          />
          <input
            id="inputField"
            type="text"
            placeholder="Kommentar"
            name="comment"
            value={this.comment}
            onChange={this.changeHandler}
          />
          <input
            id="inputField"
            type="text"
            placeholder="Kategori"
            name="category"
            value={this.category}
            onChange={this.changeHandler}
          />
          <select
            id="drpDownSize"
            name="size"
            value={this.size}
            onChange={this.changeHandler}
          >
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <select
            id="drpDownStatus"
            name="status"
            value={this.status}
            onChange={this.changeHandler}
          >
            <option>I butikk</option>
            <option>Utleid</option>
          </select>

          <button id="delBtn" type="submit">
            Legg til produkt
          </button>
        </form>

        <h2 id="headerDeleteCstm">Slett kunde</h2>
        <form>
          <input
            id="inputField"
            type="text"
            placeholder="Kundens tlfnr"
            name="phoneNumber"
            value={this.phoneNumber}
            onChange={this.changeHandler}
          />

          <button id="delBtn" type="button" onClick={this.deleteCustomer}>
            Slett Kunde
          </button>
        </form>
        <h2 id="headerDeleteProd">Slett produkt</h2>
        <form>
          <input
            id="inputField"
            type="text"
            placeholder="Produkt ID"
            name="productId"
            value={this.productId}
            onChange={this.changeHandler}
          />

          <button id="delBtn" type="button" onClick={this.deleteProduct}>
            Slett produkt
          </button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
