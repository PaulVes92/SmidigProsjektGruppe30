import React from "react";
//import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products";
import Customers from "./components/customers";
import Navigation from "./components/navigation";
import Reciepts from "./components/reciepts";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid p-0 ">
        <Navigation />
        <h1>overskrift</h1>
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/products" component={Products} />
          <Route path="/reciepts" component={Reciepts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
