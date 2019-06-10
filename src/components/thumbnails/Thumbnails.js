import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';

export default function Thumbnails({ pokemons }) {
  const Li = styled.li`
    width: 250px;
    list-style: none;
    text-align: center;
    border: 2px solid palegoldenrod;
    box-shadow: 5px 10px 5px goldenrod;
    margin: 20px;
    & img {
      width: 100%;
    }
  `;

  const pokemonList = pokemons.sort((a, b,) => a.id - b.id).map(({ pokemon, url_image, _id }) => (
    <Li key={_id}>
      <Thumbnail pokemon={pokemon} url_image={url_image} _id={_id} />
    </Li>
  ));
  
  const Ul = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  `;

  return (
    <Ul>
      {pokemonList}
    </Ul>
  );
}

Thumbnails.propTypes = {
  pokemons: PropTypes.array.isRequired
};
