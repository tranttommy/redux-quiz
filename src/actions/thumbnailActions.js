import { fetchPokemon } from '../services/pokemonApi';

export const RETRIEVE_THUMBNAILS = 'RETRIEVE_THUMBNAILS';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const retrieveThumbnails = (query) => dispatch => {
  fetchPokemon(query)
    .then(json => {
      dispatch({
        type: RETRIEVE_THUMBNAILS,
        payload: json.results.map(({ _id, id, pokemon, url_image }) => ({ _id, id, pokemon, url_image }))
      });

      dispatch({
        type: UPDATE_PAGE,
        payload: Number(json.page)
      });

      dispatch({
        type: SET_TOTAL_PAGES,
        payload: Math.ceil(json.count / json.perPage)
      });
    });
};

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const updatePage = newPage => ({
  type: UPDATE_PAGE,
  payload: newPage
});

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const updateSearch = searchTerm => ({
  type: UPDATE_SEARCH,
  payload: searchTerm
});
