import { fetchPokemon } from '../services/pokemonApi';

export const RETRIEVE_DETAILS = 'RETRIEVE_DETAILS';
export const retrieveDetails = id => ({
  type: {
    type: RETRIEVE_DETAILS,
    id
  },
  payload: fetchPokemon(id),
});
