import React from 'react';
import PropTypes from 'prop-types';
import '../../utilities/utilities';
import AllComments from '../../containers/AllComments';

export default function PokemonDetails({ pokemon }) {
  return (
    <section>
      <h1>{pokemon.pokemon}</h1>
      <img src={pokemon.url_image} />
      <ul>
        <li>{pokemon.type_1}</li>
        <li>{pokemon.type_2}</li>
      </ul>
      <AllComments id={pokemon._id} />
    </section>
  );
}

PokemonDetails.propTypes = {
  pokemon: PropTypes.object.isRequired
};
