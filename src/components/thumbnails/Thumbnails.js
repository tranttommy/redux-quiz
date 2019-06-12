import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';

export default function Thumbnails({ pokemons }) {
  const Li = styled.li`
    box-sizing: border-box;
    width: 260px;
    list-style: none;
    text-align: center;
    border: 2px solid palegoldenrod;
    margin: 15px;
    padding: 15px;
    font-family: Arial;
    font-size: .75rem;
    transition: 250ms ease-out;
    animation: enter 500ms ease-in;

    @keyframes enter {
      from {
        opacity: 0;
        transform: rotateY(90deg) rotate(30deg) scale(.5);
      }
    }

    & img {
      width: 100%;
    }
    
    &:hover {
      background: palegoldenrod;
      box-shadow: 5px 10px 5px -2px goldenrod;
      transform: translate(-5px, -10px);
    }
    
    &:active {
      background: goldenrod;
      border-color: goldenrod;
      box-shadow: 0 0 white;
      transform: translate(0);
      
      & h1 {
        color: cornsilk;
      }
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
