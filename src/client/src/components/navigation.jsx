import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Nav className="py-0 justify-content-center fixed-top">
        <NavLink
          className="mt-3  mr-2 d-inline-block p-4 "
          to="/customers"
          style={{
            color: "#ffffff",
          }}
          activeStyle={{
            background: "#EBE1E1",
            color: "#34343B",
            borderTopLeftRadius: "45%",
            borderTopRightRadius: "45%",
          }}
        >
          Kunder
        </NavLink>
        <NavLink
          className="mt-3 mr-2 d-inline-block p-4"
          to="/products"
          style={{ color: "#ffffff" }}
          activeStyle={{
            background: "#EBE1E1",
            color: "#34343B",
            borderTopLeftRadius: "45%",
            borderTopRightRadius: "45%",
          }}
        >
          Produkter
        </NavLink>
        <NavLink
          className="mt-3 mr-2 d-inline-block p-4"
          to="/inventory"
          style={{ color: "#ffffff" }}
          activeStyle={{
            background: "#EBE1E1",
            color: "#34343B",
            borderTopLeftRadius: "45%",
            borderTopRightRadius: "45%",
          }}
        >
          Lagerstatus
        </NavLink>
        <NavLink
          className="mt-3 mr-2 d-inline-block p-4"
          to="/reciepts"
          style={{ color: "#ffffff" }}
          activeStyle={{
            background: "#EBE1E1",
            color: "#34343B",
            borderTopLeftRadius: "45%",
            borderTopRightRadius: "45%",
          }}
        >
          Kvitteringer
        </NavLink>
        <NavLink
          className=".display-2 mt-3 mr-2 d-inline-block p-4"
          to="/settings"
          style={{ color: "#ffffff" }}
          activeStyle={{
            background: "#EBE1E1",
            color: "#34343B",
            borderTopLeftRadius: "45%",
            borderTopRightRadius: "45%",
          }}
        >
          Innstillinger
        </NavLink>
      </Nav>
    );
  }
}

export default Navigation;
