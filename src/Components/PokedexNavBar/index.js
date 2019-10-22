import React from "react";
import logo from "../../assets/pokeball.svg";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokedexNavBar = () => (
  <Navbar bg="primary" variant="dark" fixed="top">
    <Link to="/">
      <Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          style={{ marginRight: "10px" }}
        />
        {"Pokédex"}
      </Navbar.Brand>
    </Link>
  </Navbar>
);

export default PokedexNavBar;
