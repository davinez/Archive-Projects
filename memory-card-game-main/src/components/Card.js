import React from 'react';

const CardContainer = (props) => {
  return props.pokemon.map((pokemon) => (
    <div key={pokemon.id} className="card">
      <img
        onClick={() => props.onClick(pokemon.id)}
        src={pokemon.url}
        alt="A pokemon"
      />
      <p>{pokemon.pokemonName}</p>
    </div>
  ));
};

export default CardContainer;
