import React from "react";
//import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products";
import Customers from "./components/customers";
import Navigation from "./components/navigation";
<<<<<<< HEAD
import SalesForm from "./components/salesForm";
=======
import Reciepts from "./components/reciepts";
>>>>>>> 7dbf0b471487b3a25d36692695a75ec4388e9147

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid p-0 ">
        <Navigation />
<<<<<<< HEAD
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
=======
        <h1>overskrift</h1>
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/products" component={Products} />
          <Route path="/reciepts" component={Reciepts} />
        </Switch>
>>>>>>> 7dbf0b471487b3a25d36692695a75ec4388e9147
      </div>
    </BrowserRouter>
  );
}

export default App;
