import { fetchPokemon } from '../services/pokemonApi';

export const RETRIEVE_DETAILS = 'RETRIEVE_DETAILS';
export const retrieveDetails = id => dispatch =>
  fetchPokemon({ id })
    .then(details => {
      dispatch({
        type: RETRIEVE_DETAILS,
        payload: details
      });
    });
