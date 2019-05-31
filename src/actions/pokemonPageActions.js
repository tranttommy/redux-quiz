import { fetchPokemon } from '../services/pokemonApi';

export const RETRIEVE_POKEMON = 'RETRIEVE_POKEMON';
export const retrievePokemon = id => ({
  type: RETRIEVE_POKEMON,
  payload: fetchPokemon(id)
});
