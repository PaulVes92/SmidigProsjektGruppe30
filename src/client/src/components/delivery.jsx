import React, { Component } from "react";
import axios from "axios";
class Deliveries extends Component {
  state = {
    productId: "",
    productName: "",
    size: "",
    comment: "",
    deliveryCartArray: [],
    deliveryData: [],
  };

  getProduct = () => {
    console.log(this.state);
    axios
      .get("http://localhost:8080/products")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const deliveryCart = res.data;
        this.filterProducts(deliveryCart);
        console.log(this.state.deliveryCartArray);
      })
      .catch((err) => {
        throw err;
      });
  };

  filterProducts(deliveryCart) {
    for (var i = 0; i < deliveryCart.length; i++) {
      if (deliveryCart[i].productId === this.state.productId) {
        this.setState({
          productId: deliveryCart[i].productId,
          productName: deliveryCart[i].productName,
          comment: deliveryCart[i].comment,
          size: deliveryCart[i].size,
        });

        const newDeliveryItemObject = {
          productId: this.state.productId,
          productName: this.state.productName,
          comment: this.state.comment,
          size: this.state.size,
        };

        const tempDeliveryCart = this.state.deliveryCartArray;
        tempDeliveryCart.push(newDeliveryItemObject);

        this.setState({
          deliveryCartArray: tempDeliveryCart,
        });
        return deliveryCart[i];
      }
    }
  }

  deleteCart = () => {
    console.log(this.state.deliveryCartArray);
    for (var i = 0; i < this.state.deliveryCartArray.length; i++) {
      console.log("this.state.deliveryCartArray[i].productId");
      console.log(this.state.deliveryCartArray[i].productId);
      console.log("this.state.deliveryData");
      console.log(this.state.deliveryData);
      const cartItemId = this.state.deliveryData[i]._id;
      console.log(cartItemId);
      console.log(this.state.id);

      axios
        .delete(`http://localhost:8080/customers/${cartItemId}`)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const toRented = {
      productId: this.state.productId,
      //   productName: this.state.productName,
      //   comment: this.state.comment,
      //   size: this.state.size,
    };
    const toProduct = {
      status: this.state.status,
    };
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

          <div>
            {this.state.deliveryCartArray.map((deliveryCartArray, id) => (
              <ul key={deliveryCartArray._id}>
                <li>
                  PRODUKT ID: {deliveryCartArray.productId} <br />
                  PRODUKT NAVN: {deliveryCartArray.productName} <br />
                  STR: {deliveryCartArray.size}
                  <br />
                </li>
              </ul>
            ))}
          </div>

          <input
            type="text"
            placeholder="Skader/slitasje"
            name="comment"
            value={this.comment}
            onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}

export default Deliveries;
