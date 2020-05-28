import React from "react";
import SalesForm from "./components/salesForm";
import Login from "./components/login";
import Customers from "./components/customers";
import Products from "./components/products";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <Products />
    </div>
  );
}

export default App;
