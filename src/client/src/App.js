import React, { Component } from "react";
import "./App.css";
import Products from "./components/products.jsx";
import Customers from "./components/customers";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Customers></Customers>
      </div>
    );
  }
}

export default App;
