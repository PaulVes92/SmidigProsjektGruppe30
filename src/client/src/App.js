import React from "react";
//import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products";
import Customers from "./components/customers";
import Navigation from "./components/navigation";
import SalesForm from "./components/salesForm";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid p-0 ">
        <Navigation />
        <div className="row">
          <div className="col-md-2 pt-5">
            <SalesForm />
          </div>
          <div className="col-md-10 pt-5 mt-5">
            <Switch>
              <Route path="/customers" component={Customers} />
              <Route path="/products" component={Products} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
