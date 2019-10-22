import React, { Component } from "react";
import axios from "axios";
import Pokemon from "../Pokemon";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-spinners/BeatLoader";

export default class PokemonList extends Component {
  state = {
    pokemonList: [],
    offset: 0,
    limit: 12
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${this.state.offset}&limit=${this.state.limit}`;
    axios.get(url).then(res => {
      const data = res.data;
      setTimeout(() => {
        this.setState({
          pokemonList: this.state.pokemonList.concat(data.results),
          offset: this.state.offset + this.state.limit
        });
      }, 0);
    });
  };

  render() {
    const pokemonList = this.state.pokemonList;
    return (
      <>
        {pokemonList && (
          <InfiniteScroll
            dataLength={pokemonList.length}
            next={this.fetchData}
            hasMore={true}
            loader={<Loader size={25} />}
            endMessage={<p>Fim</p>}
            className="row"
            style={{ justifyContent: "center" }}
          >
            {pokemonList.map((pokemon, index) => (
              <Pokemon key={index} pokemon={pokemon} />
            ))}
          </InfiniteScroll>
        )}
      </>
    );
  }
}
