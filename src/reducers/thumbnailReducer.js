import { RETRIEVE_THUMBNAILS, UPDATE_PAGE, SET_TOTAL_PAGES } from '../actions/thumbnailActions';

const initialState = {
  currentPage: 1,
  totalPages: 1
};

export default function thumbnailReducer(state = initialState, action) {
  switch(action.type) {
    case RETRIEVE_THUMBNAILS:
      return { ...state, results: action.payload };
    case UPDATE_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    default:
      return state;
  }
}
