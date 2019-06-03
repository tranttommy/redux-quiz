import { RETRIEVE_THUMBNAILS } from '../actions/thumbnailActions';

const initialState = [];

export default function thumbnailReducer(state = initialState, action) {
  switch(action.type) {
    case RETRIEVE_THUMBNAILS:
      return action.payload;
    default:
      return state;
  }
}
