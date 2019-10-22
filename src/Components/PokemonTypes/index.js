import React from "react";

import "./styles.css";

const PokemonTypes = props => {
  const { types } = props;
  return (
    <div style={{ display: "flex" }}>
      {types
        .sort((a, b) => (a.slot > b.slot ? 1 : -1))
        .map(obj => (
          <span className={`pokemonType ${obj.type.name}`} key={obj.slot}>
            {obj.type.name}
          </span>
        ))}
    </div>
  );
};

export default PokemonTypes;
