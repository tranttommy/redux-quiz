import React from 'react';
import Thumbnails from './thumbnails/Thumbnails';

const testData = [
  {
    pokemon: 'Venusaur',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    _id: '123'
  },
  {
    pokemon: 'Squirtle',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    _id: '321'
  }
];

export default function App() {
  return (
    <Thumbnails pokemons={testData} />
  );
}
