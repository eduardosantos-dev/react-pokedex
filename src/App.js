import React from "react";
import "./App.css";
import { Container, Navbar } from "react-bootstrap";
import Routes from "./routes";
import logo from "./assets/pokeball.svg";

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
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
      </Navbar>
      <Container style={{ marginTop: "100px" }}>
        <Routes />
      </Container>
    </>
  );
}

export default App;
