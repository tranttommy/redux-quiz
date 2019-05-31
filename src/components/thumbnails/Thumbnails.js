import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

export default function Thumbnails({ pokemons }) {
  const pokemonList = pokemons.map(({ pokemon, url_image, _id }) => (
    <li key={_id}>
      <Thumbnail pokemon={pokemon} url_image={url_image} _id={_id} />
    </li>
  ));
  
  return (
    <ul>
      {pokemonList}
    </ul>
  );
}

Thumbnails.propTypes = {
  pokemons: PropTypes.array.isRequired
};
