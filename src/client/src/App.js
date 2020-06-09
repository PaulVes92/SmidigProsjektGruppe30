import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products";
import Customers from "./components/customers";
import Navigation from "./components/navigation";
import SalesForm from "./components/salesForm";
import Reciepts from "./components/reciepts";
import Rented from "./components/rented";
import Login from "./components/login";
import AddProduct from "./components/addProduct";
import Delivery from "./components/delivery";
import Signup from "./components/signup";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// submit --> start function App()

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
    };
  }

  updateLoggedInUserId = (userId) => {
    this.setState({ userId: userId });
  };

  notFound() {
    return (
      <div>
        <h2>NOT FOUND: 404</h2>
        <p>ERROR: the page you requested is not available</p>
      </div>
    );
  }
  render() {
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
                <Route
                  exact
                  strict
                  path="/login"
                  render={(props) => (
                    <Login
                      {...props}
                      userId={this.state.userId}
                      updateLoggedInUserId={this.updateLoggedInUserId}
                    />
                  )}
                />
                <Route
                  exact
                  strict
                  path="/signup"
                  render={(props) => (
                    <Signup
                      {...props}
                      userId={this.state.userId}
                      updateLoggedInUserId={this.updateLoggedInUserId}
                    />
                  )}
                />
                <Route
                  exact
                  path="/customers"
                  render={(props) => (
                    <Customers
                      {...props}
                      userId={this.state.userId}
                      updateLoggedInUserId={this.updateLoggedInUserId}
                    />
                  )}
                />
                <Route
                  exact
                  path="/products"
                  render={(props) => (
                    <Products
                      {...props}
                      userId={this.state.userId}
                      updateLoggedInUserId={this.updateLoggedInUserId}
                    />
                  )}
                />
                <Route
                  exact
                  path="/reciepts"
                  render={(props) => (
                    <Reciepts
                      {...props}
                      userId={this.state.userId}
                      updateLoggedInUserId={this.updateLoggedInUserId}
                    />
                  )}
                />
                <Route
                  exact
                  path="/delivery"
                  render={(props) => (
                    <Delivery
                      {...props}
                      userId={this.state.userId}
                      updateLoggedInUserId={this.updateLoggedInUserId}
                    />
                  )}
                />
                <Route
                  exact
                  path="/rented"
                  render={(props) => (
                    <Rented
                      {...props}
                      userId={this.state.userId}
                      updateLoggedInUserId={this.updateLoggedInUserId}
                    />
                  )}
                />
                <Route
                  exact
                  path="/addProduct"
                  render={(props) => (
                    <AddProduct
                      {...props}
                      userId={this.state.userId}
                      updateLoggedInUserId={this.updateLoggedInUserId}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
