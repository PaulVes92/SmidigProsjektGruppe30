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
        <h2>Registrer nytt produkt</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Produkt ID"
            name="productId"
            value={this.productId}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Produkt Navn"
            name="productName"
            value={this.productName}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Pris"
            name="price"
            value={this.price}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Kommentar"
            name="comment"
            value={this.comment}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Kategori"
            name="category"
            value={this.category}
            onChange={this.changeHandler}
          />
          <select name="size" value={this.size} onChange={this.changeHandler}>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <select
            name="status"
            value={this.status}
            onChange={this.changeHandler}
          >
            <option>I butikk</option>
            <option>Utleid</option>
          </select>

          <button type="submit">Legg til produkt</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
