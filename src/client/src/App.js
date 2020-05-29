import React from "react";
//import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products";
import Customers from "./components/customers";
<<<<<<< HEAD
import SalesForm from "./components/salesForm";
import { Navigation } from "./components/navigation";
=======
import Navigation from "./components/navigation";
import SalesForm from "./components/salesForm";
>>>>>>> c3636c52158de0bb45eef81b8e1caa4fff4864c4

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Navigation />
      <div id="salesForm" className="col-sm-12">
        <SalesForm />
      </div>

      <div id="routes" className="col-sm-6">
        <Switch>
          <Route path="/customers" component={Customers} exact />
          <Route path="/products" component={Products} />
        </Switch>
=======
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
>>>>>>> c3636c52158de0bb45eef81b8e1caa4fff4864c4
      </div>
    </BrowserRouter>
  );
}

export default App;
