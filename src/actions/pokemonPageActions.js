import { fetchPokemon } from '../services/pokemonApi';

export const RETRIEVE_POKEMON = 'jfeoiwjewo';
export const retrievePokemon = id => ({
  type: RETRIEVE_POKEMON,
  payload: {
    id,
    pokemon: fetchPokemon(id)
  }
});
