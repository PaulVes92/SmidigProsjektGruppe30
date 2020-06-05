import React, { Component } from "react";

class Deliveries extends Component {
  state = {
    productId: "",
    productName: "",
    comment: "",
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const delivery = {
      productId: this.state.productId,
      productName: this.state.productName,
      comment: this.state.comment,
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
  };

  render() {
    return (
      <div>
        <h2>Leveranse</h2>
        <form>
          <input
            type="text"
            placeholder="Produkt ID"
            name="productId"
            value={this.productId}
            onChange={this.changeHandler}
          />

          <button type="button">Legg til leveranse</button>
        </form>
      </div>
    );
  }
}

export default Deliveries;
