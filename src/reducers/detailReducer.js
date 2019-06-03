import { RETRIEVE_DETAILS } from '../actions/detailActions';

const initialState = {};

export default function detailReducer(state = initialState, action) {
  switch(action.type) {
    case RETRIEVE_DETAILS:
      return { ...state, [action.payload._id]: action.payload };
    default:
      return state;
  }
}
