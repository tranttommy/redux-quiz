import { fetchPokemon } from '../services/pokemonApi';

export const RETRIEVE_POKEMONS = 'this really doesn\t matter much does it';
export const retrievePokemons = (input) => ({
  action: RETRIEVE_POKEMONS,
  payload: fetchPokemon(input)
});
