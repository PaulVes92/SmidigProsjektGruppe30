import React from "react";
//import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products";
import Customers from "./components/customers";
import SalesForm from "./components/salesForm";
import { Navigation } from "./components/navigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div id="salesForm" className="col-sm-12">
        <SalesForm />
      </div>

      <div id="routes" className="col-sm-6">
        <Switch>
          <Route path="/customers" component={Customers} exact />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
