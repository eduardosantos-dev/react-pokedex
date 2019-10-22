import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import PokemonDetail from "./Components/PokemonDetail";
import PokedexNavBar from "./Components/PokedexNavBar";

const Routes = () => (
  <BrowserRouter>
    <PokedexNavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pokemon/:id" component={PokemonDetail} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
