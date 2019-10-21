import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import "./styles.css";
import PokemonTypes from "../PokemonTypes";
import Img from "react-image";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

const Pokemon = props => {
  const [state, setState] = useState({});

  useEffect(() => {
    axios.get(props.pokemon.url).then(res => {
      const pokemon = res.data;
      setState({ pokemon });
    });
  }, []);

  const { pokemon } = state;

  return (
    <>
      {pokemon && (
        <Col sm={6} md={4} lg={3} className="pokemonCardContainer">
          <Link
            to={{ pathname: `/pokemon/${pokemon.id}`, state: { pokemon } }}
            style={{ textDecoration: "none" }}
          >
            <Col className="pokemonCard">
              <Img
                className="pokemonImage"
                alt={pokemon.name}
                src={[pokemon.sprites.front_default]}
                loader={<ClipLoader size={96} />}
                size={150}
              />
              <p className="pokemonName">{pokemon.name}</p>
              <PokemonTypes types={pokemon.types} />
            </Col>
          </Link>
        </Col>
      )}
    </>
  );
};

export default Pokemon;
