import { RETRIEVE_THUMBNAILS, UPDATE_PAGE } from '../actions/thumbnailActions';

const initialState = {
  currentPage: 1,
};

export default function thumbnailReducer(state = initialState, action) {
  switch(action.type) {
    case RETRIEVE_THUMBNAILS:
      return { ...state, results: action.payload };
    case UPDATE_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}
