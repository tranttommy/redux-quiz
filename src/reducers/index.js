import { RETRIEVE_POKEMONS } from '../actions/thumbnailActions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case RETRIEVE_POKEMONS:
      return { pokemons: action.payload };
    default:
      return state;
  }
}
