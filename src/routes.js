import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import PokemonDetail from "./Pages/PokemonDetail";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pokemon/:id" component={PokemonDetail} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
