import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Routes from "./routes";

function App() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Routes />
    </Container>
  );
}

export default App;
