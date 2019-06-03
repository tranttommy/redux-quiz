import { combineReducers } from 'redux';
import thumbnails from './thumbnailReducer';
import details from './detailReducer';

export default combineReducers({
  thumbnails,
  details
});
