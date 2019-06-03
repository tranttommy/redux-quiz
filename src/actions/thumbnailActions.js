import { fetchPokemon } from '../services/pokemonApi';

export const RETRIEVE_THUMBNAILS = 'RETRIEVE_THUMBNAILS';
export const retrieveThumbnails = (query) => ({
  type: RETRIEVE_THUMBNAILS,
  payload: fetchPokemon(query)
    .then(json => json.results)
    .then(results => results.map(({ _id, id, pokemon, url_image }) => ({ _id, id, pokemon, url_image }))) 
});

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const updatePage = newPage => ({
  type: UPDATE_PAGE,
  payload: newPage
});
