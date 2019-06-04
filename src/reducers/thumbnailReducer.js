import { RETRIEVE_THUMBNAILS, UPDATE_PAGE, SET_TOTAL_PAGES, UPDATE_SEARCH } from '../actions/thumbnailActions';

const initialState = {
  results: [],
  currentPage: 1,
  totalPages: 1,
  search: ''
};

export default function thumbnailReducer(state = initialState, action) {
  switch(action.type) {
    case RETRIEVE_THUMBNAILS:
      return { ...state, results: action.payload };
    case UPDATE_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case UPDATE_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}
