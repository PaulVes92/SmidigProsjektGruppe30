import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Logo from "../repairable.png";

class Navigation extends Component {
  render() {
    return (
      <Nav className="py-0 justify-content-center fixed-top">
        <img src={Logo} alt="Repairable Logo" id="repLogo" />
        <h1 id="repHeader">Repairable</h1>
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
          to="/rented"
          style={{ color: "#ffffff" }}
          activeStyle={{
            background: "#EBE1E1",
            color: "#34343B",
            borderTopLeftRadius: "45%",
            borderTopRightRadius: "45%",
          }}
        >
          Utleide Produkter
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
          className="mt-3 mr-2 d-inline-block p-4"
          to="/delivery"
          style={{ color: "#ffffff" }}
          activeStyle={{
            background: "#EBE1E1",
            color: "#34343B",
            borderTopLeftRadius: "45%",
            borderTopRightRadius: "45%",
          }}
        >
          Innlevering
        </NavLink>

        <NavLink
          className=".display-2 mt-3 mr-2 d-inline-block p-4"
          to="/addProduct"
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
        <NavLink className="logoutBtn" to="/">
          Log out
        </NavLink>
      </Nav>
    );
  }
}

export default Navigation;
