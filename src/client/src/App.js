import React from "react";
//import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products";
import Customers from "./components/customers";
import Navigation from "./components/navigation";
import SalesForm from "./components/salesForm";
import Reciepts from "./components/reciepts";
import Rented from "./components/rented";
import Login from "./components/login";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { renderIntoDocument } from "react-dom/test-utils";

// submit --> start function App()

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid p-0">
        <Navigation />
        <div className="row">
          <div className="col-md-2 pt-5">
            <SalesForm />
          </div>
          <div className="col-md-10 pt-5 mt-5">
            <Switch>
              <Route exact strict path="/" component={Login} />
              <Route path="/customers" component={Customers} />
              <Route path="/products" component={Products} />
              <Route path="/reciepts" component={Reciepts} />
              <Route path="/rented" component={Rented} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
