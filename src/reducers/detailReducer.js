import { RETRIEVE_DETAILS } from '../actions/detailActions';

const initialState = {};

export default function detailReducer(state = initialState, action) {
  switch(action.type.type) {
    case RETRIEVE_DETAILS:
      return { ...state, [action.type.id]: action.payload };
    default:
      return state;
  }
}
