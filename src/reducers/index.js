import { RETRIEVE_POKEMONS } from '../actions/thumbnailActions';
import { RETRIEVE_POKEMON } from '../actions/pokemonPageActions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case RETRIEVE_POKEMONS:
      return { ...state, pokemons: action.payload };
    case RETRIEVE_POKEMON:
      return { ...state, [action.payload.id]: action.payload.pokemon };
    default:
      return state;
  }
}
