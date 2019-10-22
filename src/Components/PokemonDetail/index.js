import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Img from "react-image";
import ClipLoader from "react-spinners/ClipLoader";
import { Row, Button } from "react-bootstrap";
import "./styles.css";
import PokemonTypes from "../PokemonTypes";
import PokemonStats from "../PokemonStats";

const PokemonDetail = ({ location }) => {
  const { id } = useParams();
  const [state, setState] = useState({});
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // Don't fetch again when coming from Home Page
  useEffect(() => {
    if (location.state && location.state.pokemon) {
      setState({ pokemon: location.state.pokemon });
    } else {
      axios.get(url).then(res => {
        const pokemon = res.data;
        setState({ pokemon });
      });
    }
  }, [location.state, url]);

  const { pokemon } = state;
  return pokemon ? (
    <>
      <Row style={{ justifyContent: "center" }}>
        <h1 className="pokemonName">{pokemon.name}</h1>
      </Row>
      <Row className="pokemonDetailArea">
        <Link to="/" style={{ alignSelf: "flex-start" }}>
          <Button variant="danger" style={{ margin: "15px 0 0 15px" }}>
            Voltar
          </Button>
        </Link>
        <Img
          className="pokemonImage"
          alt={pokemon.name}
          src={[pokemon.sprites.front_default]}
          loader={<ClipLoader size={96} />}
        />
        <PokemonTypes types={pokemon.types} />
        <Row>
          <PokemonStats stats={pokemon.stats} />
        </Row>
      </Row>
    </>
  ) : (
    <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
      <ClipLoader size={96} />
    </Row>
  );
};

export default PokemonDetail;
