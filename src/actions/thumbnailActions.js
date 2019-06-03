import { fetchPokemon } from '../services/pokemonApi';

export const RETRIEVE_THUMBNAILS = 'RETRIEVE_THUMBNAILS';
export const retrieveThumbnails = () => ({
  type: RETRIEVE_THUMBNAILS,
  payload: fetchPokemon()
    .then(json => json.results)
    .then(results => results.map(({ _id, id, pokemon, url_image }) => ({ _id, id, pokemon, url_image }))) 
});
