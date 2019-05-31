import { fetchPokemon } from '../services/pokemonApi';

export const RETRIEVE_POKEMONS = 'this really doesn\t matter much does it';
export const retrievePokemons = () => ({
  type: RETRIEVE_POKEMONS,
  payload: fetchPokemon().then(json => json.results)
});
